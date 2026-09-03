# 🚑 EMERGENCY MITRA — Team Task List (Simple Hinglish)
### Sab members ke liye easy language mein · SIH-26133 · Ye file WEEKLY_TASKS.md ka simple version hai

**Team:**
- **M1** = Team Lead / Architect (sab ka boss, design + scoring owner)
- **M2** = Citizen App wala (jo aam aadmi use karega)
- **M3** = Dashboard wala (jo police/duty officer use karega) + translation
- **M4** = Backend wala (server, API, asli kaam chalane wala)
- **M5** = Database + Deployment wala (data, server pe daalna, security)
- **M6** = AI/ML wala (audio samajhne, fraud pakadne wale models)

**Status abhi:** Sirf frontend bana hai (citizen app + dashboard ka dikhawa).
Backend, database, AI/ML, deployment — **sab pending hai.** Isliye neeche ke saare tasks karna hai.

---

## 📏 Common Rules (sabko yaad rakhna)
- Har subah 15 min ki meeting: kal kya kiya / aaj kya karoge / kya atka hai
- Har kaam GitHub pe push hoga, M1 review karega, tabhi merge
- ⚡ = chhota fix (1 ghante se kam) — roz ek "power hour" mein saare ⚡ khatam karo
- Agar koi task estimate se 1.5x zyada time le raha hai, turant M1 ko batao
- Har hafte Friday ko 5 baje demo do (record karo — video ban jayega)

---

# 📅 WEEK 1 — Foundation (shuruaat)

## M1 (Lead) — ~32h
- [ ] `ARCHITECTURE.md` likho — poora system diagram mein dikhao ki ek SOS kaise chalta hai start se end tak. Done jab: sab 5 members bol de "haan samajh gaya"
- [ ] `trust-spec-v1.md` likho — trust score mein har point ka reason (OTP +26, photo +20, GPS +15, spam -40 waghera). Judge poochega "photo ke liye +20 kyun?"
- [ ] API contract final karo (`api-contract.md`) — matlab M2/M3/M4 decide kar le ki data kaise aayega-jayega
- [ ] GitHub project board banao — Backlog / This Week / In Progress / Review / Done
- [ ] FHIR scope likho (`fhir-scope.md`) — pilot mein 7 medical record types hi rakhenge
- [ ] Branch protection lagao — direct main pe push nahi, PR se hi
- [ ] ⚡ Repo mein LICENSE (MIT), CODEOWNERS, PR template daalo
- [ ] ⚡ GitHub repo ka description + topics set karo (judges dekhte hain)

## M2 (Citizen App) — ~34h
- [ ] `js/api.js` banao — ek common code jo server se baat kare (login token bhejna, error handle karna, dobara try karna). Done jab: Postman mock ke against chal jaye
- [ ] Postman collection banao taaki sab members API test kar sakein
- [ ] PWA banao — `manifest.json` + service worker (app installable ho jaye phone pe). Done jab: Lighthouse bole "installable"
- [ ] Check karo ki app mein kahan-kahan fake/localStorage data use ho raha hai — list banao ki kab real API lagana hai
- [ ] Offline queue ka design likho (`offline-design.md`) — net na ho toh report kahan save hogi
- [ ] ⚡ Page ka title, meta description, OG tags (WhatsApp share preview ke liye)
- [ ] ⚡ Favicon + apple-touch-icon daalo (abhi missing hai)
- [ ] ⚡ Console errors saaf karo — hero/wizard/SOS/facilities/account page chala ke dekho, 0 errors hone chahiye
- [ ] ⚡ Non-important images pe `loading="lazy"` lagao

## M3 (Dashboard + Translation) — ~32h
- [ ] WebSocket (live updates) ka chhota experiment karo → `ws-design.md` likho (disconnect hone pe auto-reconnect kaise hoga)
- [ ] Dashboard ka data ek `dashStore` object mein shift karo — abhi code seedhe `adminCases` padhta hai, ye theek karo
- [ ] i18n audit script banao — scan karo ki kitni English hard-coded lines bachi hain → `i18n-gaps.csv`
- [ ] Leaflet map experiment: 3 hospital markers (DH Wardha, RH Sevagram, PHC Deoli) laga ke dekho
- [ ] Chart.js experiment: cases per day ka bar chart (static data se)
- [ ] ⚡ Mobile pe dashboard modal scroll-lock fix karo
- [ ] ⚡ Tables mein "No cases" wala khali message sab jagah same style ka
- [ ] ⚡ 20 sabse zyada dikhte strings Hindi/Marathi mein translate karo

