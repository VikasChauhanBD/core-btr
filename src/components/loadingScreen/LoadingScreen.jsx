import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css";

const DURATION = 3800;

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("enter");
  const progressRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.floor(eased * 100));

      if (raw < 1) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setPhase("exit");
        setTimeout(() => {
          onComplete?.();
        }, 900);
      }
    };

    progressRef.current = requestAnimationFrame(tick);

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, []);

  const word = "coreBTR".split("");

  return (
    <div className={`ls-root ${phase === "exit" ? "ls-exit" : ""}`}>
      <div className="ls-bg-base" />
      <div className="ls-orb ls-orb-1" />
      <div className="ls-orb ls-orb-2" />
      <div className="ls-orb ls-orb-3" />
      <div className="ls-grid" />
      <div className="ls-vignette" />

      <div className="ls-center">
        <div className="ls-logo-mark">
          <svg viewBox="0 0 64 64" fill="none">
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
            <circle cx="32" cy="32" r="4" fill="url(#lg1)" />

            <defs>
              <linearGradient id="lg1">
                <stop offset="0%" stopColor="#1767BE" />
                <stop offset="100%" stopColor="#FEB122" />
              </linearGradient>

              <linearGradient id="lg2">
                <stop offset="0%" stopColor="#1767BE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FEB122" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="ls-brand">
          <div className="ls-word">
            {word.map((l, i) => (
              <span
                key={i}
                className={`ls-letter ${i >= 4 ? "ls-letter-btr" : ""}`}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <p className="ls-tagline">From Revision to Revolution</p>

        <div className="ls-progress-wrap">
          <div className="ls-progress-track">
            <div className="ls-progress-fill" style={{ width: `${progress}%` }}>
              <span className="ls-progress-glow" />
            </div>
          </div>
          <span className="ls-progress-num">{progress}%</span>
        </div>

        <div className="ls-dots">
          <span className="ls-dot" />
          <span className="ls-dot" />
          <span className="ls-dot" />
        </div>
      </div>
    </div>
  );
}
