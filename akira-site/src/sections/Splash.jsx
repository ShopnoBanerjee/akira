import { useCallback, useEffect, useRef, useState } from 'react';
import { brand } from '../content';
import './Splash.css';

const SESSION_KEY = 'akira:splash-seen';
/* Flip to false if the intro should replay on every page load. */
const ONCE_PER_SESSION = true;

/* Phases: idle → slurping → done (unmounted) */
export default function Splash() {
  const [phase, setPhase] = useState('boot');
  const timers = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen =
      ONCE_PER_SESSION && sessionStorage.getItem(SESSION_KEY) === '1';

    if (reduce || seen) {
      setPhase('done');
      document.body.classList.remove('is-splashing');
      return;
    }
    document.body.classList.add('is-splashing');
    setPhase('idle');
  }, []);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const finish = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1');
    document.body.classList.remove('is-splashing');
    setPhase('done');
  }, []);

  const start = useCallback(() => {
    setPhase('slurping');
    /* Sequence length must match the keyframe timings in Splash.css. */
    timers.current.push(setTimeout(finish, 2660));
  }, [finish]);

  /* Enter / Space anywhere also starts it. */
  useEffect(() => {
    if (phase !== 'idle') return;
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        start();
      }
      if (e.key === 'Escape') finish();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, start, finish]);

  if (phase === 'done' || phase === 'boot') return null;

  return (
    <div
      className={`splash splash--${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="AKIRA intro"
    >
      {/* ---- title card ---- */}
      <div className="splash__card">
        <img
          className="splash__logo"
          src="/akira-logo-white.svg"
          alt={`${brand.name} ${brand.katakana}`}
          width="779"
          height="456"
          fetchPriority="high"
        />
        <div className="splash__actions">
          <button className="splash__start" onClick={start}>
            Slurp in
          </button>
          <button className="splash__skip" onClick={finish}>
            Skip the intro
          </button>
        </div>
      </div>

      {/* ---- slurp scene ---- */}
      <div className="splash__scene" aria-hidden="true">
        <svg
          className="splash__art"
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* head — flat white disc, features cut in brand red */}
          <g className="splash__face">
            <circle cx="200" cy="132" r="112" fill="#ffffff" />
            <g
              stroke="#ee3345"
              strokeWidth="11"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M142 108c9-13 25-13 34 0" />
              <path d="M224 108c9-13 25-13 34 0" />
              <path d="M104 74c14-11 30-13 45-6" />
              <path d="M296 74c-14-11-30-13-45-6" />
            </g>
            {/* open mouth, pulsing as each length goes in */}
            <ellipse
              className="splash__mouth"
              cx="200"
              cy="186"
              rx="42"
              ry="30"
              fill="#ee3345"
            />
          </g>

          {/* noodle ribbon — scaleY from the mouth, i.e. pulled INTO it */}
          <g className="splash__noodle">
            <rect x="172" y="182" width="56" height="196" fill="#ffffff" rx="8" />
            <g stroke="#ee3345" strokeWidth="3.5" strokeLinecap="round">
              <path d="M186 190v182" />
              <path d="M200 190v182" />
              <path d="M214 190v182" />
            </g>
          </g>

          {/* bowl — white, rises and expands to become the page ground */}
          <g className="splash__bowl">
            <path
              d="M62 372h276c0 73-62 120-138 120S62 445 62 372Z"
              fill="#ffffff"
            />
            <rect x="44" y="356" width="312" height="24" rx="12" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* the white disc that swallows the screen at the end of the slurp */}
      <span className="splash__wipe" aria-hidden="true" />
    </div>
  );
}