## M4 (Backend) — ~36h
- [ ] FastAPI project banao — basic server structure, JSON logging, error handler, `/health` endpoint
- [ ] Docker setup karo — `docker-compose.yml` (api, postgis, redis, minio). Done jab: teammate ke laptop pe `docker-compose up` chal jaye
- [ ] Database layer — SQLAlchemy + Alembic migration 001 (`users` + `devices` tables)
- [ ] OTP system banao — `/auth/otp/request` + `/verify` (abhi fake SMS — console pe OTP print hoga; limit 3 OTP / 10 min)
- [ ] JWT login tokens — access 15 min + refresh 30 din, purana token cancel hone ka system
- [ ] API docs publish karo (OpenAPI) — README mein link daalo
- [ ] ⚡ `.env.example` banao (sab config variables), asli `.env` gitignore mein
- [ ] ⚡ CORS middleware (sirf dev wale origins allow)
- [ ] ⚡ pytest setup + `/health` aur OTP ke basic tests

## M5 (Database + DevOps) — ~34h
- [ ] Poori database schema banao (blueprint §7 ke hisaab se) — Alembic migrations, fresh system pe `alembic upgrade head` chalna chahiye
- [ ] CI banao (GitHub Actions) — push pe auto: lint → tests → build. Done jab: test fail ho toh merge block ho
- [ ] Seed data daalo — 11 hospitals (`facilities.js` se), 4 ambulance, 3 test users
- [ ] Triangulation query ko 10,000 fake rows pe test karo — speed result `docs/query-plans.md` mein save karo
- [ ] Staging deploy karna shuru karo (Render/Railway) — free tier pe server + database
- [ ] ⚡ CI mein gitleaks (secret leak check) daalo
- [ ] ⚡ `.dockerignore` banao
- [ ] ⚡ `RUNBOOK.md` shuru karo (server start/stop/reset kaise karein)

## M6 (AI/ML) — ~32h
- [ ] `ml/` folder banao — `data/ notebooks/ models/ serving/ experiments.md`
- [ ] UrbanSound8K + ESC-50 datasets download karo, license note karo (`ml/DATA.md`)
- [ ] Mel-spectrogram pipeline banao (audio ko picture jaisa convert karna — 16kHz, 128 mels, 5 sec) — 10 samples dekh ke verify karo
- [ ] Basic model (logistic regression) chalao — iska score `experiments.md` mein likho (ye "pehle" wala number hai, isse compare hoga)
- [ ] Triage golden-set template banao — 30 cases team ke saath label karo (symptom text → kaunsi emergency, kitni serious)
- [ ] Fake-report synthetic data generator ka plan likho
- [ ] ⚡ Random seeds fix karo (same result har baar aaye)
- [ ] ⚡ 6 demo audio clips record karo phone se (cheekh/takrao/normal × 2)

---

# 📅 WEEK 2 — Login + Case filing real server se

**Hafte ka target:** OTP se signup chale · wizard se file ki case asli database mein jaye · dashboard pe live dikhe · audio training shuru.

## M1 — ~30h
- [ ] M4 ka auth code review + merge karo, security check karo
- [ ] `credibility-engine.js` ke scoring rules ko Python ke test cases mein convert karo — 13 test vectors JS aur Python dono mein same score dein
- [ ] Case status ka flow likho (`case-states.md`) — pending → verifying → dispatched... kaun role kya change kar sakta hai
- [ ] Sprint review — board update karo, M2 ka API switch-over unblock karo
- [ ] Pilot MoU letter ka draft likho (Collector/DHO ke liye)
- [ ] ⚡ Scoring code mein "ye weight kyun" wale comments daalo
- [ ] ⚡ Judge Q&A sheet — pehle 10 sawaal + jawab likho

## M2 — ~36h
- [ ] **SABSE BADA KAAM:** Account hub ko real OTP API se jodo (Demo Mode wala path mat hatao). Done jab: asli phone pe signup karo aur data server pe save ho
- [ ] Wizard submit → real `POST /cases` API se; success pe case tracking page (`GET /cases/{id}`)
- [ ] Citizen ko case status dikhane wala page (stepper: filed → verified → dispatched → en route) — live updates ke saath
- [ ] Errors pe acche messages (net gaya / login expire / bahut requests) — EN/HI/MR teeno mein
- [ ] SOS flow: legal-ack + device fingerprint header ke saath `POST /cases/sos`
- [ ] ⚡ Sab forms pe double-submit band karo (button pe loading state)
- [ ] ⚡ Phone number input: 10 digit force karo
- [ ] ⚡ Case submit ke baad back button dabao toh dobara submit na ho
- [ ] ⚡ SOS button pe press feedback (pulse already hai, pressed state add karo)

