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
                          validator: (v) =>
                              widget.requiredFields.contains(entry.key) &&
                                  (v == null || v.trim().isEmpty)
                              ? translate(widget.language, 'Required')
                              : null,
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
