final Map<String, String> _storage = {};
dynamic browserCall(String name, [Map<String, dynamic> args = const {}]) {
  if (name == 'get') return _storage[args['key']];
  if (name == 'set') {
    _storage[args['key']] = args['value'];
    return true;
  }
  if (name == 'remove') {
    _storage.remove(args['key']);
    return true;
  }
  if (name == 'online') return true;
  return '';
}

Future<dynamic> browserAsync(
  String name, [
  Map<String, dynamic> args = const {},
]) async => null;