## M3 — ~34h
- [ ] `/ws/ops` WebSocket client dashboard mein — connect, login, heartbeat, auto-reconnect
- [ ] Live case feed — nayi case aaye toh row animation ke saath dikhe, trust chip bhi
- [ ] Verify/dispatch/hold buttons ko real API se jodo (error aaye toh wapas pichla state)
- [ ] Case detail drawer — reporter info, jawab, evidence ki jagah, trust factors ki list
- [ ] ⚡ Header pe connection status (LIVE / RECONNECTING / OFFLINE)
- [ ] ⚡ Nayi CRITICAL case aaye toh sound + alert
- [ ] ⚡ Time "5 min ago" format mein dikhao
- [ ] ⚡ 30 aur strings translate karo

## M4 — ~38h
- [ ] `POST /cases` + `/cases/sos` — validation, duplicate submit se bachav, device fingerprint, **server-side scoring** (M1 ke shared test vectors se)
- [ ] Case status machine + `PATCH /ops/cases/{id}/status` (sirf ops role) — har change audit_log mein
- [ ] WebSocket `/ws/ops` + `/ws/citizen/{id}` — connection manager, district-wise rooms, heartbeat
- [ ] `GET /cases/{id}` citizen view (kam fields dikhe) + ops list filters ke saath
- [ ] GPS check — location district ke andar hai ya nahi, accuracy < 200m
- [ ] Triangulation (PostGIS count query) → score mein boost
- [ ] ⚡ Request size limit (1MB) + content-type check
- [ ] ⚡ Har log mein trace_id
- [ ] ⚡ Tests: case create (normal/duplicate/galat GPS/bina login)

## M5 — ~32h
- [ ] Migration 002+: `cases`, `evidence`, `legal_acks`, `audit_log`, `otp_audit` tables + indexes
- [ ] Staging pe auth+cases deploy karo + smoke tests
- [ ] Redis setup — OTP TTL, rate-limit counters, token revocation — RUNBOOK mein document karo
- [ ] Backup job — raat ko pg_dump → cloud storage; restore steps likho
- [ ] Sentry (errors pakadne wala tool) front + back dono mein lagao
- [ ] ⚡ DB connection pool settings (max 20)
- [ ] ⚡ Slow query log (>200ms) on
- [ ] ⚡ CI: main pe merge = auto staging deploy

## M6 — ~34h
- [ ] Audio model v1 train karo (CNN) — target score macro-F1 ≥ 0.70; confusion matrix save karo
- [ ] Error analysis — model kya-kya confuse ho raha hai (cheekh vs normal bol?), plan banao
- [ ] Audio augmentation (pitch change, noise, speed) + dobara train — result likho
- [ ] 40 aur triage cases label karo (M1 ke saath check karo)
- [ ] Fraud synthetic data v1 — 10,000 rows (5k normal, 5k fraud pattern)
- [ ] ⚡ Har experiment ki config save karo (notebook mein guess-matrices nahi)
- [ ] ⚡ 6 demo clips model pe chalao, predictions save karo

---

# 📅 WEEK 3 — Evidence + Trust score server se · Live map · Referral

**Hafte ka target:** photo/audio upload + hash · trust score server pe bane · dashboard poori tarah live · referral + FHIR Patient/Encounter APIs.

## M1 — ~30h
- [ ] 20 random cases pe check karo — JS aur Python ka score same aa raha hai?
- [ ] Referral SLA design likho (`referral-sla.md`) — emergency 15 min / normal 24h, escalate kaise hoga
- [ ] FHIR mapping review karo (M4 ke 7 resources ABDM docs se match karo)
- [ ] Mid-project risk review (blueprint §16 update)
- [ ] ⚡ Q&A drill +10 sawaal
- [ ] ⚡ README progress badges + screenshots update

