# 🎯 SIH Idea Submission — Screening Round Strategy
### Team Apex Intelligence · PS-26133 · 500 teams → 5 select hote hain, hum un 5 mein kyun honge

---

## 📌 Pehle ye samjho: Screening mein kya hota hai

Screening round mein judges aapka **code nahi chalate**. Wo dekhte hain:

| Kya dekhte hain | Kitna weight |
|---|---|
| **Idea + Problem understanding** (PS ko kitna deeply samjhe) | ~40% |
| **Working prototype / proof of concept** (PPT video ya live link) | ~30% |
| **Novelty / uniqueness** (ye doosri teams se alag kyun hai) | ~15% |
| **Feasibility + team clarity** (kaun kya karega, realistic hai?) | ~15% |

**Sach ye hai:** Screening ke time pe 90% teams ke paas sirf PPT hota hai, kuch ke paas
Figma mockups. **Agar aapke paas chal raha hua prototype hai — aap top 5% mein ho already.**
Humara prototype (33 tests, trust engine, wizard, SOS, dashboard, 3 languages) abhi bhi
**working hai** — ye humara sabse bada weapon hai.

---

## ✅ Screening ke liye kitna prototype chahiye? (Honest answer)

**Jo abhi bana hai, wo 70% kaafi hai.** Screening ke liye aur zyada build karne ki zaroorat
NAHI hai. Zaroorat hai:

1. ✅ **Jo hai usse dikhane ka sahi tarika** (2-min demo video + 4-slide deck)
2. ✅ **Do chhote additions** jo "wow" dete hain (neeche list hai, total ~2 din ka kaam)
3. ❌ Backend/database/ML **abhi nahi** — screening ke baad W1-W4 mein banega (plan mein dikha do)

### Screening se PEHLE complete karo (sirf ye 5 cheezein):

- [ ] **1. Live demo link** — GitHub Pages pe deploy karo (10 min ka kaam, neeche steps)
- [ ] **2. 2-minute demo video** — dono journeys dikhao (wizard + SOS), EN subtitles
- [ ] **3. 4-slide mini deck** — Problem → Solution → Live Demo (QR/link) → Team & Plan
- [ ] **4. PS-26133 mapping 1-pager** — "PS ki har requirement → humara module" table
- [ ] **5. Do micro-features** (optional but strong):
  - [ ] Live map spike (Leaflet + 3 Wardha facility markers) — 3 ghante
  - [ ] Trust score ki real-time breakdown UI wizard ke andar — 2 ghante

Baaki sab (backend, offline queue, ML, IVR) **roadmap slide mein** dikhao — judges ko
batana ki "ye humara 8-week execution plan hai, prototype already validates core risk."

---

## 📋 Member-by-Member Tasks (Screening Round)

### 👑 M1 — Lead (total ~10h)
- [ ] **4-slide deck** banao (Canva/Slides):
  - Slide 1: Problem — Wardha ka ek real anecdote + 4 bullet pain points
  - Slide 2: Solution — Emergency Mitra ka flow diagram (citizen → trust layer → officer)
  - Slide 3: **Live demo** — QR code + video link + trust-score ka screenshot
  - Slide 4: Roadmap (8 weeks) + team roles + "why we win" line
- [ ] **PS mapping table finalize karo** (P1–P24 → module → status)
- [ ] Video ka script likho (30 sec problem, 60 sec demo, 30 sec impact)
- [ ] SIH portal form ka draft: Idea title (≤5 words), abstract (150 words), category
- [ ] Rehearsal: M2/M3 ke demo ko 2 baar dekho, jo atke wahan fix karwao

