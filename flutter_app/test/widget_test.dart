import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:memory_mate/main.dart';

void main() {
  testWidgets('Recall hides targets after presentation and limits selection', (
    tester,
  ) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: SingleChildScrollView(
            child: WordGame(
              patientId: 'test',
              sessions: const [],
              onSaved: () {},
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Start word recall'));
    await tester.pump();
    expect(find.byType(FilterChip), findsNothing);
    await tester.pump(const Duration(seconds: 6));
    expect(find.byType(FilterChip), findsNWidgets(6));
    for (final word in ['Tea', 'Garden', 'Book', 'Cloud']) {
      await tester.tap(find.widgetWithText(FilterChip, word));
      await tester.pump();
    }
    expect(
      tester
          .widgetList<FilterChip>(find.byType(FilterChip))
          .where((chip) => chip.selected)
          .length,
      3,
    );
    await tester.pumpWidget(const SizedBox());
  });
}