## M2 — ~36h
- [ ] Evidence upload — photo/audio server pe jaye (`POST /cases/{id}/evidence`), progress bar, fail hone pe retry
- [ ] Upload se pehle EXIF data (location waghera) hata do — canvas se photo re-encode karo
- [ ] Citizen ka "Mera Record" timeline v1 — `/records/timeline/{id}` se encounters dikhe
- [ ] Appointment booking UI — facility + date + token confirm (flag ke peeche, W4 mein on hoga)
- [ ] ⚡ Camera permission na mile toh simple explanation + retry
- [ ] ⚡ Audio record: 5 sec countdown + sun ke check karne ka option
- [ ] ⚡ iPhone Safari camera quirks fix (playsinline, muted)
- [ ] ⚡ 30 aur translations

## M3 — ~34h
- [ ] **Live map v1** — Leaflet + OSM; case markers tier ke color se, facility markers, capacity popup
- [ ] Case drawer mein evidence dekhne ka option (photo lightbox + audio player)
- [ ] Trust-factor breakdown UI — server se aaye points ki list
- [ ] Referral board v1 — list + status badge + SLA countdown color
- [ ] ⚡ Map pe zoom-out pe marker cluster
- [ ] ⚡ HTTPS pe map tiles ka mixed-content fix
- [ ] ⚡ 30 aur translations
- [ ] ⚡ Dashboard favicon + tab title

## M4 — ~38h
- [ ] Evidence upload — S3/MinIO presigned URL, SHA-256 check, EXIF strip server pe bhi, size/type limit
- [ ] Legal-ack endpoint — legal text ka versioned hash + IP/UA store
- [ ] **FHIR endpoints** — `/fhir/Patient/{id}`, `/fhir/Encounter?patient=`
- [ ] Referral API — create/list/update + SLA deadline + breach pe escalation event
- [ ] `/records/timeline/{patient_id}` (consent check ke baad) + consent artifact create/verify
- [ ] Facilities API — `/facilities` (distance + capacity ke saath) — M2 ka finder isse jodna
- [ ] ⚡ Evidence upload pe rate limit (10/hour/device)
- [ ] ⚡ Tests: evidence (normal/galat hash/bahut bada file); referral SLA breach

## M5 — ~32h
- [ ] Migrations: `facilities`, `facility_capacity`, `referrals`, `encounters`, `consent_artifacts`
- [ ] MinIO bucket setup — evidence folder, encryption, 90-day archive rule
- [ ] Nearest-capable-facility query tez karo — target < 20ms @ 100k rows, EXPLAIN save karo
- [ ] Staging deploy + Playwright skeleton (journey 1: signup → OTP → profile)
- [ ] ⚡ DB grant: app user audit tables pe UPDATE/DELETE nahi kar sakta
- [ ] ⚡ Disk usage alert
- [ ] ⚡ Backup restore drill #1 karo + screenshots `docs/drills/` mein

## M6 — ~34h
- [ ] Audio v2 — augmentation + class-balanced loss; target macro-F1 ≥ 0.78, scream/crash recall ≥ 0.82
- [ ] ONNX export + CPU pe speed test (target < 300ms)
- [ ] ML service banao — FastAPI `/ml/audio/classify` + `/ml/health`, Dockerfile
- [ ] Triage NLP — LLM API se zero-shot, strict JSON output; 70-case golden set pe accuracy report
- [ ] ⚡ Model registry — `models/audio_v2.onnx` + `metrics.json` commit
- [ ] ⚡ Latency profile — sabse slow step dhundo, note karo

---

# 📅 WEEK 4 — Facilities live · Offline mode · Queue/token · ASHA mode

**Hafte ka target:** facility finder real API se · offline report → sync poora chale · queue/token + SMS · ASHA offline mode.

## M1 — ~30h
- [ ] Feature flags review — kaunsa flag staging/prod pe on hai, document karo
- [ ] Outcome metrics likho (`metrics.md`) — waiting time, referral %, follow-up rate kaise naporenge
- [ ] Deck v0 — 10 slides ka skeleton (problem → solution → demo plan)
- [ ] Integration check #1 — citizen + dashboard + referrals staging pe chala ke bugs nikalo
- [ ] ⚡ Q&A drill +10
- [ ] ⚡ Board safai — purane issues band karo

