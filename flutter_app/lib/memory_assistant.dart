import 'dart:convert';
import 'package:flutter/material.dart';
import 'api_service.dart';
import 'browser_bridge.dart';
import 'common.dart';
import 'translations.dart';

class MemoryAssistant extends StatefulWidget {
  final Map<String, dynamic> patient;
  final String language;
  final VoidCallback onAddFace;
  final void Function(Map<String, dynamic>) onEditFace, onDeleteFace;
  const MemoryAssistant({
    super.key,
    required this.patient,
    required this.language,
    required this.onAddFace,
    required this.onEditFace,
    required this.onDeleteFace,
  });
  @override
  State<MemoryAssistant> createState() => _MemoryAssistantState();
}

class _MemoryAssistantState extends State<MemoryAssistant> {
  final input = TextEditingController();
  final List<Map<String, String>> messages = [];
  bool busy = false, listening = false;
  String? image, status;
  String t(String key, [Map<String, Object?> values = const {}]) =>
      translate(widget.language, key, values);
  @override
  void dispose() {
    browserAsync('stopListening');
    browserCall('stopSpeech');
    input.dispose();
    super.dispose();
  }

  Future<void> speak(String text) async {
    try {
      final result = await browserAsync('speak', {
        'text': text,
        'language': widget.language,
      });
      if (mounted) setState(() => status = result?['error']);
    } catch (_) {
      if (mounted) {
        setState(
          () => status =
              'Audio playback failed. Check your browser and speaker output.',
        );
      }
    }
  }

  Future<void> listen() async {
    if (listening) {
      await browserAsync('stopListening');
      return;
    }
    setState(() {
      listening = true;
      status = 'Listening… Speak your message, then pause.';
    });
    try {
      final result = await browserAsync('listen', {
        'language': widget.language,
      });
      if (!mounted) return;
      if (result?['text'] is String) {
        input.text = result['text'];
        input.selection = TextSelection.collapsed(offset: input.text.length);
      }
      setState(
        () => status =
            result?['error'] ??
            'Voice captured. Check the text, then press Send.',
      );
    } catch (_) {
      if (mounted) {
        setState(
          () => status = t('Voice input unavailable. Please type instead.'),
        );
      }
    } finally {
      if (mounted) setState(() => listening = false);
    }
  }

  Future<void> attach() async {
    try {
      final value = await browserAsync('file', {'image': true});
      if (mounted) setState(() => image = value);
    } catch (_) {
      if (mounted) {
        setState(
          () => status = t('Choose a PNG, JPEG or WebP image under 1 MB.'),
        );
      }
    }
  }

  Future<void> send() async {
    if (busy || (input.text.trim().isEmpty && image == null)) return;
    final question = input.text.trim();
    final photo = image;
    final history = messages
        .skip(messages.length > 6 ? messages.length - 6 : 0)
        .toList();
    setState(() {
      messages.add({
        'sender': 'user',
        'text': question.isEmpty
            ? t('Describe this photo without identifying anyone.')
            : question,
      });
      busy = true;
      status = null;
      image = null;
      input.clear();
    });
    String reply, source;
    try {
      final response = await ApiService.send(
        '/api/patients/${widget.patient['profile']['id']}/assistant',
        method: 'POST',
        body: {
          'message': question,
          'language': widget.language,
          'history': history,
          'image': photo,
        },
      );
      reply = response['reply'];
      source = t('Optional AI response');
    } catch (_) {
      final reminders = (widget.patient['reminders'] as List)
          .where((r) => r['completed'] != true)
          .map((r) => '${r['time']}: ${r['title']}')
          .join('; ');
      reply =
          '${t('AI is unavailable. Here are your saved pending reminders:')} ${reminders.isEmpty ? t('No pending reminders.') : reminders}\n${t('You can read your labeled family photos below.')}';
      source = t('Saved records only');
    }
    if (mounted) {
      setState(() {
        messages.add({'sender': 'assistant', 'text': reply, 'source': source});
        busy = false;
      });
      speak(reply);
    }
  }

