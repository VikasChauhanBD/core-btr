import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css";

const STORAGE_KEY = "corebtr_tab_open";
const DURATION = 3800; // total loading duration in ms

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("enter"); // enter | loading | exit
  const progressRef = useRef(null);
  const channelRef = useRef(null);

  useEffect(() => {
    // ── Tab detection via BroadcastChannel ──
    // If another tab of this site is already open, skip the loader
    const channel = new BroadcastChannel(STORAGE_KEY);
    channelRef.current = channel;

    let alreadyOpen = false;

    channel.onmessage = (e) => {
      if (e.data === "ping") {
        // Another tab just opened — tell it we're alive
        channel.postMessage("alive");
      }
      if (e.data === "alive") {
        // We got a response — a tab was already open, skip loader
        alreadyOpen = true;
        setVisible(false);
        onComplete?.();
      }
    };

    // Broadcast a ping to see if any tab responds
    channel.postMessage("ping");

    // Give 80ms for a response before deciding to show loader
    const tabCheckTimer = setTimeout(() => {
      if (!alreadyOpen) {
        setVisible(true);
        startLoading();
      }
    }, 80);

    return () => {
      clearTimeout(tabCheckTimer);
      channel.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startLoading = () => {
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / DURATION, 1);
      // ease-out curve for natural feel
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.floor(eased * 100));

      if (raw < 1) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setPhase("exit");
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 900);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, []);

  if (!visible) return null;

  // Build letter spans for "Core BTR"
  const word1 = "Core".split("");
  const word2 = "BTR".split("");

  return (
    <div className={`ls-root ${phase === "exit" ? "ls-exit" : ""}`}>
      {/* ── Animated background layers ── */}
      <div className="ls-bg-base" />
      <div className="ls-orb ls-orb-1" />
      <div className="ls-orb ls-orb-2" />
      <div className="ls-orb ls-orb-3" />
      <div className="ls-grid" />
      <div className="ls-vignette" />

      {/* ── Floating particles ── */}
      <div className="ls-particles">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="ls-particle" style={{ "--i": i }} />
        ))}
      </div>

      {/* ── Center content ── */}
      <div className="ls-center">
        {/* Logo mark */}
        <div className="ls-logo-mark">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="url(#lg1)"
              strokeWidth="1.5"
            />
            <circle
              cx="32"
              cy="32"
              r="22"
              stroke="url(#lg2)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <path
              d="M20 32 C20 24 26 18 32 18 C38 18 44 24 44 32"
              stroke="url(#lg3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="32" cy="32" r="4" fill="url(#lg1)" />
            <defs>
              <linearGradient
                id="lg1"
                x1="0"
                y1="0"
                x2="64"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8a5af5" />
                <stop offset="100%" stopColor="#c9adfb" />
              </linearGradient>
              <linearGradient
                id="lg2"
                x1="64"
                y1="0"
                x2="0"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8a5af5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#c9adfb" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="lg3"
                x1="20"
                y1="18"
                x2="44"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6b38e0" />
                <stop offset="100%" stopColor="#a97cf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand name */}
        <div className="ls-brand">
          <div className="ls-word ls-word-1">
            {word1.map((l, i) => (
              <span key={i} className="ls-letter" style={{ "--li": i }}>
                {l}
              </span>
            ))}
          </div>
          <div className="ls-word ls-word-2">
            {word2.map((l, i) => (
              <span
                key={i}
                className="ls-letter ls-letter-btr"
                style={{ "--li": i }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="ls-tagline">Your Ultimate Medical Exam Companion</p>

        {/* Progress bar */}
        <div className="ls-progress-wrap">
          <div className="ls-progress-track">
            <div className="ls-progress-fill" style={{ width: `${progress}%` }}>
              <span className="ls-progress-glow" />
            </div>
          </div>
          <span className="ls-progress-num">{progress}%</span>
        </div>

        {/* Loading dots */}
        <div className="ls-dots">
          <span className="ls-dot" />
          <span className="ls-dot" />
          <span className="ls-dot" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="ls-corner ls-corner-tl" />
      <div className="ls-corner ls-corner-tr" />
      <div className="ls-corner ls-corner-bl" />
      <div className="ls-corner ls-corner-br" />
    </div>
  );
}