## M2 — ~38h
- [ ] **Offline outbox** — net na ho toh case/appointment/asha-visit IndexedDB mein queue ho, net aaye toh auto-sync + "Queued ✓" dikhaye. Done jab: airplane mode wala test pass ho
- [ ] Facility finder → live `/facilities` API (offline ke liye cache bhi rakho), live capacity badges
- [ ] Appointment booking live — token number + ETA wala confirm screen
- [ ] **ASHA mode UI v1** — alag tab (sirf ASHA role ke liye), bade buttons, patient picker, register/book/teleconsult/vitals forms, offline-first
- [ ] Web Push — permission maango, case status notification dikhao
- [ ] ⚡ Offline banner ("Aap offline hain — report queue mein jayegi")
- [ ] ⚡ Service worker cache versioning (purani UI na dikhe)
- [] ⚡ 40 translations

## M3 — ~36h
- [ ] **Queue display** — live token list, current token, ETA, severity order; TV/tablet ke liye bada layout
- [ ] Drug stock dashboard — facility-wise table, kam stock pe red badge, bulk update form
- [ ] Follow-up registry views — ANC/immunization/NCD list, "aaj due" filter, missed visit flag
- [ ] Referral board v2 — SLA breach auto-highlight + escalation banner
- [ ] Map v2 — ambulance ki position live + movement ka line
- [ ] ⚡ Queue ka print-friendly view
- [ ] ⚡ 40 translations
- [ ] ⚡ Dashboard: user ka last tab yaad rakhe

## M4 — ~38h
- [ ] Appointment + queue APIs — token booking, `/queue/{facility}`, `/queue/call-next` (ops), no-show auto-requeue
- [ ] **SMS token fallback** — feature phone walon ke liye MSG91 SMS
- [ ] Drug stock APIs — bulk update, geo search, low-stock alert events
- [ ] ASHA APIs — `/asha/tasks` (aaj ke kaam), `/asha/visits` bulk offline sync (conflict handle)
- [ ] Registries APIs — ANC/immunization/NCD enroll, due-date (WHO schedule), missed-visit escalation
- [ ] ⚡ Tests: queue race (do log ek saath call-next), token sequence
- [ ] ⚡ Tests: bulk sync conflict

## M5 — ~34h
- [ ] Migrations: `appointments`, `drug_stock`, `registries` + indexes
- [ ] Seed v2 — ~50 dawaiyan, 20 registry patients, demo queue
- [ ] Playwright journeys 2–3: wizard→ops→dispatch; SOS→IVR mock→dispatch
- [ ] Load test v1 (k6) — 100 log ek saath case banayein, results note karo
- [ ] ⚡ Demo data reset command (`npm run seed:demo`)
- [ ] ⚡ Log rotation (disk na bhare)
- [ ] ⚡ RUNBOOK update — queue/redis fail hone pe kya karein

## M6 — ~34h
- [ ] Audio v3 — final tuning; target macro-F1 ≥ 0.80, recall ≥ 0.85; `audio_v3.onnx` freeze
- [ ] Triage NLP push — accuracy ≥ 85%; confidence < 0.6 ho toh "uncertain" bole
- [ ] Fraud model — 50k rows pe IsolationForest/GBM; precision ≥ 0.9
- [ ] `/ml/fraud` + `/ml/triage` endpoints; `/ml/health` teeno models dikhaye
- [ ] NCD risk-score v1 (BP/sugar trend → 0–100, simple aur samjhaane wala)
- [ ] ⚡ `ML_CARD.md` audio model ke liye
- [ ] ⚡ Real app ka audio → model → response ka integration test

---

# 📅 WEEK 5 — IVR call · Teleconsult · Labs · ML shadow · Translation 100%

**Hafte ka target:** IVR call se case confirm · teleconsult call chale · labs lifecycle · ML shadow mode mein · 0 untranslated strings.

## M1 — ~30h
- [ ] Scoring spec v1.1 final — formula: `final = clamp(rule − 40×fraud, 0, 100)`, shadow→live kab hoga wo rules
- [ ] Demo script v1 — 3-minute stage flow likho (dono journeys)
- [ ] Integration check #2 — har P1–P24 pe click karke verify karo
- [ ] Deck v1 (12 slides) asli screenshots ke saath
- [ ] ⚡ Q&A drill +10
- [ ] ⚡ Saare module docs update

## M2 — ~36h
- [ ] Teleconsult UI — waiting room, join button, call controls (mute/camera/end), connection quality
- [ ] Record timeline v2 — encounters + prescriptions + lab results, har type ka icon
- [ ] e-Prescription view — read-only card + SMS copy note
- [ ] ASHA mode v2 — BP/weight/SpO2 forms, due-today task list, visit complete flow
- [ ] ⚡ Teleconsult se pehle mic/camera permission check screen
- [ ] ⚡ 50 translations (final stretch)
- [ ] ⚡ Push permission edge cases fix
- [ ] ⚡ Loading skeletons (blank flash na dikhe)

