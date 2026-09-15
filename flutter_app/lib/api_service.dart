import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'browser_bridge.dart';
import 'common.dart';

class ApiService {
  static bool forcedOffline = false, offline = false, syncing = false;
  static String? syncError;
  static final changed = ValueNotifier<int>(0);
  static final idMap = <String, String>{};
  static String resolve(String id) => idMap[id] ?? id;
  static String newId() =>
      '${DateTime.now().microsecondsSinceEpoch}-${Random.secure().nextInt(0x7fffffff)}';
  static Map<String, dynamic> _read(String key) {
    final raw = browserCall('get', {'key': key});
    return raw == null ? {} : Map<String, dynamic>.from(jsonDecode(raw));
  }

  static void _write(String key, Map<String, dynamic> value) =>
      browserCall('set', {'key': key, 'value': jsonEncode(value)});
  static Map<String, dynamic> get _cache => Map<String, dynamic>.from(
    _read('mm_flutter_state')['cache'] ?? _read('mm_flutter_cache'),
  );
  static List<dynamic> get queue => List<dynamic>.from(
    _read('mm_flutter_state')['items'] ??
        _read('mm_flutter_outbox')['items'] ??
        [],
  );
  static void _queue(List<dynamic> items) {
    _write('mm_flutter_state', {'cache': _cache, 'items': items});
    changed.value++;
  }

  static void cache(String path, dynamic value) {
    final c = _cache;
    c[path] = value;
    _write('mm_flutter_state', {'cache': c, 'items': queue});
  }

  static bool careWrite(String path, String method) =>
      ['POST', 'PATCH', 'DELETE'].contains(method) &&
      path.startsWith('/api/patients') &&
      !['/assistant', '/summary', '/reminiscence'].any(path.endsWith);
  static Future<dynamic> _network(
    String path,
    String method,
    Map<String, dynamic>? body, {
    String? operation,
  }) async {
    final req = http.Request(method, Uri.parse('$apiBase$path'));
    req.headers['Content-Type'] = 'application/json';
    if (operation != null) req.headers['X-Operation-ID'] = operation;
    if (body != null) req.body = jsonEncode(body);
    final response = await http.Response.fromStream(
      await req.send(),
    ).timeout(const Duration(seconds: 18));
    if (response.statusCode >= 400) {
      String detail = 'Request failed (${response.statusCode}).';
      try {
        final d = jsonDecode(response.body)['detail'];
        if (d is String) detail = d;
      } catch (_) {}
      throw ApiFailure(response.statusCode, detail);
    }
    return jsonDecode(response.body);
  }

  static Future<dynamic> send(
    String path, {
    String method = 'GET',
    Map<String, dynamic>? body,
  }) async {
    final pending = queue;
    final queueable = careWrite(path, method);
    final operation = queueable ? newId() : null;
    if (method == 'GET' && pending.isNotEmpty && _cache[path] != null) {
      return jsonDecode(jsonEncode(_cache[path]));
    }
    if (!forcedOffline && !(queueable && pending.isNotEmpty)) {
      try {
        final result = await _network(path, method, body, operation: operation);
        offline = false;
        if (method == 'GET') cache(path, result);
        if (queueable) {
          final id = path == '/api/patients'
              ? result['id']
              : Uri.parse(path).path.split('/')[3];
          try {
            cache(
              '/api/patients/$id',
              await _network('/api/patients/$id', 'GET', null),
            );
          } catch (_) {}
        }
        return result;
      } on ApiFailure {
        rethrow;
      } on Exception {
        offline = true;
      }
    } else {
      offline = true;
    }
    if (method == 'GET') {
      final value = _cache[path];
      if (value != null) return jsonDecode(jsonEncode(value));
      throw Exception(
        'No offline copy of this profile. Reconnect and open it first.',
      );
    }
    if (!queueable) {
      throw Exception(
        'This action needs the connection. Saved records remain available.',
      );
    }
    final q = {
      'path': path,
      'method': method,
      'body': body,
      'operation': operation,
      'localId': 'local-${newId()}',
    };
    // Prepare both values before writing, then store cache and outbox together in one localStorage entry.
    final c = _cache;
    final result = _apply(c, q);
    _write('mm_flutter_state', {
      'cache': c,
      'items': [...queue, q],
    });
    changed.value++;
    return result;
  }

