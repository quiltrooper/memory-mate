import 'dart:async';
import 'api_service.dart';
import 'browser_bridge.dart';
import 'care_dashboard.dart';
import 'memory_assistant.dart';
import 'pin_gate.dart';
import 'common.dart';
import 'games.dart';
import 'dialogs.dart';
import 'translations.dart';
export 'games.dart' show WordGame;
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/semantics.dart';

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
    home: const PinGate(child: Home()),
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
  bool caregiver = false;
  String? aiSummary;
  final Map<String, String> memoryPrompts = {};
  Timer? syncTimer;
  String get language =>
      patient?['profile']?['preferences']?['language'] ?? 'en';
  String t(String text, [Map<String, Object?> values = const {}]) =>
      translate(language, text, values);
  @override
  void initState() {
    super.initState();
    selected = browserCall('get', {'key': 'mm_flutter_selected'});
    ApiService.changed.addListener(apiChanged);
    loadPatients();
    syncTimer = Timer.periodic(
      const Duration(seconds: 30),
      (_) => syncPending(),
    );
    syncPending();
  }

  void apiChanged() {
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    syncTimer?.cancel();
    ApiService.changed.removeListener(apiChanged);
    super.dispose();
  }

  Future<void> syncPending() async {
    final had = ApiService.queue.isNotEmpty;
    await ApiService.sync();
    if (had && ApiService.queue.isEmpty && mounted && !saving) {
      await loadPatients();
    }
  }

  Future<dynamic> request(String path, {Map<String, dynamic>? body}) async {
    return ApiService.send(
      path,
      method: body == null ? 'GET' : 'PATCH',
      body: body,
    );
  }

  Future<void> loadPatients() async {
    setState(() {
      loading = true;
      error = null;
    });
    try {
      if (selected != null) selected = ApiService.resolve(selected!);
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
      await selectPatient(
        rows.any((p) => p['profile']['id'] == selected)
            ? selected!
            : rows.first['profile']['id'],
      );
      unawaited(ApiService.prefetch());
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
      aiSummary = null;
      memoryPrompts.clear();
    });
    try {
      final result = await request('/api/patients/$id');
      if (mounted && current == requestId) {
        setState(() {
          patient = Map<String, dynamic>.from(result);
          patients = patients
              .map(
                (p) => p['profile']['id'] == id
                    ? {
                        'profile': patient!['profile'],
                        'dataSource': patient!['dataSource'],
                      }
                    : p,
              )
              .toList();
          browserCall('set', {'key': 'mm_flutter_selected', 'value': id});
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
      'assignedBy': t('Assigned by'),
    };
    final result = await recordDialog(
      context,
      t('Edit reminder'),
      labels,
      {for (final key in labels.keys) key: '${reminder[key] ?? ''}'},
      language: language,
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
    return ApiService.send(path, method: method, body: body);
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
        'gender',
        'diagnosis',
        'ashaWorker',
        'hospital',
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
        'gender': t('Gender'),
        'diagnosis': t('Recorded condition'),
        'ashaWorker': t('ASHA worker'),
        'hospital': t('Hospital'),
        'language': t('Language'),
        'largeText': t('Large text'),
        'responseGoalMs': t('Comfortable response pace (ms)'),
        'weeklyGoalDays': t('Weekly activity goal (days)'),
      },
      initial,
      language: language,
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
      'gender': result['gender'] ?? 'Not specified',
      'diagnosis': result['diagnosis'] ?? '',
      'ashaWorker': result['ashaWorker'] ?? '',
      'hospital': result['hospital'] ?? '',
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
      {
        'title': t('Title'),
        'time': t('Time'),
        'category': t('Category'),
        'notes': t('Notes'),
        'assignedBy': t('Assigned by'),
      },
      {
        'category': 'routine',
        'time': '09:00 AM',
        'assignedBy': patient!['profile']['primaryCaregiver'] ?? '',
      },
      language: language,
      requiredFields: {'title', 'time'},
      options: {
        'category': ['routine', 'meal', 'appointment', 'medication'],
      },
    );
    if (result != null && mounted) {
      await updateRecord('/api/patients/$selected/reminders', 'POST', {
        ...result,
        'assignedBy': result['assignedBy'],
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
      language: language,
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
        content: Text(t('Remove this saved item?')),
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

  Future<void> reviewPending({bool discard = false}) async {
    if (ApiService.queue.isEmpty) return;
    final q = ApiService.queue.first;
    final approved = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: Text(t('Review pending changes')),
        content: Text(
          discard
              ? t(
                  'Export pending changes and discard the device queue? Server records stay unchanged.',
                )
              : '${q['method']} ${q['path']}\n${t('Keep your queued values over the latest server version?')}',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(c, false),
            child: Text(t('Cancel')),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(c, true),
            child: Text(t(discard ? 'Export and discard' : 'Keep my change')),
          ),
        ],
      ),
    );
    if (approved != true) return;
    try {
      if (discard) {
        ApiService.discardPending();
        await loadPatients();
      } else {
        await ApiService.rebaseFirst();
        await syncPending();
      }
    } catch (e) {
      notice(e.toString());
    }
  }

  void notice(String text) {
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));
    }
  }

  void readText(String text) {
    final warning = browserCall('speak', {'text': text, 'language': language});
    if (warning is String && warning.isNotEmpty) notice(warning);
  }

  Future<void> exportData({bool all = false}) async {
    try {
      final data = all
          ? await ApiService.backup()
          : {
              'format': 'memory-mate-backup',
              'version': 3,
              'exportedAt': DateTime.now().toUtc().toIso8601String(),
              'patients': [patient!],
            };
      browserCall('download', {
        'name': all
            ? 'memory-mate-backup.json'
            : 'memory-mate-patient-$selected.json',
        'text': const JsonEncoder.withIndent('  ').convert(data),
      });
    } catch (e) {
      notice(e.toString());
    }
  }

  Future<void> restoreData() async {
    if (ApiService.queue.isNotEmpty) {
      notice(t('Sync pending changes before restoring a backup.'));
      return;
    }
    try {
      final text = await browserAsync('file', {'image': false});
      if (text == null) return;
      final backup = jsonDecode(text);
      if (backup is! Map ||
          backup['format'] != 'memory-mate-backup' ||
          backup['patients'] is! List) {
        throw Exception(t('Invalid backup'));
      }
      final current = await ApiService.send('/api/backup');
      if (!mounted) return;
      final approved = await recordDialog(
        context,
        t(
          'Restore {count} profiles? Matching profiles will be replaced; other profiles stay.',
          {'count': (backup['patients'] as List).length},
        ),
        {'confirm': t('Type RESTORE to confirm')},
        {},
        language: language,
        requiredFields: {'confirm'},
      );
      if (approved?['confirm'] != 'RESTORE') return;
      final result = await ApiService.send(
        '/api/restore',
        method: 'POST',
        body: {'backup': backup, 'expectedDigest': current['digest']},
      );
      notice(
        '${t('Restored profiles')}: ${result['restored']}. ${t('Recovery copy')}: ${result['recoveryFile']}',
      );
      await loadPatients();
    } catch (e) {
      notice(e.toString());
    }
  }

  Future<void> faceForm([Map<String, dynamic>? face]) async {
    final result = await recordDialog(
      context,
      t(face == null ? 'Add family photo' : 'Edit photo label'),
      {
        'name': t('Name'),
        'relationship': t('Relationship'),
        'location': t('Location'),
        'notes': t('Notes'),
        'photoUrl': t('Photo URL (optional)'),
      },
      {
        for (final k in [
          'name',
          'relationship',
          'location',
          'notes',
          'photoUrl',
        ])
          k: '${face?[k] ?? ''}',
      },
      language: language,
      requiredFields: {'name'},
    );
    if (result == null || !mounted) return;
    await updateRecord(
      '/api/patients/$selected/faces${face == null ? '' : '/${face['id']}'}',
      face == null ? 'POST' : 'PATCH',
      {...result, 'version': patient!['version']},
    );
  }

  Future<void> summary() async {
    setState(() => saving = true);
    try {
      final result = await ApiService.send(
        '/api/patients/$selected/summary',
        method: 'POST',
        body: {'language': language},
      );
      if (mounted) setState(() => aiSummary = result['reply']);
    } catch (_) {
      if (mounted) {
        setState(
          () => aiSummary = t(
            'Optional AI unavailable. The measured summary above remains available.',
          ),
        );
      }
    } finally {
      if (mounted) setState(() => saving = false);
    }
  }

  Future<void> memoryPrompt(dynamic memory) async {
    final id = memory['id'];
    setState(() => saving = true);
    String prompt;
    try {
      final result = await ApiService.send(
        '/api/patients/$selected/reminiscence',
        method: 'POST',
        body: {'language': language, 'memoryId': id},
      );
      prompt = result['reply'];
    } catch (_) {
      prompt = t('What would you like to share about this memory?');
    }
    if (mounted) {
      setState(() {
        memoryPrompts[id] = prompt;
        saving = false;
      });
      readText(prompt);
    }
  }

  Widget caregiverView() => CareDashboard(
    patient: patient!,
    language: language,
    assessment: assessmentPanel(),
    reminders: reminderList(),
    onAddReminder: addReminder,
    onExport: () => exportData(),
    onExportAll: () => exportData(all: true),
    onBackup: () => exportData(all: true),
    onRestore: restoreData,
    onRead: () => readText(CareDashboard.facts(patient!, language)),
    onSummary: summary,
    aiSummary: aiSummary,
    busy: saving,
  );

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
                  ? t('{count} / 3 activities completed', {
                      'count': result['recordedCount'],
                    })
                  : '${t(result['supportLevel'])} · ${result['supportIndex']} / 100',
              style: const TextStyle(fontSize: 24, color: forest),
            ),
            Text(
              t('{days} / {goal} active days this week', {
                'days': result['activeDays'],
                'goal': result['weeklyGoalDays'],
              }),
            ),
            Text(
              t(
                'An activity estimate, not a diagnosis. Synthetic history is excluded.',
              ),
            ),
            if (ApiService.queue.isNotEmpty)
              Text(
                t(
                  'Pending activity is not included in the assessment until synced.',
                ),
              ),
            if ((result['components'] as Map).isNotEmpty)
              Wrap(
                spacing: 16,
                runSpacing: 8,
                children: [
                  Text(
                    '${t('Error component')}: ${result['components']['errorComponent']} × 60%',
                  ),
                  Text(
                    '${t('Pace component')}: ${result['components']['paceComponent']} × 25%',
                  ),
                  Text(
                    '${t('Weekly goal shortfall')}: ${result['components']['consistencyComponent']} × 15%',
                  ),
                ],
              ),
            Text('${t('Model')}: ${result['modelVersion']}'),
            ExpansionTile(
              title: Text(t('How this is calculated')),
              children: [
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Text(t(result['explanation'])),
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
          t(title),
          style: const TextStyle(
            fontSize: 30,
            fontWeight: FontWeight.bold,
            color: forest,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          t(subtitle),
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
                    Text(
                      '${t(reminder['category'])} · ${t(reminder['completed'] == true ? 'Complete' : 'Pending')}',
                    ),
                    if ((reminder['notes'] ?? '').toString().isNotEmpty)
                      Text(reminder['notes']),
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
                t('{age} years · {location}', {
                  'age': profile['age'],
                  'location': profile['location'],
                }),
                style: const TextStyle(color: Colors.white70, fontSize: 16),
              ),
              const SizedBox(height: 20),
              Text(
                t('Caregiver: {name}', {'name': profile['primaryCaregiver']}),
                style: const TextStyle(color: Colors.white),
              ),
              const SizedBox(height: 10),
              Text(
                t('{done} of {total} daily reminders complete', {
                  'done': completed,
                  'total': (patient!['reminders'] as List).length,
                }),
                style: const TextStyle(color: Colors.white),
              ),
            ],
          ),
        ),
        const SizedBox(height: 28),
        Text(
          t('Your daily rhythm'),
          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        reminderList(),
        const SizedBox(height: 16),
        Text(
          t('What would you like to do?'),
          style: const TextStyle(fontSize: 22),
        ),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            FilledButton(
              onPressed: () => setState(() => tab = 4),
              child: Text(t('I need help')),
            ),
            OutlinedButton(
              onPressed: () => setState(() => tab = 3),
              child: Text(t('Games')),
            ),
            OutlinedButton(
              onPressed: () => setState(() => tab = 2),
              child: Text(t('Memories')),
            ),
            OutlinedButton(
              onPressed: () => setState(() => tab = 1),
              child: Text(t('Reminders')),
            ),
          ],
        ),
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
                    Wrap(
                      spacing: 8,
                      children: [
                        TextButton(
                          onPressed: () => readText(memory['caption']),
                          child: Text(t('Read aloud')),
                        ),
                        TextButton(
                          onPressed: saving ? null : () => memoryPrompt(memory),
                          child: Text(t('Talk about this memory')),
                        ),
                      ],
                    ),
                    if (memoryPrompts[memory['id']] != null)
                      Text(memoryPrompts[memory['id']]!),
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
                  Text(t(error!)),
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: loadPatients,
                    child: Text(t('Retry')),
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
                        child: Text(
                          t(
                            'DEMO PROFILE · Fictional patient details and sample memories. New game results are recorded separately.',
                          ),
                        ),
                      ),
                    if (caregiver) caregiverView(),
                    if (!caregiver && tab == 0) ...[
                      assessmentPanel(),
                      const SizedBox(height: 16),
                      dashboard(),
                    ],
                    if (!caregiver && tab == 1) ...[
                      heading('Reminders', 'Small steps for a familiar day.'),
                      FilledButton.icon(
                        onPressed: saving ? null : addReminder,
                        icon: const Icon(Icons.add),
                        label: Text(t('Add reminder')),
                      ),
                      const SizedBox(height: 12),
                      reminderList(),
                    ],
                    if (!caregiver && tab == 2) ...[
                      FilledButton.icon(
                        onPressed: saving ? null : () => memoryForm(),
                        icon: const Icon(Icons.add),
                        label: Text(t('Add memory')),
                      ),
                      const SizedBox(height: 12),
                      memories(),
                    ],
                    if (!caregiver && tab == 4)
                      MemoryAssistant(
                        key: ValueKey('assistant-$selected'),
                        patient: patient!,
                        language: language,
                        onAddFace: () => faceForm(),
                        onEditFace: (f) => faceForm(f),
                        onDeleteFace: (f) => removeRecord(
                          '/api/patients/$selected/faces/${f['id']}?version=${patient!['version']}',
                        ),
                      ),
                    if (!caregiver && tab == 3)
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
              tooltip: t('Lock'),
              onPressed: () => PinGate.lock(context),
              icon: const Icon(Icons.lock_outline),
            ),
            IconButton(
              tooltip: t('Install app'),
              onPressed: () async {
                final result = await browserAsync('install');
                if (result is String && result.isNotEmpty) notice(result);
              },
              icon: const Icon(Icons.install_mobile),
            ),
            IconButton(
              tooltip: t('Refresh records'),
              onPressed: saving ? null : loadPatients,
              icon: const Icon(Icons.refresh),
            ),
          ],
        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8),
              child: Wrap(
                spacing: 8,
                runSpacing: 4,
                alignment: WrapAlignment.center,
                children: [
                  ChoiceChip(
                    label: Text(t('Patient mode')),
                    selected: !caregiver,
                    onSelected: (_) => setState(() => caregiver = false),
                  ),
                  ChoiceChip(
                    label: Text(t('Caregiver mode')),
                    selected: caregiver,
                    onSelected: (_) => setState(() => caregiver = true),
                  ),
                  FilterChip(
                    label: Text(t('Offline mode')),
                    selected: ApiService.forcedOffline,
                    onSelected: (_) {
                      ApiService.toggleOffline();
                      loadPatients();
                    },
                  ),
                ],
              ),
            ),
            if (ApiService.offline ||
                ApiService.forcedOffline ||
                ApiService.queue.isNotEmpty ||
                ApiService.syncError != null)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Column(
                  children: [
                    Text(
                      '${t(ApiService.offline || ApiService.forcedOffline ? 'Using saved device records' : 'Connected')} · ${ApiService.queue.length} ${t('pending changes')}',
                    ),
                    if (ApiService.syncError != null)
                      Text(ApiService.syncError!),
                    if (ApiService.queue.isNotEmpty)
                      Wrap(
                        spacing: 8,
                        children: [
                          TextButton(
                            onPressed: ApiService.exportPending,
                            child: Text(t('Export pending changes')),
                          ),
                          if (ApiService.syncError != null)
                            TextButton(
                              onPressed: () => reviewPending(),
                              child: Text(t('Review pending changes')),
                            ),
                          TextButton(
                            onPressed: ApiService.syncing
                                ? null
                                : () => reviewPending(discard: true),
                            child: Text(t('Export and discard')),
                          ),
                        ],
                      ),
                    TextButton(
                      onPressed: ApiService.syncing || ApiService.forcedOffline
                          ? null
                          : syncPending,
                      child: Text(t('Sync now')),
                    ),
                  ],
                ),
              ),
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
                  if (wide && !caregiver)
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
                        NavigationRailDestination(
                          icon: Icon(Icons.chat_bubble_outline),
                          label: Text(t('Assistant')),
                        ),
                      ],
                    ),
                  Expanded(child: content),
                ],
              ),
            ),
          ],
        ),
        bottomNavigationBar: wide || caregiver
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
                  NavigationDestination(
                    icon: Icon(Icons.chat_bubble_outline),
                    label: t('Assistant'),
                  ),
                ],
              ),
      ),
    );
  }
}
