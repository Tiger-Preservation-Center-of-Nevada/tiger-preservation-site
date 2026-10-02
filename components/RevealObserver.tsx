"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades in elements marked with .reveal as they enter the viewport.
 * Re-runs on every route change so newly rendered pages get observed.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // normally set by the inline script in the layout before first paint;
    // repeated here so reveals still work if that script was stripped
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