  static dynamic _apply(Map<String, dynamic> c, Map q) {
    final path = q['path'] as String, method = q['method'] as String;
    final body = Map<String, dynamic>.from(q['body'] ?? {});
    final parts = Uri.parse(path).path.split('/');
    if (path == '/api/patients' && method == 'POST') {
      final id = q['localId'];
      final profile = {'id': id, ...body};
      final p = {
        'profile': profile,
        'dataSource': 'user',
        'version': 1,
        'reminders': [],
        'memories': [],
        'knownFaces': [],
        'gameSessions': [],
        'trendData': [],
        'recordedSessions': [],
        'assessment': {
          'modelVersion': 'activity-support-v1',
          'recordedCount': 0,
          'supportLevel': null,
          'supportIndex': null,
          'activeDays': 0,
          'weeklyGoalDays': body['preferences']?['weeklyGoalDays'] ?? 4,
          'components': {},
          'nextLevels': {'word': 1, 'pattern': 1, 'matching': 1},
          'explanation':
              'Complete three activities to calculate an activity-support estimate. Synthetic history is excluded.',
        },
      };
      c['/api/patients/$id'] = p;
      c['/api/patients'] = [
        ...(c['/api/patients'] ?? []),
        {'profile': profile, 'dataSource': 'user'},
      ];
      return {'id': id};
    }
    final id = parts[3], patientPath = '/api/patients/$id';
    final p = c[patientPath];
    if (p == null) {
      throw Exception('Open this profile online before editing it offline.');
    }
    if (parts.length == 4 && method == 'PATCH') {
      p['profile'] = {...p['profile'], ...body..remove('version')};
      p['version']++;
      c['/api/patients'] = (c['/api/patients'] as List)
          .map(
            (r) => r['profile']['id'] == id
                ? {'profile': p['profile'], 'dataSource': p['dataSource']}
                : r,
          )
          .toList();
      return {'id': id, 'version': p['version']};
    }
    final collection = parts[4];
    if (collection == 'sessions') {
      final score = body['correct'] * 100 / body['attempts'];
      final result = {
        ...body,
        'id': '$id:${body['activity_id']}',
        'timestamp':
            body['occurred_at'] ?? DateTime.now().toUtc().toIso8601String(),
        'score': score,
        'accuracy': score,
        'errors': body['attempts'] - body['correct'],
        'dataSource': 'recorded',
        'pending': true,
      };
      if (!(p['recordedSessions'] as List).any(
        (s) => s['id'] == result['id'],
      )) {
        p['recordedSessions'] = [result, ...p['recordedSessions']];
      }
      return result;
    }
    final field = collection == 'faces' ? 'knownFaces' : collection;
    final records = p[field] as List;
    if (method == 'POST') {
      final result = {
        'id': q['localId'],
        ...body..remove('version'),
        'version': 1,
        'pending': true,
      };
      records.add(result);
      if (collection != 'reminders') p['version']++;
      return collection == 'reminders'
          ? result
          : {'id': q['localId'], 'version': p['version']};
    }
    final rid = parts[5], index = records.indexWhere((r) => r['id'] == rid);
    if (index < 0) throw Exception('This item is not in the offline copy.');
    if (method == 'DELETE') {
      records.removeAt(index);
      if (collection != 'reminders') p['version']++;
      return {'deleted': true};
    }
    final result = {
      ...records[index],
      ...body,
      'version': body['version'] + 1,
      'pending': true,
    };
    records[index] = result;
    if (collection != 'reminders') p['version']++;
    return collection == 'reminders' ? result : {'version': p['version']};
  }

  static void recover() {}

  static void _remap(String from, String to, List<dynamic> items) {
    idMap[from] = to;
    dynamic replace(dynamic value) {
      if (value is String) return value.replaceAll(from, to);
      if (value is List) return value.map(replace).toList();
      if (value is Map) {
        return value.map(
          (k, v) => MapEntry(k.toString().replaceAll(from, to), replace(v)),
        );
      }
      return value;
    }

    final remapped = List<dynamic>.from(replace(items));
    items
      ..clear()
      ..addAll(remapped);
    _write('mm_flutter_state', {'cache': replace(_cache), 'items': items});
    final selected = browserCall('get', {'key': 'mm_flutter_selected'});
    if (selected == from) {
      browserCall('set', {'key': 'mm_flutter_selected', 'value': to});
    }
  }

