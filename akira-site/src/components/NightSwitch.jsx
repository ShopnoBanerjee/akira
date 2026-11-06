import { useState } from 'react';
import { toggleTheme } from '../theme';
import { useTheme } from '../hooks/useTheme';

/* A noodle pull-cord: tug it and the lights go out (or come back on). */
export default function NightSwitch({ className = '' }) {
  const night = useTheme() === 'night';
  const [pulled, setPulled] = useState(false);

  const pull = () => {
    setPulled(true);
    toggleTheme();
  };

  return (
    <button
      type="button"
      className={`night-switch ${className}`}
      aria-pressed={night}
      onClick={pull}
    >
      <svg
        className={pulled ? 'night-switch__cord night-switch__cord--pull' : 'night-switch__cord'}
        viewBox="0 0 20 44"
        aria-hidden="true"
        onAnimationEnd={() => setPulled(false)}
      >
        <path d="M10 0c-6 6 6 10 0 16s6 10 0 16" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <circle cx="10" cy="37" r="6" />
      </svg>
      <span>{night ? 'Lights on' : 'Lights out'}</span>
    </button>
  );
}