## M3 — ~34h
- [ ] Teleconsult ops panel — specialist list, waiting queue, observer join, history
- [ ] Lab orders view — status pipeline + result viewer
- [ ] Registry management — patient enroll, schedule edit, mark visited, escalation banner
- [ ] Charts v2 — response-time trend, referral %, queue wait (metrics.md se)
- [ ] ⚡ i18n sweep part 1 (dashboard)
- [ ] ⚡ Sab nayi views pe empty/loading states
- [ ] ⚡ HI/MR mein number/date format check

## M4 — ~38h
- [ ] **IVR flow (Exotel sandbox)** — held SOS case pe call jaye → DTMF 1 dabaye → auto-dispatch; timeout → operator; poora state machine + tests
- [ ] **Teleconsult APIs** — room create (LiveKit token), join, end + SOAP note + e-prescription → FHIR MedicationRequest
- [ ] Labs APIs — order, status change, result attach (Observation)
- [ ] ML proxy endpoints — timeout + circuit breaker (ML band ho toh skip, log)
- [ ] SMS reminders — token reminder, ANC due, NCD monthly
- [ ] ⚡ Tests: IVR state machine (timeout, double callback)
- [ ] ⚡ Tests: teleconsult auth (patient/specialist/observer)

## M5 — ~32h
- [ ] Migrations: `teleconsults`, `lab_orders` + indexes
- [ ] LiveKit self-host (compose mein ya free tier); TURN config
- [ ] Playwright journeys 4–5: facilities request; offline queue sync
- [ ] Load test v2 — 200 log + 2k WS connections; tuning karo
- [ ] ⚡ Exotel webhook signature verify
- [ ] ⚡ Restore drill #2 (timed — < 30 min target)
- [ ] ⚡ CI mein Playwright on staging

## M6 — ~34h
- [ ] **Shadow mode live** — teeno models staging traffic pe predictions log karein (act na karein); daily dump job
- [ ] Shadow analysis notebook — rules vs ML kahan disagree karta hai, M1 ko list do
- [ ] Latency hardening — 20 rps pe bhi p95 < 300ms
- [ ] `ML_CARD.md` × 3 complete
- [ ] ⚡ Deck figures — confusion matrix + latency charts export
- [ ] ⚡ Fallback drill — ML container band karo → API smoothly skip kare

---

# 📅 WEEK 6 — 🧪 INTEGRATION WEEK (sab kuch jod ke test)

**Hafte ka target:** dono golden journeys asli phone pe chalein · chaos + load test done · P0 bugs fix · ML blend on (agar shadow clean hai).

## M1 — ~34h (ye hafte M1 board chalayega)
- [ ] Dono golden journey ke step-by-step test scripts likho aur 3 devices pe khud chalao
- [ ] **Din mein 2 baar bug triage** (11 AM / 5 PM) — P0 same day, P1 is hafte, P2 backlog; bug count chart rakho
- [ ] Chaos drills (M5 ke saath): ML/Redis/WS band karo beech flow mein — degradation video record karo
- [ ] ML blend on karo (agar shadow clean) — scoring parity tests dobara chalao
- [ ] Deck v2 live-demo screenshots + metrics ke saath
- [ ] ⚡ Q&A drill +10 (total ~40 ho jayega)
- [ ] ⚡ trust-spec final blend results se update

## M2 — ~36h
- [ ] Citizen ke saare P0/P1 bugs fix (time iske liye reserved)
- [ ] Sasta phone (₹8k Android) pe poora app chala ke dekho — touch, keyboard, screen fix karo
- [ ] 2G throttle test — SOS + wizard + facilities chalne chahiye; heavy map lazy-load
- [ ] Tutorial/Demo Mode update karo jahan UI badla hai
- [ ] ⚡ Lighthouse dobara chalao (target ≥ 90)
- [ ] ⚡ Citizen app i18n gap check (0 hona chahiye)
- [ ] ⚡ App version + build date settings/about mein

