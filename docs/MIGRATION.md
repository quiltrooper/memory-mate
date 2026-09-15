# Memory Mate: Flutter and FastAPI local demo

The original React/Express source is preserved and can be started separately on port 3000. The migration lives in `backend/` and `flutter_app/` on `main`.

The Flutter application now includes the caregiver dashboard, assistant and labeled photos, backup restore, local PIN and offline queue. See [FEATURE_PARITY.md](FEATURE_PARITY.md) for verification and remaining external checks. Older browser data can be transferred explicitly through JSON backup restore.

## Run the Python service (Windows)

From `backend`:

```powershell
python -m venv .venv
.venv/Scripts/python.exe -m pip install -r requirements.txt
.venv/Scripts/python.exe -m uvicorn app:app --host 127.0.0.1 --port 8000
```

SQLite is created at `backend/data/memory-mate.sqlite3` (ignored by Git). All 103 fictional patients (three launch profiles plus 100 generated profiles) seed once by ID. Restarting never overwrites reminder edits. The original browser localStorage is not imported or changed.

API documentation: http://127.0.0.1:8000/docs

Run backend checks: `.venv/Scripts/python.exe -m unittest discover -s tests -v`

## Run Flutter Web

From `flutter_app` with Flutter available on PATH:

```powershell
flutter pub get
flutter run -d web-server --web-hostname 127.0.0.1 --web-port 3002 --dart-define=API_URL=http://127.0.0.1:8000
```

The Flutter app covers 103 seeded profiles, patient creation/settings, reminder creation/edit/completion/deletion, memory creation/edit/deletion, and word recall, pattern recall, and picture matching. Profile preferences control English/Hindi/Assamese text, large text, comfortable response pace, and weekly activity goals. Recorded activities are separate from synthetic history. Score is correct / attempts * 100, with omissions counted as errors. The backend validates input and computes the score; it does not independently observe the player's answers. This is a demo activity measure, not a diagnostic model.

## Container status

`docker compose up --build -d --wait` builds Flutter/Nginx and FastAPI and starts the demo at http://localhost:3002. SQLite uses a named persistent volume. GitHub Actions run [34816899662](https://github.com/quiltrooper/memory-mate/actions/runs/34816899662) passed both container builds, the 103-patient check, frontend delivery, and reminder persistence after restarting the API container. Docker is not installed locally.

Design/Figma work and GKE deployment are excluded from the current scope. This remains a loopback-bound demo, without public authentication or hosting.

## Verified local milestone

Flutter 3.47.4 / Dart 3.13.3 are installed in the workspace tools folder. The Windows Application Control blocker was resolved by the device owner. Flutter static analysis and the recall widget test passed, and a release web build completed. The build emits a non-fatal Cupertino font warning; this slice uses Material icons.

The compiled preview runs at http://127.0.0.1:3002 and the actual API at http://127.0.0.1:8000. The original React app can be started separately at http://localhost:3000. New SQLite data and old React browser storage are separate during this migration.

Build with `flutter --no-version-check build web --release --no-wasm-dry-run --no-web-resources-cdn`, then serve `flutter_app/build/web` on port 3002. The optional version check is skipped because its full Git tag fetch was slow on this machine.

Browser regression uses a separate API instance on port 8001 with a temporary SQLite database; it verifies reminder persistence, patient isolation, and real word-game saving without modifying the launch database. Run `node scripts/browser-flutter.mjs` with Playwright installed, or set `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` to your local installations.

The browser regression includes a 390×844 mobile navigation check. The reviewer browser script additionally checks new profiles, memory creation/editing, pattern recall, picture matching, and Hindi/Assamese forms and recall words. Browser tests use a disposable database on port 8001, never the launch database.

The desktop screenshot (flutter-desktop.png) was captured against the isolated browser-test database. Its reminder text is test data, not a real patient record.

The seed exporter includes all 100 generated profiles from src/data/generatedPatients.ts. Startup inserts only missing patient IDs; existing patient payloads, edited reminders, and recorded sessions are preserved. Synthetic session history remains marked demo and is separate from recorded activity.
