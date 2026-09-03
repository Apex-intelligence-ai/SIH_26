# 🚨 EMERGENCY MITRA — Master Project Blueprint
### Government-Ready Production Specification · Smart India Hackathon 2026 · Wardha District Pilot
**Version:** 1.0 · **Team Size:** 6 · **Status:** Prototype ✅ → Production Build 🚧

---

## 📖 Table of Contents
1. Vision & Problem Statement
2. Current Repository Status (Honest Audit)
3. Target System Architecture
4. Master Feature List
5. Final Tech Stack
6. Backend API Specification
7. Database Schema
8. AI/ML Pipeline Specification
9. Team Roles — Complete Task & Knowledge Matrix
10. Security, Privacy & Legal Compliance
11. Government Adoption Readiness
12. Testing & Zero-Defect Plan
13. DevOps & Deployment
14. Non-Functional Requirements
15. Master Timeline (8 Weeks)
16. Risk Register
17. Definition of Done — Final Checklist

---

## 1. Vision & Problem Statement

**Problem:** In rural India (pilot: Wardha, Maharashtra), emergency victims die not because
help doesn't exist, but because:
- Victims/bystanders don't know *which* facility has a free ICU bed, blood, or antivenom
- Ambulances route to the nearest facility, not the *capable* one
- Fake/malicious emergency calls waste scarce ambulances
- No pre-verified medical identity exists for unconscious patients
- Language + literacy barriers block app-based reporting

**Solution:** Emergency Mitra = a **trust-scored emergency routing network**:
1. **Citizen side** — guided emergency wizard (conscious) + zero-tap SOS (unconscious),
   evidence capture (photo/audio/GPS), legal accountability, pre-verified health identity.
2. **Trust layer** — device fingerprinting, spam guard, GPS lockdown, multi-signal
   triangulation, IVR call-back verification, weighted credibility scoring (0–100).
3. **Command side** — district duty-officer dashboard: live cases with trust chips,
   facility capacity (beds/ICU/O2/blood/antivenom), fleet GPS, broadcast alerts.
4. **AI/ML** — audio emergency classification, symptom→triage NLP, fake-report anomaly
   detection.

**Alignment:** SIH HealthTech / Disaster Management themes; UN SDG 3, 9, 11.
Pilot MoU target: District Collector, Wardha + District Health Officer.

**Success metrics (define now, measure in pilot):**

| Metric | Target |
|---|---|
| SOS → dispatch decision time | < 30 seconds |
| False report rate | < 5% (trust layer) |
| Ambulance routed to capable facility | 100% (capacity-aware) |
| App crash-free sessions | > 99.5% |
| Offline report queue success | > 95% on reconnect |

---

## 1A. 🎯 Problem Statement Alignment — SIH-26133 (Govt. of Maharashtra)

> **PS Title:** *"Accessibility and quality of public healthcare services, particularly in
> rural and underserved areas"* · Theme: MedTech/BioTech/HealthTech · Category: Software
>
> **Rule for the deck:** every PS requirement must map to a working module. Nothing in
> the PS may be left uncovered. Section 18 specifies the new modules; this is the traceability
> matrix judges will silently check.

### 1A.1 Requirement-by-Requirement Compliance Matrix

| # | PS Requirement (verbatim theme) | Emergency Mitra Solution | Status | Owner |
|---|---|---|---|---|
| P1 | Long travel distances / limited awareness of available services | Facilities Finder: live-capacity directory, GPS sort, call/directions (→ all ~60 Wardha facilities) | ✅ Built (extend data) | M2 |
| P2 | Shortages of specialists | **Assisted Teleconsultation**: PHC/ASHA-assisted video/audio call to district specialist, e-prescription | 🆕 §18 CC1 | M2+M4 |
| P3 | Irregular diagnostics | **Diagnostic Coordination**: lab order → ANM sample pickup → lab result → attached to patient record | 🆕 §18 CC5 | M4 |
| P4 | Fragmented medical records | **Longitudinal Patient Record** (FHIR R4, ABDM-aligned): one patient, every visit visible | 🆕 §18 CC3 | M4+M5 |
| P5 | Delayed referrals | **Referral Tracking**: SC→PHC→RH→DH chain, SLA timers, auto-escalation, completion metric | 🆕 §18 CC4 | M4 |
| P6 | Patients move between facilities without continuity | Shared FHIR record + referral chain + encounter history visible at every level | 🆕 §18 CC3+CC4 | M4 |
| P7 | Constrained staff & equipment at PHCs | **Digital Triage + Queue Management**: prioritize who needs the PHC most; token system ends crowding | 🆕 §18 CC2 (+M6 Model B) | M3+M6 |
| P8 | Connectivity constraints | Offline-first PWA: queued reports, cached facilities, background sync | ✅ Built (W4 hardening) | M2 |
| P9 | Language barriers | 100% EN/हिंदी/मराठी + voice prompts | 🟡 70% → complete | M3 |
| P10 | Health literacy | Low-literacy icon mode + voice + interactive tutorial + Demo Mode | ✅ Built (extend) | M2 |
| P11 | Affordability | Free public PWA — no app store, <300KB per SOS, works on ₹8k phones | ✅ By design | M2 |
| P12 | Timely access | **Emergency Escalation** (SOS + wizard + trust-scored dispatch) — our core | ✅ Built | M1 |
| P13 | Appointment & queue management | **Token/Queue system**: app/ASHA/SMS token, live queue display, ETA | 🆕 §18 CC2 | M3 |
| P14 | Accountability | Trust layer (anti-fake scoring, BNS §54 acks, audit logs) + **Facility Dashboards** | ✅ Built | M1+M3 |
| P15 | Frontline health worker support | **ASHA/ANM Mode**: assisted UI, offline house-visit capture, task lists, bulk sync | 🆕 §18 CC8 | M2+M4 |
| P16 | Emergency escalation | SOS + credibility scoring + IVR verification + dispatch | ✅ Built (core) | M1 |
| P17 | Interoperable records on approved standards | **HL7 FHIR R4** resources + ABDM HIP linkage + consent artifacts | 🆕 §18 CC3 | M4+M5 |
| P18 | Multilingual interaction | i18n + voice (Hindi) | 🟡 → complete | M3 |
| P19 | Low-connectivity environments | Offline-first + SMS fallback for tokens/reminders | ✅ + 🆕 CC2 | M2+M4 |
| P20 | Outcome: reduced travel & waiting time | Teleconsult + queue ETA + nearest-capable routing | 🆕 measured | M1 |
| P21 | Outcome: earlier consultation | Digital triage severity + teleconsult | 🆕 | M6 |
| P22 | Outcome: improved referral completion | Referral SLA tracking + escalation | 🆕 CC4 | M4 |
| P23 | Outcome: better maternal/child/chronic follow-up | **High-Risk Patient Follow-Up registries** (ANC, immunization, NCD) + ASHA task generation | 🆕 §18 CC7 | M4+M6 |
| P24 | Outcome: medicine/diagnostic availability visibility | **Medicine Availability** module (drug stock, low-stock alerts, "who has it" search) | 🆕 §18 CC6 | M3+M5 |

### 1A.2 Extras Beyond the PS (our differentiators)
1. **Anti-fake trust layer** — device fingerprinting, credibility scoring, BNS §54
   legal accountability, IVR call-back verification *(no other team will have this)*
2. **ML: audio emergency classifier + fraud anomaly detection**
3. **Interactive hands-on tutorial + Demo Mode** (train ASHAs/duty officers in-app)
4. **Live facility capacity + blood/antivenom visibility** (feeds P24 too)
5. **Zero-tap SOS for unconscious victims** — beyond "appointment healthcare"

**Pitch line:** *"SIH-26133 asks for continuity of care. We deliver it end-to-end —
and we are the only team that also answers the emergency escalation clause with a
trust-scored dispatch system already tested against fake reports."*


---

## 2. Current Repository Status (Honest Audit)

**Every member must memorize this table — it is the gap between today and govt-ready.**

