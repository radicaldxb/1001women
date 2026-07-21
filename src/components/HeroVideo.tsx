"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const POSTER = "/images/1001women-header.webp";
const VIDEO_WEBM = "/video/Header-image.webm";
const VIDEO_MP4 = "/video/Header-image.mp4";

/**
 * Hero media stack:
 * 1. StarSky (parent) — solid fallback
 * 2. Poster still — paints immediately for LCP
 * 3. Video — deferred until desktop + idle (skipped on mobile / reduced motion)
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const canPlayVideo = window.matchMedia("(min-width: 900px)").matches;
    const saveData =
      "connection" in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

    if (reduceMotion || !canPlayVideo || saveData) return;

    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;

    const enable = () => {
      if (!cancelled) setLoadVideo(true);
    };

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, { timeout: 1800 });
      } else {
        timeoutId = window.setTimeout(enable, 900);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => {
      setVideoReady(true);
      void video.play().catch(() => {
        // Autoplay blocked — poster + StarSky remain
      });
    };

    if (video.readyState >= 2) {
      markReady();
      return;
    }

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
    };
  }, [loadVideo]);

  return (
    <div
      className={["hero-video", videoReady ? "is-ready" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <Image
        className="hero-video-poster"
        src={POSTER}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1600px"
        quality={70}
      />

      {loadVideo ? (
        <video
          ref={videoRef}
          className="hero-video-media"
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER}
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>
      ) : null}

      <div className="hero-video-shade" />
    </div>
  );
}
