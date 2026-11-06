import { useEffect, useState } from 'react';
import { openStatus } from '../hours';

/* Whether the kitchen is open right now, rechecked every minute. */
/* What the prerendered HTML says: true at any hour, unlike "open now". */
const ALWAYS = { open: false, label: 'Open daily from 4 pm, until 1:30 am Thursday to Saturday', row: null };

export function useOpenStatus() {
  const [status, setStatus] = useState(() => (typeof window === 'undefined' ? ALWAYS : openStatus()));

  useEffect(() => {
    const timer = setInterval(() => setStatus(openStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return status;
}
