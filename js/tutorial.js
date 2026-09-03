/* ============================================================
   EMERGENCY MITRA - INTERACTIVE TUTORIAL (js/tutorial.js)
   ============================================================
   Animated hands-on onboarding for first-time users:

     - Animated SPOTLIGHT that glides between real UI buttons
       (dimmed overlay with a moving cutout + pulsing ring)
     - Auto-positioned tooltip card (above/below/center),
       progress bar, step counter, keyboard navigation
     - "TRY IT" steps: the tour WAITS until the user actually
       performs the action (open wizard, ack SOS legal card,
       filter facilities, save profile...) then auto-advances
     - DEMO MODE: while the tour runs, the trust layer
       suppresses ALL real case filing (wizard / SOS / triage)
       so users can try everything with zero real complaints
     - Floating "?" help button to replay the tour anytime
     - Auto-starts once for new visitors (localStorage flag)

   Loads LAST so its wrappers sit on top of app/admin/account/
   facilities/trust wrappers. Zero original lines modified.
   ============================================================ */

(function () {
    'use strict';

    const DONE_KEY = 'em_tutorial_done_v1';

    /* ---------------------------- DEMO MODE ---------------------------- */

    window.DemoMode = {
        active: false,
        enter() {
            if (this.active) return;
            this.active = true;
            const b = document.getElementById('tut-demo-badge');
            if (b) b.classList.add('show');
        },
        exit() {
            if (!this.active) return;
            this.active = false;
            const b = document.getElementById('tut-demo-badge');
            if (b) b.classList.remove('show');
        },
        toggle() { this.active ? this.exit() : this.enter(); }
    };

    /* ---------------------------- STEPS (1/2) ---------------------------- */

    const STEPS = [
        {
            id: 'welcome', center: true,
            icon: 'school', title: 'Welcome to Emergency Mitra!',
            body: '<b>Great to have you here.</b> This is a <b>2-minute hands-on tour</b> — ' +
                  'you will actually <b>try every key feature</b>, not just read about them.<br><br>' +
                  '🎓 <b>Demo Mode is now ON</b>: nothing you do during this tour files a real ' +
                  'complaint or sends a real SOS. Explore fearlessly!',
            cta: 'Start the Tour'
        },
        {
            id: 'wizard-btn', target: '.btn-start-emergency',
            icon: 'emergency', title: 'Start Emergency — Guided Wizard',
            body: 'This opens a <b>step-by-step wizard</b>: pick the emergency type, answer ' +
                  'quick questions, attach photo/voice evidence.<br><br>' +
                  '👉 <b>TRY IT:</b> click this button now.',
            waitFor: 'wizard-opened'
        },
        {
            id: 'wizard-use', target: '#emergency-wizard-modal > div',
            icon: 'checklist', title: 'Try the Wizard — Nothing Real Is Filed',
            body: 'Pick <b>any emergency type</b> and walk through the steps.<br><br>' +
                  'When you finish (or hit Close), Demo Mode blocks the case from being ' +
                  'filed — watch the Trust Engine log say <i>"NOT filed"</i>.<br><br>' +
                  '👉 Close the wizard when you are done exploring.',
            waitFor: 'wizard-closed'
        },
        {
            id: 'sos-btn', target: '.btn-sos',
            icon: 'my_location', title: 'SOS — For Unconscious Patients',
            body: 'One tap for the worst moments: the reporter sees the <b>legal rules</b> ' +
                  '(anti-fake warning), then GPS + evidence chain activate automatically — ' +
                  '<b>zero typing needed</b>.<br><br>' +
                  '👉 <b>TRY IT:</b> press SOS, read the legal card, tap <i>"I Understand"</i>. ' +
                  'Demo Mode swallows the alert.',
            waitFor: 'sos-acked'
        },
        {
            id: 'sos-explain', center: true,
            icon: 'gpp_good', title: 'What Just Happened?',
            body: 'You saw the <b>legal acknowledgement</b> every reporter must give. In a real ' +
                  'emergency that tap would trigger: 📍 GPS lockdown → 📷 evidence chain → ' +
                  '📞 IVR call-back → 🛡 credibility scoring → 🚑 dispatch.<br><br>' +
                  'In Demo Mode, <b>nothing was sent</b> — check the Trust Engine log.',
            cta: 'Next'
        },
        {
            id: 'ff-btn', target: '.btn-find-facility',
            icon: 'local_hospital', title: 'Find Facilities — Live Directory',
            body: 'A searchable directory of every government facility in the district: beds, ' +
                  'blood stock, antivenom, diagnostics — with live open/closed status.<br><br>' +
                  '👉 <b>TRY IT:</b> click to open it.',
            waitFor: 'facilities-opened'
        }
    ];

    /* ---------------------------- STEPS (2/2) ---------------------------- */

    STEPS.push(
        {
            id: 'ff-use', target: '#ff-chips',
            icon: 'filter_alt', title: 'Filter Like a Pro',
            body: 'These chips filter instantly — try <b>🩸 Blood Bank</b>, <b>🚨 24×7 Open</b> or ' +
                  '<b>🐍 Antivenom</b>. Searching "blood" works too.<br><br>' +
                  '👉 <b>TRY IT:</b> tap any chip or type in the search box.',
            waitFor: 'facilities-filtered'
        },
        {
            id: 'ff-gps', target: '#ff-loc',
            icon: 'near_me', title: 'Nearest-First With Real GPS',
            body: '<b>"Use My Location"</b> sorts every facility by real distance and flags the ' +
                  'closest one with a NEAREST ribbon. Every card has working <b>Call</b>, ' +
                  '<b>Directions</b> and <b>Request</b> actions.<br><br>' +
                  '👉 Close the modal when you are ready to continue.',
            waitFor: 'facilities-closed'
        },
        {
            id: 'account', target: '#account-menu-btn',
            icon: 'badge', title: 'Sign-In — Verify Once, Zero Friction Forever',
            body: 'Verify your mobile (OTP), link ABHA / DigiLocker, and save your blood group, ' +
                  'allergies and emergency contact <b>in advance</b>.<br><br>' +
                  'In a real emergency your identity is already proven — cases show your name, ' +
                  'and hospitals see your medical profile.<br><br>' +
                  '👉 <b>TRY IT:</b> open the Account hub.',
            waitFor: 'account-opened'
        },
        {
            id: 'account-save', target: '#account-menu-btn',
            icon: 'save', title: 'Your Details Flow Everywhere',
            body: 'Fill <b>Basic Details</b> (name, age, blood group, allergies, emergency contact) ' +
                  'and hit <b>Save</b>. They appear automatically in case rows and the dashboard ' +
                  '<b>Patients</b> tab.<br><br>' +
                  '👉 <b>TRY IT:</b> save your profile (any details work in Demo Mode).',
            waitFor: 'account-saved'
        },
        {
            id: 'dashboard', target: 'nav button[onclick="openDashboardModal()"]',
            icon: 'dashboard', title: 'Command Center — Live District View',
            body: 'The duty-officer dashboard: live case rows with 🛡 <b>credibility chips</b>, the ' +
                  '<b>Patients</b> directory (you are pre-registered there!), blood/inventory stock ' +
                  'alerts, ambulance fleet GPS and broadcast alerts.<br><br>' +
                  'Open it anytime from the header.',
            cta: 'Next'
        },
        {
            id: 'finish', center: true,
            icon: 'verified', title: 'You Are Ready! 🎉',
            body: 'You have now tried the <b>wizard</b>, the <b>SOS flow</b>, the <b>facilities ' +
                  'finder</b> and the <b>account hub</b> — all in Demo Mode.<br><br>' +
                  'Exiting Demo Mode now. The <b>?</b> button (bottom-right) replays this tour ' +
                  'anytime.<br><br><b>In a real emergency:</b> unconscious → <b>SOS</b>. ' +
                  'Conscious → <b>Start Emergency</b>.',
            cta: 'Finish Tour & Exit Demo'
        }
    );

    /* ---------------------------- STATE ---------------------------- */

    let idx = -1;
    let active = false;
    const els = {};

    /* ---------------------------- TOUR ENGINE ---------------------------- */

    function el(id) {
        if (!els[id]) els[id] = document.getElementById(id);
        return els[id];
    }

    function emit(name) {
        if (!active || idx < 0 || idx >= STEPS.length) return;
        if (STEPS[idx].waitFor === name) {
            setTimeout(next, 450);                       // beat for the UI to settle
        }
    }

    function targetRect(step) {
        if (!step.target) return null;
        const t = document.querySelector(step.target);
        if (!t) return null;
        const r = t.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return null; // hidden (closed modal etc.)
        return r;
    }

    function place() {
        if (!active || idx < 0) return;
        const step = STEPS[idx];
        const spot = el('tut-spot'), ring = el('tut-ring'), card = el('tut-card');
        if (!spot || !card) return;
        const r = targetRect(step);
        const vw = window.innerWidth, vh = window.innerHeight;

        if (!r) {                                        // centered card, no cutout
            spot.style.opacity = '0';
            ring.style.opacity = '0';
            const cw = Math.min(430, vw - 32);
            card.style.left = Math.max(16, (vw - cw) / 2) + 'px';
            card.style.top = Math.max(60, (vh - card.offsetHeight) / 2 - 30) + 'px';
            return;
        }

        const pad = 8;
        spot.style.opacity = '1';
        spot.style.left = Math.max(0, r.left - pad) + 'px';
        spot.style.top = Math.max(0, r.top - pad) + 'px';
        spot.style.width = Math.min(vw, r.width + pad * 2) + 'px';
        spot.style.height = Math.min(vh, r.height + pad * 2) + 'px';

        ring.style.opacity = '1';
        ring.style.left = (r.left - pad) + 'px';
        ring.style.top = (r.top - pad) + 'px';
        ring.style.width = (r.width + pad * 2) + 'px';
        ring.style.height = (r.height + pad * 2) + 'px';

        const cw = Math.min(360, vw - 24);
        card.style.width = cw + 'px';
        const cardH = card.offsetHeight || 210;
        let top;
        if (r.bottom + cardH + 26 < vh) {
            top = r.bottom + 16;                          // below the target
        } else if (r.top - cardH - 26 > 0) {
            top = r.top - cardH - 16;                     // above the target
        } else {
            top = Math.max(16, (vh - cardH) / 2);         // fallback: middle
        }
        card.style.left = Math.min(Math.max(12, r.left + r.width / 2 - cw / 2), vw - cw - 12) + 'px';
        card.style.top = top + 'px';
    }

    function render() {
        if (idx < 0 || idx >= STEPS.length) return;
        const step = STEPS[idx];
        const card = el('tut-card');
        if (!card) return;

        const counter = 'Step ' + (idx + 1) + ' of ' + STEPS.length;
        const pct = Math.round(((idx + 1) / STEPS.length) * 100);
        const isLast = idx === STEPS.length - 1;
        const nextLabel = step.cta || (step.waitFor ? 'Skip this step' : 'Next');
        const isFinish = isLast || step.id === 'finish';

        card.innerHTML =
            '<div class="tut-progress"><div class="tut-progress-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="tut-counter">' + counter +
                (step.waitFor ? '<span class="tut-try"><span class="material-symbols-outlined">touch_app</span>TRY IT</span>' : '') +
            '</div>' +
            '<div class="tut-title"><span class="material-symbols-outlined">' + step.icon + '</span>' +
                step.title + '</div>' +
            '<div class="tut-body">' + step.body + '</div>' +
            '<div class="tut-btns">' +
                '<button class="tut-btn ghost" onclick="Tutorial.stop(true)">Skip</button>' +
                (idx > 0 ? '<button class="tut-btn ghost" onclick="Tutorial.prev()">Back</button>' : '') +
                '<button class="tut-btn primary" onclick="Tutorial.' + (isFinish ? 'finish()' : 'next()') + '">' +
                    nextLabel + '</button>' +
            '</div>';
        place();
    }

    function start(fromHelp) {
        if (active) return;
        active = true;
        idx = 0;
        DemoMode.enter();
        buildUi();
        document.getElementById('tut-overlay-bg').classList.add('show');
        document.getElementById('tut-card').classList.add('show');
        document.getElementById('tut-help').style.display = 'none';
        render();
        window.addEventListener('resize', place);
        window.addEventListener('scroll', place, true);
        document.addEventListener('keydown', onKey);
        console.info('[Tutorial] started' + (fromHelp ? ' (replay)' : ''));
    }

    function stop(skipped) {
        active = false;
        idx = -1;
        const bg = document.getElementById('tut-overlay-bg');
        const card = document.getElementById('tut-card');
        const spot = document.getElementById('tut-spot');
        const ring = document.getElementById('tut-ring');
        if (bg) bg.classList.remove('show');
        if (card) card.classList.remove('show');
        if (spot) spot.style.opacity = '0';
        if (ring) ring.style.opacity = '0';
        const help = document.getElementById('tut-help');
        if (help) help.style.display = 'flex';
        window.removeEventListener('resize', place);
        window.removeEventListener('scroll', place, true);
        document.removeEventListener('keydown', onKey);
        if (!skipped) DemoMode.exit();
        console.info('[Tutorial] stopped' + (skipped ? ' (skipped)' : ''));
    }

    function finish() {
        try { localStorage.setItem(DONE_KEY, '1'); } catch (e) { /* private mode */ }
        DemoMode.exit();
        stop(false);
        miniToast('🎓 Tour complete — Demo Mode off. You are ready for the real thing!');
    }

    function next() { idx = Math.min(idx + 1, STEPS.length - 1); render(); }
    function prev() { idx = Math.max(idx - 1, 0); render(); }

    function onKey(e) {
        if (!active) return;
        if (e.key === 'ArrowRight' || e.key === 'Enter') next();
        else if (e.key === 'ArrowLeft') prev();
        else if (e.key === 'Escape') stop(true);
    }

    function miniToast(msg) {
        const t = document.getElementById('tut-mini-toast');
        if (!t) return;
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(t._timer);
        t._timer = setTimeout(() => t.classList.remove('show'), 3800);
    }

    window.Tutorial = {
        start: () => start(true),
        stop, next, prev, finish, emit,
        isActive: () => active,
        steps: STEPS
    };

    /* ---------------------------- UI BUILD ---------------------------- */

    function buildUi() {
        if (document.getElementById('tut-overlay-bg')) return;

        const frag = document.createDocumentFragment();

        const bg = document.createElement('div');
        bg.id = 'tut-overlay-bg';
        frag.appendChild(bg);

        const spot = document.createElement('div');
        spot.id = 'tut-spot';
        frag.appendChild(spot);

        const ring = document.createElement('div');
        ring.id = 'tut-ring';
        frag.appendChild(ring);

        const card = document.createElement('div');
        card.id = 'tut-card';
        frag.appendChild(card);

        const help = document.createElement('button');
        help.id = 'tut-help';
        help.title = 'Replay the interactive tutorial';
        help.innerHTML = '<span class="material-symbols-outlined">help</span>';
        help.onclick = () => {
            if (DemoMode.active) DemoMode.exit();
            start(true);
        };
        frag.appendChild(help);

        const badge = document.createElement('div');
        badge.id = 'tut-demo-badge';
        badge.innerHTML =
            '<span class="material-symbols-outlined">school</span>DEMO MODE — nothing real is filed' +
            '<button onclick="DemoMode.exit(); document.getElementById(\'tut-demo-badge\').classList.remove(\'show\')" ' +
            'title="Exit demo mode">Exit</button>';
        frag.appendChild(badge);

        const toast = document.createElement('div');
        toast.id = 'tut-mini-toast';
        frag.appendChild(toast);

        document.body.appendChild(frag);
    }

    /* ---------------------------- HOOKS ---------------------------- */

    function wireHooks() {
        function wrapFn(obj, fn, after) {
            const orig = obj[fn];
            if (typeof orig !== 'function') return;
            obj[fn] = function () {
                const r = orig.apply(this, arguments);
                try { after.apply(this, arguments); } catch (e) { /* never break host */ }
                return r;
            };
        }

        wrapFn(window, 'startEmergencySequence', () => emit('wizard-opened'));
        wrapFn(window, 'closeEmergencyWizard', () => emit('wizard-closed'));
        wrapFn(window, 'openFindFacilityModal', () => emit('facilities-opened'));
        wrapFn(window, 'openDashboardModal', () => emit('dashboard-opened'));
        wrapFn(window, 'closeModal', (id) => {
            if (id === 'modal-find-facility') emit('facilities-closed');
        });
        if (window.Facilities) {
            wrapFn(window.Facilities, 'setChip', () => emit('facilities-filtered'));
            wrapFn(window.Facilities, 'setQuery', () => emit('facilities-filtered'));
        }
        if (window.AccountUI) {
            wrapFn(window.AccountUI, 'open', () => emit('account-opened'));
            wrapFn(window.AccountUI, 'saveProfile', () => emit('account-saved'));
        }
    }

    /* ---------------------------- BOOT ---------------------------- */

    document.addEventListener('DOMContentLoaded', () => {
        buildUi();
        wireHooks();
        let done = false;
        try { done = localStorage.getItem(DONE_KEY) === '1'; } catch (e) { /* private mode */ }
        if (!done) {
            DemoMode.enter();
            setTimeout(() => start(false), 900);          // let the hero settle first
        }
    });

    /* ---------------------------- STYLES ---------------------------- */

    (function injectStyles() {
        const st = document.createElement('style');
        st.textContent =
            '#tut-overlay-bg{position:fixed;inset:0;background:rgba(8,20,16,.55);backdrop-filter:blur(1.5px);' +
                'z-index:29998;opacity:0;pointer-events:none;transition:opacity .4s ease}' +
            '#tut-overlay-bg.show{opacity:1;pointer-events:auto}' +
            '#tut-spot{position:fixed;z-index:29999;border-radius:14px;pointer-events:none;opacity:0;' +
                'box-shadow:0 0 0 9999px rgba(8,20,16,.62);outline:3px solid rgba(255,255,255,.85);' +
                'transition:all .45s cubic-bezier(.4,0,.2,1)}' +
            '#tut-ring{position:fixed;z-index:29999;border-radius:14px;pointer-events:none;opacity:0;' +
                'border:3px solid #7a1cb0;animation:tutPulse 1.6s ease-out infinite;' +
                'transition:all .45s cubic-bezier(.4,0,.2,1)}' +
            '@keyframes tutPulse{0%{box-shadow:0 0 0 0 rgba(122,28,176,.55)}' +
                '70%{box-shadow:0 0 0 16px rgba(122,28,176,0)}100%{box-shadow:0 0 0 0 rgba(122,28,176,0)}}' +
            '#tut-card{position:fixed;z-index:30000;width:340px;max-width:calc(100vw - 24px);background:#fff;' +
                'border-radius:16px;padding:16px 18px;box-shadow:0 18px 50px rgba(0,0,0,.35);' +
                'border-top:4px solid #7a1cb0;opacity:0;pointer-events:none;' +
                'transition:opacity .3s ease,left .45s cubic-bezier(.4,0,.2,1),top .45s cubic-bezier(.4,0,.2,1)}' +
            '#tut-card.show{opacity:1;pointer-events:auto;animation:tutIn .35s ease}' +
            '@keyframes tutIn{from{transform:translateY(10px);opacity:0}to{transform:none;opacity:1}}' +
            '.tut-progress{height:5px;background:#eee6f5;border-radius:99px;overflow:hidden;margin:-4px -6px 9px}' +
            '.tut-progress-fill{height:100%;background:linear-gradient(90deg,#7a1cb0,#b04bd6);border-radius:99px;' +
                'transition:width .4s ease}' +
            '.tut-counter{display:flex;justify-content:space-between;align-items:center;font-size:11px;' +
                'font-weight:800;color:#8a6aa5;letter-spacing:.5px;margin-bottom:7px}' +
            '.tut-try{display:inline-flex;align-items:center;gap:3px;background:#f3e8fc;color:#7a1cb0;' +
                'padding:2px 8px;border-radius:99px;font-size:10px;animation:tutBlink 1.4s ease infinite}' +
            '.tut-try .material-symbols-outlined{font-size:13px}' +
            '@keyframes tutBlink{50%{opacity:.55}}';
        document.head.appendChild(st);
    })();

    (function injectStyles2() {
        const st = document.createElement('style');
        st.textContent =
            '.tut-title{display:flex;align-items:center;gap:8px;font-size:16.5px;font-weight:800;' +
                'color:#1a1024;margin-bottom:8px;line-height:1.3}' +
            '.tut-title .material-symbols-outlined{font-size:22px;color:#7a1cb0;flex-shrink:0}' +
            '.tut-body{font-size:13px;line-height:1.55;color:#4a4157;margin-bottom:13px}' +
            '.tut-btns{display:flex;gap:8px;justify-content:flex-end}' +
            '.tut-btn{padding:8px 14px;border-radius:9px;font-size:12.5px;font-weight:700;cursor:pointer;' +
                'border:1.5px solid transparent;transition:all .15s ease}' +
            '.tut-btn.ghost{background:#f6f2fa;color:#6d5a82}' +
            '.tut-btn.ghost:hover{background:#ece3f4}' +
            '.tut-btn.primary{background:linear-gradient(135deg,#7a1cb0,#9a3fd0);color:#fff;' +
                'box-shadow:0 4px 12px rgba(122,28,176,.35)}' +
            '.tut-btn.primary:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(122,28,176,.45)}';
        document.head.appendChild(st);
    })();

    (function injectStyles3() {
        const st = document.createElement('style');
        st.textContent =
            '#tut-help{position:fixed;right:20px;bottom:20px;z-index:29000;width:52px;height:52px;' +
                'border-radius:50%;border:none;background:linear-gradient(135deg,#7a1cb0,#9a3fd0);color:#fff;' +
                'cursor:pointer;box-shadow:0 6px 20px rgba(122,28,176,.45);display:flex;align-items:center;' +
                'justify-content:center;animation:tutHelpPulse 2.4s ease infinite;transition:transform .15s ease}' +
            '#tut-help:hover{transform:scale(1.1)}' +
            '#tut-help .material-symbols-outlined{font-size:28px}' +
            '@keyframes tutHelpPulse{0%{box-shadow:0 6px 20px rgba(122,28,176,.45),0 0 0 0 rgba(122,28,176,.4)}' +
                '70%{box-shadow:0 6px 20px rgba(122,28,176,.45),0 0 0 14px rgba(122,28,176,0)}' +
                '100%{box-shadow:0 6px 20px rgba(122,28,176,.45),0 0 0 0 rgba(122,28,176,0)}}' +
            '#tut-demo-badge{position:fixed;top:14px;left:50%;transform:translate(-50%,-70px);z-index:29001;' +
                'display:flex;align-items:center;gap:7px;background:#1a1024;color:#e9d8fa;font-size:12px;' +
                'font-weight:800;padding:9px 14px;border-radius:999px;border:1px solid #7a1cb0;' +
                'box-shadow:0 6px 22px rgba(0,0,0,.4);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}' +
            '#tut-demo-badge.show{transform:translate(-50%,0)}' +
            '#tut-demo-badge .material-symbols-outlined{font-size:17px;color:#d3a8f0}' +
            '#tut-demo-badge button{background:#7a1cb0;color:#fff;border:none;border-radius:99px;' +
                'padding:3px 11px;font-size:11px;font-weight:800;cursor:pointer;margin-left:5px}' +
            '#tut-mini-toast{position:fixed;left:50%;bottom:88px;transform:translate(-50%,70px);z-index:30001;' +
                'background:#1a1024;color:#fff;font-size:13px;font-weight:600;padding:12px 18px;' +
                'border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.35);opacity:0;transition:all .35s ease;' +
                'pointer-events:none;max-width:92vw;border:1px solid #7a1cb0}' +
            '#tut-mini-toast.show{transform:translate(-50%,0);opacity:1}' +
            '@media (max-width:640px){#tut-card{padding:13px 14px}.tut-body{font-size:12.5px}' +
                '#tut-demo-badge{font-size:10.5px;padding:7px 11px}}';
        document.head.appendChild(st);
    })();

    console.info('%c[Tutorial] ready — Demo Mode + interactive tour loaded',
        'color:#7a1cb0;font-weight:bold');
})();