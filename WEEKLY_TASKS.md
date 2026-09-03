# 📅 EMERGENCY MITRA — Week-by-Week Task Ledger
### Every task, every member, every micro-fix · Companion to `PROJECT_BLUEPRINT.md` (PS SIH-26133)
**Team:** M1 Lead/Architect · M2 Citizen Frontend · M3 Dashboard/i18n · M4 Backend · M5 DB/DevOps · M6 AI/ML

---

## How to use this file
1. Task IDs: `W<week>-M<member>-<serial>` — use them as GitHub issue titles.
2. Every task has a **Done-when** — a task without a checkable "done" is not a task.
3. ⚡ = micro-fix (≤ 1h). Clear all ⚡ items in the daily "power hour" (see rituals).
4. Est = estimated hours. If a task exceeds est × 1.5, flag M1 immediately.
5. **Standing rituals (all weeks):**
   - Daily 15-min standup (9:00 AM): yesterday / today / blockers
   - **Power hour** (daily): clear that week's ⚡ micro-fixes
   - Friday 5 PM: internal demo (record it — becomes submission video material)
   - M1 reviews & merges every PR; CI must be green before merge
6. **Definition of Done (every task):** pushed · CI green · peer-reviewed · demo-able ·
   docs updated if behavior changed.

---

# 🗓️ WEEK 1 — Foundations: Contract, Schema, CI, Environments
**Week exit criteria:** API contract frozen · DB schema live · CI green on every push ·
ML environments working · trust-spec v1 drafted.

## M1 — Lead / Architect (~32h)
- [ ] `W1-M1-01` (6h) Write `ARCHITECTURE.md`: component diagram + sequence diagram
      "one SOS end-to-end". Done-when: all 5 members confirm it matches reality.
- [ ] `W1-M1-02` (5h) Draft `trust-spec-v1.md`: every scoring weight (OTP+26, DigiLocker+28,
      camera+20, GPS+15, memo+8, triangulation+12–21, spam−40, no-GPS−5, zero-evidence−10)
      with one-line justification. Done-when: circulated, 0 unresolved objections.
- [ ] `W1-M1-03` (4h) Arbitrate & freeze **API contract v1** (§6 + §18.2) in
      `api-contract.md`. Done-when: M2/M3/M4 sign off via doc comment.
- [ ] `W1-M1-04` (3h) GitHub project board: Backlog / This Week / In Progress / Review /
      Done; import every task from this file as issues.
- [ ] `W1-M1-05` (3h) Decide FHIR scope: pilot = 7 resources (Patient, Encounter,
      Condition, Observation, MedicationRequest, Immunization, AllergyIntolerance).
      Write `fhir-scope.md`.
- [ ] `W1-M1-06` (2h) Branch protection: main requires PR + CI green; assign code owners.
- [ ] ⚡ `W1-M1-07` (0.5h) Repo hygiene: LICENSE (MIT), CODEOWNERS, PR template.
- [ ] ⚡ `W1-M1-08` (0.5h) GitHub repo description + topics (SIH judges browse it).

## M2 — Citizen Frontend (~34h)
- [ ] `W1-M2-01` (6h) Build `js/api.js`: fetch wrapper (env base URL, JWT header, 401 →
      refresh, retry+backoff, timeout, error normalization). Done-when: works vs Postman mock.
- [ ] `W1-M2-02` (4h) Postman collection mirroring contract v1 with example bodies → `postman/`.
- [ ] `W1-M2-03` (4h) PWA skeleton: `manifest.json` (icons 192/512, theme color) + service
      worker (cache-first static, network-only `/api`). Done-when: Lighthouse "installable".
- [ ] `W1-M2-04` (3h) Audit every mock/localStorage call in citizen flows → checklist issue
      of switch-over points to `api.js`.
- [ ] `W1-M2-05` (3h) Offline outbox design (IndexedDB): {type, payload, created_at,
      retries, status} → `offline-design.md`.
- [ ] ⚡ `W1-M2-06` (0.5h) Page `<title>` + meta description + OG tags (share preview).
- [ ] ⚡ `W1-M2-07` (0.5h) Favicon + apple-touch-icon (currently missing).
- [ ] ⚡ `W1-M2-08` (1h) Console-error sweep hero/wizard/SOS/facilities/account — fix all.
      Done-when: 0 console entries in full click-through.
- [ ] ⚡ `W1-M2-09` (0.5h) `loading="lazy"` on non-critical images.


## M3 — Dashboard / i18n (~32h)
- [ ] `W1-M3-01` (5h) WS spike: echo client vs FastAPI example → `ws-design.md`
      (reconnect backoff, heartbeat, snapshot-then-delta plan).
- [ ] `W1-M3-02` (4h) Extract dashboard state into a `dashStore` object (single source of
      truth replacing direct `adminCases` reads) — prep for WS-driven renders.
- [ ] `W1-M3-03` (4h) i18n audit script: scan hardcoded strings in HTML/JS →
      `i18n-gaps.csv` (string, file, line). Done-when: total count known.
- [ ] `W1-M3-04` (3h) Leaflet spike: map + 3 markers (DH Wardha, RH Sevagram, PHC Deoli),
      popups, fitBounds — scratch page OK.
- [ ] `W1-M3-05` (3h) Chart.js spike: cases/day bar chart from static data (impact slide).
- [ ] ⚡ `W1-M3-06` (0.5h) Fix dashboard modal scroll-lock on mobile (body overflow).
- [ ] ⚡ `W1-M3-07` (0.5h) Standardize table empty-states ("No cases" row) everywhere.
- [ ] ⚡ `W1-M3-08` (1h) Translate the 20 most-visible strings to HI/MR (pattern proof).

## M4 — Backend (~36h)
- [ ] `W1-M4-01` (6h) FastAPI scaffold: app factory, pydantic-settings, structured JSON
      logging + trace_id middleware, global exception handler, `/health`.
- [ ] `W1-M4-02` (5h) Docker: api `Dockerfile` + `docker-compose.yml` (api, postgis,
      redis, minio). Done-when: `docker-compose up` works on teammate's machine.
- [ ] `W1-M4-03` (5h) DB layer: async SQLAlchemy session, Alembic init, migration 001
      creating `users` + `devices` (§7).
