"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";

// Soft Gates-style decode: brief letter flicker → final text
const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

type ScrambleTextProps = {
  text: string;
  /** Animate on mount (default) or when scrolled into view */
  trigger?: "mount" | "scroll";
  delay?: number;
  className?: string;
  /** Disable animation — render plain text */
  animate?: boolean;
};

function isStableChar(char: string) {
  return char === " " || !/[a-zA-Z0-9]/.test(char);
}

function scrambleChar(index: number, elapsed: number, lockAt: number, finalChar: string) {
  if (isStableChar(finalChar)) return finalChar;
  if (elapsed >= lockAt) return finalChar;

  // Near lock time, settle into the real character more often
  const progress = elapsed / lockAt;
  if (progress > 0.7 && ((index + Math.floor(elapsed / 80)) % 3 === 0)) {
    return finalChar;
  }

  const tick = Math.floor(elapsed / 80);
  const seed = Math.abs(Math.sin(index * 12.9898 + tick * 78.233) * 43758.5453);
  return POOL[Math.floor(seed) % POOL.length];
}

function buildFrame(text: string, elapsed: number, delay: number) {
  const len = text.length;
  // Short, light decode — ~350–500ms total for typical headings
  const staggerMs = Math.min(18, Math.max(10, 280 / Math.max(len, 1)));
  const leadMs = 40;

  return text
    .split("")
    .map((char, i) => scrambleChar(i, elapsed, delay + leadMs + i * staggerMs, char))
    .join("");
}

export default function ScrambleText({
  text,
  trigger = "mount",
  delay = 0,
  className,
  animate = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [reduceMotion, setReduceMotion] = useState(false);

  const rootRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const scrollPlayedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (!animate || reduceMotion) return;
    // Start from real text — only flicker briefly during decode (no scrambled flash on load)
    setDisplay(text);
  }, [animate, reduceMotion, text]);

  const runDecode = useCallback(() => {
    if (!animate || reduceMotion) {
      setDisplay(text);
      return;
    }

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const len = text.length;
    const staggerMs = Math.min(18, Math.max(10, 280 / Math.max(len, 1)));
    const totalMs = delay + 40 + len * staggerMs + 30;
    const startAt = performance.now();
    let lastFrame = "";

    const frame = (now: number) => {
      const elapsed = now - startAt;
      const next = buildFrame(text, elapsed, delay);

      if (next !== lastFrame) {
        lastFrame = next;
        setDisplay(next);
      }

      if (elapsed < totalMs) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setDisplay(text);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(frame);
  }, [animate, reduceMotion, text, delay]);

  useEffect(() => {
    if (!animate || reduceMotion || trigger !== "mount") return;
    runDecode();
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, reduceMotion, trigger, runDecode]);

  useEffect(() => {
    if (!animate || reduceMotion || trigger !== "scroll" || !rootRef.current) return;

    const node = rootRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || scrollPlayedRef.current) return;
        scrollPlayedRef.current = true;
        runDecode();
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, reduceMotion, trigger, runDecode]);

  if (!animate || reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={rootRef} className={className} aria-label={text}>
      <span className="inline-grid align-baseline">
        <span className="col-start-1 row-start-1 invisible select-none" aria-hidden="true">
          {text}
        </span>
        <span className="col-start-1 row-start-1" aria-hidden="true">
          {display}
        </span>
      </span>
    </span>
  );
}
