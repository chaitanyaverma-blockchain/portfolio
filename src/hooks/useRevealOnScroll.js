import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that triggers a visibility class when an element
 * enters the viewport using IntersectionObserver.
 */
export function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
