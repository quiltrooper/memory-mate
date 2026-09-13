# Reviewer migration: local working slice

The React/Express app remains unchanged and runnable on port 3000. The migration lives in `backend/` and `flutter_app/` on `main`.

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

The first slice covers 103 profiles, reminder edit/completion, memories, and word recall. Recorded activities are separate from synthetic history. Score is correct / attempts * 100, with omissions counted as errors. The backend validates input and computes the score; it does not independently observe the player's answers. This is a demo activity measure, not a diagnostic model.

## Container status

`docker compose up --build` starts the API with a named persistent volume. Docker is not installed on this machine yet, so container execution has not been verified. The API currently has no remote authentication and must remain a local, fictional-data demo. Authentication and HTTPS must precede external patient-data deployment.

GKE is pending Google Cloud project/billing setup. Do not represent a Dockerfile or Kubernetes configuration as a completed deployment.

## Remaining reviewer work

- Remaining games and language/accessibility parity.
- Broader patient-profile settings and deterministic support model.
- Figma design and final implementation diagram.
- Frontend container, container execution, GKE deployment and verification.

## Verified local milestone

Flutter 3.47.4 / Dart 3.13.3 are installed in the workspace tools folder. The Windows Application Control blocker was resolved by the device owner. Flutter static analysis and the recall widget test passed, and a release web build completed. The build emits a non-fatal Cupertino font warning; this slice uses Material icons.

The compiled preview runs at http://127.0.0.1:3002 and the actual API at http://127.0.0.1:8000. The original React app remains at http://localhost:3000. New SQLite data and old React browser storage are separate during this migration.

Build with `flutter --no-version-check build web --release --no-wasm-dry-run --no-web-resources-cdn`, then serve `flutter_app/build/web` on port 3002. The optional version check is skipped because its full Git tag fetch was slow on this machine.

Browser regression uses a separate API instance on port 8001 with a temporary SQLite database; it verifies reminder persistence, patient isolation, and real word-game saving without modifying the launch database. Run `node scripts/browser-flutter.mjs` with Playwright installed, or set `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` to your local installations.

Mobile browser verification is unfinished: the desktop-to-mobile navigation locator timed out after the persistence, isolation, and game checks passed. Do not report the entire browser script as passing yet.

The desktop screenshot (flutter-desktop.png) was captured against the isolated browser-test database. Its reminder text is test data, not a real patient record.

The seed exporter includes all 100 generated profiles from src/data/generatedPatients.ts. Startup inserts only missing patient IDs; existing patient payloads, edited reminders, and recorded sessions are preserved. Synthetic session history remains marked demo and is separate from recorded activity.