### 🎨 M2 — Citizen App (total ~12h)
- [ ] **GitHub Pages deploy** (M5 ke saath) — live link sab jagah use hoga
- [ ] Wizard ka **behest flow polish** — animal bite scenario ekdum smooth ho, koi dead-end na ho
- [ ] SOS button ka **pressed state + haptic feedback** (30 min)
- [ ] Trust-score breakdown wizard ke result screen pe dikhao (kitne points kis cheez ke) — 2h
- [ ] Demo Mode verify karo — bina phone/net ke bhi poora demo chale (stage-safe)
- [ ] Console errors zero karo full click-through pe (1h)
- [ ] **2-min video record** (M1 script se): phone pe wizard + SOS + dashboard, screen recording
- [ ] Mobile screenshots (10+) lo — deck, portal, README sab mein lagenge

### 📊 M3 — Dashboard + i18n (total ~10h)
- [ ] **Leaflet live map spike** — 3 Wardha facilities (DH Wardha, RH Sevagram, PHC Deoli)
  markers + popups. Ye ek screenshot/video clip ke liye hai — judges ko map pasand aata hai (3h)
- [ ] Dashboard case feed mein **ek realistic seeded case** banao (demo ke liye)
- [ ] HI/MR translations — demo video mein dikhne wale 30 strings pakka translate ho
- [ ] Video ke liye dashboard ka **clean recording** — case aa raha hai, officer verify kar raha hai
- [ ] Charts spike (cases/day bar) — deck ke impact section ke liye (1h)

### ⚙️ M4 — Backend (total ~8h)
- [ ] Screening ke liye **kuch build nahi hota** — ye karo:
- [ ] Architecture diagram (Excalidraw) — 8-week target system: FastAPI, PostGIS, Redis, ML
  service. Deck slide 2 mein jayega (2h)
- [ ] API contract ka 1-pager — top 8 endpoints (auth, cases, facilities, WS) table format
- [ ] Demo data script — agar M3 ko seeded cases chahiye toh unhe do
- [ ] **Q&A prep apne domain ka**: "backend kab tak ready?" → "W2 mein auth+cases, W3 mein
  evidence+WS — plan link" (jawab 30 sec ka ho)

### 🗄️ M5 — DB/DevOps (total ~8h)
- [ ] **GitHub Pages deploy** — `gh-pages` branch ya Settings → Pages → main branch. Link:
  `https://apex-intelligence-ai.github.io/SIH_26/` (2h, sabse urgent task)
- [ ] Custom check: link phone pe kholo, camera/GPS permission test karo (HTTPS pe kaam karega)
- [ ] Repo polish — topics add karo: `sih2026`, `healthtech`, `emergency`, `pwa`,
  `machine-learning` (5 min)
- [ ] CI badge green verify karo (already hai, bas check karo)
- [ ] **Q&A prep**: "server down ho jaye toh?" → offline-first answer; "data security?" →
  DPDP + hash + audit-log answer

### 🤖 M6 — AI/ML (total ~8h)
- [ ] Colab pe **audio classifier ka "proof of concept" demo** — 10 clips pe
  scream/normal classification dikha do (accuracy number ke saath). Perfect nahi chahiye,
  "humne shuru kar diya hai" ka proof chahiye (4h)
- [ ] Ek **1-page ML plan**: 3 models (audio, triage NLP, fraud) — dataset, metric, target
- [ ] Triage golden-set template ready rakho (30 cases labeled)
- [ ] **Q&A prep**: "ML accuracy kam hui toh?" → "rules pehle se kaam karte hain, ML
  enhancement hai — graceful degradation humara design principle hai"

---

## 📅 4-Din Ka Countdown (Screening Deadline se peeche gin ke)

| Din | Sab ka focus | End-of-day ho jana chahiye |
|---|---|---|
| **D-4** | Deploy + polish | Live link working · console errors zero · demo data seeded |
| **D-3** | Video + deck | 2-min video final · deck v1 done · map spike screenshot |
| **D-2** | Portal form | Idea abstract final · PS mapping table · team roles section |
| **D-1** | Rehearsal + buffer | Full dry-run 2 baar · har member apne 3 Q&A ready · submit |

**Rule: D-1 ko kuch naya mat chhedo. Sirf rehearse karo.**

---