- [ ] `W1-M4-04` (4h) `/auth/otp/request|verify` with **MockSMS provider** (logs OTP)
      behind `SMSProvider` interface (real MSG91 plugs in W4); Redis limit 3/10min.
- [ ] `W1-M4-05` (4h) JWT issue/refresh: access 15m + refresh 30d, rotation, revocation
      list in Redis; tests.
- [ ] `W1-M4-06` (3h) OpenAPI docs published; link in README.
- [ ] ⚡ `W1-M4-07` (0.5h) `.env.example` with every var documented; `.env` gitignored.
- [ ] ⚡ `W1-M4-08` (0.5h) CORS allowlist middleware (dev origins only).
- [ ] ⚡ `W1-M4-09` (1h) pytest skeleton + tests for `/health` + mock OTP flow.

## M5 — DB / DevOps (~34h)
- [ ] `W1-M5-01` (6h) Full schema DDL (§7 + §18.1) as Alembic migrations; clean
      `alembic upgrade head` on fresh volume.
- [ ] `W1-M5-02` (5h) CI (GitHub Actions): lint (ruff+eslint) → pytest → JS checks →
      regression suites (33 tests) → build images. Done-when: red CI blocks merge.
- [ ] `W1-M5-03` (4h) Seed v1: 11 facilities (from `facilities.js`) as GEOGRAPHY points,
      4 ambulances, 3 test users (citizen/ops/hospital).
- [ ] `W1-M5-04` (3h) GiST verification: EXPLAIN ANALYZE the triangulation query on 10k
      synthetic rows → save to `docs/query-plans.md`.
- [ ] `W1-M5-05` (3h) Staging skeleton deploy (Render/Railway): api + db; UptimeRobot wired.
- [ ] ⚡ `W1-M5-06` (0.5h) gitleaks secret-scan job in CI.
- [ ] ⚡ `W1-M5-07` (0.5h) `.dockerignore` (node_modules, .env, __pycache__).
- [ ] ⚡ `W1-M5-08` (1h) `RUNBOOK.md` skeleton (start/stop/reset sections).

## M6 — AI/ML (~32h)
- [ ] `W1-M6-01` (5h) Colab/Kaggle workflow + `ml/` folder structure (`data/ notebooks/
      models/ serving/ experiments.md`).
- [ ] `W1-M6-02` (5h) Download + verify UrbanSound8K, ESC-50; dataset licenses (CC-BY)
      noted in `ml/DATA.md`.
- [ ] `W1-M6-03` (5h) Mel-spectrogram pipeline (16kHz, 128 mels, 5s windows) as reusable
      module; visualize 10 samples to sanity-check.
- [ ] `W1-M6-04` (4h) Baseline: logistic regression on mel-summary features → record
      macro-F1 in `experiments.md` (the "before" number).
- [ ] `W1-M6-05` (4h) Triage golden-set template (symptom text, expected type, severity
      1–5, red-flag); label 30 cases with team on Friday.
- [ ] `W1-M6-06` (3h) Fraud synthetic-data generator spec (normal vs burst, duplicate
      text, GPS-teleport patterns).
- [ ] ⚡ `W1-M6-07` (0.5h) Fix random seeds everywhere; note reproducibility policy.
- [ ] ⚡ `W1-M6-08` (1h) Record 6 demo audio clips (scream/crash/normal × 2) on a phone.


---

# 🗓️ WEEK 2 — Auth + Cases Live · Citizen App Talks to Real Backend
**Week exit criteria:** OTP signup works end-to-end · wizard files a case to the real DB ·
dashboard receives it via WS · audio training started.

## M1 — Lead (~30h)
- [ ] `W2-M1-01` (4h) Review & merge M4's auth; run a security eye over token flow.
- [ ] `W2-M1-02` (3h) Port `credibility-engine.js` scoring rules to Python **spec tests**:
      shared test vectors JSON (same inputs → same score in JS & Python). Done-when: 13
      vectors pass in both.
- [ ] `W2-M1-03` (3h) Define case status machine + who may transition what (RBAC matrix)
      → `case-states.md`.
- [ ] `W2-M1-04` (3h) Sprint review + replan; update board; unblock M2's api.js switch-over.
- [ ] `W2-M1-05` (3h) Draft pilot MoU letter v1 (Collector/DHO) for faculty review.
- [ ] ⚡ `W2-M1-06` (0.5h) Add "why this weight" comments inline in scoring code.
- [ ] ⚡ `W2-M1-07` (1h) Judge Q&A drill sheet: write first 10 questions (auth, scoring, privacy).

## M2 — Citizen Frontend (~36h)
- [ ] `W2-M2-01` (6h) **Switch-over**: account hub → real `/auth/otp/*` + `/me` (keep
      Demo Mode path working). Done-when: signup on a real phone persists server-side.
- [ ] `W2-M2-02` (5h) Wizard submit → `POST /cases` with idempotency key; success →
      case-tracking view (`GET /cases/{id}`) replacing local mock.
- [ ] `W2-M2-03` (4h) Citizen case-status page: status stepper (filed → verified →
      dispatched → en route) driven by `/ws/citizen/{id}`.
- [ ] `W2-M2-04` (3h) Global error/toast UX: network fail, 401, 429 — friendly messages
      in EN/HI/MR.
- [ ] `W2-M2-05` (3h) SOS flow: capture legal-ack event + device fingerprint header →
      `POST /cases/sos` (server scores).
- [ ] ⚡ `W2-M2-06` (0.5h) Disable double-submit on all forms (loading state on buttons).
- [ ] ⚡ `W2-M2-07` (0.5h) Phone input: enforce 10-digit + E.164 formatting.
- [ ] ⚡ `W2-M2-08` (1h) Fix back-button behavior after case submit (no resubmit on back).
- [ ] ⚡ `W2-M2-09` (0.5h) Add haptic/visual feedback on SOS press (already pulsing — add
      pressed state).

## M3 — Dashboard (~34h)
- [ ] `W2-M3-01` (6h) `/ws/ops` client in `dashStore`: connect, auth, heartbeat, reconnect
      with backoff, snapshot request on (re)connect.
- [ ] `W2-M3-02` (4h) Live case feed: `case.created` → row appears with animation; trust
      chip renders from `trust_factors`.
