import { useEffect, useState } from 'react';
import { currentTheme } from '../theme';

/* 'day' or 'night', kept in step with the switch. */
export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const sync = (e) => setTheme(e.detail);
    window.addEventListener('akira-theme', sync);
    return () => window.removeEventListener('akira-theme', sync);
  }, []);
  return theme;
}