## 🎤 Screening Q&A — 10 Sawaal Jo Almost Pakke Aate Hain

1. **"Ye doosri emergency apps se alag kaise hai?"** → Trust layer. Fake calls se ambulance
   bachana koi nahi kar raha; humara credibility engine tested hai (33 tests).
2. **"Offline mein kya hoga?"** → PWA queue — report local save, net aane pe sync. Prototype
   mein Demo Mode, production W4 mein background sync.
3. **"Government kaise use karegi? Cost?"** → Static PWA (NIC hosting friendly) + free tier
   backend. Pilot ₹0, district scale ₹3-5k/month.
4. **"108 se kya relation?"** → Competitor nahi, partner. Dashboard recommends, 108
   dispatcher confirms. Adapter pattern ready hai.
5. **"Data privacy?"** → DPDP 2023 aligned: consent, purpose limitation, evidence 90-day
   purge, ABHA masked.
6. **"ML ka kya guarantee?"** → ML kabhi blocking nahi — band ho toh rules-only scoring
   chalti hai. Ye stage pe prove karenge.
7. **"Fake reports ka evidence?"** → Device fingerprint + GPS accuracy + triangulation +
   legal ack (BNS §54). Score 0-100, har point justified.
8. **"Scale kya hoga?"** → 1 district = 1M population design; PostGIS triangulation query
   100k rows pe < 20ms target.
9. **"Aapne kuch build kiya hai ya sirf idea hai?"** → **Live link + GitHub repo dikhao —
   33 tests, working wizard/SOS/dashboard. Ye aapka knockout punch hai.**
10. **"Team roles kya hain?"** → 6 clear roles, har member apna module + tests own karta hai.

---

## 🚀 GitHub Pages Deploy (M5 ke liye exact steps)

1. Repo → **Settings** → **Pages** (left sidebar)
2. Source: **Deploy from a branch** → Branch: `main`, Folder: `/ (root)` → **Save**
3. 2 min wait → link ready: `https://apex-intelligence-ai.github.io/SIH_26/`
4. Phone pe kholo, wizard + SOS + demo mode test karo
5. Ye link: portal form, deck slide 3 (QR), video description — sab jagah daalo

⚠️ Camera/GPS sirf HTTPS pe chalte hain — Pages pe ye automatically mil jata hai
(file:// pe nahi chalta tha — ab better hai).

---

## 📝 SIH Portal Form Fields (draft karke rakho)

- **Idea Title:** `Emergency Mitra – Trust-Scored Emergency Routing`
- **Theme:** MedTech/BioTech/HealthTech
- **Category:** Software
- **Problem Statement:** SIH26133 (Govt. of Maharashtra)
- **Abstract (150 words draft):**
  > Rural emergency victims die not from absence of care, but from delayed, mis-routed
  > care and fake-call noise. Emergency Mitra is a trust-scored emergency routing network:
  > a guided wizard and zero-tap SOS capture evidence (photo/audio/GPS), a weighted
  > credibility engine (0–100, 33 automated tests) filters false reports, and a district
  > command dashboard routes ambulances to the *capable* nearest facility — checking beds,
  > ICU, O2, blood and antivenom before dispatch. Built as a zero-install PWA in
  > English/Hindi/Marathi, it runs on ₹8k phones and 2G networks. Working prototype live
  > today; 8-week plan covers FastAPI+PostGIS backend, offline-first sync, IVR
  > verification, teleconsult, and ML models (audio classification, triage NLP, fraud
  > detection) with rules-only graceful degradation. Pilot target: Wardha district with
  > District Collector MoU.
- **Demo video link** (YouTube — unlisted, EN subtitles)
- **Live prototype link** (GitHub Pages)

---

---

# 📊 PPT Content Review (Screening Deck) — 2026-09-03

## 🚨 Pehle ye 2 fix karo (instant rejection risk)

1. **"MAITRY" naam 2 jagah likha hai** ("Traditional 108 Before MAITRY / After MAITRY")
   — ye purane project ka leftover hai. Judges ko lagega copy-paste deck hai.
   Har jagah **"Emergency Mitra"** karo. PDF export se pehle Ctrl+F "MAITRY" karo.
2. **"Hidden SMS" claim technically challengeable hai** — web app (PWA) bina user
   ke SMS nahi bhej sakti. Tech-background judge ye turant poochega. Safe phrasing:
   > "Offline fallback: app **one-tap pre-filled SMS** (GPS coordinates ke saath, native
   > intent se) bhejta hai — SMS 2G pe chalta hai, internet nahi chahiye — plus cached
   > first-aid guidance offline available."
   "Hidden" word hatao, "one-tap pre-filled" bolo — ye defensible hai.

