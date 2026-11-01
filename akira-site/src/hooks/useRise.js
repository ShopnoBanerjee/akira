import { useEffect } from 'react';

/*
 * Parts marked data-rise arrive once as they enter the screen. The hiding class
 * goes on only from here, so nothing stays hidden if this script never runs.
 */
export function useRise() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') return;

    const root = document.documentElement;
    root.classList.add('rising');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('risen');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('[data-rise]').forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove('rising');
    };
  }, []);
}
