import { useEffect, useState } from 'react';
import { currentTheme } from '../theme';

/* 'day' or 'night', kept in step with the switch. It starts as 'day', matching the
   prerendered HTML so React can adopt it, and picks up the real theme right after. */
export function useTheme() {
  const [theme, setTheme] = useState('day');
  useEffect(() => {
    setTheme(currentTheme());
    const sync = (e) => setTheme(e.detail);
    window.addEventListener('akira-theme', sync);
    return () => window.removeEventListener('akira-theme', sync);
  }, []);
  return theme;
}
