# Reviewer completion work

Current scope: Flutter, Python FastAPI, SQLite, deterministic profile-based activity assessment, functional UI, translations, and verified Docker containers. Design work and GKE are explicitly excluded by the user.

See [FEATURE_PARITY.md](FEATURE_PARITY.md) for the current old-versus-new comparison, restored modules and external verification boundaries.

## Functional verification

- Nine backend tests pass: persistence, profile isolation, input validation, CRUD, deterministic scoring, and exclusion of synthetic history.
- Flutter static analysis and word-recall/localization tests pass.
- Reviewer browser checks pass for profile creation, memory editing, both newer games, persisted results, and Hindi/Assamese forms and recall words.
- Application copy, dialog controls, game instructions/results, and activity explanations support English, Hindi, and Assamese. User-entered names, notes, and memories retain their original text; translations have not had native-speaker editorial review.
- Docker verification passed: https://github.com/quiltrooper/memory-mate/actions/runs/34976728313

Run the Python tests from `backend`, Flutter tests from `flutter_app`, and browser scripts from the repository root. Browser scripts expect the compiled frontend at 3002 and an isolated API/database at 8003, with Playwright and a Chromium browser installed.

## Deterministic activity model

`backend/assessment.py` implements `activity-support-v1`. It uses up to five recorded activities, the user's comfortable response pace, and weekly activity-day goal. Synthetic seed history is excluded. Components are: error = 100 minus mean accuracy; pace = clamp((mean response / chosen pace - 1) × 100, 0, 100); weekly shortfall = 100 × max(0, 1 - active days / chosen goal). The support index weights these 60%, 25%, and 15%. Low is below 25, Medium is 25 to below 50, High is 50 or more. At least three activities are required. These are explicit prototype rules, not clinically validated thresholds or diagnostic claims.

Game difficulty uses the last three recorded rounds of that game: mean accuracy at least 85% increases one level; below 55% decreases one; levels remain 1–3. Age and diagnosis do not silently alter the score. The backend receives game counts from the client; it is not an anti-cheat system.

## Figma — excluded from current scope

Editable file: https://www.figma.com/design/Q0GrCFIwhprgCRJ8KlEqC4

The Figma Starter MCP quota was exhausted after the desktop draft and mobile canvases were created. Further editing, completion, and visual QA in Figma are blocked by that external limit. Do not describe this file as fully completed or verified. Local design/diagram artifacts supplement the file and can be imported into Figma.

## Containers

`docker compose up --build -d --wait` builds Flutter in a Linux build stage and serves it through Nginx on http://localhost:3002. `/api` is proxied to FastAPI. SQLite lives in a named volume, and the backend has a health check. The API port is not published directly. `docker compose down` preserves the database volume; `down -v` erases it and is only appropriate for disposable test environments.

The GitHub `Verify Docker demo` workflow builds both containers and checks 103 seeded patients plus reminder persistence after an API-container restart. Run 34976728313 passed these checks on GitHub. Local Docker is not installed. No GKE resources are created.

The container stack is a local demo bound to loopback. Public hosting and authentication are not configured by this work.
