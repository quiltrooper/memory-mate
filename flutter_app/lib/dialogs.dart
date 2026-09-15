import 'translations.dart';
import 'package:flutter/material.dart';

Future<Map<String, String>?> recordDialog(
  BuildContext context,
  String title,
  Map<String, String> labels,
  Map<String, String> initial, {
  String language = 'en',
  Set<String> requiredFields = const {},
  Map<String, List<String>> options = const {},
}) => showDialog<Map<String, String>>(
  context: context,
  builder: (_) => RecordDialog(
    title: title,
    language: language,
    labels: labels,
    initial: initial,
    requiredFields: requiredFields,
    options: options,
  ),
);

class RecordDialog extends StatefulWidget {
  final String title;
  final String language;
  final Map<String, String> labels, initial;
  final Set<String> requiredFields;
  final Map<String, List<String>> options;
  const RecordDialog({
    super.key,
    required this.title,
    required this.language,
    required this.labels,
    required this.initial,
    required this.requiredFields,
    required this.options,
  });
  @override
  State<RecordDialog> createState() => _RecordDialogState();
}

class _RecordDialogState extends State<RecordDialog> {
  final form = GlobalKey<FormState>();
  late final Map<String, TextEditingController> fields;
  @override
  void initState() {
    super.initState();
    fields = {
      for (final key in widget.labels.keys)
        key: TextEditingController(text: widget.initial[key] ?? ''),
    };
  }

  @override
  void dispose() {
    for (final field in fields.values) {
      field.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
    title: Text(widget.title),
    content: SizedBox(
      width: 520,
      child: Form(
        key: form,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              for (final entry in widget.labels.entries)
                Padding(
                  padding: const EdgeInsets.only(bottom: 14),
                  child: widget.options.containsKey(entry.key)
                      ? DropdownButtonFormField<String>(
                          initialValue:
                              widget.options[entry.key]!.contains(
                                fields[entry.key]!.text,
                              )
                              ? fields[entry.key]!.text
                              : widget.options[entry.key]!.first,
                          decoration: InputDecoration(labelText: entry.value),
                          items: widget.options[entry.key]!
                              .map(
                                (v) => DropdownMenuItem(
                                  value: v,
                                  child: Text(translate(widget.language, v)),
                                ),
                              )
                              .toList(),
                          onChanged: (v) => fields[entry.key]!.text = v!,
                        )
                      : TextFormField(
                          controller: fields[entry.key],
                          maxLines:
                              entry.key == 'caption' || entry.key == 'notes'
                              ? 3
                              : 1,
                          decoration: InputDecoration(
                            labelText: entry.value,
                            border: const OutlineInputBorder(),
                          ),
                          validator: (v) {
                            final text = v?.trim() ?? '';
                            if (widget.requiredFields.contains(entry.key) &&
                                text.isEmpty) {
                              return translate(widget.language, 'Required');
                            }
                            final bounds = {
                              'age': [1, 120],
                              'responseGoalMs': [1000, 30000],
                              'weeklyGoalDays': [1, 7],
                            }[entry.key];
                            if (bounds != null) {
                              final number = int.tryParse(text);
                              if (number == null ||
                                  number < bounds[0] ||
                                  number > bounds[1]) {
                                return '${bounds[0]}–${bounds[1]}';
                              }
                            }
                            if (['imageUrl', 'photoUrl'].contains(entry.key) &&
                                text.isNotEmpty &&
                                !text.startsWith('https://') &&
                                !(entry.key == 'photoUrl' &&
                                    RegExp(
                                      r'^data:image/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$',
                                    ).hasMatch(text))) {
                              return 'HTTPS URL';
                            }
                            final limit = {
                              'name': 120,
                              'title': 200,
                              'caption': 2000,
                              'notes': 1000,
                              'time': 30,
                              'location': 200,
                              'primaryCaregiver': 120,
                              'assignedBy': 120,
                              'relationship': 120,
                              'ashaWorker': 120,
                              'hospital': 200,
                              'diagnosis': 200,
                            }[entry.key];
                            if (limit != null && text.length > limit) {
                              return '${text.length} / $limit';
                            }
                            return null;
                          },
                        ),
                ),
            ],
          ),
        ),
      ),
    ),
    actions: [
      TextButton(
        onPressed: () => Navigator.pop(context),
        child: Text(translate(widget.language, 'Cancel')),
      ),
      FilledButton(
        onPressed: () {
          if (form.currentState!.validate()) {
            Navigator.pop(context, {
              for (final entry in fields.entries)
                entry.key: entry.value.text.trim(),
            });
          }
        },
        child: Text(translate(widget.language, 'Save')),
      ),
    ],
  );
}
