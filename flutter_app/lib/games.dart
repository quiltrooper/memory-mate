import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'common.dart';
import 'translations.dart';

class WordGame extends StatefulWidget {
  final String patientId;
  final List<dynamic> sessions;
  final VoidCallback onSaved;
  final int? configuredLevel;
  const WordGame({
    super.key,
    required this.patientId,
    required this.sessions,
    required this.onSaved,
    this.configuredLevel,
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
    level =
        widget.configuredLevel ??
        (history.length < 3
            ? 1
            : history
                          .map((s) => (s['accuracy'] as num).toDouble())
                          .reduce((a, b) => a + b) /
                      history.length >=
                  85
            ? 2
            : 1);
    targets = [
      'Tea',
      'Garden',
      'Book',
      'River',
      'Flower',
    ].take(level + 2).toList();
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

class GameHub extends StatefulWidget {
  final String patientId;
  final List<dynamic> sessions;
  final Map<String, dynamic> assessment;
  final String language;
  final VoidCallback onSaved;
  const GameHub({
    super.key,
    required this.patientId,
    required this.sessions,
    required this.assessment,
    required this.language,
    required this.onSaved,
  });
  @override
  State<GameHub> createState() => _GameHubState();
}

class _GameHubState extends State<GameHub> {
  String game = 'word';
  @override
  Widget build(BuildContext context) {
    final levels = widget.assessment['nextLevels'] as Map;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final entry in {
              'word': 'Word recall',
              'pattern': 'Pattern recall',
              'matching': 'Picture matching',
            }.entries)
              ChoiceChip(
                label: Text(translate(widget.language, entry.value)),
                selected: game == entry.key,
                onSelected: (_) => setState(() => game = entry.key),
              ),
          ],
        ),
        const SizedBox(height: 20),
        if (game == 'word')
          WordGame(
            key: ValueKey('word-${widget.patientId}'),
            patientId: widget.patientId,
            sessions: widget.sessions,
            onSaved: widget.onSaved,
            configuredLevel: levels['word'],
          ),
        if (game == 'pattern')
          PatternGame(
            key: ValueKey('pattern-${widget.patientId}'),
            patientId: widget.patientId,
            level: levels['pattern'],
            onSaved: widget.onSaved,
          ),
        if (game == 'matching')
          MatchingGame(
            key: ValueKey('matching-${widget.patientId}'),
            patientId: widget.patientId,
            level: levels['matching'],
            onSaved: widget.onSaved,
          ),
      ],
    );
  }
}

class SavedResult extends StatefulWidget {
  final String patientId, game;
  final int correct, attempts, responseMs, level;
  final VoidCallback onSaved;
  const SavedResult({
    super.key,
    required this.patientId,
    required this.game,
    required this.correct,
    required this.attempts,
    required this.responseMs,
    required this.level,
    required this.onSaved,
  });
  @override
  State<SavedResult> createState() => _SavedResultState();
}

class _SavedResultState extends State<SavedResult> {
  final id = DateTime.now().microsecondsSinceEpoch.toString();
  bool saving = true, saved = false;
  @override
  void initState() {
    super.initState();
    save();
  }

  Future<void> save() async {
    setState(() => saving = true);
    try {
      final response = await http
          .post(
            Uri.parse('$apiBase/api/patients/${widget.patientId}/sessions'),
            headers: {'Content-Type': 'application/json'},
            body: jsonEncode({
              'activity_id': id,
              'game_type': widget.game,
              'correct': widget.correct,
              'attempts': widget.attempts,
              'response_time_ms': widget.responseMs,
              'level': widget.level,
            }),
          )
          .timeout(const Duration(seconds: 10));
      if (response.statusCode != 201) throw Exception('save');
      if (mounted) setState(() => saved = true);
    } catch (_) {
      if (mounted) setState(() => saved = false);
    } finally {
      if (mounted) setState(() => saving = false);
    }
  }

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '${(widget.correct * 100 / widget.attempts).round()}% accuracy',
            style: const TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
              color: forest,
            ),
          ),
          Text(
            '${widget.correct} correct out of ${widget.attempts} attempts. ${widget.attempts - widget.correct} errors.',
          ),
          const SizedBox(height: 12),
          const Text('Activity measure only. This is not a diagnosis.'),
          if (saving) const LinearProgressIndicator(),
          if (!saving && saved) ...[
            const Text('Saved to your activity history.'),
            FilledButton(
              onPressed: widget.onSaved,
              child: const Text('Continue'),
            ),
          ],
          if (!saving && !saved) ...[
            const Text('Could not save. Your result is still here.'),
            FilledButton(onPressed: save, child: const Text('Retry saving')),
          ],
        ],
      ),
    ),
  );
}

const gameIcons = [
  Icons.local_florist,
  Icons.wb_sunny,
  Icons.water_drop,
  Icons.park,
  Icons.menu_book,
  Icons.home,
];
const gameNames = ['Flower', 'Sun', 'Water', 'Tree', 'Book', 'Home'];

class PatternGame extends StatefulWidget {
  final String patientId;
  final int level;
  final VoidCallback onSaved;
  const PatternGame({
    super.key,
    required this.patientId,
    required this.level,
    required this.onSaved,
  });
  @override
  State<PatternGame> createState() => _PatternGameState();
}

