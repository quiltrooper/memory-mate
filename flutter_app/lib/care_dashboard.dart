import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'translations.dart';
import 'common.dart';

class CareDashboard extends StatelessWidget {
  final Map<String, dynamic> patient;
  final String language;
  final Widget assessment, reminders;
  final VoidCallback onAddReminder,
      onExport,
      onExportAll,
      onBackup,
      onRestore,
      onRead,
      onSummary;
  final String? aiSummary;
  final bool busy;
  const CareDashboard({
    super.key,
    required this.patient,
    required this.language,
    required this.assessment,
    required this.reminders,
    required this.onAddReminder,
    required this.onExport,
    required this.onExportAll,
    required this.onBackup,
    required this.onRestore,
    required this.onRead,
    required this.onSummary,
    this.aiSummary,
    this.busy = false,
  });
  String t(String key, [Map<String, Object?> args = const {}]) =>
      translate(language, key, args);
  static List<Map<String, dynamic>> recorded(Map<String, dynamic> p) =>
      (p['recordedSessions'] as List)
          .where((s) => s['dataSource'] == 'recorded')
          .map((s) => Map<String, dynamic>.from(s))
          .toList();
  static String facts(Map<String, dynamic> p, String language) {
    final sessions = recorded(p);
    final recent = sessions.take(5).toList();
    final done = (p['reminders'] as List)
        .where((r) => r['completed'] == true)
        .length;
    final accuracy = recent.isEmpty
        ? '—'
        : (recent
                      .map((s) => (s['accuracy'] as num).toDouble())
                      .reduce((a, b) => a + b) /
                  recent.length)
              .toStringAsFixed(1);
    return translate(
      language,
      '{count} recorded activities. Recent accuracy: {accuracy}%. Reminders complete: {done}/{total}.',
      {
        'count': sessions.length,
        'accuracy': accuracy,
        'done': done,
        'total': (p['reminders'] as List).length,
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final profile = patient['profile'];
    final sessions = recorded(patient);
    final recent = sessions.take(5).toList();
    final avgMs = recent.isEmpty
        ? '—'
        : (recent
                      .map((s) => (s['response_time_ms'] as num).toDouble())
                      .reduce((a, b) => a + b) /
                  recent.length /
                  1000)
              .toStringAsFixed(2);
    final weekly = <String, Map<String, List<double>>>{};
    for (final s in sessions) {
      final date = DateTime.tryParse(s['timestamp'])?.toUtc();
      if (date == null) continue;
      final monday = DateTime.utc(date.year, date.month, date.day)
          .subtract(Duration(days: date.weekday - 1))
          .toIso8601String()
          .substring(0, 10);
      weekly
          .putIfAbsent(monday, () => {})
          .putIfAbsent(s['game_type'], () => [])
          .add((s['accuracy'] as num).toDouble());
    }
    final weeks = weekly.keys.toList()..sort();
    final shown = weeks.length > 8 ? weeks.sublist(weeks.length - 8) : weeks;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          t('Caregiver dashboard'),
          style: const TextStyle(
            fontSize: 30,
            fontWeight: FontWeight.bold,
            color: forest,
          ),
        ),
        Text('${profile['name']} · ${profile['location']}'),
        Text(
          '${t('Caregiver')}: ${profile['primaryCaregiver']} · ${t('ASHA worker')}: ${profile['ashaWorker'] ?? ''}',
        ),
        Text(
          '${t('Hospital')}: ${profile['hospital'] ?? ''} · ${t('Recorded condition')}: ${profile['diagnosis'] ?? ''}',
        ),
        if ((profile['notes'] ?? '').toString().isNotEmpty)
          Text('${t('Notes')}: ${profile['notes']}'),
        const SizedBox(height: 16),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            OutlinedButton(
              onPressed: busy ? null : onExport,
              child: Text(t('Export this patient')),
            ),
            OutlinedButton(
              onPressed: busy ? null : onExportAll,
              child: Text(t('Export all patients')),
            ),
            OutlinedButton(
              onPressed: busy ? null : onBackup,
              child: Text(t('Download backup')),
            ),
            OutlinedButton(
              onPressed: busy ? null : onRestore,
              child: Text(t('Restore backup')),
            ),
          ],
        ),
        const SizedBox(height: 16),
        assessment,
        Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  t('Family activity summary'),
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(facts(patient, language)),
                Text('${t('Average response (seconds)')}: $avgMs'),
                Text(t('Recorded activities only. No clinical conclusions.')),
                Wrap(
                  spacing: 8,
                  children: [
                    TextButton(
                      onPressed: onRead,
                      child: Text(t('Read summary')),
                    ),
                    TextButton(
                      onPressed: busy ? null : onSummary,
                      child: Text(t('Optional Gemini summary')),
                    ),
                  ],
                ),
                if (aiSummary != null) Text(aiSummary!),
              ],
            ),
          ),
        ),
        const SizedBox(height: 16),
        Text(
          t('Weekly recorded activity'),
          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
        ),
        Text(
          t(
            'Accuracy by game and week (Monday, UTC). Missing games remain gaps.',
          ),
        ),
        if (shown.isEmpty) Text(t('Complete a game to start your history.')),
        if (shown.isNotEmpty) ...[
          const SizedBox(height: 12),
          SizedBox(
            height: 200,
            width: double.infinity,
            child: CustomPaint(painter: TrendPainter(shown, weekly)),
          ),
          Wrap(
            spacing: 16,
            children: [
              for (final entry in {
                'word': 'Word recall',
                'pattern': 'Pattern recall',
                'matching': 'Picture matching',
              }.entries)
                Text(
                  t(entry.value),
                  style: TextStyle(
                    color: TrendPainter.colors[entry.key],
                    fontWeight: FontWeight.bold,
                  ),
                ),
            ],
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              columns: [
                DataColumn(label: Text(t('Week'))),
                for (final game in [
                  'Word recall',
                  'Pattern recall',
                  'Picture matching',
                ])
                  DataColumn(label: Text(t(game))),
              ],
              rows: [
                for (final w in shown)
                  DataRow(
                    cells: [
                      DataCell(Text(w)),
                      for (final game in ['word', 'pattern', 'matching'])
                        DataCell(
                          Text(
                            weekly[w]![game] == null
                                ? '—'
                                : '${(weekly[w]![game]!.reduce((a, b) => a + b) / weekly[w]![game]!.length).toStringAsFixed(1)}%',
                          ),
                        ),
                    ],
                  ),
              ],
            ),
          ),
        ],
        const SizedBox(height: 24),
        Row(
          children: [
            Expanded(
              child: Text(
                t('Caregiver schedule'),
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: busy ? null : onAddReminder,
              child: Text(t('Add reminder')),
            ),
          ],
        ),
        Text(t('Saved reminders also appear in Patient mode.')),
        reminders,
        const SizedBox(height: 24),
        Text(
          t('Complete activity history'),
          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
        ),
        if (sessions.isEmpty) Text(t('No recorded sessions yet.')),
        if (sessions.isNotEmpty)
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              columns: [
                for (final key in [
                  'Time',
                  'Game',
                  'Accuracy',
                  'Response (ms)',
                  'Errors',
                  'Level',
                  'Source',
                ])
                  DataColumn(label: Text(t(key))),
              ],
              rows: [
                for (final s in sessions)
                  DataRow(
                    cells: [
                      DataCell(
                        Text(
                          '${s['timestamp'].toString().replaceFirst('T', ' ').split('.').first} UTC',
                        ),
                      ),
                      DataCell(
                        Text(
                          t(
                            {
                                  'word': 'Word recall',
                                  'pattern': 'Pattern recall',
                                  'matching': 'Picture matching',
                                }[s['game_type']] ??
                                s['game_type'],
                          ),
                        ),
                      ),
                      DataCell(Text('${s['accuracy']}%')),
                      DataCell(Text('${s['response_time_ms']}')),
                      DataCell(Text('${s['errors']}')),
                      DataCell(Text('${s['level']}')),
                      DataCell(
                        Text(
                          t(s['pending'] == true ? 'Pending sync' : 'Recorded'),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
          ),
        ExpansionTile(
          title: Text(t('Imported demonstration / legacy history')),
          children: [
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: DataTable(
                columns: [
                  for (final key in [
                    'Time',
                    'Game',
                    'Accuracy',
                    'Response (ms)',
                    'Errors',
                  ])
                    DataColumn(label: Text(t(key))),
                ],
                rows: [
                  for (final s in (patient['gameSessions'] as List))
                    DataRow(
                      cells: [
                        DataCell(Text('${s['timestamp'] ?? ''}')),
                        DataCell(
                          Text('${s['gameTitle'] ?? s['gameType'] ?? ''}'),
                        ),
                        DataCell(Text('${s['accuracy'] ?? ''}%')),
                        DataCell(Text('${s['responseTimeMs'] ?? ''}')),
                        DataCell(Text('${s['errors'] ?? ''}')),
                      ],
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Text(
                t(
                  '{count} imported sessions retained in backups; excluded from recorded trends.',
                  {'count': (patient['gameSessions'] as List).length},
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class TrendPainter extends CustomPainter {
  final List<String> weeks;
  final Map<String, Map<String, List<double>>> values;
  static const colors = {
    'word': Color(0xFF365C48),
    'pattern': Color(0xFF426FAD),
    'matching': Color(0xFFAA712C),
  };
  TrendPainter(this.weeks, this.values);
  @override
  void paint(Canvas canvas, Size size) {
    final width = math.max(1.0, size.width - 45), height = size.height - 28;
    for (final y in [0, 25, 50, 75, 100]) {
      final pos = height * (1 - y / 100);
      canvas.drawLine(
        Offset(35, pos),
        Offset(size.width, pos),
        Paint()..color = Colors.black12,
      );
      final text = TextPainter(
        text: TextSpan(
          text: '$y',
          style: const TextStyle(color: Colors.black54, fontSize: 12),
        ),
        textDirection: TextDirection.ltr,
      )..layout();
      text.paint(canvas, Offset(0, pos));
    }
    for (final game in colors.keys) {
      Offset? previous;
      for (var i = 0; i < weeks.length; i++) {
        final entries = values[weeks[i]]![game];
        if (entries == null) {
          previous = null;
          continue;
        }
        final avg = entries.reduce((a, b) => a + b) / entries.length;
        final point = Offset(
          35 + width * (weeks.length == 1 ? 0.5 : i / (weeks.length - 1)),
          height * (1 - avg / 100),
        );
        final paint = Paint()
          ..color = colors[game]!
          ..strokeWidth = 2.5;
        if (previous != null) canvas.drawLine(previous, point, paint);
        canvas.drawCircle(point, 4, paint);
        previous = point;
      }
    }
  }

  @override
  bool shouldRepaint(covariant TrendPainter old) => true;
}
