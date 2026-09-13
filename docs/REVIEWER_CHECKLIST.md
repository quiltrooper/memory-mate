# Reviewer completion work

Scope: Flutter, Python FastAPI, SQLite, deterministic profile-based activity assessment, UI/UX, design evidence, implementation diagram, and Docker. GKE is explicitly excluded.

## Deterministic activity model

`backend/assessment.py` implements `activity-support-v1`. It uses up to five recorded activities, the user's comfortable response pace, and weekly activity-day goal. Synthetic seed history is excluded. Components are: error = 100 minus mean accuracy; pace = clamp((mean response / chosen pace - 1) × 100, 0, 100); weekly shortfall = 100 × max(0, 1 - active days / chosen goal). The support index weights these 60%, 25%, and 15%. Low is below 25, Medium is 25 to below 50, High is 50 or more. At least three activities are required. These are explicit prototype rules, not clinically validated thresholds or diagnostic claims.

Game difficulty uses the last three recorded rounds of that game: mean accuracy at least 85% increases one level; below 55% decreases one; levels remain 1–3. Age and diagnosis do not silently alter the score. The backend receives game counts from the client; it is not an anti-cheat system.

## Figma

Editable file: https://www.figma.com/design/Q0GrCFIwhprgCRJ8KlEqC4

The Figma Starter MCP quota was exhausted after the desktop draft and mobile canvases were created. Further editing, completion, and visual QA in Figma are blocked by that external limit. Do not describe this file as fully completed or verified. Local design/diagram artifacts supplement the file and can be imported into Figma.

## Containers

`docker compose up --build -d --wait` builds Flutter in a Linux build stage and serves it through Nginx on http://localhost:3002. `/api` is proxied to FastAPI. SQLite lives in a named volume, and the backend has a health check. The API port is not published directly. `docker compose down` preserves the database volume; `down -v` erases it and is only appropriate for disposable test environments.

The GitHub `Verify Docker demo` workflow builds both containers and checks 103 seeded patients plus reminder persistence after an API-container restart. Check its actual result before claiming verified container execution. Local Docker is not installed. No GKE resources are created.

The container stack is a local demo bound to loopback. Public hosting and authentication are not configured by this work.
