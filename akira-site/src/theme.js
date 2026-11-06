/* ============================================================================
   AKIRA — day and night
   The page starts at night after 7 pm in Kolkata (the inline script in each
   HTML head decides before the first paint). A visitor's own choice wins and
   is remembered. Switching drops a red noodle curtain, swaps, and slurps it away.
   ========================================================================== */

const KEY = 'akira-theme';
const root = () => document.documentElement;

export const currentTheme = () =>
  typeof document !== 'undefined' && root().dataset.theme === 'night' ? 'night' : 'day';

function remember(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* private mode: the choice lasts for this page only */
  }
}

function apply(theme) {
  root().dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'night' ? '#231f20' : '#ee3345');
  if (theme === 'night') {
    root().classList.add('neon-on');
    setTimeout(() => root().classList.remove('neon-on'), 1200);
  }
  window.dispatchEvent(new CustomEvent('akira-theme', { detail: theme }));
}

let busy = false;

/* A paused tab can freeze an animation mid-way; never let the curtain hang over the page. */
const settle = (animation, ms) =>
  Promise.race([animation.finished, new Promise((resolve) => setTimeout(resolve, ms))]);

export async function toggleTheme() {
  if (busy) return;
  const next = currentTheme() === 'night' ? 'day' : 'night';
  remember(next);
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (still || typeof document.body.animate !== 'function') {
    apply(next);
    return;
  }

  busy = true;
  const curtain = document.createElement('div');
  curtain.className = 'curtain';
  curtain.setAttribute('aria-hidden', 'true');
  curtain.innerHTML = '<div class="curtain__field"></div><div class="tails curtain__tails"></div>';
  document.body.appendChild(curtain);
  try {
    // Noodles drop over the page...
    await settle(curtain.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }], {
      duration: 420,
      easing: 'cubic-bezier(0.7, 0, 0.84, 0)',
      fill: 'forwards',
    }), 900);
    apply(next);
    // ...and get slurped back up, whipping a little on the way out.
    await settle(curtain.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translate(-6px, 3%)', offset: 0.18 },
        { transform: 'translate(8px, -40%)', offset: 0.6 },
        { transform: 'translateY(-100%)' },
      ],
      { duration: 620, easing: 'cubic-bezier(0.55, 0, 0.85, 0.36)', fill: 'forwards' }
    ), 1200);
  } finally {
    curtain.remove();
    busy = false;
  }
}
