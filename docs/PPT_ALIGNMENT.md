# Memory Mate: PPT alignment and data definitions

Reference: SIH2026-IDEAPPT(1).pptx, six slides, NEURO NOVA, PS26003.

## Implemented scope

- Pattern recall, word recall, and picture matching save measured accuracy, errors, response time, difficulty, and full ISO timestamps.
- Accuracy is the measured percentage. Gemini can supply optional encouraging wording but cannot overwrite a measured score.
- Pattern length adjusts within a session. Initial pattern length, word count (3–5), and matching pair count (4–6) use the last three recorded sessions. Start a new game to use the updated level.
- New profiles start without invented sessions, medicines, memories, or trend points. Bundled synthetic profiles remain available and labeled.
- Caregiver facts are calculated for the selected patient. Weekly charts group recorded activities by Monday-starting UTC week, leaving unplayed game series empty.
- Local logistic regression produces Low / Medium / High **prototype activity-risk** labels after three valid recorded sessions. It is independent of Gemini.
- Session consistency counts unique active UTC days in the past seven days. Older records without reliable timestamps are retained, labeled legacy, and excluded from dated analytics.
- Reminders, labeled family photos, and Memory Box remain usable locally. Offline chat can show saved reminders and photo labels; it does not impersonate a successful Gemini conversation.
- Browser microphone input fills editable text. Permission and unsupported-language errors are visible. Recognition may require internet, and Assamese speech availability depends on the browser/device. Bengali is not silently substituted for Assamese speech output.
- Key availability and AI-request failures are visible. Pending AI feedback retries on reconnection and at bounded intervals across profiles. The queue does not claim to back up records to a cloud database.
- Production PWA installation caches the actual emitted JS/CSS, not just an empty HTML shell. API responses are never placed in Cache Storage.
- Backup exports retain source metadata. Invalid backups are rejected. Unreadable saved records enter recovery mode instead of being replaced with demo data.

## Measurement definitions

- Pattern accuracy: correct tile responses / all tile responses. Errors: wrong tile responses. Response time: total active response time / tile responses, excluding presentation and between-round pauses.
- Word accuracy: recalled target words / targets shown. Errors: targets not correctly recalled. Response time: active recall duration / targets shown, including omissions as recall opportunities. It is not a per-click speech or reaction-time measurement.
- Matching accuracy: matched pairs / pair attempts. Errors: unmatched pair attempts. Response time: active selection time / pair attempts, excluding card-flip animation delays.
- These task-specific decision units are documented approximations for this prototype, not interchangeable clinical reaction-time tests. The synthetic model does not establish validity across real populations or devices.
- Local score equals rounded accuracy in [0,100]. Zero is preserved. A single game does not receive a fabricated improving/stable/declining trend.
- A reminder marked complete is a user-entered state, not proof that medication was taken. Current completion totals are not a historical adherence rate.

## Model reproducibility

Run `npm run train:model` to regenerate `src/ml/riskModelWeights.ts`, `docs/synthetic-model-data.json`, and `docs/model-evaluation.json`.

The seeded generator produces 1,200 rows in 300 synthetic groups. Entire groups are held out (960 training rows, 240 test rows). Scaling is fitted only on training rows. Labels come from the explicit authored rule documented in the report. The measured held-out accuracy is approximately 94.2% **against that synthetic rule only**. This is not measured diagnostic accuracy or validation on patient outcomes.

Features: mean accuracy, mean response time, mean errors, active days in seven days, accuracy standard deviation, and difficulty level. Model class probabilities are not calibrated medical confidence.

## Local use and Gemini setup

1. Development: `npm run dev`, normally at http://localhost:3000. Development mode removes this app's old service worker to avoid stale code.
2. Offline/PWA checks: `npm run build`, then `npm start`. Stop any other server using port 3000 first. Open the app online once and let installation complete before testing offline reloads.
3. Put your own Gemini key in `.env.local`: `GEMINI_API_KEY=your_key`. `.env.local` and `.env` are ignored by Git. Do not put keys in client code or in a `VITE_` variable. Restart the server after changes.
4. Optional model override: `GEMINI_MODEL=gemini-3.8-flash`. The default is documented at https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash. Account access, quota, and successful responses must be checked with the user's key.
5. Deployment requires its own private environment variables. Secure shared cloud storage is future scope in slide 4.

## Verification

- `npm run lint`: TypeScript.
- `npm test`: scoring boundaries, invalid input, dated analytics, synthetic/legacy exclusion, adaptive levels, profile-safe merges, AI failures, early local saving, API contract, and record validation.
- `node scripts/browser-regression.mjs`: browser game, localization, speech-event, mobile-layout, and offline checks. Install Playwright in your test environment, or set `PLAYWRIGHT_MODULE` to its module URL. Set `BROWSER_EXECUTABLE` if using an installed Chromium browser. The script expects the isolated production app on port 3001 and uses a new browser profile with synthetic test users.
- `node scripts/browser-queue.mjs`: mocked reconnection and late-reply tests, including edits to another profile while a response is pending.

Real Gemini responses, actual microphone transcription, and pronunciation on the user's device remain to be checked after credentials and permissions are available. Low-end-device performance has not been benchmarked. Synthetic demonstration data does not establish medical validity.

Reference for browser speech limitations: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