| Module | File(s) | Status | Production Work Needed | Owner |
|---|---|---|---|---|
| Citizen UI (hero, wizard, SOS) | `index.html`, `js/app.js` | ✅ Real UI, mock flows | PWA, offline, i18n 100% | M2 |
| Command Dashboard | `js/admin.js` | ✅ UI done, static data | WebSocket live, real map | M3 |
| Translations | `js/translations.js` | 🟡 Partial EN/HI/MR | Complete all strings | M3 |
| Trust: device/spam guard | `js/trust/device-trust.js` | ✅ Working | Server-side correlation | M4 |
| Trust: evidence capture | `js/trust/evidence-capture.js` | ✅ Camera/GPS/audio 5s | Upload + encryption | M2+M4 |
| Trust: credibility engine | `js/trust/credibility-engine.js` | ✅ Rules, 13 tests pass | + ML fraud blend | M1+M6 |
| Account Hub | `js/account.js` | ✅ UI; OTP/ABHA **mock** | Real MSG91, ABDM sandbox | M2+M4 |
| Facilities Finder | `js/facilities.js` | ✅ 11 facilities, haversine | PostGIS backend, live feed | M2+M5 |
| Interactive Tutorial | `js/tutorial.js` | ✅ Complete | Content updates only | M2 |
| Tests | `test/*.js` (33 passing) | ✅ | E2E, load, security suites | M5 |
| Backend | — | ❌ None | Build all APIs | M4 |
| Database | localStorage only | ❌ None | PostgreSQL + PostGIS | M5 |
| AI/ML | rule-based only | ❌ None | 3 models | M6 |
| Deployment | file:// | ❌ None | Cloud + Docker + CI/CD | M5 |


---

## 3. Target System Architecture

```
┌──────────────────────── CITIZEN (PWA) ────────────────────────┐
│  Emergency Wizard · SOS · Facilities · Account · Tutorial      │
│  Service Worker: offline report queue + cached facility data   │
└──────────────┬─────────────────────────────────────────────────┘
               │ HTTPS REST + WSS (live updates)
┌──────────────▼─────────────── API GATEWAY (FastAPI) ───────────┐
│  Auth(JWT+OTP) · Cases · Facilities · Evidence · Trust · WS    │
│  Rate limiting (Redis) · Validation (Pydantic) · Audit logs    │
└───┬──────────────┬──────────────┬──────────────┬───────────────┘
    │              │              │              │
┌───▼────┐   ┌─────▼─────┐  ┌─────▼──────┐  ┌────▼──────────┐
│Postgres│   │  Redis    │  │ ML Service │  │ Object Store  │
│+PostGIS│   │ OTP/cache │  │ (FastAPI)  │  │ (S3-compat:   │
│ (M5)   │   │  queues   │  │ audio/NLP/ │  │  evidence)    │
└────────┘   └───────────┘  │ fraud (M6) │  └───────────────┘
                            └────────────┘
  External: MSG91 (SMS/OTP) · Exotel/Twilio (IVR) · ABDM sandbox
            · Map tiles (OSM/MapmyIndia) · 108 dispatch adapter*
┌────────────────────── COMMAND DASHBOARD (PWA) ─────────────────┐
│  Live cases (WS) · Map view · Capacity mgmt · Fleet · Broadcast │
└─────────────────────────────────────────────────────────────────┘
```

\* 108 integration: attempt official API; else a clean **adapter pattern** +
manual-dispatch bridge during pilot (judges accept this with a signed pilot plan).

**Architecture principles:**
1. **Offline-first citizen** — nothing in the app may hard-require network.
2. **Evidence immutability** — hash + timestamp at capture, append-only storage.
3. **Graceful degradation** — ML down → rules-only scoring; IVR down → operator call.
4. **Stateless API** — horizontal scale; all state in Postgres/Redis.
5. **Zero-regression discipline** (already followed in repo) — keep test suites green.

---

## 4. Master Feature List

### 4.1 Citizen App (PWA) — Owner: M2 (i18n: M3)
| # | Feature | Priority |
|---|---|---|
| C1 | Guided Emergency Wizard: type → questions → evidence → file | P0 |
| C2 | Zero-tap Bystander SOS: legal ack → GPS → evidence chain | P0 |
| C3 | Offline mode: queue reports, auto-sync on reconnect | P0 |
| C4 | Facilities finder: live capacity, GPS sort, call/directions | P0 |
| C5 | Account Hub: OTP, ABHA link, DigiLocker, medical profile | P0 |
| C6 | Interactive tutorial + Demo Mode (✅ built) | P1 |
| C7 | 100% i18n: EN / हिंदी / मराठी | P0 |
| C8 | PWA installability + push notifications (case status) | P1 |
| C9 | Low-literacy mode: icon-only flow + voice prompts (Web Speech) | P1 |
| C10 | Live blood availability view | P1 |

### 4.2 Command Dashboard — Owner: M3
| # | Feature | Priority |
|---|---|---|
| D1 | Live case feed (WebSocket) with 🛡 trust chips | P0 |
| D2 | Case detail: evidence viewer, verify/dispatch/hold actions | P0 |
| D3 | Capacity mgmt: beds/ICU/O2/OT/blood/antivenom editing | P0 |
| D4 | Live map: cases, ambulances, facilities (Leaflet+PostGIS) | P0 |
| D5 | Fleet: ambulance status, assignment, GPS trail playback | P1 |
| D6 | Broadcast alerts (outbreak/weather) → citizen push | P1 |
| D7 | Patients directory w/ pre-verified records (✅ UI exists) | P0 |
| D8 | Auto shift-handover PDF report | P2 |
| D9 | RBAC: duty officer / district admin / hospital user | P0 |

### 4.3 Trust & Safety Layer — Owners: M4 (server), M6 (ML), M5 (audit)
| # | Feature | Priority |
|---|---|---|
| T1 | Credibility scoring 0–100 + tier routing (✅ rules exist) | P0 |
| T2 | Server device fingerprint + cross-report correlation | P0 |
| T3 | Geo-validation: report within district bounds + accuracy check | P0 |
| T4 | Triangulation: ≥3 independent reports in 50m/5min → boost | P0 |
| T5 | IVR call-back verification → auto-dispatch on confirm | P1 |
| T6 | ML fake-report anomaly score, blended with rules | P1 |
| T7 | Audio emergency classifier (scream/crash/gunshot) | P1 |
| T8 | Evidence chain-of-custody: SHA-256 hash, append-only log | P0 |
| T9 | Legal ack records (BNS §54) + full audit trail | P0 |
| T10 | Volunteer first-responder ping (500m radius) | P2 |


---

## 5. Final Tech Stack

| Layer | Choice | Why (pitch-ready answer) |
|---|---|---|
| Citizen + Dashboard frontend | HTML5 + Tailwind + vanilla JS → **PWA** | Zero-build keeps rural low-end phones fast; already built |
| Backend API | **Python FastAPI** | Async (many concurrent SOS), Pydantic validation, auto OpenAPI docs |
| Realtime | **WebSockets** (FastAPI native) | Live dashboard without polling |
| Database | **PostgreSQL 15 + PostGIS** | Geospatial queries (triangulation, nearest-facility) are first-class |
| Cache/queue | **Redis** | OTP TTL, rate limiting, report-dedup windows, Celery broker |
| ML serving | **FastAPI microservice + ONNX Runtime** | Decoupled scale; ONNX = framework-independent |
| Evidence storage | **S3-compatible object store** (Cloudflare R2 / MinIO) | Cheap, encrypted, lifecycle rules |
| Auth | **JWT (short-lived) + refresh**, OTP via **MSG91** | Indian provider, judges recognize it |
| IVR | **Exotel** (Indian) or Twilio sandbox | Call-back verification flow |
| Maps | **Leaflet + OSM/MapmyIndia tiles** | MapmyIndia = govt-aligned (ISRO) — mention this |
| Push | **Web Push (VAPID)** | No app-store dependency |
| CI/CD | **GitHub Actions** | Tests + lint + deploy on merge |
| Hosting | **Render / Railway / AWS free tier** | Free tier sustains pilot + demo |
| Monitoring | **Sentry (errors) + UptimeRobot** | Crash-free > 99.5% must be *measured* |
| Containers | **Docker + docker-compose** | One-command reproducible demo |

---

## 6. Backend API Specification

Base: `https://api.emergencymitra.in/v1` · Auth: `Authorization: Bearer <JWT>`
All errors: `{ "error": { "code", "message", "trace_id" } }` · All IDs: UUIDv7.

