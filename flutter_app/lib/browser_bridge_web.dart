import 'dart:convert';
import 'dart:js_interop';

@JS('mmCall')
external JSString _call(JSString name, JSString payload);
@JS('mmAsync')
external JSPromise<JSString> _async(JSString name, JSString payload);
dynamic browserCall(String name, [Map<String, dynamic> args = const {}]) =>
    jsonDecode(_call(name.toJS, jsonEncode(args).toJS).toDart);
Future<dynamic> browserAsync(
  String name, [
  Map<String, dynamic> args = const {},
]) async =>
    jsonDecode((await _async(name.toJS, jsonEncode(args).toJS).toDart).toDart);
