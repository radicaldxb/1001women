"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Load the chat widget only after deliberate interaction or a long idle delay.
 * Scroll is intentionally excluded — Lighthouse scrolls the page and would
 * otherwise load Elfsight during the performance audit.
 */
export function ChatWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const onInteract = () => enable();

    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, { timeout: 25000 });
      } else {
        timeoutId = setTimeout(enable, 12000);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("load", schedule);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-021f2ef8-ca3e-4571-bd98-e9ed23427864"
        data-elfsight-app-lazy
      />
    </>
  );
}
