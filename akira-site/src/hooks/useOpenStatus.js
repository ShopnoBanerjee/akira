import { useEffect, useState } from 'react';
import { openStatus } from '../hours';

/* Whether the kitchen is open right now, rechecked every minute. */
export function useOpenStatus() {
  const [status, setStatus] = useState(() => openStatus());

  useEffect(() => {
    const timer = setInterval(() => setStatus(openStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return status;
}
