"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const formatValue = (v: number, decimals: number, suffix: string) =>
  v.toFixed(decimals) + suffix;

export function StatCounter({
  value,
  suffix = "",
  decimals = 0,
  durationMs = 1400,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayed, setDisplayed] = useState(() =>
    formatValue(0, decimals, suffix),
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const final = formatValue(value, decimals, suffix);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const noIO = typeof IntersectionObserver === "undefined";

    if (prefersReduced || noIO) {
      raf = requestAnimationFrame(() => setDisplayed(final));
      return () => {
        if (raf) cancelAnimationFrame(raf);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const v = value * easeOut(t);
          setDisplayed(formatValue(v, decimals, suffix));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, suffix, decimals, durationMs]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={formatValue(value, decimals, suffix)}
    >
      {displayed}
    </span>
  );
}