## M3 — ~34h
- [ ] Dashboard ke saare P0/P1 bugs fix
- [ ] Tablet pe queue display + projector resolution (1366×768) pe dashboard test
- [ ] WS resilience re-test — demo ke beech API kill karo → clean resync
- [ ] i18n final sweep part 2 (dashboard 0 gaps)
- [ ] ⚡ Sound alerts: toggle yaad rahe, apne action pe alert na ho
- [ ] ⚡ Charts asli staging data se check

## M4 — ~36h
- [ ] Backend ke saare P0/P1 bugs fix
- [ ] IVR live test — asli phone pe sandbox call → confirm → dispatch (timeout path bhi)
- [ ] Teleconsult test — 2 devices, alag network (hotspot + wifi), 2G pe audio-only
- [ ] API docs regenerate + har endpoint ka description check
- [ ] ⚡ Chaos drills mein mile missing rate limits add karo
- [ ] ⚡ Coverage report; sabse kharab 5 endpoints ke tests banao

## M5 — ~34h
- [ ] **Chaos day** — ML/Redis/WS/DB pool sab kill karo, expected vs actual note karo, gaps fix
- [ ] Load test final — 200 concurrent + 2k WS; p95 targets; pool/workers tune
- [ ] Playwright — saari 5 journeys CI mein green
- [ ] Prod environment banao (alag DB, secrets, domain, HTTPS)
- [ ] ⚡ UptimeRobot false alerts band karo
- [ ] ⚡ RUNBOOK reality se match karo

## M6 — ~34h
- [ ] Shadow-mode report — 1 hafte ke stats + go/no-go recommendation (written, M1 ko)
- [ ] Integration ke ML bugs fix
- [ ] Final models re-export; version bump; `/ml/health` update
- [ ] Stage demo ke assets — audio clips queue + expected outputs
- [ ] ⚡ ML service prod pe deploy + smoke test
- [] ⚡ ML_CARDs final numbers se update

---

# 📅 WEEK 7 — Security · UAT · Docs · Field test · Deck

**Hafte ka target:** ZAP scan clean · UAT sign-off · ASHA field test · saare govt docs repo mein · deck complete.

## M1 — ~32h
- [ ] **Deck v2 final** — 12 slides (problem, PS mapping, architecture, demo plan, trust layer, AI/ML, metrics, govt-readiness, cost, pilot, team, future)
- [ ] Pilot MoU final + cover letter; faculty review fix karo
- [ ] 2 bahar ke logon se UAT karao — chup raho, unka har jhijhak note karo
- [ ] Cost model slide — pilot ₹0 / district scale ₹3–5k/month
- [ ] ⚡ Full 40 Q&A drill (timed)
- [ ] ⚡ Video script final + shots assign

## M2 — ~32h
- [ ] UAT bugs fix (citizen side)
- [ ] **Low-literacy mode final** — sirf icons + Hindi voice prompts — kisi non-tech insaan se test karao
- [ ] User manual (EN) screenshots ke saath → `docs/user-manual/`
- [ ] ⚡ Privacy one-pager signup pe link karo
- [ ] ⚡ Final Lighthouse + console sweep
- [ ] ⚡ Tutorial content final UI se match karo

## M3 — ~32h
- [ ] UAT bugs fix (dashboard side)
- [ ] **Admin manual** (EN + HI) — capacity edit, queue ops, dispatch, broadcasts → `docs/admin-manual/`
- [ ] i18n final — HI/MR native speaker se check karao
- [ ] ⚡ Pehli baar dashboard kholne wale ke liye tooltip
- [ ] ⚡ Final console + visual check

## M4 — ~32h
- [ ] UAT bugs fix (backend)
- [ ] API docs final polish (descriptions, examples, error codes)
- [ ] ABDM go-live checklist doc
- [ ] ⚡ Sandbox keys rotate karo; env docs update
- [ ] ⚡ Coverage re-run; 70% se kam endpoint band

## M5 — ~34h
- [ ] **Security week** — OWASP ZAP full scan → High/Medium fix → re-scan clean; gitleaks + dependency audit clean
- [ ] DPDP compliance doc final + privacy one-pager review
- [ ] ASHA field test support — campus ke bahar asli device pe offline round (M2 ke saath); sync results log
- [ ] ⚡ Prod deploy rehearsal ek baar
- [ ] ⚡ Monitoring screenshots deck ke liye
- [ ] ⚡ RUNBOOK final + `docs/handover/` index