### 6.1 Auth & Account (M4)
| Method | Path | Purpose |
|---|---|---|
| POST | `/auth/otp/request` | Send OTP (phone). Body: `{phone}`. Rate-limited 3/10min |
| POST | `/auth/otp/verify` | Verify → JWT + refresh. Body: `{phone, otp}` |
| POST | `/auth/refresh` | Rotate access token |
| GET/PATCH | `/me` | Get/update profile (name, age, gender, blood, allergies, district, emergency contact) |
| POST | `/me/abha/link` | ABHA format check + ABDM sandbox verify |
| POST | `/me/digilocker/init` + `/callback` | eKYC flow |
| GET | `/me/trust` | Return identity-strength breakdown (mirrors UI meter) |

### 6.2 Cases (M4)
| Method | Path | Purpose |
|---|---|---|
| POST | `/cases` | File case (wizard/triage). Body: type, subtype, geo, answers{}, evidence refs. Server computes trust score |
| POST | `/cases/sos` | Bystander SOS: minimal body + legal_ack_id. Server attaches device fingerprint |
| GET | `/cases/{id}` | Citizen status tracking (restricted fields) |
| POST | `/cases/{id}/evidence` | Multipart upload (photo/audio) → hash stored |
| POST | `/cases/{id}/ack` | Legal acknowledgement record (BNS §54 text version hash) |
| GET | `/cases/{id}/ivr/status` | IVR call-back state machine |
| PATCH | `/ops/cases/{id}/status` | **Ops only**: verify/dispatch/hold/resolve |
| GET | `/ops/cases?status=&tier=` | Ops list w/ filters |
| POST | `/ops/cases/{id}/dispatch` | Assign ambulance + facility (capacity-checked) |

### 6.3 Facilities & Fleet (M4 + M5 data)
| Method | Path | Purpose |
|---|---|---|
| GET | `/facilities?lat=&lng=&radius_km=&type=&service=` | PostGIS `ST_DWithin`, sorted by distance, includes live capacity |
| GET | `/facilities/{id}` | Full detail incl. blood units, antivenom |
| PATCH | `/ops/facilities/{id}/capacity` | Hospital user updates counts (auth-scoped) |
| GET | `/blood/{district}` | Aggregated blood bank units |
| GET | `/fleet?bbox=` | Ambulance positions (WS preferred) |
| POST | `/ops/fleet/{id}/assign` | Assign to case |
| GET | `/volunteers/nearby?lat=&lng=` | 500m ping list (ops) |

### 6.4 Realtime & Misc (M4)
| Method | Path | Purpose |
|---|---|---|
| WS | `/ws/ops` | Dashboard: `case.created`, `case.updated`, `fleet.tick`, `alert.broadcast` |
| WS | `/ws/citizen/{case_id}` | Status updates to reporter |
| POST | `/broadcasts` | Ops: send district alert (push + in-app) |
| GET | `/health` | Liveness (uptime monitors) |
| GET | `/meta/config` | Feature flags, scoring weights version, legal text hash |

**API rules (zero-mistake discipline):**
- Every endpoint: Pydantic schema, 400/401/403/404/409/429 handled, logged with trace_id
- Idempotency keys on all POSTs that create resources (`Idempotency-Key` header)
- Pagination: cursor-based (`?cursor=&limit=`) — never offset on big tables
- Version header `X-API-Version`; breaking changes → `/v2`


---

## 7. Database Schema (PostgreSQL + PostGIS)

```sql
-- USERS ------------------------------------------------------------
CREATE TABLE users (
  id            UUID PRIMARY KEY,            -- UUIDv7
  phone         VARCHAR(15) UNIQUE NOT NULL, -- E.164
  name          VARCHAR(120),
  age           SMALLINT CHECK (age BETWEEN 0 AND 120),
  gender        VARCHAR(10),
  blood_group   VARCHAR(4),
  allergies     TEXT,
  district      VARCHAR(60) DEFAULT 'Wardha',
  emergency_contact_name  VARCHAR(120),
  emergency_contact_phone VARCHAR(15),
  abha_id       VARCHAR(40),                 -- masked in API responses
  abha_verified BOOLEAN DEFAULT FALSE,
  digilocker_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  role          VARCHAR(20) DEFAULT 'citizen', -- citizen|ops|admin|hospital|volunteer
  facility_id   UUID,                        -- for role=hospital
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- DEVICES (trust) --------------------------------------------------
CREATE TABLE devices (
  id           UUID PRIMARY KEY,
  fingerprint  VARCHAR(64) UNIQUE NOT NULL,  -- sha256 of client signals
  first_seen   TIMESTAMPTZ, last_seen TIMESTAMPTZ,
  report_count_24h INT DEFAULT 0,
  flagged      BOOLEAN DEFAULT FALSE
);

-- CASES ------------------------------------------------------------
CREATE TABLE cases (
  id           UUID PRIMARY KEY,
  reporter_id  UUID REFERENCES users(id),
  device_id    UUID REFERENCES devices(id),
  mode         VARCHAR(12) NOT NULL,         -- wizard|sos|triage
  emg_type     VARCHAR(60) NOT NULL,         -- 'Snakebite', 'Animal Bite > Dog'
  subtype      VARCHAR(60),
  location     GEOGRAPHY(POINT,4326) NOT NULL,
  gps_accuracy_m FLOAT,
  answers      JSONB DEFAULT '{}',
  trust_score  SMALLINT,                     -- 0-100 (server-computed)
  trust_tier   VARCHAR(12),                  -- CRITICAL|HIGH|URGENT|MEDIUM|STABLE|LOW
  trust_factors JSONB,                       -- [{label, points}] audit of score
  ml_fraud_score FLOAT,                     -- 0-1 (M6 model)
  status       VARCHAR(20) DEFAULT 'pending',-- pending|verifying|dispatched|en_route|in_er|resolved|false_alarm
  facility_id  UUID REFERENCES facilities(id),
  ambulance_id UUID,
  legal_ack_id UUID,
  idempotency_key VARCHAR(64) UNIQUE,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX cases_geo_gix ON cases USING GIST (location);
CREATE INDEX cases_status_idx ON cases (status, created_at DESC);

-- EVIDENCE (immutable) ----------------------------------------------
CREATE TABLE evidence (
  id          UUID PRIMARY KEY,
  case_id     UUID REFERENCES cases(id),
  kind        VARCHAR(10),                  -- photo|audio|wearable
  object_key  VARCHAR(200) NOT NULL,        -- S3 key
  sha256      CHAR(64) NOT NULL,            -- integrity chain
  captured_at TIMESTAMPTZ NOT NULL,
  uploaded_at TIMESTAMPTZ DEFAULT now(),
  meta        JSONB                         -- EXIF-stripped metadata, audio len
);

-- LEGAL ACKS (append-only) -------------------------------------------
CREATE TABLE legal_acks (
  id          UUID PRIMARY KEY,
  case_id     UUID, user_id UUID, device_id UUID,
  legal_text_hash CHAR(64) NOT NULL,       -- versioned BNS §54 notice
  ip INET, user_agent TEXT,
  ack_at      TIMESTAMPTZ DEFAULT now()
);

-- FACILITIES + CAPACITY ----------------------------------------------
CREATE TABLE facilities (
  id UUID PRIMARY KEY, name VARCHAR(150) NOT NULL,
  type VARCHAR(20),                          -- hospital|phc|blood_bank|diagnostic|maternity
  tier VARCHAR(80), address VARCHAR(250), phone VARCHAR(15),
  location GEOGRAPHY(POINT,4326) NOT NULL,
  hours VARCHAR(20),                         -- '24/7' or '09-16'
  district VARCHAR(60) DEFAULT 'Wardha'
);
CREATE TABLE facility_capacity (
  facility_id UUID REFERENCES facilities(id),
  icu_avail SMALLINT, icu_total SMALLINT,
  o2_avail SMALLINT,  o2_total SMALLINT,
  gen_avail SMALLINT, gen_total SMALLINT,
  emerg_avail SMALLINT, emerg_total SMALLINT,
  antivenom_vials SMALLINT DEFAULT 0,
  blood JSONB DEFAULT '{}',                  -- {"O+":12,"A-":0,...}
  updated_by UUID, updated_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (facility_id)
);

-- FLEET, OTP AUDIT, TRIANGULATION WINDOW ------------------------------
CREATE TABLE ambulances (
  id UUID PRIMARY KEY, reg_no VARCHAR(20) UNIQUE,
  type VARCHAR(6),                           -- ALS|BLS
  driver_name VARCHAR(120), driver_phone VARCHAR(15),
  status VARCHAR(15) DEFAULT 'available',    -- available|en_route|off_duty
  current_case_id UUID,
  location GEOGRAPHY(POINT,4326),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE otp_audit (
  phone VARCHAR(15), sent_at TIMESTAMPTZ DEFAULT now(),
  ip INET, result VARCHAR(8)                 -- sent|verified|failed
);
CREATE TABLE audit_log (                    -- append-only, ops actions
  id BIGSERIAL PRIMARY KEY, actor_id UUID, action VARCHAR(40),
  entity VARCHAR(30), entity_id UUID, detail JSONB,
  at TIMESTAMPTZ DEFAULT now()
);
```

