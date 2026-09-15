import 'package:flutter/material.dart';
import 'browser_bridge.dart';
import 'translations.dart';

class PinGate extends StatefulWidget {
  final Widget child;
  const PinGate({super.key, required this.child});
  static void lock(BuildContext context) =>
      context.findAncestorStateOfType<_PinGateState>()?.lock();
  @override
  State<PinGate> createState() => _PinGateState();
}

class _PinGateState extends State<PinGate> {
  bool unlocked = false, busy = false;
  String? error;
  String language = 'en';
  final pin = TextEditingController(), confirmation = TextEditingController();
  String t(String key) => translate(language, key);
  void lock() {
    browserCall('stopSpeech');
    setState(() => unlocked = false);
  }

  @override
  void dispose() {
    pin.dispose();
    confirmation.dispose();
    super.dispose();
  }

  Future<void> submit() async {
    final setup = browserCall('get', {'key': 'mm_flutter_pin'}) == null;
    if (!RegExp(r'^\d{4,8}$').hasMatch(pin.text)) {
      setState(() => error = t('Use a PIN with 4 to 8 digits.'));
      return;
    }
    if (setup && pin.text != confirmation.text) {
      setState(() => error = t('PINs do not match.'));
      return;
    }
    setState(() {
      busy = true;
      error = null;
    });
    try {
      final ok = await browserAsync('pin', {'pin': pin.text, 'setup': setup});
      if (mounted) {
        setState(() {
          unlocked = ok == true;
          if (!unlocked) error = t('Incorrect PIN.');
        });
      }
    } catch (_) {
      if (mounted) {
        setState(
          () => error = t('Device storage is unavailable. PIN was not saved.'),
        );
      }
    } finally {
      pin.clear();
      confirmation.clear();
      if (mounted) setState(() => busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (unlocked) return widget.child;
    final setup = browserCall('get', {'key': 'mm_flutter_pin'}) == null;
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 420),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  t(setup ? 'Protect Memory Mate' : 'Memory Mate is locked'),
                  style: const TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  t(
                    'This PIN locks this browser only. It is not server authentication.',
                  ),
                ),
                DropdownButton<String>(
                  value: language,
                  onChanged: (v) => setState(() => language = v!),
                  items: const [
                    DropdownMenuItem(value: 'en', child: Text('English')),
                    DropdownMenuItem(value: 'hi', child: Text('हिन्दी')),
                    DropdownMenuItem(value: 'as', child: Text('অসমীয়া')),
                  ],
                ),
                TextField(
                  controller: pin,
                  obscureText: true,
                  keyboardType: TextInputType.number,
                  maxLength: 8,
                  decoration: InputDecoration(labelText: t('PIN')),
                ),
                if (setup)
                  TextField(
                    controller: confirmation,
                    obscureText: true,
                    keyboardType: TextInputType.number,
                    maxLength: 8,
                    decoration: InputDecoration(labelText: t('Confirm PIN')),
                  ),
                if (error != null)
                  Text(error!, style: const TextStyle(color: Colors.red)),
                FilledButton(
                  onPressed: busy ? null : submit,
                  child: Text(t(setup ? 'Set PIN and open' : 'Unlock')),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