- [ ] `W2-M3-03` (4h) Ops actions wired: verify / dispatch / hold buttons → `PATCH
      /ops/cases/{id}/status` with optimistic UI + rollback on error.
- [ ] `W2-M3-04` (3h) Case-detail drawer: reporter info, answers, evidence placeholders,
      trust-factor breakdown list.
- [ ] ⚡ `W2-M3-05` (0.5h) Connection status pill (LIVE / RECONNECTING / OFFLINE) on header.
- [ ] ⚡ `W2-M3-06` (1h) Sound + visual alert on new CRITICAL case (duty officers need it).
- [ ] ⚡ `W2-M3-07` (0.5h) Time-ago formatting for all timestamps (`Intl.RelativeTimeFormat`).
- [ ] ⚡ `W2-M3-08` (1h) Translate 30 more strings (from `i18n-gaps.csv`).

## M4 — Backend (~38h)
- [ ] `W2-M4-01` (6h) `POST /cases` + `/cases/sos`: Pydantic schemas, idempotency-key
      dedupe, device fingerprint upsert, **server-side scoring** (port of JS rules, driven
      by M1's shared vectors).
- [ ] `W2-M4-02` (5h) Case status machine + `PATCH /ops/cases/{id}/status` with RBAC
      (ops only) + audit_log write on every transition.
- [ ] `W2-M4-03` (5h) `/ws/ops` + `/ws/citizen/{case_id}`: connection manager, rooms by
      district, auth on connect, heartbeat, `case.created/updated` events.
- [ ] `W2-M4-04` (4h) `GET /cases/{id}` citizen view (field-restricted) + ops list with
      filters + cursor pagination.
- [ ] `W2-M4-05` (4h) Geo-validation on case create: point within district polygon +
      accuracy < 200m else flag `gps_degraded`.
- [ ] `W2-M4-06` (3h) Triangulation service call (PostGIS count query) → boost factor in
      score; factor logged.
- [ ] ⚡ `W2-M4-07` (0.5h) Request size limits (1MB JSON) + content-type enforcement.
- [ ] ⚡ `W2-M4-08` (0.5h) Add trace_id to every log line + error response.
- [ ] ⚡ `W2-M4-09` (1h) Tests: case create happy/duplicate/invalid-geo/unauthorized.

## M5 — DB / DevOps (~32h)
- [ ] `W2-M5-01` (5h) Migrations 002+: `cases`, `evidence`, `legal_acks`, `audit_log`,
      `otp_audit` tables + indexes.
- [ ] `W2-M5-02` (4h) Staging deploy of auth+cases; smoke-test suite against staging URL.
- [ ] `W2-M5-03` (4h) Redis ops: OTP TTL keys, rate-limit counters, revocation set —
      document key naming in `RUNBOOK.md`.
- [ ] `W2-M5-04` (3h) Backup job: nightly pg_dump → object storage; restore steps written.
- [ ] `W2-M5-05` (3h) Sentry wired (backend + frontend SDKs), release tagging.
- [ ] ⚡ `W2-M5-06` (0.5h) Add DB connection-pool settings to compose (max 20).
- [ ] ⚡ `W2-M5-07` (1h) Slow-query log enabled (>200ms) + review query plans again.
- [ ] ⚡ `W2-M5-08` (0.5h) CI: deploy staging on merge to main (auto), prod manual gate.

## M6 — AI/ML (~34h)
- [ ] `W2-M6-01` (8h) Train CNN v1 on mel-spectrograms (UrbanSound8K split): target
      macro-F1 ≥ 0.70 this iteration; log confusion matrix.
- [ ] `W2-M6-02` (4h) Error analysis notebook: top confusions (scream↔speech?), plan
      augmentations (pitch, noise, time-stretch).
- [ ] `W2-M6-03` (5h) Augmentation pipeline v1 + retrain → record delta in experiments.md.
- [ ] `W2-M6-04` (4h) Label 40 more golden-set triage cases; inter-annotator check with M1.
- [ ] `W2-M6-05` (4h) Fraud synthetic generator v1: 10k rows (5k normal, 5k attack
      patterns); feature extraction script.
- [ ] ⚡ `W2-M6-06` (0.5h) Save all experiment configs (no magic numbers in notebooks).
- [ ] ⚡ `W2-M6-07` (1h) Test the 6 demo audio clips through the v1 model; save predictions.


---

# 🗓️ WEEK 3 — Evidence + Trust Server-Side · Dashboard Live Feed · Referrals + FHIR
**Week exit criteria:** photo/audio evidence uploaded & hashed · trust score computed
server-side · dashboard fully live · referral + FHIR Patient/Encounter APIs working.

## M1 — Lead (~30h)
- [ ] `W3-M1-01` (3h) Audit server-side scoring parity (JS vs Python) on 20 random cases.
- [ ] `W3-M1-02` (3h) Referral SLA design: 15min emergency / 24h routine, escalation
      path → `referral-sla.md`; get M4/M3 sign-off.
- [ ] `W3-M1-03` (3h) FHIR scope review: validate M4's 7-resource mapping vs ABDM sandbox
      docs; note gaps in `fhir-scope.md`.
- [ ] `W3-M1-04` (3h) Mid-project risk review (update §16 risk register).
- [ ] ⚡ `W3-M1-05` (1h) Q&A drill: add 10 questions (evidence integrity, FHIR, referrals).
- [ ] ⚡ `W3-M1-06` (0.5h) Update README progress badges/screenshots.

## M2 — Citizen Frontend (~36h)
- [ ] `W3-M2-01` (6h) Evidence capture → upload: photo/audio blob → `POST
      /cases/{id}/evidence` (presigned flow), progress bar, retry on fail.
- [ ] `W3-M2-02` (4h) EXIF strip client-side before upload (canvas re-encode); keep
      capture timestamp separately.
- [ ] `W3-M2-03` (4h) Citizen record-timeline view v1: list encounters from
      `/records/timeline/{patient_id}` (empty state: "No records yet").
- [ ] `W3-M2-04` (3h) Appointment booking UI: facility picker + date + token confirm
      (API behind feature flag until W4).
- [ ] ⚡ `W3-M2-05` (0.5h) Camera permission-denied: friendly explainer + retry.
- [ ] ⚡ `W3-M2-06` (1h) Audio capture: show 5s countdown + playback check before send.
- [ ] ⚡ `W3-M2-07` (0.5h) Fix iOS Safari `getUserMedia` quirks (playsinline, muted attr).
- [ ] ⚡ `W3-M2-08` (1h) 30 more i18n strings.

## M3 — Dashboard (~34h)
- [ ] `W3-M3-01` (6h) **Live map v1**: Leaflet + OSM tiles; case markers by tier color,
      facility markers from `/facilities`, popups with capacity.
- [ ] `W3-M3-02` (4h) Evidence viewer in case drawer: photo lightbox + audio player.
- [ ] `W3-M3-03` (4h) Trust-factor breakdown UI: render factor list w/ points (from
      server) — replaces client-only chips.
- [ ] `W3-M3-04` (4h) Referral board v1: list + status badges + SLA countdown colors.
- [ ] ⚡ `W3-M3-05` (1h) Map: cluster markers when zoomed out (MarkerCluster).
- [ ] ⚡ `W3-M3-06` (0.5h) Fix map tile loading on HTTPS staging (mixed content).
- [ ] ⚡ `W3-M3-07` (1h) 30 more i18n strings.
- [ ] ⚡ `W3-M3-08` (0.5h) Dashboard favicon + title per tab.

## M4 — Backend (~38h)
- [ ] `W3-M4-01` (6h) Evidence upload: presigned S3/MinIO URL flow, SHA-256 verify,
      EXIF strip server-side (re-encode), size/type caps, `evidence` rows.
- [ ] `W3-M4-02` (5h) Legal-ack endpoint: store versioned text hash + IP/UA; wire into
      SOS case creation.
- [ ] `W3-M4-03` (5h) **FHIR endpoints**: `/fhir/Patient/{id}`, `/fhir/Encounter?patient=`
      (JSONB-profile rows first); HAPI validator clean on samples.
- [ ] `W3-M4-04` (5h) Referral API: create/list/patch + SLA deadline computation +
      status transitions + escalation event on breach (WS + ops feed).
- [ ] `W3-M4-05` (4h) `/records/timeline/{patient_id}` (consent-gated) + consent artifact
      create/verify.
- [ ] `W3-M4-06` (3h) Facilities API: `/facilities` (ST_DWithin + capacity join) +
      `/facilities/{id}`; wire M2's finder behind flag.
- [ ] ⚡ `W3-M4-07` (0.5h) Rate limit evidence uploads (10/hour/device).
- [ ] ⚡ `W3-M4-08` (1h) Tests: evidence happy/corrupt-hash/oversize; referral SLA breach.

## M5 — DB / DevOps (~32h)
- [ ] `W3-M5-01` (5h) Migrations: `facilities`, `facility_capacity`, `referrals`,
      `encounters`, `consent_artifacts` + FHIR JSONB columns/indexes.
- [ ] `W3-M5-02` (4h) MinIO bucket setup: evidence prefix policies, encryption-at-rest,
      lifecycle (90-day archive rule).
- [ ] `W3-M5-03` (4h) Nearest-capable-facility query tuned + EXPLAIN saved (target < 20ms
      @ 100k cases).
- [ ] `W3-M5-04` (3h) Staging deploy of W3 features; Playwright skeleton (journey 1: signup
      → OTP → profile).
- [ ] ⚡ `W3-M5-05` (1h) DB grants: app user has NO UPDATE/DELETE on audit tables.
- [ ] ⚡ `W3-M5-06` (0.5h) Add disk-usage alert to UptimeRobot.
- [ ] ⚡ `W3-M5-07` (1h) Restore drill #1 executed + screenshots to `docs/drills/`.

## M6 — AI/ML (~34h)
- [ ] `W3-M6-01` (7h) Audio v2: + augmentations, class-balanced loss; target macro-F1 ≥
      0.78, scream/crash recall ≥ 0.82.
- [ ] `W3-M6-02` (5h) ONNX export pipeline + ONNX Runtime CPU inference benchmark
      (target < 300ms p95 locally).
- [ ] `W3-M6-03` (5h) ML service scaffold: FastAPI `/ml/audio/classify` + `/ml/health`
      (version, metrics); Dockerfile.
- [ ] `W3-M6-04` (4h) Triage NLP: LLM-API zero-shot with strict JSON schema; run 70-case
      golden set → accuracy report.
- [ ] ⚡ `W3-M6-05` (1h) Model registry: `models/audio_v2.onnx` + `metrics.json` committed.
- [ ] ⚡ `W3-M6-06` (1h) Latency profile: find slowest stage (preprocess vs infer); note.


---

# 🗓️ WEEK 4 — Facilities Live · PWA Offline · Queue + Drug Stock · ASHA Mode
**Week exit criteria:** facilities finder uses live API · full offline report→sync
journey works · queue/token system works incl. SMS path · ASHA offline mode usable.

## M1 — Lead (~30h)
- [ ] `W4-M1-01` (3h) Feature-flag review: which flags on for staging/prod; document.
- [ ] `W4-M1-02` (3h) Outcome-metrics spec: how we measure P20–P24 (waiting time, referral
      completion %, follow-up rate) → `metrics.md` (feeds dashboard + deck).
- [ ] `W4-M1-03` (3h) Deck v0: problem → solution → live-demo plan (10 slides skeleton).
- [ ] `W4-M1-04` (3h) Cross-module integration check #1: citizen + dashboard + referrals
      on staging; file all bugs found.
- [ ] ⚡ `W4-M1-05` (1h) Q&A drill +10 (offline, queue, FHIR, drug stock).
- [ ] ⚡ `W4-M1-06` (0.5h) Board hygiene: close stale issues, re-estimates.

## M2 — Citizen Frontend (~38h)
- [ ] `W4-M2-01` (7h) **Offline outbox implementation**: queue case/appointment/asha-visit
      writes in IndexedDB; Background Sync; status UI ("Queued ✓ will send"); drain on
      reconnect. Done-when: airplane-mode journey passes.
- [ ] `W4-M2-02` (5h) Facilities finder → live `/facilities` (keep haversine + cached
      snapshot for offline); show live capacity badges.
- [ ] `W4-M2-03` (4h) Appointment booking live: token confirm screen with token no + ETA.
- [ ] `W4-M2-04` (5h) **ASHA mode UI v1**: role-gated tab; big-button patient picker;
      register/book/teleconsult/vitals forms; offline-first.
- [ ] `W4-M2-05` (3h) Web Push: request permission, subscribe, show case-status pushes.
- [ ] ⚡ `W4-M2-06` (0.5h) Offline banner ("You are offline — reports will be queued").
- [ ] ⚡ `W4-M2-07` (1h) Service-worker cache versioning (no stale UI after deploys).
- [ ] ⚡ `W4-M2-08` (1h) 40 i18n strings.

## M3 — Dashboard (~36h)
- [ ] `W4-M3-01` (6h) **Facility queue display**: live token list, current token, ETA,
      triage-severity ordering; big-screen layout (TV/tablet mode).
- [ ] `W4-M3-02` (5h) Drug stock dashboard: per-facility table, low-stock red badges,
      bulk update form (hospital role).
- [ ] `W4-M3-03` (4h) Follow-up registry views: ANC/immunization/NCD lists with due-today
      filter + missed-visit flags.
- [ ] `W4-M3-04` (4h) Referral board v2: SLA breach auto-highlight + escalation banner.
- [ ] `W4-M3-05` (3h) Map v2: ambulance positions from WS ticks + trail polylines.
- [ ] ⚡ `W4-M3-06` (1h) Print-friendly queue view (facility notice board fallback).
- [ ] ⚡ `W4-M3-07` (1h) 40 i18n strings.
- [ ] ⚡ `W4-M3-08` (0.5h) Dashboard: remember last active tab per user.

## M4 — Backend (~38h)
- [ ] `W4-M4-01` (6h) Appointments + queue APIs: book (token seq per facility/day),
      `/queue/{facility}` live view, `/queue/call-next` (ops), no-show auto-requeue job.
- [ ] `W4-M4-02` (4h) **SMS token fallback**: missed-call/SMS provider flow for
      feature phones (MSG91 template).
- [ ] `W4-M4-03` (5h) Drug stock APIs: bulk update (scoped to facility user), search
      with geo sort, low-stock alert events (WS + ops feed).
- [ ] `W4-M4-04` (5h) ASHA APIs: `/asha/tasks` (due-today from registries), `/asha/visits`
      bulk offline sync with conflict handling (last-write-wins + audit).
- [ ] `W4-M4-05` (4h) Registries APIs: enroll ANC/immunization/NCD, due-date computation
      (WHO schedule), missed-visit escalation events.
- [ ] ⚡ `W4-M4-06` (1h) Tests: queue concurrency (two call-next race), token sequence.
- [ ] ⚡ `W4-M4-07` (1h) Tests: bulk sync conflict case.

## M5 — DB / DevOps (~34h)
- [ ] `W4-M5-01` (5h) Migrations: `appointments`, `drug_stock`, `registries` + indexes
      (facility_id+date, due_date).
- [ ] `W4-M5-02` (4h) Seed v2: EDL ~50 drugs across facilities, 20 registry patients
      (5 ANC, 5 immunization, 10 NCD), demo queue.
- [ ] `W4-M5-03` (5h) **Playwright journeys 2–3**: wizard→ops→dispatch; SOS→IVR-mock→
      dispatch (mock IVR endpoint).
- [ ] `W4-M5-04` (4h) Load test v1 (k6): 100 concurrent case creates + queue reads on
      staging; record results.
- [ ] ⚡ `W4-M5-05` (1h) Staging DB auto-reset command (`npm run seed:demo`).
- [ ] ⚡ `W4-M5-06` (1h) Log retention + rotation config (avoid disk fill).
- [ ] ⚡ `W4-M5-07` (1h) Update RUNBOOK: queue/redis failure recovery.

## M6 — AI/ML (~34h)
- [ ] `W4-M6-01` (6h) Audio v3: final tuning; target macro-F1 ≥ 0.80, scream/crash
      recall ≥ 0.85; freeze `audio_v3.onnx`.
- [ ] `W4-M6-02` (5h) Triage NLP accuracy push: prompt engineering / few-shot examples;
      golden-set accuracy ≥ 85%; guardrail (confidence <0.6 → defer) implemented.
- [ ] `W4-M6-03` (5h) Fraud model: train IsolationForest/GBM on 50k synthetic rows;
      precision ≥ 0.9 at flag threshold; confusion matrix saved.
- [ ] `W4-M6-04` (4h) `/ml/fraud` + `/ml/triage` endpoints in ML service; `/ml/health`
      shows all three models.
- [ ] `W4-M6-05` (4h) NCD risk-score v1 (BP/RBS trend → 0–100) — simple, explainable.
- [ ] ⚡ `W4-M6-06` (1h) `ML_CARD.md` for audio model (data, metrics, limitations, bias).
- [ ] ⚡ `W4-M6-07` (1h) Integration test: real app audio clip → classify → response logged.


---

# 🗓️ WEEK 5 — IVR · Teleconsult · Labs · Shadow ML · i18n 100%
**Week exit criteria:** IVR sandbox confirms a held case · teleconsult connects ·
labs lifecycle demoable · ML in shadow mode · zero untranslated strings.

## M1 — Lead (~30h)
- [ ] `W5-M1-01` (4h) Scoring spec v1.1: blend formula final
      (`final = clamp(rule − 40×fraud, 0, 100)`), shadow→live flip criteria.
- [ ] `W5-M1-02` (3h) Demo script v1: the exact 3-minute stage flow (both journeys).
- [ ] `W5-M1-03` (3h) Integration check #2: full PS traceability walk — click every P1–P24.
- [ ] `W5-M1-04` (3h) Deck v1 (12 slides) with real screenshots.
- [ ] ⚡ `W5-M1-05` (1h) Q&A drill +10 (teleconsult, ML ethics, cost model).
- [ ] ⚡ `W5-M1-06` (0.5h) Update all module docs to match current behavior.

## M2 — Citizen Frontend (~36h)
- [ ] `W5-M2-01` (6h) Teleconsult UI: waiting room, join button, in-call controls
      (mute/camera/end), audio-first default, connection-quality indicator.
- [ ] `W5-M2-02` (4h) Record timeline v2: encounters + prescriptions + lab results
      rendered as a health timeline (icons per type).
- [ ] `W5-M2-03` (4h) e-Prescription view: read-only card in timeline + SMS copy note.
- [ ] `W5-M2-04` (4h) ASHA mode v2: vitals capture forms (BP/weight/SpO2), task list
      with due-today, visit completion flow.
- [ ] ⚡ `W5-M2-05` (1h) Teleconsult permission prompts pre-flight (cam/mic check screen).
- [ ] ⚡ `W5-M2-06` (1h) 50 i18n strings (final stretch begins).
- [ ] ⚡ `W5-M2-07` (0.5h) Fix any iOS/Android push permission edge cases found.
- [ ] ⚡ `W5-M2-08` (0.5h) Loading skeletons for timeline/queue views (no blank flashes).

## M3 — Dashboard (~34h)
- [ ] `W5-M3-01` (5h) Teleconsult ops panel: specialist roster, waiting queue, join-as-
      observer, consult history.
- [ ] `W5-M3-02` (4h) Lab orders view: status pipeline (ordered→collected→in_lab→ready),
      result viewer.
- [ ] `W5-M3-03` (4h) Registry management: enroll patient (ops), edit schedule, mark
      visited; missed-visit escalation banners.
- [ ] `W5-M3-04` (4h) Charts v2: response-time trend, referral completion %, queue wait
      (from `metrics.md`).
- [ ] ⚡ `W5-M3-05` (1h) i18n final sweep part 1 (dashboard strings).
- [ ] ⚡ `W5-M3-06` (1h) Empty/loading states for all new views.
- [ ] ⚡ `W5-M3-07` (0.5h) Number/date localization check in HI/MR.

## M4 — Backend (~38h)
- [ ] `W5-M4-01` (7h) **IVR flow (Exotel sandbox)**: outbound call on held SOS case →
      DTMF confirm → webhook → auto-dispatch; timeout → operator review; state machine
      + tests.
- [ ] `W5-M4-02` (6h) **Teleconsult APIs**: room create (LiveKit token), join (role-
      scoped), end + SOAP note + e-prescription → FHIR MedicationRequest.
- [ ] `W5-M4-03` (5h) Labs APIs: order, status transitions, result attach (Observation).
- [ ] `W5-M4-04` (4h) Fraud/triage proxy endpoints with timeouts + circuit breaker
      (ML down → skip, log).
- [ ] `W5-M4-05` (3h) SMS reminders: token reminder (morning of), ANC due, NCD monthly.
- [ ] ⚡ `W5-M4-06` (1h) Tests: IVR state machine incl. timeout + double-callback.
- [ ] ⚡ `W5-M4-07` (1h) Tests: teleconsult auth (patient/specialist/observer scopes).

## M5 — DB / DevOps (~32h)
- [ ] `W5-M5-01` (5h) Migrations: `teleconsults`, `lab_orders` + indexes.
- [ ] `W5-M5-02` (4h) LiveKit self-host in compose (or cloud free tier); TURN config.
- [ ] `W5-M5-03` (4h) Playwright journeys 4–5: facilities request; offline queue sync.
- [ ] `W5-M5-04` (3h) Load test v2: 200 concurrent creates + 2k WS connections; tune.
- [ ] ⚡ `W5-M5-05` (1h) Exotel webhook signature verification config.
- [ ] ⚡ `W5-M5-06` (1h) Backup restore drill #2 (timed; target < 30 min).
- [ ] ⚡ `W5-M5-07` (0.5h) CI: add Playwright run on staging deploy.

## M6 — AI/ML (~34h)
- [ ] `W5-M6-01` (5h) **Shadow mode live**: all 3 models logging predictions on staging
      traffic without acting; daily prediction dump job.
- [ ] `W5-M6-02` (4h) Shadow analysis notebook: prediction distributions vs rules;
      disagreement cases listed for M1 review.
- [ ] `W5-M6-03` (4h) Latency hardening: preprocess caching, batch=1 optimization;
      p95 < 300ms verified under 20 rps.
- [ ] `W5-M6-04` (4h) `ML_CARD.md` × 3 complete (audio, triage, fraud).
- [ ] ⚡ `W5-M6-05` (1h) Deck figures: confusion matrices + latency charts exported.
- [ ] ⚡ `W5-M6-06` (1h) Fallback drill: stop ML container → verify API skips gracefully.


---

# 🗓️ WEEK 6 — 🧪 INTEGRATION WEEK — Everything Talks to Everything
**Week exit criteria:** both golden journeys pass on real devices · chaos + load tests
done · all found bugs filed, P0s fixed · ML blend enabled (if shadow results clean).

## M1 — Lead (~34h) — runs the integration board
- [ ] `W6-M1-01` (4h) Write the two golden journey test scripts (step-by-step click paths)
      and run them on 3 devices personally.
- [ ] `W6-M1-02` (4h) **Bug triage twice daily** (11 AM / 5 PM): P0 same-day, P1 this week,
      P2 backlog. Keep a visible bug count chart.
- [ ] `W6-M1-03` (3h) Chaos drills (with M5): kill ML, kill Redis, kill WS mid-flow;
      verify degradation paths; record videos.
- [ ] `W6-M1-04` (3h) Enable ML blend if shadow clean; re-run scoring parity tests.
- [ ] `W6-M1-05` (3h) Deck v2 with live-demo screenshots + metrics.
- [ ] ⚡ `W6-M1-06` (1h) Q&A drill +10 (total should now be ~40).
- [ ] ⚡ `W6-M1-07` (0.5h) Update trust-spec with final blend results.

## M2 — Citizen Frontend (~36h)
- [ ] `W6-M2-01` (6h) Fix all P0/P1 citizen bugs from integration (budget reserved).
- [ ] `W6-M2-02` (4h) Real-device pass: ₹8k Android — every flow, fix what breaks
      (touch targets, viewport, keyboard overlap).
- [ ] `W6-M2-03` (3h) 2G-throttle pass: SOS + wizard + facilities usable; lazy-load heavy
      map assets on citizen side.
- [ ] `W6-M2-04` (3h) Tutorial/Demo Mode refresh: update any step whose UI changed.
- [ ] ⚡ `W6-M2-05` (1h) Lighthouse re-run: fix regressions (target ≥ 90).
- [ ] ⚡ `W6-M2-06` (1h) Final i18n gap check on citizen app (should be 0).
- [ ] ⚡ `W6-M2-07` (0.5h) App version string + build date in settings/about.

## M3 — Dashboard (~34h)
- [ ] `W6-M3-01` (6h) Fix all P0/P1 dashboard bugs (budget reserved).
- [ ] `W6-M3-02` (4h) Real-device + big-screen pass: queue display on tablet, dashboard
      on 1366×768 projector resolution.
- [ ] `W6-M3-03` (3h) WS resilience re-test: kill/restart API during live demo; clean
      resync verified.
- [ ] `W6-M3-04` (3h) i18n final sweep part 2 (dashboard complete — 0 gaps).
- [ ] ⚡ `W6-M3-05` (1h) Sound alerts: volume toggle persisted; don't alert on own actions.
- [ ] ⚡ `W6-M3-06` (1h) Charts: real staging data sanity check.

## M4 — Backend (~36h)
- [ ] `W6-M4-01` (6h) Fix all P0/P1 backend bugs (budget reserved).
- [ ] `W6-M4-02` (4h) IVR live-fire test: real phone call through sandbox → confirm →
      dispatch; also timeout path.
- [ ] `W6-M4-03` (3h) Teleconsult live test: 2 real devices, different networks
      (hotspot + wifi), audio-only on 2G throttle.
- [ ] `W6-M4-04` (3h) API doc regeneration + review every endpoint description.
- [ ] ⚡ `W6-M4-05` (1h) Add missing rate limits found in chaos drills.
- [ ] ⚡ `W6-M4-06` (1h) Test-coverage report; patch the 5 worst-covered endpoints.

## M5 — DB / DevOps (~34h)
- [ ] `W6-M5-01` (5h) **Chaos day**: run all kill-scenarios (ML, Redis, WS, DB
      connection pool exhaustion); document actual behavior vs expected; fix gaps.
- [ ] `W6-M5-02` (4h) Load test final: 200 concurrent + 2k WS on staging; p95 targets;
      tune connection pool / workers.
- [ ] `W6-M5-03` (4h) Playwright: all 5 journeys green in CI on staging.
- [ ] `W6-M5-04` (3h) Prod environment build-out (separate DB, secrets, domain/HTTPS).
- [ ] ⚡ `W6-M5-05` (1h) Alert tuning: kill false-positive UptimeRobot pings.
- [ ] ⚡ `W6-M5-06` (1h) `RUNBOOK.md` final review against reality.

## M6 — AI/ML (~34h)
- [ ] `W6-M6-01` (4h) Shadow-mode report: 1-week prediction stats, disagreement review,
      go/no-go recommendation to M1 (written).
- [ ] `W6-M6-02` (4h) Fix top ML bugs found in integration (misclassified demo clip?).
- [ ] `W6-M6-03` (3h) Re-export final models; bump versions; update `/ml/health`.
- [ ] `W6-M6-04` (3h) Stage-demo rehearsal assets: audio clips queue, expected outputs.
- [ ] ⚡ `W6-M6-05` (1h) ML service deploy on prod env; smoke test.
- [ ] ⚡ `W6-M6-06` (1h) Update ML_CARDs with final numbers.


---

# 🗓️ WEEK 7 — Security · UAT · Pilot Docs · Field Test · Deck v2
**Week exit criteria:** ZAP clean · UAT sign-off · ASHA field test done · all govt docs
in repo · deck v2 complete.

## M1 — Lead (~32h)
- [ ] `W7-M1-01` (4h) **Deck v2 final**: 12 slides — problem, PS mapping (§1A matrix
      condensed), architecture, live demo plan, trust layer, AI/ML w/ matrices, outcome
      metrics, govt-readiness, cost, pilot plan, team, future scope.
- [ ] `W7-M1-02` (3h) Pilot MoU final draft + cover letter; faculty review scheduled.
- [ ] `W7-M1-03` (3h) Run full UAT with 2 outsiders (not the team): observe silently,
      log every hesitation.
- [ ] `W7-M1-04` (3h) Cost model slide: infra ₹0 pilot / ₹3–5k per district/month table.
- [ ] ⚡ `W7-M1-05` (1h) Q&A drill full 40 (timed).
- [ ] ⚡ `W7-M1-06` (1h) Video script final; assign shots.

## M2 — Citizen Frontend (~32h)
- [ ] `W7-M2-01` (5h) UAT bug fixes (citizen side).
- [ ] `W7-M2-02` (4h) **Low-literacy mode final**: icon-only wizard + voice prompts (HI)
      tested with a non-tech user.
- [ ] `W7-M2-03` (3h) User manual (EN) with annotated screenshots → `docs/user-manual/`.
- [ ] ⚡ `W7-M2-04` (1h) Privacy one-pager linked at signup (plain language).
- [ ] ⚡ `W7-M2-05` (1h) Final Lighthouse + console-error sweep.
- [ ] ⚡ `W7-M2-06` (1h) Tutorial content sync with final UI (verify every step).

## M3 — Dashboard (~32h)
- [ ] `W7-M3-01` (5h) UAT bug fixes (dashboard side).
- [ ] `W7-M3-02` (4h) **Admin manual** (EN + HI): capacity editing, queue ops, dispatch,
      broadcasts → `docs/admin-manual/`.
- [ ] `W7-M3-03` (3h) i18n final verification: native-speaker review of HI/MR.
- [ ] ⚡ `W7-M3-04` (1h) First-time duty-officer onboarding tooltip.
- [ ] ⚡ `W7-M3-05` (1h) Final console-error + visual regression pass.

## M4 — Backend (~32h)
- [ ] `W7-M4-01` (5h) UAT bug fixes (backend).
- [ ] `W7-M4-02` (3h) API docs final polish (descriptions, examples, error codes).
- [ ] `W7-M4-03` (3h) ABDM go-live checklist doc (sandbox→prod changes).
- [ ] ⚡ `W7-M4-04` (1h) Rotate all sandbox keys post-testing; update env docs.
- [ ] ⚡ `W7-M4-05` (1h) Coverage re-run; close any endpoint < 70%.

## M5 — DB / DevOps (~34h)
- [ ] `W7-M5-01` (5h) **Security week**: OWASP ZAP full scan → fix all High/Medium;
      re-scan clean. gitleaks + dependency audit clean.
- [ ] `W7-M5-02` (4h) DPDP compliance doc final + in-app privacy one-pager review.
- [ ] `W7-M5-03` (3h) ASHA field test support: offline round on real device outside
      campus (with M2); log sync results.
- [ ] ⚡ `W7-M5-04` (1h) Prod deploy rehearsal: staging→prod runbook executed once.
- [ ] ⚡ `W7-M5-05` (1h) Monitoring screenshots for deck (uptime, latency).
- [ ] ⚡ `W7-M5-06` (1h) `RUNBOOK.md` final + `docs/handover/` index.

## M6 — AI/ML (~32h)
- [ ] `W7-M6-01` (4h) ML final eval rerun (fixed seeds, final data) → deck numbers.
- [ ] `W7-M6-02` (3h) ML ethics/limitations slide (bias: urban dataset + mitigation).
- [ ] `W7-M6-03` (3h) ML serving prod deploy + prediction-latency monitoring.
- [ ] ⚡ `W7-M6-04` (1h) Demo audio clips final selection (most convincing 3).
- [ ] ⚡ `W7-M6-05` (1h) ML Q&A prep: 10 likely questions with answers.


---

# 🗓️ WEEK 8 — ❄️ FREEZE — Rehearse, Record, Submit
**Rule: only P0 bug fixes allowed (M1 approves each). Everything else is rehearsal +
submission polish.**

## All-team daily rhythm
- Morning: full demo rehearsal (rotating presenter per journey)
- Midday: P0 fixes only → regression suites after each
- Evening: Q&A drill (10 questions/day, timed)

## M1 — Lead (~30h)
- [ ] `W8-M1-01` (4h) Video: record 3-min demo (screen + voiceover), edit, EN subtitles.
- [ ] `W8-M1-02` (3h) Deck final polish; every screenshot current; < 40 words/slide.
- [ ] `W8-M1-03` (3h) Full Q&A drill ×2 (all 40 questions; each member answers own domain).
- [ ] `W8-M1-04` (2h) Submission package vs SIH portal requirements: repo, video, deck, docs.
- [ ] ⚡ `W8-M1-05` (1h) Freeze tag `v1.0` + deploy prod; verify prod == staging.
- [ ] ⚡ `W8-M1-06` (1h) License/credits double-check.

## M2 — Citizen Frontend (~28h)
- [ ] `W8-M2-01` (3h) P0 fixes only; regression suites after each.
- [ ] `W8-M2-02` (2h) Demo device prep: phones charged, accounts pre-created, seed data,
      airplane-mode rehearsal.
- [ ] ⚡ `W8-M2-03` (1h) Final console-error check on prod.
- [ ] ⚡ `W8-M2-04` (1h) User manual final PDF export.

## M3 — Dashboard (~28h)
- [ ] `W8-M3-01` (3h) P0 fixes only.
- [ ] `W8-M3-02` (2h) Demo seed: realistic cases across tiers, referrals in various SLA
      states, live queue.
- [ ] ⚡ `W8-M3-03` (1h) Final i18n verification on prod build.
- [ ] ⚡ `W8-M3-04` (1h) Admin manual final PDF export.

## M4 — Backend (~28h)
- [ ] `W8-M4-01` (3h) P0 fixes only.
- [ ] `W8-M4-02` (2h) Prod smoke: real-SMS OTP, case create, WS, IVR sandbox, teleconsult.
- [ ] ⚡ `W8-M4-03` (1h) API docs static HTML snapshot (offline judges).
- [ ] ⚡ `W8-M4-04` (1h) Sandbox keys: verify demo-safe limits (no SMS spam).

## M5 — DB / DevOps (~28h)
- [ ] `W8-M5-01` (3h) Prod hardening final: backups scheduled, alerts on, rollback tested.
- [ ] `W8-M5-02` (2h) Demo resilience kit: local docker-compose fallback on laptop + USB;
      switchover rehearsed < 5 min.
- [ ] ⚡ `W8-M5-03` (1h) Final ZAP quick-scan on prod.
- [ ] ⚡ `W8-M5-04` (1h) Handover index: every doc linked from README.

## M6 — AI/ML (~28h)
- [ ] `W8-M6-01` (3h) P0 ML fixes only (if any).
- [ ] `W8-M6-02` (2h) Live ML demo rehearsal: app audio → classification in ops feed +
      the ML-kill fallback moment.
- [ ] ⚡ `W8-M6-03` (1h) `/ml/health` on prod verified; versions correct.
- [ ] ⚡ `W8-M6-04` (1h) ML_CARDs exported to deck appendix.


---

# ✅ FINAL SUBMISSION CHECKLIST (print this — tick physically)

## Product
- [ ] All P0 features work end-to-end on staging (emergency + CC suite)
- [ ] Demo Mode + tutorial still work (33+ regression tests green)
- [ ] Offline report → sync journey demonstrated on real device
- [ ] Live dashboard < 1s updates; map with facilities + moving ambulance

## Engineering
- [ ] CI green: lint, unit, integration, 5 Playwright journeys, coverage badge
- [ ] k6 load: 200 concurrent, p95 < 500ms, 0 errors
- [ ] OWASP ZAP: no High findings · gitleaks clean · dependency audit clean
- [ ] `docker-compose up` from clean clone verified on a teammate's laptop
- [ ] Backup restore + chaos drills documented with evidence

## AI/ML
- [ ] 3 models served, `/ml/health` shows versions + real metrics
- [ ] Confusion matrices from real evals in deck
- [ ] ML-down graceful degradation proven on stage

## Government readiness
- [ ] PS-26133 traceability matrix (§1A) — all 24 rows covered
- [ ] DPDP compliance doc + in-app privacy one-pager
- [ ] ABDM/108 integration path + go-live checklist
- [ ] Pilot plan + cost table + handover kit + training plan
- [ ] User + admin manuals (EN/HI/MR PDFs)

## Presentation
- [ ] Deck ≤ 12 slides, real screenshots + real metrics only
- [ ] Video ≤ 3 min with EN subtitles (both journeys shown)
- [ ] 40-question Q&A drill completed twice, everyone < 30s per answer
- [ ] 3 full rehearsals done — one on hotspot network, one with ML-kill moment
- [ ] SIH portal submission submitted ≥ 24h before deadline

---

*End of task ledger. Update checkboxes daily — what gets measured gets done. 🚑*