**Key queries (Member 5 must own + EXPLAIN these):**
- Triangulation: `SELECT count(*) FROM cases WHERE emg_type=$1 AND status IN ('pending','verifying') AND created_at > now()-interval '5 min' AND ST_DWithin(location, $point, 50);`
- Nearest capable facility: join `facilities` + `facility_capacity` with `ST_DWithin(location,$point, 25000) ORDER BY location <-> $point` and `icu_avail > 0` filter.


---

## 8. AI/ML Pipeline Specification

**Golden rule for judges:** every model must have (a) a real dataset source, (b) a
confusion matrix, (c) a deployment path, (d) a "model down → rules still work" story.

### 8.1 Model A — Audio Emergency Classifier (M6)
- **Purpose:** 5s audio clip (already captured by `evidence-capture.js`) → class in
  `{scream, crash, gunshot, glass, normal_noise, speech_calm}`
- **Dataset:** UrbanSound8K (8732 clips), ESC-50, AudioSet subsets (scream/crash classes);
  augment: pitch shift, background noise from ESC-50 noise set, time-stretch
- **Pipeline:** resample 16kHz → mel-spectrogram (128 mels) → CNN
  (4-block Conv2D + BN + dropout) or fine-tune YAMNet/AST embedding head
- **Metrics:** macro-F1 ≥ 0.80 target; **per-class recall for scream/crash ≥ 0.85**
  (missing a real scream is worse than a false positive — state this explicitly)
- **Serving:** export ONNX → FastAPI `/ml/audio/classify` (multipart 5s webm/wav) →
  returns `{class, confidence, latency_ms}`; p95 < 300ms
- **Fallback:** classifier down → skip audio points, rules-only score (already safe)

### 8.2 Model B — Symptom→Triage NLP (M6)
- **Purpose:** free-text symptom description (EN/Hinglish) → emergency type +
  severity 1–5 + red-flag boolean (e.g., "snake bite 20 min ago, vomiting" →
  Snakebite, severity 5)
- **Approach:** zero-shot/few-shot with an instruction LLM API (strict JSON schema
  output) OR fine-tune IndicBERT/mBERT classifier on ~2k synthetic + curated samples.
  **LLM API path is faster and demo-safe; keep local classifier as stretch.**
- **Guardrails:** confidence < 0.6 → return "uncertain" and keep user's manual choice;
  never let NLP *override* user selection — only suggest
- **Eval:** 100-case golden set hand-labeled by team; accuracy ≥ 85% on golden set

### 8.3 Model C — Fake-Report Anomaly Detection (M6)
- **Purpose:** probability a case is malicious/nuisance → blended into trust score
  (your existing −40 spam penalty stays as the rule-based component)
- **Features:** device report frequency (24h), inter-report intervals, GPS jitter
  entropy, text similarity vs reporter's past reports (TF-IDF cosine), account age,
  verification level, time-of-day rarity
- **Model:** Isolation Forest / gradient boosting on ~50k synthetic+seeded rows;
  **no real user data needed pre-launch**
- **Metric:** precision ≥ 0.9 at the "flag" threshold — false-flagging a real victim
  is the worst failure mode; tune threshold accordingly
- **Blending formula (M1 owns):** `final = clamp(rule_score − 40×ml_fraud, 0, 100)`,
  factor logged in `trust_factors` for audit

### 8.4 ML Ops
- Versioned models (`model_v1.onnx` + `metrics.json` in repo LFS/object store)
- `/ml/health` + model metadata endpoint (version, trained_on, metrics)
- Shadow mode first: log predictions, don't act — 1 week, then enable blending
- Retrain trigger: flag-rate drift > 2× baseline


---

## 9. Team Roles — Complete Task & Knowledge Matrix

> Format per member: **Mission · Every task · Knowledge required (with depth) ·
> Tools (★ = must master) · Deliverables & acceptance · Boundary (what NOT to do)**

---

### 👑 MEMBER 1 — Team Leader · Systems Architect · Scoring Owner

**Mission:** Own the end-to-end emergency data flow, the trust-scoring spec, and final
delivery. Nobody else is accountable for "does the whole thing hold together."

**Every task:**
1. Write & maintain `ARCHITECTURE.md` + end-to-end sequence diagram for one SOS
2. Define + version the **scoring spec** (`trust-spec-v1.md`): every weight
   (OTP+26, DigiLocker+28, camera+20, GPS+15, memo+8, triangulation+12–21, spam−40,
   no-GPS−5, zero-evidence−10) with a one-line justification each — judges WILL ask
   "why +20 for a photo?"
3. Own the ML-blend formula + tier routing table (≥80 auto-dispatch, 40–79 operator
   confirm, <40 volunteer verify) and keep `credibility-engine.js` tests green
4. API contract arbitration — when M4 and M2 disagree, you decide within 1 hour
5. GitHub project board: issues, assignments, weekly demo cadence
6. Integration days: run full E2E on real devices (see timeline, W6)
7. Pitch deck (12 slides), 3-min demo video script, judge Q&A drill sheet (30 likely
   questions with written answers)
8. Pilot MoU draft + letters to District Collector / District Health Officer

**Knowledge required (depth):**
- System design fundamentals: request lifecycle, statelessness, caching, queues —
  can whiteboard "what happens when 500 SOS hit at once"
