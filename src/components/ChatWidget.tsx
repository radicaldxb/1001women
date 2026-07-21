"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Load the chat widget only after the page is idle / interacted with,
 * so it cannot compete with LCP or inject CLS during first paint.
 */
export function ChatWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;

    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const onInteract = () => enable();

    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, { timeout: 6000 });
      } else {
        timeoutId = window.setTimeout(enable, 4000);
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
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("load", schedule);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
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
