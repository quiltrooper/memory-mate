import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/semantics.dart';
import 'package:http/http.dart' as http;

const apiBase = String.fromEnvironment(
  'API_URL',
  defaultValue: 'http://127.0.0.1:8000',
);
const forest = Color(0xFF365C48);
void main() {
  runApp(const MemoryMate());
  if (kIsWeb) {
    SemanticsBinding.instance.ensureSemantics();
  }
}

class MemoryMate extends StatelessWidget {
  const MemoryMate({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Memory Mate',
    debugShowCheckedModeBanner: false,
    theme: ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(seedColor: forest),
      scaffoldBackgroundColor: const Color(0xFFFAF8F3),
      fontFamily: 'Arial',
      appBarTheme: const AppBarTheme(backgroundColor: Color(0xFFFAF8F3)),
      cardTheme: const CardThemeData(elevation: 0, color: Colors.white),
    ),
    home: const Home(),
  );
}

class Home extends StatefulWidget {
  const Home({super.key});
  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<dynamic> patients = [];
  Map<String, dynamic>? patient;
  String? selected;
  String? error;
  bool loading = true;
  bool saving = false;
  int tab = 0;
  int requestId = 0;
  @override
  void initState() {
    super.initState();
    loadPatients();
  }

  Future<dynamic> request(String path, {Map<String, dynamic>? body}) async {
    final uri = Uri.parse('$apiBase$path');
    final response =
        await (body == null
                ? http.get(uri)
                : http.patch(
                    uri,
                    headers: {'Content-Type': 'application/json'},
                    body: jsonEncode(body),
                  ))
            .timeout(const Duration(seconds: 10));
    if (response.statusCode >= 400) {
      throw Exception(
        response.statusCode == 409
            ? 'This reminder changed elsewhere. Refresh and try again.'
            : 'Could not save or load this record (${response.statusCode}).',
      );
    }
    return jsonDecode(response.body);
  }

  Future<void> loadPatients() async {
    setState(() {
      loading = true;
      error = null;
    });
    try {
      final rows = await request('/api/patients') as List<dynamic>;
      if (!mounted) return;
      setState(() {
        patients = rows;
      });
      if (rows.isEmpty) {
        setState(() {
          loading = false;
          error = 'No patients available.';
        });
        return;
      }
      await selectPatient(selected ?? rows.first['profile']['id']);
    } catch (_) {
      if (mounted) {
        setState(() {
          loading = false;
          error =
              'Cannot reach Memory Mate. Check that the local backend is running, then retry.';
        });
      }
    }
  }

  Future<void> selectPatient(String id) async {
    final current = ++requestId;
    setState(() {
      selected = id;
      loading = true;
      error = null;
      patient = null;
    });
    try {
      final result = await request('/api/patients/$id');
      if (mounted && current == requestId) {
        setState(() {
          patient = Map<String, dynamic>.from(result);
          loading = false;
        });
      }
    } catch (_) {
      if (mounted && current == requestId) {
        setState(() {
          loading = false;
          error = 'Unable to load this patient. Please retry.';
        });
      }
    }
  }

