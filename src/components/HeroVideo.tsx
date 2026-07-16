"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const POSTER = "/images/1001women-header.webp";
const VIDEO_WEBM = "/video/Header-image.webm";
const VIDEO_MP4 = "/video/Header-image.mp4";

/**
 * Hero media stack:
 * 1. StarSky (parent) — solid fallback
 * 2. Poster still — paints fast
 * 3. Video — fades in when ready (skipped for reduced motion)
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterReady, setPosterReady] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduceMotion) setMotionOk(true);
  }, []);

  useEffect(() => {
    if (!motionOk) return;
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
  }, [motionOk]);

  return (
    <div
      className={[
        "hero-video",
        posterReady ? "has-poster" : "",
        videoReady ? "is-ready" : "",
      ]
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
        sizes="100vw"
        onLoad={() => setPosterReady(true)}
      />

      {motionOk ? (
        <video
          ref={videoRef}
          className="hero-video-media"
          muted
          loop
          playsInline
          preload="metadata"
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