class _PatternGameState extends State<PatternGame> {
  late final List<int> sequence;
  int stage = 0, flash = -1, position = 0, correct = 0;
  Timer? timer;
  final watch = Stopwatch();
  @override
  void initState() {
    super.initState();
    final random = Random();
    sequence = List.generate(widget.level + 2, (_) => random.nextInt(4));
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  void start() {
    setState(() {
      stage = 1;
      flash = 0;
    });
    timer = Timer.periodic(const Duration(milliseconds: 900), (t) {
      if (!mounted) return;
      if (flash + 1 == sequence.length) {
        t.cancel();
        watch.start();
        setState(() {
          stage = 2;
          flash = -1;
        });
      } else {
        setState(() => flash++);
      }
    });
  }

  void tap(int value) {
    if (stage != 2) return;
    if (sequence[position] == value) correct++;
    position++;
    if (position == sequence.length) {
      watch.stop();
      setState(() => stage = 3);
    } else {
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        'Pattern recall',
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: forest,
        ),
      ),
      Text(
        'Level ${widget.level}. Watch the symbols, then repeat their order.',
      ),
      const SizedBox(height: 20),
      if (stage == 0)
        FilledButton(
          onPressed: start,
          child: const Text('Start pattern recall'),
        ),
      if (stage == 1)
        Text(
          'Remember ${gameNames[sequence[flash]]} (${flash + 1} of ${sequence.length})',
          style: const TextStyle(fontSize: 22),
        ),
      if (stage == 2)
        Text(
          'Your turn: ${position + 1} of ${sequence.length}',
          style: const TextStyle(fontSize: 22),
        ),
      if (stage == 1 || stage == 2)
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Wrap(
            spacing: 12,
            runSpacing: 12,
            children: List.generate(
              4,
              (i) => SizedBox(
                width: 130,
                height: 100,
                child: FilledButton.tonal(
                  onPressed: stage == 2 ? () => tap(i) : null,
                  style: FilledButton.styleFrom(
                    backgroundColor: stage == 1 && sequence[flash] == i
                        ? Colors.amber.shade200
                        : null,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(gameIcons[i], size: 30),
                      Text(gameNames[i]),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      if (stage == 3)
        SavedResult(
          patientId: widget.patientId,
          game: 'pattern',
          correct: correct,
          attempts: sequence.length,
          responseMs: watch.elapsedMilliseconds ~/ sequence.length,
          level: widget.level,
          onSaved: widget.onSaved,
        ),
    ],
  );
}

class MatchingGame extends StatefulWidget {
  final String patientId;
  final int level;
  final VoidCallback onSaved;
  const MatchingGame({
    super.key,
    required this.patientId,
    required this.level,
    required this.onSaved,
  });
  @override
  State<MatchingGame> createState() => _MatchingGameState();
}

class _MatchingGameState extends State<MatchingGame> {
  late final List<int> cards;
  final matched = <int>{};
  int? first, second;
  int attempts = 0;
  bool started = false, locked = false;
  final watch = Stopwatch();
  Timer? timer;
  @override
  void initState() {
    super.initState();
    cards = [
      for (int i = 0; i < widget.level + 3; i++) ...[i, i],
    ]..shuffle();
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  void tap(int index) {
    if (!started || locked || matched.contains(index) || first == index) return;
    if (first == null) {
      setState(() => first = index);
      return;
    }
    attempts++;
    second = index;
    if (cards[first!] == cards[index]) {
      matched.addAll([first!, index]);
      first = null;
      second = null;
      if (matched.length == cards.length) watch.stop();
      setState(() {});
    } else {
      watch.stop();
      setState(() => locked = true);
      timer = Timer(const Duration(milliseconds: 750), () {
        if (mounted) {
          setState(() {
            first = null;
            second = null;
            locked = false;
          });
          watch.start();
        }
      });
    }
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        'Picture matching',
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: forest,
        ),
      ),
      Text(
        'Level ${widget.level}. Find ${widget.level + 3} matching pairs. No time limit.',
      ),
      const SizedBox(height: 20),
      if (!started)
        FilledButton(
          onPressed: () {
            watch.start();
            setState(() => started = true);
          },
          child: const Text('Start picture matching'),
        ),
      if (started && matched.length < cards.length)
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: List.generate(cards.length, (index) {
            final revealed =
                matched.contains(index) || first == index || second == index;
            return SizedBox(
              width: 90,
              height: 96,
              child: OutlinedButton(
                onPressed: locked || matched.contains(index)
                    ? null
                    : () => tap(index),
                style: OutlinedButton.styleFrom(
                  padding: const EdgeInsets.all(6),
                ),
                child: Semantics(
                  label: revealed
                      ? '${gameNames[cards[index]]} card ${index + 1}'
                      : 'Hidden card ${index + 1}',
                  child: ExcludeSemantics(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          revealed
                              ? gameIcons[cards[index]]
                              : Icons.question_mark,
                          size: 28,
                        ),
                        Text(
                          revealed ? gameNames[cards[index]] : '${index + 1}',
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          }),
        ),
      if (started && matched.length == cards.length)
        SavedResult(
          patientId: widget.patientId,
          game: 'matching',
          correct: cards.length ~/ 2,
          attempts: attempts,
          responseMs: watch.elapsedMilliseconds ~/ attempts,
          level: widget.level,
          onSaved: widget.onSaved,
        ),
    ],
  );
}