## M6 — ~32h
- [ ] ML final eval rerun (fixed seeds) → deck numbers
- [ ] ML ethics/limitations slide (urban dataset bias + mitigation)
- [ ] ML serving prod deploy + latency monitoring
- [ ] ⚡ Demo ke liye best 3 audio clips final
- [ ] ⚡ ML Q&A — 10 sawaal + jawab

---

# 📅 WEEK 8 — ❄️ FREEZE — Rehearse, Record, Submit
**Rule: sirf P0 bug fixes (M1 approve kare). Baaki sab rehearsal + polish.**

## Daily routine (sab)
- Subah: poora demo rehearsal (presenter rotate karo)
- Dopahar: sirf P0 fixes → har fix ke baad regression tests
- Shaam: Q&A drill (10 sawaal/day, timed)

## M1 — ~30h
- [ ] Video: 3-min demo record (screen + voiceover), edit, EN subtitles
- [ ] Deck final polish; har screenshot fresh; slide pe < 40 words
- [ ] Full Q&A drill ×2 (40 sawaal, har member apna domain bole)
- [ ] SIH portal requirements se submission match karo
- [ ] ⚡ `v1.0` tag + prod deploy; prod == staging verify
- [ ] ⚡ License/credits check

## M2 — ~28h
- [ ] Sirf P0 fixes + regression
- [ ] Demo device prep — phones charged, accounts ready, seed data, airplane-mode rehearsal
- [ ] ⚡ Prod pe final console check
- [ ] ⚡ User manual final PDF

## M3 — ~28h
- [ ] Sirf P0 fixes
- [ ] Demo seed — har tier ke cases, referrals alag states mein, live queue
- [ ] ⚡ Prod build pe final i18n check
- [ ] ⚡ Admin manual final PDF

## M4 — ~28h
- [ ] Sirf P0 fixes
- [ ] Prod smoke — asli SMS OTP, case create, WS, IVR sandbox, teleconsult
- [ ] ⚡ API docs ka offline HTML snapshot (judges ke liye)
- [ ] ⚡ Sandbox keys demo-safe limits verify

## M5 — ~28h
- [ ] Prod hardening — backups scheduled, alerts on, rollback tested
- [ ] Demo backup plan — laptop pe local docker-compose + USB; 5 min mein switch ho
- [ ] ⚡ Prod pe final ZAP quick-scan
- [ ] ⚡ README se saare docs linked

## M6 — ~28h
- [ ] Sirf P0 ML fixes (agar koi ho)
- [ ] Live ML demo rehearsal — app audio → ops feed mein classification + ML-band fallback moment
- [ ] ⚡ Prod pe `/ml/health` verify
- [ ] ⚡ ML_CARDs deck appendix mein

---

# ✅ FINAL CHECKLIST (print karke haath se tick karo)

**Product**
- [ ] Saare P0 features staging pe end-to-end chal rahe hain
- [ ] Demo Mode + tutorial kaam kar rahe (33+ tests green)
- [ ] Offline report → sync real phone pe dikha hai
- [ ] Dashboard < 1s update; map pe hospitals + chalti hui ambulance

**Engineering**
- [ ] CI green — lint, unit, integration, 5 Playwright journeys
- [ ] Load test: 200 concurrent, p95 < 500ms, 0 errors
- [ ] ZAP: koi High nahi · gitleaks clean · dependency audit clean
- [ ] Fresh clone pe `docker-compose up` teammate ke laptop pe chala
- [ ] Backup restore + chaos drills ke proof documented

**AI/ML**
- [ ] 3 models live, `/ml/health` versions + metrics dikha raha hai
- [ ] Asli confusion matrices deck mein
- [ ] ML band karo toh scoring rules se chalti rehti hai (stage pe prove kiya)

**Govt readiness**
- [ ] PS-26133 matrix — saare 24 rows covered
- [ ] DPDP doc + privacy one-pager
- [ ] ABDM/108 integration path + go-live checklist
- [ ] Pilot plan + cost table + handover kit
- [ ] User + admin manuals (EN/HI/MR PDFs)

**Presentation**
- [ ] Deck ≤ 12 slides, asli screenshots + asli numbers
- [ ] Video ≤ 3 min, EN subtitles, dono journeys
- [ ] 40-question Q&A drill ×2, har jawab < 30 sec
- [ ] 3 full rehearsals (ek hotspot pe, ek ML-kill ke saath)
- [ ] SIH portal pe deadline se 24h pehle submit

---

*Ye file roz update karo — jo measure hota hai wahi hota hai. 🚑*
