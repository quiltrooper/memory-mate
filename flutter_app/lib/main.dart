import 'common.dart';
import 'games.dart';
import 'dialogs.dart';
import 'translations.dart';
export 'games.dart' show WordGame;
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/semantics.dart';
import 'package:http/http.dart' as http;

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
  String search = '';
  String get language =>
      patient?['profile']?['preferences']?['language'] ?? 'en';
  String t(String text) => translate(language, text);
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
    final labels = {
      'title': t('Title'),
      'time': t('Time'),
      'category': t('Category'),
      'notes': t('Notes'),
    };
    final result = await recordDialog(
      context,
      t('Edit reminder'),
      labels,
      {for (final key in labels.keys) key: '${reminder[key] ?? ''}'},
      requiredFields: {'title', 'time'},
      options: {
        'category': ['routine', 'meal', 'appointment', 'medication'],
      },
    );
    if (result != null && mounted) await saveReminder(reminder, result);
  }

  Future<dynamic> mutate(
    String path,
    String method,
    Map<String, dynamic>? body,
  ) async {
    final message = http.Request(method, Uri.parse('$apiBase$path'));
    message.headers['Content-Type'] = 'application/json';
    if (body != null) message.body = jsonEncode(body);
    final response = await http.Response.fromStream(
      await message.send(),
    ).timeout(const Duration(seconds: 10));
    if (response.statusCode >= 400) {
      throw Exception(
        response.statusCode == 409
            ? 'Record changed elsewhere. Refresh and retry.'
            : 'Please check the supplied fields. (${response.statusCode})',
      );
    }
    return jsonDecode(response.body);
  }

  Future<void> updateRecord(
    String path,
    String method,
    Map<String, dynamic>? body,
  ) async {
    final id = selected!;
    setState(() => saving = true);
    try {
      await mutate(path, method, body);
      if (mounted && selected == id) await selectPatient(id);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text(e.toString())));
      }
    } finally {
      if (mounted) setState(() => saving = false);
    }
  }

  Future<void> profileForm({bool create = false}) async {
    final profile = create
        ? <String, dynamic>{}
        : Map<String, dynamic>.from(patient!['profile']);
    final prefs = Map<String, dynamic>.from(profile['preferences'] ?? {});
    final initial = <String, String>{
      for (final key in [
        'name',
        'age',
        'location',
        'primaryCaregiver',
        'notes',
      ])
        key: '${profile[key] ?? ''}',
      'language': prefs['language'] ?? 'en',
      'largeText': '${prefs['largeText'] ?? false}',
      'responseGoalMs': '${prefs['responseGoalMs'] ?? 4000}',
      'weeklyGoalDays': '${prefs['weeklyGoalDays'] ?? 4}',
    };
    final result = await recordDialog(
      context,
      t(create ? 'Add patient' : 'Profile settings'),
      {
        'name': t('Name'),
        'age': t('Age'),
        'location': t('Location'),
        'primaryCaregiver': t('Caregiver'),
        'notes': t('Notes'),
        'language': t('Language'),
        'largeText': t('Large text'),
        'responseGoalMs': t('Comfortable response pace (ms)'),
        'weeklyGoalDays': t('Weekly activity goal (days)'),
      },
      initial,
      requiredFields: {'name', 'age'},
      options: {
        'language': ['en', 'hi', 'as'],
        'largeText': ['false', 'true'],
      },
    );
    if (result == null || !mounted) return;
    final body = <String, dynamic>{
      'name': result['name'],
      'age': int.tryParse(result['age'] ?? ''),
      'location': result['location'],
      'primaryCaregiver': result['primaryCaregiver'],
      'notes': result['notes'],
      'gender': profile['gender'] ?? 'Not specified',
      'preferences': {
        'language': result['language'],
        'largeText': result['largeText'] == 'true',
        'responseGoalMs': int.tryParse(result['responseGoalMs'] ?? ''),
        'weeklyGoalDays': int.tryParse(result['weeklyGoalDays'] ?? ''),
      },
    };
    if (!create) {
      body['version'] = patient!['version'];
      await updateRecord('/api/patients/$selected', 'PATCH', body);
      return;
    }
    setState(() => saving = true);
    try {
      final added = await mutate('/api/patients', 'POST', body);
      selected = added['id'];
      await loadPatients();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text(e.toString())));
      }
    } finally {
      if (mounted) setState(() => saving = false);
    }
  }

  Future<void> addReminder() async {
    final result = await recordDialog(
      context,
      t('Add reminder'),
      {'title': t('Title'), 'time': t('Time'), 'category': t('Category')},
      {'category': 'routine', 'time': '09:00 AM'},
      requiredFields: {'title', 'time'},
      options: {
        'category': ['routine', 'meal', 'appointment', 'medication'],
      },
    );
    if (result != null && mounted) {
      await updateRecord('/api/patients/$selected/reminders', 'POST', {
        ...result,
        'assignedBy': patient!['profile']['primaryCaregiver'],
      });
    }
  }

  Future<void> memoryForm([Map<String, dynamic>? memory]) async {
    final labels = {
      'title': t('Title'),
      'caption': t('Caption'),
      'dateOrEra': t('Year or era'),
      'location': t('Location'),
      'imageUrl': t('Image URL (optional)'),
    };
    final result = await recordDialog(
      context,
      t(memory == null ? 'Add memory' : 'Edit memory'),
      labels,
      {for (final key in labels.keys) key: '${memory?[key] ?? ''}'},
      requiredFields: {'title', 'caption'},
    );
    if (result != null && mounted) {
      await updateRecord(
        '/api/patients/$selected/memories${memory == null ? '' : '/${memory['id']}'}',
        memory == null ? 'POST' : 'PATCH',
        {...result, 'version': patient!['version']},
      );
    }
  }

  Future<void> removeRecord(String path) async {
    final approved = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: Text(t('Delete')),
        content: const Text('Remove this saved item?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(c, false),
            child: Text(t('Cancel')),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(c, true),
            child: Text(t('Delete')),
          ),
        ],
      ),
    );
    if (approved == true && mounted) await updateRecord(path, 'DELETE', null);
  }

  Widget assessmentPanel() {
    final result = patient!['assessment'] as Map<String, dynamic>;
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              t('Activity support'),
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            Text(
              result['supportLevel'] == null
                  ? '${result['recordedCount']} / 3 activities completed'
                  : '${t(result['supportLevel'])} · ${result['supportIndex']} / 100',
              style: const TextStyle(fontSize: 24, color: forest),
            ),
            Text(
              '${result['activeDays']} / ${result['weeklyGoalDays']} active days this week',
            ),
            const Text(
              'An activity estimate, not a diagnosis. Synthetic history is excluded.',
            ),
            ExpansionTile(
              title: Text(t('How this is calculated')),
              children: [
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Text(result['explanation']),
                ),
              ],
            ),
          ],
        ),
      ),
    );
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
                tooltip: t('Edit reminder'),
                onPressed: saving ? null : () => editReminder(reminder),
                icon: const Icon(Icons.edit_outlined),
              ),
              IconButton(
                tooltip: t('Delete'),
                onPressed: saving
                    ? null
                    : () => removeRecord(
                        '/api/patients/$selected/reminders/${reminder['id']}?version=${reminder['version']}',
                      ),
                icon: const Icon(Icons.delete_outline),
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
                    Wrap(
                      spacing: 8,
                      children: [
                        TextButton(
                          onPressed: saving
                              ? null
                              : () => memoryForm(
                                  Map<String, dynamic>.from(memory),
                                ),
                          child: Text(t('Edit memory')),
                        ),
                        TextButton(
                          onPressed: saving
                              ? null
                              : () => removeRecord(
                                  '/api/patients/$selected/memories/${memory['id']}?version=${patient!['version']}',
                                ),
                          child: Text(t('Delete')),
                        ),
                      ],
                    ),
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
                    if (patient!['dataSource'] == 'demo')
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
                    if (tab == 0) ...[
                      assessmentPanel(),
                      const SizedBox(height: 16),
                      dashboard(),
                    ],
                    if (tab == 1) ...[
                      heading('Reminders', 'Small steps for a familiar day.'),
                      FilledButton.icon(
                        onPressed: saving ? null : addReminder,
                        icon: const Icon(Icons.add),
                        label: Text(t('Add reminder')),
                      ),
                      const SizedBox(height: 12),
                      reminderList(),
                    ],
                    if (tab == 2) ...[
                      FilledButton.icon(
                        onPressed: saving ? null : () => memoryForm(),
                        icon: const Icon(Icons.add),
                        label: Text(t('Add memory')),
                      ),
                      const SizedBox(height: 12),
                      memories(),
                    ],
                    if (tab == 3)
                      GameHub(
                        key: ValueKey(selected),
                        patientId: selected!,
                        sessions: patient!['recordedSessions'] as List,
                        assessment: Map<String, dynamic>.from(
                          patient!['assessment'],
                        ),
                        language: language,
                        onSaved: () => selectPatient(selected!),
                      ),
                  ],
                ),
              ),
            ),
          );
    return MediaQuery(
      data: MediaQuery.of(context).copyWith(
        textScaler: TextScaler.linear(
          patient?['profile']?['preferences']?['largeText'] == true ? 1.25 : 1,
        ),
      ),
      child: Scaffold(
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
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: TextField(
                decoration: InputDecoration(
                  labelText: t('Search patients'),
                  prefixIcon: const Icon(Icons.search),
                ),
                onChanged: (value) =>
                    setState(() => search = value.toLowerCase()),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Wrap(
                spacing: 8,
                children: [
                  TextButton.icon(
                    onPressed: saving ? null : () => profileForm(create: true),
                    icon: const Icon(Icons.person_add_outlined),
                    label: Text(t('Add patient')),
                  ),
                  if (patient != null)
                    TextButton.icon(
                      onPressed: saving ? null : () => profileForm(),
                      icon: const Icon(Icons.tune),
                      label: Text(t('Profile settings')),
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
              child: DropdownButtonFormField<String>(
                key: ValueKey(selected),
                initialValue: selected,
                isExpanded: true,
                decoration: InputDecoration(
                  labelText: t('Patient profile'),
                  border: const OutlineInputBorder(),
                ),
                items: patients
                    .where(
                      (p) =>
                          p['profile']['id'] == selected ||
                          p['profile']['name']
                              .toString()
                              .toLowerCase()
                              .contains(search),
                    )
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
                      destinations: [
                        NavigationRailDestination(
                          icon: Icon(Icons.home_outlined),
                          label: Text(t('Today')),
                        ),
                        NavigationRailDestination(
                          icon: Icon(Icons.checklist),
                          label: Text(t('Reminders')),
                        ),
                        NavigationRailDestination(
                          icon: Icon(Icons.photo_album_outlined),
                          label: Text(t('Memories')),
                        ),
                        NavigationRailDestination(
                          icon: Icon(Icons.extension_outlined),
                          label: Text(t('Games')),
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
                destinations: [
                  NavigationDestination(
                    icon: Icon(Icons.home_outlined),
                    label: t('Today'),
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.checklist),
                    label: t('Reminders'),
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.photo_album_outlined),
                    label: t('Memories'),
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.extension_outlined),
                    label: t('Games'),
                  ),
                ],
              ),
      ),
    );
  }
}
