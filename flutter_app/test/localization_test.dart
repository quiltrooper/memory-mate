import 'package:memory_mate/parity_messages.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:memory_mate/translations.dart';

void main() {
  test('Locales have matching keys and preserve named values', () {
    expect(messages['hi']!.keys.toSet(), messages['as']!.keys.toSet());
    expect(
      parityMessages['hi']!.keys.toSet(),
      parityMessages['as']!.keys.toSet(),
    );
    for (final locale in ['hi', 'as']) {
      for (final entry in {
        ...messages[locale]!,
        ...parityMessages[locale]!,
      }.entries) {
        final placeholders = RegExp(r'\{[^}]+\}');
        expect(
          placeholders.allMatches(entry.value).map((m) => m[0]).toSet(),
          placeholders.allMatches(entry.key).map((m) => m[0]).toSet(),
          reason: entry.key,
        );
      }
      expect(
        translate(locale, 'Caregiver: {name}', {'name': 'Asha'}),
        contains('Asha'),
      );
      expect(
        translate(locale, 'Start word recall'),
        isNot('Start word recall'),
      );
    }
  });
}