  static Future<void> prefetch() async {
    if (forcedOffline || queue.isNotEmpty) return;
    try {
      final data = await _network('/api/offline', 'GET', null);
      if (queue.isNotEmpty) return;
      final c = _cache;
      c['/api/backup'] = data;
      for (final p in data['patients']) {
        c['/api/patients/${p['profile']['id']}'] = p;
      }
      _write('mm_flutter_state', {'cache': c, 'items': queue});
    } catch (_) {
      /* A visited profile remains usable if prefetch is unavailable. */
    }
  }

  static Future<void> sync() async {
    if (syncing || forcedOffline) return;
    syncing = true;
    syncError = null;
    changed.value++;
    try {
      while (queue.isNotEmpty) {
        final q = queue.first;
        final response = await _network(
          q['path'],
          q['method'],
          q['body'] == null ? null : Map<String, dynamic>.from(q['body']),
          operation: q['operation'],
        );
        final items = queue;
        items.removeWhere((item) => item['operation'] == q['operation']);
        if (q['method'] == 'POST' &&
            response['id'] != null &&
            q['localId'] != null &&
            !q['path'].endsWith('/sessions')) {
          _remap(q['localId'], response['id'], items);
        }
        _queue(items);
      }
      offline = false;
    } catch (e) {
      syncError = e.toString();
    } finally {
      syncing = false;
      changed.value++;
    }
  }

  static Future<dynamic> backup() async {
    final data = await send('/api/backup');
    if (queue.isEmpty) return data;
    final profiles = {for (final p in data['patients']) p['profile']['id']: p};
    for (final q in queue) {
      final parts = Uri.parse(q['path']).path.split('/');
      final id = parts.length > 3 ? parts[3] : q['localId'];
      final p = _cache['/api/patients/$id'];
      if (p != null) profiles[id] = p;
    }
    return {
      ...data,
      'patients': profiles.values.toList(),
      'pendingChanges': queue,
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
    };
  }

  static Future<void> rebaseFirst() async {
    final items = queue;
    if (items.isEmpty) return;
    final q = items.first;
    final parts = Uri.parse(q['path']).path.split('/');
    if (parts.length < 4) {
      throw Exception('This change cannot be rebased. Export it for recovery.');
    }
    final pid = parts[3];
    final data = await _network('/api/patients/$pid', 'GET', null);
    final reminder = parts.length > 5 && parts[4] == 'reminders';
    dynamic record = data;
    if (reminder) {
      record = (data['reminders'] as List)
          .where((r) => r['id'] == parts[5])
          .firstOrNull;
    }
    if (record == null) {
      throw Exception(
        'This item was removed on the server. Export your pending changes before discarding them.',
      );
    }
    final old =
        q['body']?['version'] ??
        int.tryParse(Uri.parse(q['path']).queryParameters['version'] ?? '');
    if (old == null) {
      throw Exception('This change cannot be rebased. Export it for recovery.');
    }
    final delta = (record['version'] as int) - (old as int);
    for (final item in items) {
      final uri = Uri.parse(item['path']);
      final part = uri.path.split('/');
      if (part.length < 4 || part[3] != pid) continue;
      final same = reminder
          ? (part.length > 5 && part[4] == 'reminders' && part[5] == parts[5])
          : (part.length == 4 || ['memories', 'faces'].contains(part[4]));
      if (!same) continue;
      if (item['body']?['version'] != null) item['body']['version'] += delta;
      if (uri.queryParameters['version'] != null) {
        item['path'] = uri
            .replace(
              queryParameters: {
                'version':
                    '${int.parse(uri.queryParameters['version']!) + delta}',
              },
            )
            .toString();
      }
      item['operation'] = newId();
    }
    _queue(items);
  }

  static void discardPending() {
    exportPending();
    _write('mm_flutter_state', {'cache': {}, 'items': []});
    syncError = null;
    changed.value++;
  }

  static void toggleOffline() {
    forcedOffline = !forcedOffline;
    changed.value++;
  }

  static void exportPending() => browserCall('download', {
    'name': 'memory-mate-pending-changes.json',
    'text': const JsonEncoder.withIndent(
      '  ',
    ).convert({'format': 'memory-mate-pending', 'items': queue}),
  });
}

class ApiFailure implements Exception {
  final int status;
  final String message;
  ApiFailure(this.status, this.message);
  @override
  String toString() => message;
}