## ⚠️ aur bhi fixes (ranked)

3. **Trust Score PPT mein missing hai!** Humara sabse bada differentiator — anti-fake
   credibility engine (0–100 score, device fingerprint, triangulation, BNS §54 legal ack,
   33 automated tests) — USP list mein NAHI hai. 500 teams mein koi ye nahi dikhayega.
   USP #1 banao: "Anti-Fake Trust Score: har report ka 0–100 credibility score —
   evidence, device history aur multi-report triangulation se. Fake call pe ambulance
   waste nahi hoti."
4. **Duplicates hatao:** "Voice-First in Hindi" 2 baar, "Smart Routing / Smart Hospital
   Matchmaker / Resource-Aware Matching" = 3 baar same cheez. Solution slide = 4 crisp
   bullets max.
5. **"75% OF PROTOTYPE ALREADY COMPLETED!!!"** — all-caps + exclamation unprofessional
   lagta hai. Bolo: "Working prototype live — try it now →" + QR. Judges khud check
   karenge, percent khud batayenge.
6. **Numbers consistent rakho:** 43% (slide 2) vs 43.1% (validation) — ek use karo.
   Source ke saath footnote: ICMR snakebite study.
7. **"Predictive AI hotspots"** comparison table mein hai par methodology/roadmap mein
   nahi. Ya toh roadmap slide mein daalo, ya table se hatao — jo claim karo wo plan mein ho.
8. **"Gov hospitals treat for ₹0"** — absolute claim challenge hota hai. Soften:
   "govt treatment at minimal cost, private emergency care ₹27,400+ average (ICMR)".
9. **Prototype sync:** PPT mein SMS/voice-first/IVR/predictive — ye abhi build nahi hain.
   "Working today" vs "Roadmap" clearly split karo (do colors/labels). Jo built hai wo
   dikhao screenshots se: wizard, SOS, dashboard, trust score, HI/MR toggle.
10. **Impact chart:** 20+15+10+20+35 = 100 ✓ — par "20% Reducing Out-of-Pocket" jaise
    numbers ka source footnote do (ICMR ₹27,400 se derived bolo).

## ✅ Jo already strong hai (mat hatao)

- Real citations with DOI/links (Nature paper, NITI Aayog, TRAI, Bhashini, NHM) — top 5% teams ka level
- "What IFs" slide — excellent, judges ko lagega team ne soch samajh ke banaya
- Comparison table (conventional vs humara) — clear differentiators
- Feasibility section (ICMR/NITI backing, hardware compatibility, NHM data)
- Live Vercel link — 90% teams ke paas hota hi nahi

## 🎯 Deck flow (final order)

1. PS details + team → 2. Problem (43.1% stat + 4 pains) → 3. Solution (4 crisp USPs —
trust score #1) → 4. Methodology/flow diagram → 5. **Prototype: QR + 2-3 real screenshots
("Working today") + roadmap ("8 weeks to production")** → 6. Comparison table → 7. Impact
chart → 8. Feasibility + What-IFs → 9. References + team

---

*Screening ke baad W1-W8 plan already ready hai (`WEEKLY_TASKS.md` + `task.md` local pe).
Pehle 5 mein aana humara demo, humara repo, aur humari clarity karegi. 🚑*