  Widget photo(String url, {double height = 140}) {
    Widget fallback() => Container(
      height: height,
      color: const Color(0xFFE4EBDD),
      child: const Center(child: Icon(Icons.person_outline, size: 48)),
    );
    if (url.isEmpty) return fallback();
    if (url.startsWith('data:image/')) {
      try {
        return Image.memory(
          base64Decode(url.split(',').last),
          height: height,
          width: double.infinity,
          fit: BoxFit.cover,
          errorBuilder: (_, _, _) => fallback(),
        );
      } catch (_) {
        return fallback();
      }
    }
    return Image.network(
      url,
      height: height,
      width: double.infinity,
      fit: BoxFit.cover,
      errorBuilder: (_, _, _) => fallback(),
    );
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        t('Memory assistant'),
        style: const TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: forest,
        ),
      ),
      Text(
        t(
          'Ask about saved reminders and memories. Photo labels are supplied by you; this is not face recognition.',
        ),
      ),
      if (status != null)
        Text(t(status!), style: const TextStyle(color: Colors.deepOrange)),
      const SizedBox(height: 16),
      for (final m in messages)
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  m['sender'] == 'user' ? t('You') : t('Memory Mate assistant'),
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(m['text']!),
                if (m['source'] != null)
                  Text(m['source']!, style: const TextStyle(fontSize: 12)),
                TextButton(
                  onPressed: () => speak(m['text']!),
                  child: Text(t('Read aloud')),
                ),
              ],
            ),
          ),
        ),
      if (busy) const LinearProgressIndicator(),
      TextField(
        controller: input,
        minLines: 1,
        maxLines: 4,
        decoration: InputDecoration(labelText: t('Your message')),
        onSubmitted: (_) => send(),
      ),
      if (image != null) ...[
        photo(image!, height: 100),
        TextButton(
          onPressed: () => setState(() => image = null),
          child: Text(t('Remove photo')),
        ),
      ],
      Wrap(
        spacing: 8,
        children: [
          FilledButton(
            onPressed: busy || listening ? null : send,
            child: Text(t('Send')),
          ),
          OutlinedButton(
            onPressed: busy ? null : listen,
            child: Text(t(listening ? 'Stop listening' : 'Voice input')),
          ),
          OutlinedButton(
            onPressed: busy ? null : attach,
            child: Text(t('Attach photo')),
          ),
          TextButton(
            onPressed: () => browserCall('stopSpeech'),
            child: Text(t('Stop reading')),
          ),
        ],
      ),
      const SizedBox(height: 24),
      Row(
        children: [
          Expanded(
            child: Text(
              t('Family and familiar faces'),
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
          ),
          TextButton(
            onPressed: widget.onAddFace,
            child: Text(t('Add family photo')),
          ),
        ],
      ),
      if ((widget.patient['knownFaces'] as List).isEmpty)
        Text(t('No labeled family photos yet.')),
      for (final raw in widget.patient['knownFaces'] as List)
        Builder(
          builder: (context) {
            final face = Map<String, dynamic>.from(raw);
            return Card(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  photo(face['photoUrl'] ?? ''),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${face['name']} · ${face['relationship']}',
                          style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text('${face['location']}'),
                        Text('${face['notes']}'),
                        Wrap(
                          spacing: 8,
                          children: [
                            TextButton(
                              onPressed: () => speak(
                                '${face['name']}. ${face['relationship']}. ${face['notes']}',
                              ),
                              child: Text(t('Read label')),
                            ),
                            TextButton(
                              onPressed: () => widget.onEditFace(face),
                              child: Text(t('Edit photo label')),
                            ),
                            TextButton(
                              onPressed: () => widget.onDeleteFace(face),
                              child: Text(t('Delete')),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
    ],
  );
}