- Reading fluency in **both JS and Python** (review PRs in both; don't write features)
- Auth flows: OTP → JWT → RBAC end-to-end
- ML literacy: precision/recall, F1, confusion matrix, overfitting — enough to
  challenge M6's choices
- Compliance awareness: DPDP Act 2023 basics, ABDM building blocks (HIP/HIU concepts)

**Tools:** ★ GitHub (projects, PR review, branch protection) · ★ Postman ·
★ Excalidraw/draw.io · ★ Notion/Trello · Slides/Canva · ngrok · Sentry dashboard

**Deliverables & acceptance:**
- [ ] `trust-spec-v1.md` reviewed by all 5 other members
- [ ] Deck architecture diagram matches deployed reality (judge-checkable)
- [ ] Stage demo: phone → SOS → server → dashboard dispatch in <30s
- [ ] Team completed 30-question Q&A drill twice

**Boundary:** You do NOT write feature code. If you are, the team has no leader.

---

### 🎨 MEMBER 2 — Frontend Lead · Citizen App & PWA

**Mission:** The citizen's experience is the product. Own hero → wizard → SOS →
facilities → account → tutorial.

**Every task:**
1. Thin `api.js` client (fetch wrapper: auth header, retries, offline queue) — shared with M3
2. **PWA**: manifest, service worker (Workbox), install prompt, offline page
3. **Offline report queue**: IndexedDB outbox → background sync on reconnect;
   visible "queued ✓" state (feature C3)
4. Evidence capture hardening: permission-denial UX, torch toggle, audio countdown
   polish, EXIF-strip before upload (with M5)
5. Web Push: case status notifications ("Ambulance dispatched — ETA 8 min")
6. Account Hub → real MSG91 OTP + ABHA/DigiLocker sandbox wiring (M4's APIs)
7. Facilities finder → live `/facilities` endpoint; keep haversine for offline cache
8. Low-literacy mode: icon-only wizard variant + Web Speech voice prompts (Hindi)
9. Keep tutorial/Demo Mode in sync when flows change
10. Lighthouse ≥ 90 (Performance + Accessibility) on mid-range Android; 2G-throttle test

**Knowledge required (depth):**
- **Strong:** HTML/CSS (grid/flex, animations, safe-area), vanilla JS (async/await,
  Fetch, error handling), DOM performance
- **Strong:** PWA stack — service-worker lifecycle, Cache Storage, IndexedDB,
  Background Sync, Web Push (VAPID)
- **Working:** `getUserMedia`, `MediaRecorder`, `Geolocation` (watchPosition, accuracy)
- **Working:** i18n patterns, Web Speech API, Lighthouse profiling
- **Aware:** JWT storage trade-offs, CORS

**Tools:** ★ Chrome DevTools (device mode, throttle, Lighthouse) · ★ Workbox ·
★ IndexedDB · ★ Tailwind · ★ Git · Figma · Web Push tester · BrowserStack free

**Deliverables & acceptance:**
- [ ] Airplane-mode demo: file offline → reconnect → auto-syncs
- [ ] Lighthouse Perf ≥ 90, A11y ≥ 90, PWA installable
- [ ] Full flow on a ₹8k Android, Chrome + Firefox
- [ ] 0 console errors during a complete stage demo

**Boundary:** Don't touch dashboard internals (M3) or backend; consume APIs.


---

### 📊 MEMBER 3 — Frontend · Command Dashboard + Data-Viz + i18n

**Mission:** Make the duty officer faster than a phone call. Real-time, map-first.

**Every task:**
1. Replace static arrays in `admin.js` with WebSocket-driven store (`/ws/ops`):
   live case feed, optimistic status updates, reconnect + snapshot-then-delta logic
2. **Live map**: Leaflet + OSM/MapmyIndia tiles; case markers colored by tier,
   ambulance positions (WS ticks), facility markers with capacity popups
3. Case-detail modal: evidence viewer (photo + audio player), trust-factor breakdown
   (render `trust_factors`), action buttons (verify/dispatch/hold) → ops APIs with
   confirmation + error states
4. Capacity management UI: hospital users edit counts, optimistic updates, conflicts
5. Fleet panel: assignment flow, status changes, GPS trail playback (polyline)
6. Broadcast composer: district alert → push + in-app banner
7. RBAC-aware UI: hide/disable actions per role
8. Shift-handover PDF: jsPDF auto-summary of open cases (D8)
9. **i18n completion**: sweep every string (dashboard + citizen) into
   `translations.js`; HI/MR reviewed by a native speaker; persistence
10. Charts: cases/day, response-time trend (Chart.js) for the impact slide

**Knowledge required (depth):**
- **Strong:** JS/CSS base + **WebSocket patterns** (heartbeat, backoff reconnect,
  snapshot-then-delta sync)
- **Strong:** Leaflet — markers, popups, GeoJSON layers, fitBounds
- **Working:** Chart.js, jsPDF, optimistic-UI + conflict resolution
- **Working:** RBAC-aware rendering, `Intl` date/number formatting
- **Aware:** GeoJSON shape of M5's PostGIS payloads

**Tools:** ★ Leaflet + tile providers · ★ WebSocket debugging (DevTools, wscat) ·
★ Chart.js · ★ Tailwind · ★ Git · jsPDF · Figma

**Deliverables & acceptance:**
- [ ] Two browsers: file case in one → appears in dashboard < 1s
- [ ] Map: case + 3 nearest facilities + ambulance moving (simulated GPS)
- [ ] Kill server mid-session → dashboard reconnects and resyncs
- [ ] 20 random strings spot-checked in EN/HI/MR — all translated

**Boundary:** Don't modify citizen flows; share `api.js` with M2, never fork it.

---

### ⚙️ MEMBER 4 — Backend Engineer · APIs, Auth, Integrations, Realtime

**Mission:** Every mock in the repo becomes a real service. The API is the product's spine.

**Every task:**
1. FastAPI project scaffold: app factory, settings, structured logging (trace_id),
   error handlers, Dockerfile
2. **Auth**: `/auth/otp/*` with MSG91 (sandbox first), JWT access(15m)+refresh(30d),
   refresh rotation, device binding; rate limits (Redis): OTP 3/10min, cases 5/10min
3. **Cases API**: create (wizard/sos/triage), status machine
   (`pending→verifying→dispatched→en_route→in_er→resolved|false_alarm`), idempotency
   keys, server-side trust scoring (port `credibility-engine.js` rules to Python —
   keep both in sync via shared test vectors)
4. **Trust server-side**: device fingerprint registry, geo-validation (district
   polygon check), triangulation query (50m/5min), spam rate-limits
5. **Evidence upload**: presigned S3/MinIO URLs, SHA-256 verification, EXIF strip
   (server-side re-encode), size/type limits
6. **IVR call-back** (Exotel sandbox): outbound call → DTMF 1 confirms → webhook →
   case auto-dispatch; full state machine + timeout → operator review
7. **WebSockets**: `/ws/ops` (rooms by district), `/ws/citizen/{case}`; auth on
   connect; heartbeat; broadcast events
8. **RBAC middleware**: citizen/ops/admin/hospital/volunteer scopes on every route
9. **ABDM sandbox + DigiLocker**: attempt real sandbox; else clean adapter with
   recorded fixtures + documented "go-live checklist"
10. OpenAPI docs auto-published; seed script for demo data (facilities, fleet, users)
11. Load test: 200 concurrent case creations (k6/Locust) — API stays < 500ms p95

**Knowledge required (depth):**
- **Strong:** Python + FastAPI (dependency injection, Pydantic v2, async), REST design
- **Strong:** JWT/auth security (rotation, revocation, scope checks), rate limiting
- **Strong:** SQL via SQLAlchemy (or equivalent ORM) + raw SQL for PostGIS queries
- **Working:** WebSockets at scale (connection manager, rooms), Celery/Redis tasks,
  file uploads + object storage, Docker
- **Working:** MSG91/Exotel/Twilio integration patterns (webhooks, signatures)
- **Aware:** OWASP API Top 10 (BOLA, broken auth, mass assignment)

**Tools:** ★ FastAPI + Pydantic · ★ PostgreSQL/psql · ★ Redis · ★ Postman/k6 ·
★ Docker · ★ Git · MSG91 + Exotel sandboxes · Sentry · ngrok

**Deliverables & acceptance:**
- [ ] OpenAPI docs complete; every endpoint has ≥ 1 happy + 1 failure test (pytest)
- [ ] SOS → case row in DB → dashboard WS event, < 500ms p95 locally
- [ ] OTP flow works on a real phone number (demo on stage, SIM in airplane-safe mode)
- [ ] IVR sandbox call confirms a held case → status flips to dispatched
- [ ] k6: 200 concurrent creators, 0 errors, p95 < 500ms

**Boundary:** No frontend work except the API contract doc; ML endpoints are M6's
service — you just proxy them.


---

### 🗄️ MEMBER 5 — Database · DevOps · Security & Compliance

**Mission:** Data integrity, geospatial correctness, deployment reliability, and the
privacy story that makes a health product government-deployable.

**Every task:**
1. Postgres + PostGIS schema (Section 7) with migrations (Alembic); seed script:
   all Wardha facilities w/ real coordinates (extend your 11 to ~60 from data.gov.in
   / state health directory), fleet, test users
2. Own + EXPLAIN the three critical geospatial queries (triangulation 50m/5min,
   nearest-capable-facility, volunteers 500m) — GiST indexes verified
3. Evidence chain-of-custody: object-store lifecycle (encrypt at rest), SHA-256
   verify endpoint, append-only `audit_log` + `legal_acks` (no UPDATE/DELETE grants)
4. **Backups + restore drill**: nightly pg_dump to object storage; actually restore
   once and record it (judges/collectors ask "what if server dies?")
5. **Deployment**: docker-compose (api, ml, db, redis, minio) → cloud (Render/Railway/
   AWS); staging + prod environments; HTTPS everywhere; UptimeRobot + Sentry wired
6. **CI/CD** (GitHub Actions): lint (ruff/eslint) → unit tests → build → migrate →
   deploy on main; PR previews if possible
7. **Security hardening**: headers (CSP, HSTS), CORS allowlist, secrets in env
   (never in repo — run gitleaks in CI), dependency audit (pip-audit/npm audit)
8. **DPDP Act 2023 compliance doc**: what data we collect, purpose, retention
   (evidence 90 days then purge, medical profile until deletion request), consent
   flows, deletion request handling
9. **Testing ownership**: Playwright E2E (5 golden journeys), k6 load scripts,
   test-coverage report in CI badge
10. Runbook: `RUNBOOK.md` — restart, restore, rotate secrets, "ML service down" mode

**Knowledge required (depth):**
- **Strong:** SQL + schema design (normalization, constraints, indexes), PostGIS
  (SRID 4326 vs 3857, GiST, `ST_DWithin`, KNN `<->`)
- **Strong:** Linux CLI, Docker + compose, env/config management, HTTPS/TLS basics
- **Strong:** backup/restore, migration discipline (forward-only, tested rollback)
- **Working:** GitHub Actions, Redis ops, object storage (S3 API), basic pentest
  checklist (auth bypass, IDOR, injection scans with ZAP)
- **Working:** DPDP Act 2023 data-principal rights; health-data sensitivity
  classification
- **Aware:** ABDM health-data policies, HIP obligations

**Tools:** ★ PostgreSQL/PostGIS + DBeaver/psql · ★ Docker + compose · ★ GitHub
Actions · ★ Alembic · Render/Railway/AWS · MinIO or R2 · k6 · OWASP ZAP · gitleaks ·
Sentry/UptimeRobot

**Deliverables & acceptance:**
- [ ] `docker-compose up` → entire stack running in ≤ 3 commands, fresh machine
- [ ] Triangulation query < 20ms on 100k synthetic cases (EXPLAIN ANALYZE attached)
- [ ] Restore drill performed and screenshotted
- [ ] CI green badge: lint + tests + coverage on every PR
- [ ] ZAP scan: no High findings; DPDP one-pager in repo

**Boundary:** You own data + infra, not feature logic; serve M4's schema needs fast.

---

### 🤖 MEMBER 6 — AI/ML Engineer · Models A/B/C + Serving

**Mission:** Three deployed, evaluated, fallback-safe models — not notebook science.

**Every task:**
1. **Environment**: Python env, Colab/Kaggle workflow, experiment tracking (even a
   simple `experiments.md` log: config → metrics → decision)
2. **Model A (audio)**: dataset prep (UrbanSound8K/ESC-50 subsets), mel-spectrogram
   pipeline, CNN train to macro-F1 ≥ 0.80, scream/crash recall ≥ 0.85, export ONNX
3. **Model B (triage NLP)**: build 100-case golden set (team labels), LLM-API
   zero-shot with strict JSON schema; measure accuracy ≥ 85%; guardrail: low
   confidence → defer to user choice
4. **Model C (fraud)**: synthesize 50k rows (normal + attack patterns: bursts,
   duplicate text, GPS teleport), IsolationForest/GBM, precision ≥ 0.9 at flag
   threshold, calibrate with M1's blend formula
5. **Serving**: FastAPI ML microservice (`/ml/audio/classify`, `/ml/triage`,
   `/ml/fraud`) with ONNX Runtime; `/ml/health` + model version/metrics endpoint;
   Dockerfile; p95 < 300ms on CPU
6. **Shadow mode**: log predictions for a week before blending is enabled (M1 flips
   the flag)
7. **Demo assets**: pre-recorded audio samples (scream/crash/normal) for stage demo;
   side-by-side slide of confusion matrix + latency
8. Write `ML_CARD.md` per model (model-card format: data, metrics, limitations,
   bias notes) — huge credibility with judges

**Knowledge required (depth):**
- **Must be strong:** Python, NumPy/pandas; ML fundamentals — train/val/test
  discipline, cross-validation, overfitting signs, precision/recall trade-offs
  (be ready to say why recall matters more for screams)
- **Strong:** scikit-learn end-to-end; audio features (mel-spectrograms, Librosa)
- **Working:** one DL framework (PyTorch **or** Keras) at applied level — train,
  regularize, export; Hugging Face transformers for the NLP path; ONNX export
- **Working:** FastAPI serving, Docker; latency measurement & optimization
- **Aware:** data bias (UrbanSound8K is urban — say it, and that you augment with
  rural-relevant noise), model cards, LLM prompt-injection limits

**Tools:** ★ Python · ★ scikit-learn · ★ PyTorch or Keras · ★ Librosa ·
★ ONNX Runtime · ★ FastAPI · Colab/Kaggle (free GPU) · Hugging Face · Git LFS ·
Matplotlib/Seaborn (for deck figures)

**Deliverables & acceptance:**
- [ ] 3 models live as endpoints with `/ml/health` showing version + metrics
- [ ] Confusion matrices in deck, generated from real eval runs (not mock numbers)
- [ ] Kill ML service mid-demo → scoring continues rules-only (prove it on stage)
- [ ] `ML_CARD.md` × 3 in repo
- [ ] End-to-end: 5s audio from the actual app → classification visible in ops feed

**Boundary:** You don't touch the main API or frontend; M4 proxies your service.


---

## 10. Security, Privacy & Legal

**Non-negotiable for a government health product. Owner: M5, reviewed by M1.**

| Area | Requirement | Implementation |
|---|---|---|
| Data protection law | **DPDP Act 2023** compliance | Consent at signup + per-evidence capture; purpose limitation; retention policy; deletion-request endpoint; grievance contact |
| Health data | Treated as sensitive personal data | Encrypt in transit (TLS 1.2+) + at rest; ABHA masked in all API responses (`XX-XXXX-XXXX-1234`) |
| Evidence integrity | Tamper-evident chain | SHA-256 at capture → verified server-side → append-only storage; EXIF stripped |
| Legal accountability | BNS §54 / IPC §182 notice | Versioned legal text (hash stored per ack) — reproducible in court |
| Auth | No account takeover | OTP rate limits, refresh rotation, device binding, RBAC scopes on every route |
| API abuse | No spam/flood | Redis rate limits, idempotency keys, device correlation, ML fraud score |
| Secrets | Zero leaks | Env vars only, gitleaks in CI, sandbox keys rotated post-demo |
| Access logs | Every ops action auditable | `audit_log` append-only: actor, action, entity, timestamp |
| Location privacy | Precise GPS is sensitive | Store only for active cases + 90-day archive; never expose to other citizens |
| Open source hygiene | License compliance | MIT for our code; document all dataset licenses (UrbanSound8K = CC-BY) |

**Privacy one-pager (plain language) must exist in the app:** "What we collect, why,
how long, your rights" — link from signup. Government evaluators look for this.

---

## 11. Government Adoption Readiness

**What "govt-ready" actually means — hit every line:**

1. **ABDM alignment** — register as HIP (Health Information Provider) concept; ABHA
   linking flow (sandbox now, production via NHA process); mention ABDM sandbox in deck.
2. **108/EMS integration path** — adapter documented; pilot operates alongside 108
   (our dashboard recommends, GVK-EMRI dispatcher confirms) until API MoU.
3. **Language policy** — 100% HI/MR coverage (state official-language requirement).
4. **Works on govt constraints** — runs on low-end devices, 2G-tolerant, offline-capable,
   no paid app store; PWA deployable on state servers (NIC hosting friendly: plain
   static + Docker).
5. **Capacity ops workflow** — hospitals update counts via role-scoped login (no
   extra software); daily SMS reminder to hospital admins.
6. **Pilot plan (signed)** — 30-day Wardha pilot: 3 facilities live capacity, 2
   ambulances, 50 seeded users, weekly metric report to DHO.
7. **Cost model** — free tier infra ₹0 for pilot; projected ₹3–5k/month at district
   scale (compute+SMS); show per-district cost table in deck.
8. **Handover kit** — deployment runbook, admin manual, user manual (HI/MR), API docs,
   source code (open source, MIT), data ownership = government.
9. **Support model** — 6-member team commitment for pilot duration + training session
   for hospital staff (1 hr) + duty officers (1 hr).
10. **Metrics reporting** — weekly auto-PDF to DHO: cases, response times, false-report
    rate, capacity-update compliance.

---

## 12. Testing & Zero-Defect Plan

**Owner: M5 (infra) — every member writes tests for their module.**

| Level | Tooling | Coverage target | Gate |
|---|---|---|---|
| Unit | pytest (backend/ML), node --check + vitest-style for JS utils | Backend ≥ 80%, ML eval scripts 100% run | CI blocks merge |
| Integration | pytest + test DB (docker) | Every endpoint: 1 happy + 1 failure | CI blocks merge |
| E2E | **Playwright** — 5 golden journeys | All pass on staging | CI blocks deploy |
| Load | k6 — 200 concurrent case creates; 2k WS connections | p95 < 500ms; 0 drops | Before final submit |
| Security | OWASP ZAP baseline + gitleaks + dependency audit | No High findings | Before final submit |
| Manual UAT | Scripted checklist on 3 real devices (₹8k Android, mid, flagship) | 0 blockers | 48h before freeze |
| Chaos | Kill ML/DB/WS mid-demo in staging | Graceful degradation proven | Demo rehearsal |

**5 Golden E2E journeys (Playwright):**
1. Signup → OTP → save profile → ABHA link (sandbox)
2. Wizard: animal bite → evidence → file → appears in ops → dispatch → citizen sees status
3. SOS: legal ack → case → IVR confirm (sandbox) → auto-dispatch
4. Facilities: GPS sort → filter blood bank → request
5. Offline: airplane mode → file → reconnect → syncs

**Existing regression suites (keep green forever):** `test-credibility-engine.js`
(13), `test-facilities.js` (8), `test-tutorial.js` (12) — wire into CI.


---

## 13. DevOps & Deployment

**Environments:** `local (docker-compose)` → `staging` (auto-deploy on merge) →
`prod` (tagged releases only).

```
repo ──push──► GitHub Actions:
  lint (ruff, eslint) ──► unit+integration tests ──► build images
  ──► deploy staging ──► Playwright E2E on staging ──► manual gate ──► prod
```

- **Infra as code:** `docker-compose.yml` (api, ml, db, redis, minio, caddy) — one
  command brings up the full stack; cloud uses managed Postgres + same images
- **Migrations:** Alembic, forward-only, run in CI before deploy; rollback = deploy
  previous tag (never hand-edit prod)
- **Monitoring:** Sentry (frontend + backend errors), UptimeRobot (liveness),
  Postgres slow-query log; weekly metric digest
- **Secrets:** environment-injected; `.env.example` committed, real `.env` never
- **Demo safety net:** staging holds a "demo seed" — one command resets to a known
  good state (facilities, fleet, 5 sample cases) before every rehearsal

---

## 14. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | API p95 < 500ms; ML p95 < 300ms; dashboard case render < 1s from WS event |
| Scale target | 1 district = 1M population; 200 concurrent reports; 5k reports/day headroom |
| Availability | 99.5% during pilot; graceful degradation for every dependency |
| Offline | Citizen can complete full report offline; queue drains on reconnect |
| Device support | Android 8+ Chrome/Firefox, ₹8k handsets, 2G/3G networks |
| Accessibility | WCAG 2.1 AA targets: contrast, touch targets ≥ 48px, screen-reader labels |
| i18n | EN/HI/MR 100%; RTL not required; number/date localization |
| Battery/data | SOS flow < 300KB data; no continuous GPS (single fix + accuracy check) |
| Maintainability | Zero-regression test suites; every module documented; no orphan code |

---

## 15. Master Timeline (8 Weeks)

| Week | Milestones | Owner focus |
|---|---|---|
| **W1** | API contract frozen · DB schema live · repo CI running · ML env ready | M4 scaffold, M5 schema+CI, M6 datasets, M1 spec doc, M2/M3 api.js client |
| **W2** | Auth + Cases API working · citizen app calls real API (online mode) | M4 auth/cases, M2 wiring, M3 WS spike, M6 audio data prep |
| **W3** | Evidence upload + trust scoring server-side · dashboard WS feed live | M4 evidence/trust, M3 live feed, M5 geospatial queries, M6 audio training |
| **W4** | Facilities live + capacity ops · PWA + offline queue · triage NLP golden set | M2 offline, M3 capacity+map, M4 facilities API, M5 seed 60 facilities, M6 NLP |
| **W5** | IVR sandbox flow · ML models served (shadow) · i18n 100% | M4 IVR, M6 serving, M3 i18n sweep, M1 scoring spec final |
| **W6** | **INTEGRATION WEEK** — full E2E on real devices, chaos drills, load test | All; M5 chaos+load, M1 runs the board |
| **W7** | Security hardening + UAT + bug bash · pilot docs · deck v1 | M5 security, all UAT checklists, M1 deck |
| **W8** | **FREEZE** — rehearsals ×3, video, Q&A drills, MoU letters, submit | All; only P0 bug fixes allowed |

**Daily cadence (W2–W6):** 15-min standup → feature work → PR review by M1 →
merge to main only if CI green. Weekly Friday demo to team (record it — that's your
video material).

---

## 16. Risk Register

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | 108 API access denied | High | High | Adapter + manual-dispatch pilot plan (Section 11.2) |
| R2 | MSG91/Exotel sandbox delays | Medium | High | Mock providers behind same interface; swap keys later |
| R3 | ML accuracy below target | Medium | Medium | Rules-only mode ships regardless; ML is enhancement |
| R4 | Stage internet fails | High | High | Full local docker-compose demo + offline PWA demo rehearsed |
| R5 | Team member falls sick in final week | Medium | High | Every module has a documented second (pair listed in board) |
| R6 | Scope creep ("one more feature") | High | Medium | Feature freeze W8; new ideas → "future scope" slide |
| R7 | Judge asks live OTP/IVR | Medium | Medium | Rehearsed sandbox demo + recorded fallback video |
| R8 | Data privacy challenge | Medium | High | DPDP doc + privacy one-pager ready (Section 10) |

---

## 17. Definition of Done — Final Checklist

**Do not submit until every box is ticked. Verify twice.**

### Product
- [ ] All P0 features (C1–C7, D1–D4, D7, D9, T1–T4, T8–T9) work end-to-end on staging
- [ ] Demo Mode + tutorial still work after all changes (regression suites green)
- [ ] Offline report → sync journey demonstrated
- [ ] Live dashboard < 1s update; map with facilities + ambulance

### Engineering
- [ ] CI green: lint, unit, integration, E2E, coverage badge
- [ ] k6 load: targets met (p95 < 500ms, 200 concurrent)
- [ ] ZAP: no High issues; gitleaks clean
- [ ] `docker-compose up` from clean clone works (tested on a teammate's laptop)
- [ ] Restore drill + chaos drill documented

### AI/ML
- [ ] 3 models served with `/ml/health`; metrics from real evals
- [ ] Shadow-mode results shown; blend formula audited (M1)
- [ ] ML-down degradation proven

### Government readiness
- [ ] DPDP compliance doc + privacy one-pager (in-app)
- [ ] ABDM/108 integration path documented with go-live checklist
- [ ] Pilot plan + cost table + handover kit + training plan
- [ ] User manual + admin manual (EN/HI/MR)

### Presentation
- [ ] Deck ≤ 12 slides with live architecture + real confusion matrices
- [ ] 3-min video recorded, edited, subtitled (EN)
- [ ] Q&A drill: 30 questions, every member answers their domain < 30s
- [ ] Demo rehearsed 3× including on hotspot network
- [ ] Repo: README (with screenshots), ARCHITECTURE.md, trust-spec, ML_CARDs,
      RUNBOOK, API docs — all present, all current

---

## 18. 🏥 Care Continuity Suite — Building the PS-26133 Required Modules

> The emergency core is built. These 8 modules (CC1–CC8) complete the problem statement.
> Design rule: **reuse the emergency rails** — same auth, same facility directory, same
> trust/audit layer, same offline-first PWA. Nothing is a separate app.

### CC1 — Assisted Teleconsultation (P2, P21) · M2 UI + M4 WebRTC
- **Flow:** Patient at PHC/sub-centre (or home) → ASHA/PHC staff initiates → queued to
  district specialist (MoU roster) → video/audio consult → e-prescription → saved to
  longitudinal record
- **Tech:** WebRTC via managed SFU (**LiveKit self-host** / Jitsi) — no third-party
  data concerns; **audio-first fallback** for 2G (video optional toggle)
- **Assisted mode:** ASHA device dials on behalf of the patient (verbal consent
  captured, recorded in audit log)
- **Consult notes:** specialist fills structured SOAP note + Rx → FHIR Encounter
- **Accept:** consult connects < 60s on 3G; e-prescription lands in record + SMS copy

### CC2 — Appointments & Queue Management (P7, P13) · M3 UI + M4 API
- **Token generation:** citizen app · ASHA assisted · **SMS missed-call token** (for
  no-smartphone users — key rural inclusion point)
- **Live queue:** facility display board (tablet/TV) + citizen view: "Token 14 ·
  3 ahead · ~25 min" — computed from avg consult time per facility
- **Digital triage integration:** M6's Model B severity sorts the queue — red-flag
  cases jump ahead (this is the "constrained staff" answer)
- **No-show handling:** 3-called tokens skipped, auto re-queue
- **Accept:** token booked via SMS-only phone; queue ETA within ±5 min accuracy

### CC3 — Longitudinal Patient Record (P4, P6, P17) · M4 + M5
- **Standard:** **HL7 FHIR R4** — resources: `Patient`, `Encounter`, `Condition`,
  `Observation`, `MedicationRequest`, `Immunization`, `AllergyIntolerance`
- **Storage:** **HAPI FHIR server** (open source, judges recognize) or Postgres
  JSONB FHIR-profile rows for the pilot; expose `/fhir/*` endpoints
- **ABDM:** HIP linkage pattern — ABHA address as patient identifier, consent
  artifacts before any record share (ABDM consent schema)
- **Citizen view:** timeline of every encounter across SC→PHC→RH→DH in the app
- **Accept:** one patient's record viewable (consent-gated) at two facilities;
  passes HAPI FHIR validator


### CC4 — Referral Tracking (P5, P6, P22) · M4
- **Referral object:** from-facility → to-facility, reason, urgency, attached FHIR
  bundle, status: `issued → accepted → appointment_set → visited → closed | dropped`
- **SLA timers:** emergency referral accepted in 15 min (else auto-escalate to district
  dashboard — reuses our escalation rails); routine within 24h
- **Completion metric:** dashboard shows referral completion % per facility (the PS
  explicitly asks for "improved referral completion" — we measure it)
- **Accept:** create referral at PHC → accept at DH → complete → both records updated

### CC5 — Diagnostic Coordination (P3) · M4
- **Flow:** PHC orders lab test → ANM/PHC collects sample → pickup scheduled (route
  to district lab) → result digitized → attached to record → patient notified (SMS/push)
- **Demo version that wins:** lab order + status tracking
  (`ordered → collected → in_lab → result_ready`) + result into FHIR Observation
- **Accept:** full lifecycle demoable in < 3 minutes on stage

### CC6 — Medicine Availability (P24) · M3 UI + M5 data
- **Drug stock per facility** (reuse the existing inventory-module pattern): essential
  medicines list (state EDL subset ~50 items), weekly update by hospital user (same
  capacity-edit flow as beds)
- **Citizen visibility:** "Which nearby facility has this medicine?" search
- **Low-stock alerts** → facility dashboard + district dashboard
- **Accept:** search "Insulin" → 3 nearest facilities with stock counts

### CC7 — High-Risk Patient Follow-Up (P23) · M4 + M6
- **Registries:** ANC (pregnant women — WHO gestation-week schedule), child
  immunization (due dates), NCD (HTN/DM — monthly BP/RBS check)
- **Task generation:** due-today list auto-appears in ASHA's task list; SMS reminder
  to patient; missed visit → escalate to ANM → PHC (reuse escalation rails)
- **M6 addition:** simple risk score on the NCD registry (BP/RBS trend → priority)
- **Accept:** ANC woman misses a visit → ASHA gets task → marked visited → record updated

### CC8 — ASHA/ANM Frontline Worker Mode (P15) · M2 UI + M4 API
- **Simplified assisted UI:** big buttons, house-to-house patient picker, fully
  offline (IndexedDB queue, same as citizen reports), bulk sync at end of day
- **Capabilities:** register patient, book token, initiate teleconsult, capture vitals
  (BP/weight/SpO2 manual entry), complete follow-up tasks, file emergency (full SOS)
- **Identity:** role=asha mapped to a supervisor ANM
- **Accept:** a full day's rounds completed in airplane mode → syncs on reconnect


### 18.1 New Database Tables (M5 adds to Section 7 schema)
```sql
encounters(id, patient_id, facility_id, provider_id, type, fhir_ref,
           teleconsult_id, started_at, ended_at, soap_note)
teleconsults(id, case_ref, specialist_id, patient_id, room_id, status,
             scheduled_at, joined_at, prescription_id)
appointments(id, patient_id, facility_id, token_no, date, slot,
             source, status, triage_severity, created_at)
referrals(id, patient_id, from_facility, to_facility, reason, urgency,
          fhir_bundle_ref, status, sla_deadline, closed_at)
lab_orders(id, patient_id, test, facility_id, status, sample_collected_at,
           result_ref, result_at)
drug_stock(facility_id, drug_name, edl_code, quantity, updated_by, updated_at)
registries(id, patient_id, type,            -- ANC|immunization|NCD
           due_date, status, risk_score, last_visit, asha_id)
consent_artifacts(id, patient_id, purpose, granted_to, expires_at, abdm_ref)
```

### 18.2 New API Endpoints (M4 adds to Section 6)
```
POST /teleconsult/request        GET  /teleconsult/{id}        WS room events
POST /appointments               GET  /queue/{facility}        POST /queue/call-next
POST /referrals                  GET  /referrals?facility=     PATCH /referrals/{id}
POST /labs/orders                PATCH /labs/{id}/status       GET /labs/{id}/result
GET  /drugs/search?name=&lat=    PATCH /ops/drugs/{facility}   (bulk stock update)
GET  /asha/tasks?asha_id=        POST /asha/visits             (bulk offline sync)
GET  /fhir/Patient/{id}          GET  /fhir/Encounter?patient= (HAPI or native)
POST /records/consent            GET  /records/timeline/{patient_id}
```

### 18.3 Role Deltas (additions to Section 9)
| Member | Added tasks for CC suite |
|---|---|
| M1 | PS traceability matrix (§1A) in deck; arbitrate FHIR scope (pilot = 7 resources, not full spec); outcome-metrics slide (P20–P24 measured) |
| M2 | Teleconsult UI (assisted + patient), ASHA mode UI, appointment booking, record timeline view |
| M3 | Facility queue display board, referral board w/ SLA colors, drug stock dashboard, follow-up registry views |
| M4 | WebRTC signaling, FHIR endpoints, referral/lab/appointment/queue APIs, SMS-token fallback, ASHA bulk-sync API |
| M5 | New tables + FHIR storage decision (HAPI vs JSONB), consent artifacts, seed EDL drug list + registry demo data, load-test queue endpoints |
| M6 | Extend Model B: appointment triage severity; NCD risk scoring; (audio/fraud models unchanged) |

### 18.4 Timeline v2 (PS-complete, 8 weeks — amends §15 from W3 on)
| Week | Additions for CC suite |
|---|---|
| W1 | + FHIR scope decision (7 resources) · EDL drug list sourced |
| W2 | + Appointments/queue API + SMS-token spike |
| W3 | + Referral API + FHIR Patient/Encounter endpoints |
| W4 | + Queue display UI · drug stock module · ASHA offline mode build |
| W5 | + Teleconsult (LiveKit) + e-prescription · labs flow · registries |
| W6 | Integration: **two journeys now** — (A) emergency E2E, (B) PHC visit → teleconsult → referral → DH |
| W7 | + ASHA field test (real device, real offline round) |
| W8 | Freeze — demo covers BOTH journeys + trust layer |

### 18.5 Scope Guard (if time runs short, cut in this order)
1. CC5 lab routing details (keep order+result only)
2. CC7 NCD risk scoring (keep registries + tasks)
3. CC1 video (keep audio-only teleconsult)

**Never cut:** CC2 queue · CC3 record · CC4 referral · CC8 ASHA mode — those are the
PS's spine. Judges will check them first.

---

*End of blueprint. Print Section 17 and physically tick it. Good luck, team. 🚑*











