import 'package:flutter_test/flutter_test.dart';
import 'package:memory_mate/api_service.dart';
import 'package:memory_mate/browser_bridge.dart';

void main() {
  setUp(() {
    for (final key in [
      'mm_flutter_state',
      'mm_flutter_cache',
      'mm_flutter_outbox',
    ]) {
      browserCall('remove', {'key': key});
    }
    ApiService.forcedOffline = true;
    ApiService.cache('/api/patients', []);
  });
  tearDown(() => ApiService.forcedOffline = false);
  test(
    'Offline profile and dependent edits retain order and original versions',
    () async {
      final p = await ApiService.send(
        '/api/patients',
        method: 'POST',
        body: {
          'name': 'Offline test',
          'age': 70,
          'preferences': {'language': 'en', 'weeklyGoalDays': 4},
        },
      );
      final id = p['id'];
      final reminder = await ApiService.send(
        '/api/patients/$id/reminders',
        method: 'POST',
        body: {
          'title': 'Tea',
          'time': '09:00',
          'category': 'routine',
          'completed': false,
        },
      );
      await ApiService.send(
        '/api/patients/$id/reminders/${reminder['id']}',
        method: 'PATCH',
        body: {'title': 'Morning tea', 'version': 1},
      );
      await ApiService.send(
        '/api/patients/$id/memories',
        method: 'POST',
        body: {'title': 'Garden', 'caption': 'Supplied memory', 'version': 1},
      );
      final data = await ApiService.send('/api/patients/$id');
      expect(data['reminders'][0]['title'], 'Morning tea');
      expect(data['reminders'][0]['version'], 2);
      expect(data['memories'][0]['caption'], 'Supplied memory');
      expect(data['version'], 2);
      expect(ApiService.queue.length, 4);
      expect(ApiService.queue[3]['body']['version'], 1);
      expect(ApiService.queue.map((q) => q['operation']).toSet().length, 4);
      expect(ApiService.queue[1]['path'], contains(id));
    },
  );
  test(
    'Offline game retains exact score and timestamp, never invented AI feedback',
    () async {
      final p = await ApiService.send(
        '/api/patients',
        method: 'POST',
        body: {'name': 'Game test', 'age': 70},
      );
      final data = await ApiService.send(
        '/api/patients/${p['id']}/sessions',
        method: 'POST',
        body: {
          'activity_id': 'zero',
          'game_type': 'word',
          'correct': 0,
          'attempts': 3,
          'response_time_ms': 2000,
          'level': 1,
          'occurred_at': '2026-01-01T12:00:00Z',
        },
      );
      expect(data['score'], 0);
      expect(data['errors'], 3);
      expect(data['pending'], true);
      expect(data['timestamp'], '2026-01-01T12:00:00Z');
      expect(data.containsKey('feedback'), false);
    },
  );
}
