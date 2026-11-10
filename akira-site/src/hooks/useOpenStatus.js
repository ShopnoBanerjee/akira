import { useEffect, useState } from 'react';
import { openStatus } from '../hours';

/* What the prerendered HTML says: true at any hour, unlike "open now". The browser
   starts from the same text so React can adopt the HTML, then shows the live status. */
const ALWAYS = { open: false, label: 'Open daily from 4 pm, until 1:30 am Thursday to Saturday', row: null };

/* Whether the kitchen is open right now, rechecked every minute. */
export function useOpenStatus() {
  const [status, setStatus] = useState(ALWAYS);

  useEffect(() => {
    setStatus(openStatus());
    const timer = setInterval(() => setStatus(openStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return status;
}
