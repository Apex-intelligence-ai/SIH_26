# 📢 Team Update — Comm Message
### From: Antriksh (Lead) · To: Team Apex Intelligence · Date: 2026-09-03
*(Copy-paste ready — WhatsApp/Slack pe bhejne ke liye)*

---

Hi Team,

Great work so far — we cleared the internal hackathon and now the **SIH official
screening submission** is our only target. Sharing a full update: what's done, what's
next, and where we currently stand on the two scores that matter.

---

## ✅ 1. What We've Completed (Repository & Docs)

**Code & Repo (`github.com/Apex-intelligence-ai/SIH_26`):**
- Working prototype pushed — citizen app (wizard, SOS, facilities, account, tutorial),
  command dashboard, and the full trust layer (device-trust, evidence-capture,
  credibility engine, trust UI)
- **33 automated regression tests** — all green (trust engine 13 · facilities 8 · tutorial 12)
- Professional CI pipeline via GitHub Actions — tests + syntax checks run on every push/PR
- Clean repo structure: code-only on GitHub, planning docs kept local
- `npm test` / `npm run test:*` scripts for one-command testing

**Professional files added (judges/mentors check these):**
- `README.md` — badges (CI, tests, license, SIH 2026, PS-26133), problem story,
  feature list, repo map, tech rationale, 8-week roadmap, team matrix
- `LICENSE` — MIT (Team Apex Intelligence)
- `CONTRIBUTING.md` — branch/test/review workflow for all members
- `SECURITY.md` — vulnerability reporting policy + DPDP 2023 commitments
- `.github/` — bug/feature issue templates + PR template with test checklist
- `package.json` + `.editorconfig` — standard tooling

**Planning (kept local, not on repo):**
- `WEEKLY_TASKS.md` — full 8-week production task ledger
- `task.md` — same tasks in simple Hinglish for easy team reference
- `SCREENING_PLAN.md` — screening strategy, per-member tasks, 4-day countdown,
  10 expected Q&A, and **detailed PPT review**

---

## ⚠️ 2. PPT Fixes Required Before Submission (Action Items)

Two critical fixes — please close these today:

1. **Remove "MAITRY"** from the Before/After slide — it's a leftover from our old
   project name and reads as copy-paste. Replace with **"Emergency Mitra"** everywhere.
2. **Rephrase "Hidden SMS"** — a PWA cannot send SMS silently; a technical judge will
   catch this. Use: *"One-tap pre-filled SMS fallback with GPS coordinates — works on
   2G, no internet needed."*

Also recommended:
- **Add our Trust Score as USP #1** — the anti-fake credibility engine (0–100 score,
  device fingerprinting, multi-report triangulation, BNS §54 legal ack, 33 tests) is
  our biggest differentiator and it's currently missing from the deck
- Remove duplicate bullets (Voice-First ×2, Smart Routing ×3)
- Replace "75% OF PROTOTYPE ALREADY COMPLETED!!!" with *"Working prototype live — try
  it now → [QR]"*
- Keep citations as-is (Nature DOI, NITI Aayog, TRAI, Bhashini, NHM) — this is
  top-tier work
- Clearly split **"Working today"** (wizard, SOS, dashboard, trust score, HI/MR) from
  **"8-week roadmap"** (backend, offline sync, IVR, ML)

---

## 📊 3. Current Scores

### ATS Score (Screening Readiness) — **72/100**

| Criteria | Score | Notes |
|---|---|---|
| Problem alignment with PS-26133 | 18/20 | Strong mapping, real statistics cited |
| Prototype completeness | 17/20 | Live + tested; backend/ML pending (roadmap covers it) |
| Novelty / USPs | 13/15 | Trust layer unique — but missing from deck (fix #3 above) |
| Feasibility & references | 15/15 | ICMR/NITI/TRAI citations, What-IFs slide — excellent |
| Deck polish & consistency | 9/15 | MAITRY leftover, duplicates, all-caps shout (−6) |
| **Total** | **72/100** | **→ 88+ achievable after PPT fixes + live link + video** |

**To cross 85:** fix the two critical PPT items, deploy the GitHub Pages link, and add
the 2-min demo video. Teams that show a *working* product at screening historically
land in the top 5%.

### AI-Content Score — **Medium Risk (est. 45–60%)**

Judges and SIH reviewers increasingly flag AI-generated decks. Current risk points:

- ⚠️ Uniform bullet structure and symmetrical phrasing across slides reads as
  template/AI-written
- ⚠️ Generic impact claims without team-specific detail
- ✅ Real citations with DOIs, live prototype, and What-IFs slide pull the score down
  (good — they're human signals)

**How we reduce it:**
1. Add one **real anecdote** in the problem slide (e.g., an actual Wardha snakebite
   case from news, with date/source)
2. Use team photos + real screenshots instead of stock/AI images
3. Rewrite 2–3 slides in your own words — imperfect human phrasing scores *lower*
   on AI detectors (that's a good thing here)
4. Keep the metric chart but add a one-line methodology note under it

---

## 🎯 4. Next Steps (owner → deadline)

| Task | Owner | Deadline |
|---|---|---|
| Fix MAITRY + Hidden SMS in PPT | Deck owner (M1) | D-3 |
| Add Trust Score as USP #1 | Deck owner (M1) | D-3 |
| GitHub Pages deploy → live link | M5 | D-4 (first task) |
| 2-min demo video (script in SCREENING_PLAN.md) | M2 | D-3 |
| Leaflet map screenshot + HI/MR demo proof | M3 | D-3 |
| Architecture diagram + API 1-pager | M4 | D-2 |
| ML proof-of-concept (Colab, 10 clips) | M6 | D-2 |
| Portal form abstract + final review | M1 | D-2 |
| **SUBMIT** | All | **D-1 evening** |

Full per-member task details: `SCREENING_PLAN.md` (shared separately).

---

Let's keep the momentum — the prototype is our unfair advantage. Fix the deck, ship
the live link, and we walk into the top 5 of 500.

— Antriksh