  Future<void> saveReminder(
    Map<String, dynamic> reminder,
    Map<String, dynamic> changes,
  ) async {
    final id = selected!;
    setState(() {
      saving = true;
    });
    try {
      final result = await request(
        '/api/patients/$id/reminders/${reminder['id']}',
        body: {'version': reminder['version'], ...changes},
      );
      if (!mounted || selected != id) return;
      setState(() {
        patient!['reminders'] = (patient!['reminders'] as List)
            .map((r) => r['id'] == result['id'] ? result : r)
            .toList();
      });
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Reminder saved')));
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(e.toString().replaceFirst('Exception: ', ''))),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          saving = false;
        });
      }
    }
  }

  Future<void> editReminder(Map<String, dynamic> reminder) async {
    final controller = TextEditingController(text: reminder['title']);
    final title = await showDialog<String>(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: const Text('Edit reminder'),
        content: TextField(
          controller: controller,
          autofocus: true,
          maxLength: 200,
          decoration: const InputDecoration(labelText: 'Reminder title'),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(dialogContext),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () {
              if (controller.text.trim().isNotEmpty) {
                Navigator.pop(dialogContext, controller.text.trim());
              }
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
    // The dialog route may still be animating when its result is delivered.
    if (title != null && mounted) {
      await saveReminder(reminder, {'title': title});
    }
  }

  Widget heading(String title, String subtitle) => Padding(
    padding: const EdgeInsets.only(bottom: 20),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            fontSize: 30,
            fontWeight: FontWeight.bold,
            color: forest,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          subtitle,
          style: const TextStyle(fontSize: 16, color: Colors.black54),
        ),
      ],
    ),
  );
  Widget reminderList() => Column(
    children: (patient!['reminders'] as List).map<Widget>((item) {
      final reminder = Map<String, dynamic>.from(item);
      return Card(
        margin: const EdgeInsets.only(bottom: 12),
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              Checkbox(
                value: reminder['completed'],
                onChanged: saving
                    ? null
                    : (value) => saveReminder(reminder, {'completed': value}),
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      reminder['title'],
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      '${reminder['time']} · ${reminder['assignedBy'] ?? 'Caregiver'}',
                      style: const TextStyle(color: Colors.black54),
                    ),
                  ],
                ),
              ),
              IconButton(
                tooltip: 'Edit reminder',
                onPressed: saving ? null : () => editReminder(reminder),
                icon: const Icon(Icons.edit_outlined),
              ),
            ],
          ),
        ),
      );
    }).toList(),
  );
  Widget dashboard() {
    final profile = patient!['profile'];
    final completed = (patient!['reminders'] as List)
        .where((r) => r['completed'] == true)
        .length;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        heading(
          'A little support, every day.',
          'Your memories, familiar faces, and daily routines in one place.',
        ),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: forest,
            borderRadius: BorderRadius.circular(24),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                profile['name'],
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                '${profile['age']} years · ${profile['location']}',
                style: const TextStyle(color: Colors.white70, fontSize: 16),
              ),
              const SizedBox(height: 20),
              Text(
                'Caregiver: ${profile['primaryCaregiver']}',
                style: const TextStyle(color: Colors.white),
              ),
              const SizedBox(height: 10),
              Text(
                '$completed of ${(patient!['reminders'] as List).length} daily reminders complete',
                style: const TextStyle(color: Colors.white),
              ),
            ],
          ),
        ),
        const SizedBox(height: 28),
        const Text(
          'Your daily rhythm',
          style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        reminderList(),
      ],
    );
  }

  Widget memories() => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      heading(
        'The moments that matter',
        'Familiar stories to explore with someone you trust.',
      ),
      ...(patient!['memories'] as List).map<Widget>(
        (memory) => Card(
          margin: const EdgeInsets.only(bottom: 20),
          clipBehavior: Clip.antiAlias,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Image.network(
                memory['imageUrl'],
                height: 210,
                width: double.infinity,
                fit: BoxFit.cover,
                errorBuilder: (_, _, _) => Container(
                  height: 140,
                  color: const Color(0xFFE4EBDD),
                  child: const Center(
                    child: Icon(
                      Icons.photo_album_outlined,
                      size: 48,
                      color: forest,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      memory['title'],
                      style: const TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      '${memory['dateOrEra']} · ${memory['location']}',
                      style: const TextStyle(color: Colors.black54),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      memory['caption'],
                      style: const TextStyle(fontSize: 17, height: 1.5),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    ],
  );
  @override
  Widget build(BuildContext context) {
    final wide = MediaQuery.sizeOf(context).width >= 850;
    final content = loading
        ? const Center(child: CircularProgressIndicator())
        : error != null
        ? Center(
            child: Padding(
              padding: const EdgeInsets.all(30),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(error!),
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: loadPatients,
                    child: const Text('Retry'),
                  ),
                ],
              ),
            ),
          )
        : SingleChildScrollView(
            padding: EdgeInsets.all(wide ? 32 : 18),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 950),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(12),
                      margin: const EdgeInsets.only(bottom: 22),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFEFCD),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Text(
                        'DEMO PROFILE · Fictional patient details and sample memories. New game results are recorded separately.',
                      ),
                    ),
                    if (tab == 0) dashboard(),
                    if (tab == 1) ...[
                      heading('Reminders', 'Small steps for a familiar day.'),
                      reminderList(),
                    ],
                    if (tab == 2) memories(),
                    if (tab == 3)
                      WordGame(
                        key: ValueKey(selected),
                        patientId: selected!,
                        sessions: patient!['recordedSessions'] as List,
                        onSaved: () => selectPatient(selected!),
                      ),
                  ],
                ),
              ),
            ),
          );
    return Scaffold(
      appBar: AppBar(
        title: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.spa_outlined, color: forest),
            SizedBox(width: 10),
            Text(
              'Memory Mate',
              style: TextStyle(fontWeight: FontWeight.bold, color: forest),
            ),
          ],
        ),
        actions: [
          IconButton(
            tooltip: 'Refresh records',
            onPressed: saving ? null : loadPatients,
            icon: const Icon(Icons.refresh),
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
            child: DropdownButtonFormField<String>(
              initialValue: selected,
              isExpanded: true,
              decoration: const InputDecoration(
                labelText: 'Patient profile',
                border: OutlineInputBorder(),
              ),
              items: patients
                  .map(
                    (p) => DropdownMenuItem<String>(
                      value: p['profile']['id'],
                      child: Text(
                        p['profile']['name'],
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  )
                  .toList(),
              onChanged: saving
                  ? null
                  : (id) {
                      if (id != null) selectPatient(id);
                    },
            ),
          ),
          Expanded(
            child: Row(
              children: [
                if (wide)
                  NavigationRail(
                    selectedIndex: tab,
                    onDestinationSelected: (value) => setState(() {
                      tab = value;
                    }),
                    labelType: NavigationRailLabelType.all,
                    destinations: const [
                      NavigationRailDestination(
                        icon: Icon(Icons.home_outlined),
                        label: Text('Today'),
                      ),
                      NavigationRailDestination(
                        icon: Icon(Icons.checklist),
                        label: Text('Reminders'),
                      ),
                      NavigationRailDestination(
                        icon: Icon(Icons.photo_album_outlined),
                        label: Text('Memories'),
                      ),
                      NavigationRailDestination(
                        icon: Icon(Icons.extension_outlined),
                        label: Text('Games'),
                      ),
                    ],
                  ),
                Expanded(child: content),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: wide
          ? null
          : NavigationBar(
              selectedIndex: tab,
              onDestinationSelected: (value) => setState(() {
                tab = value;
              }),
              destinations: const [
                NavigationDestination(
                  icon: Icon(Icons.home_outlined),
                  label: 'Today',
                ),
                NavigationDestination(
                  icon: Icon(Icons.checklist),
                  label: 'Reminders',
                ),
                NavigationDestination(
                  icon: Icon(Icons.photo_album_outlined),
                  label: 'Memories',
                ),
                NavigationDestination(
                  icon: Icon(Icons.extension_outlined),
                  label: 'Games',
                ),
              ],
            ),
    );
  }
}

class WordGame extends StatefulWidget {
  final String patientId;
  final List<dynamic> sessions;
  final VoidCallback onSaved;
  const WordGame({
    super.key,
    required this.patientId,
    required this.sessions,
    required this.onSaved,
  });
  @override
  State<WordGame> createState() => _WordGameState();
}

class _WordGameState extends State<WordGame> {
  int stage = 0;
  Timer? timer;
  final Set<String> answers = {};
  final stopwatch = Stopwatch();
  final activityId = DateTime.now().microsecondsSinceEpoch.toString();
  bool saving = false;
  bool saved = false;
  String? error;
  late final int level;
  late final List<String> targets;
  late final List<String> choices;
  @override
  void initState() {
    super.initState();
    final history = widget.sessions
        .where((s) => s['game_type'] == 'word')
        .take(3)
        .toList();
    level = history.length < 3
        ? 1
        : history
                      .map((s) => (s['accuracy'] as num).toDouble())
                      .reduce((a, b) => a + b) /
                  history.length >=
              85
        ? 2
        : 1;
    targets = ['Tea', 'Garden', 'Book', 'River'].take(level + 2).toList();
    choices = [...targets, 'Window', 'Bicycle', 'Cloud']..shuffle();
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  Future<void> submit() async {
    if (saving || saved) return;
    if (stage == 2) {
      stopwatch.stop();
      setState(() {
        stage = 3;
      });
    }
    setState(() {
      saving = true;
      error = null;
    });
    try {
      final response = await http
          .post(
            Uri.parse('$apiBase/api/patients/${widget.patientId}/sessions'),
            headers: {'Content-Type': 'application/json'},
            body: jsonEncode({
              'activity_id': activityId,
              'game_type': 'word',
              'correct': answers.where(targets.contains).length,
              'attempts': targets.length,
              'response_time_ms':
                  stopwatch.elapsedMilliseconds ~/ targets.length,
              'level': level,
            }),
          )
          .timeout(const Duration(seconds: 10));
      if (response.statusCode != 201) throw Exception('Save failed');
      if (mounted) {
        setState(() {
          saved = true;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() {
          error = 'Result could not be saved. Please retry.';
        });
      }
    } finally {
      if (mounted) {
        setState(() {
          saving = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        'A moment for your mind',
        style: TextStyle(
          fontSize: 30,
          fontWeight: FontWeight.bold,
          color: forest,
        ),
      ),
      const SizedBox(height: 10),
      Text(
        'Word recall · Level $level · Difficulty uses your recorded game history.',
      ),
      const SizedBox(height: 24),
      Card(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              if (stage == 0) ...[
                Text(
                  'Remember ${targets.length} words, then find them in a list.',
                  style: const TextStyle(fontSize: 22),
                ),
                const SizedBox(height: 20),
                FilledButton(
                  onPressed: () {
                    setState(() {
                      stage = 1;
                    });
                    timer = Timer(const Duration(seconds: 6), () {
                      if (mounted) {
                        stopwatch.start();
                        setState(() {
                          stage = 2;
                        });
                      }
                    });
                  },
                  child: const Text('Start word recall'),
                ),
              ],
              if (stage == 1) ...[
                const Text('Take a moment to remember these words.'),
                const SizedBox(height: 24),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  children: targets
                      .map(
                        (word) => Chip(
                          label: Text(
                            word,
                            style: const TextStyle(fontSize: 24),
                          ),
                        ),
                      )
                      .toList(),
                ),
              ],
              if (stage == 2) ...[
                Text('Choose up to ${targets.length} words you remember.'),
                const SizedBox(height: 20),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  children: choices
                      .map(
                        (word) => FilterChip(
                          label: Text(
                            word,
                            style: const TextStyle(fontSize: 20),
                          ),
                          selected: answers.contains(word),
                          onSelected: (value) => setState(() {
                            if (!value) {
                              answers.remove(word);
                            } else if (answers.length < targets.length) {
                              answers.add(word);
                            }
                          }),
                        ),
                      )
                      .toList(),
                ),
                const SizedBox(height: 20),
                FilledButton(
                  onPressed: submit,
                  child: const Text('Check my words'),
                ),
              ],
              if (stage == 3) ...[
                Text(
                  '${answers.where(targets.contains).length} of ${targets.length} words recalled',
                  style: const TextStyle(
                    fontSize: 26,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),
                const Text('This is a game result, not a diagnosis.'),
                const SizedBox(height: 16),
                if (saving) const CircularProgressIndicator(),
                if (saved) ...[
                  const Text('Saved to your activity history.'),
                  TextButton(
                    onPressed: widget.onSaved,
                    child: const Text('Play again'),
                  ),
                ],
                if (error != null) ...[
                  Text(error!),
                  FilledButton(
                    onPressed: saving ? null : submit,
                    child: const Text('Retry saving'),
                  ),
                ],
              ],
            ],
          ),
        ),
      ),
      const SizedBox(height: 24),
      Text(
        '${widget.sessions.length} recorded activities',
        style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
      ),
      ...widget.sessions
          .take(5)
          .map(
            (s) => ListTile(
              title: Text('${s['game_type']} · ${s['score']}% accuracy'),
              subtitle: Text(
                '${s['errors']} errors · ${s['response_time_ms']} ms per answer',
              ),
            ),
          ),
    ],
  );
}
