import { useEffect, useRef, useState } from 'react';

/**
 * Fires once, when the element crosses `threshold` of the viewport.
 * Returns [ref, inView] — spread the class as `reveal reveal-visible`.
 * Falls back to visible immediately when IntersectionObserver is missing
 * or the visitor prefers reduced motion.
 */
export function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/** Convenience: the class string for a revealing element. */
export function revealClass(inView, extra = '') {
  return ['reveal', inView ? 'reveal-visible' : '', extra]
    .filter(Boolean)
    .join(' ');
}
