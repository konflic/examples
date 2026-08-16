/* ============================================================
   ui.js — shared helpers for the games collection
   Pairs with ui.css. Include once per page via <script src="ui.js">
   before the game's own inline script.
   ============================================================ */

// initThemeToggle — apply saved theme and wire the #theme-toggle button
function initThemeToggle() {
    let t = localStorage.getItem('ui-theme') || 'dark';
    document.documentElement.dataset.theme = t;
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = t === 'dark' ? '☀' : '☾';
    btn.addEventListener('click', () => {
        t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = t;
        localStorage.setItem('ui-theme', t);
        btn.textContent = t === 'dark' ? '☀' : '☾';
    });
}

// uiAudio — lazy AudioContext with auto-resume; game code uses the refs below
const uiAudio = (function () {
    let ctx = null;
    function ac() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        return ctx;
    }
    function beep(freq = 700, dur = 0.1, vol = 0.25) {
        const c = ac();
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(vol, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + dur);
        o.start(); o.stop(c.currentTime + dur);
    }
    function success() { beep(600, 0.07, 0.25); setTimeout(() => beep(900, 0.07, 0.2), 80); }
    function error()   { beep(180, 0.14, 0.18); }
    function win()     { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.12, 0.25), i * 120)); }
    return { beep, success, error, win, resume: ac };
})();

// makePRNG — Mulberry32 seeded PRNG (deterministic from seed)
function makePRNG(seed) {
    let s = seed >>> 0;
    return function () {
        s += 0x6D2B79F5;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// shuffle — Fisher-Yates returning a new array; rand defaults to Math.random
function shuffle(arr, rand) {
    rand = rand || Math.random;
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Apply the saved theme as early as possible (runs immediately if DOM is already parsed)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}