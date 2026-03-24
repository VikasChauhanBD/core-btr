import React, { useEffect, useState } from "react";
import "./BootcampHero.css";

/**
 * IMAGE NOTE:
 * Use a PNG with transparent background.
 * The image is composited over pure black — her outline
 * naturally bleeds into the dark exactly like BeerBiceps.
 *
 * Replace DR_IMAGE_URL with your hosted transparent-bg PNG.
 */
const DR_IMAGE_URL =
  "https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png";

/**
 * ANIMATION SEQUENCE
 * ──────────────────────────────────────────────────────────
 * Phase "intro"  (0s)
 *   · Pure black screen
 *   · Image rises from bottom — only face visible (top 40%)
 *   · "DR. ZAINAB VORA" fades in centre-screen
 *
 * Phase "hold"   (~0.3s → 2.5s)
 *   · Everything holds still
 *
 * Phase "expand" (2.5s)
 *   · Centre name fades OUT
 *   · Image slides UP → full body visible
 *   · Left block slides in from left
 *   · "NEET PG BOOTCAMP" slides in from right/centre
 *   · Tagline + scroll appear
 * ──────────────────────────────────────────────────────────
 */
export default function BootcampHero() {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 320);
    const t2 = setTimeout(() => setPhase("expand"), 2600);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  return (
    <section className={`bch bch--${phase}`} aria-label="Bootcamp Hero">
      {/* Pure black base */}
      <div className="bch__base" />

      {/* ── IMAGE: right-anchored, bottom-anchored, rises on expand ── */}
      <div className="bch__img-wrap">
        <img src={DR_IMAGE_URL} alt="Dr. Zainab Vora" className="bch__img" />
        {/* Soft radial darkness over image — blends edges like BeerBiceps */}
        <div className="bch__img-fade bch__img-fade--top" />
        <div className="bch__img-fade bch__img-fade--left" />
        <div className="bch__img-fade bch__img-fade--right" />
        <div className="bch__img-fade bch__img-fade--bottom" />
      </div>

      {/* ── CENTRE NAME — intro/hold only ── */}
      <div className="bch__intro-name">
        <span className="bch__intro-sub">CoreBTR BOOTCAMP</span>
        <span className="bch__intro-doc">Dr. Zainab Vora</span>
      </div>

      {/* ── Right: by / name / place / cta — expand only ── */}
      <div className="bch__right">
        <span className="bch__r-by">by</span>
        <span className="bch__r-name">Dr. Zainab Vora</span>
        <span className="bch__r-place">
          at Vidya Jeevan,
          <br />
          Greater Noida
        </span>
        <span className="bch__r-cta">NEW BATCH STARTING SOON</span>
      </div>

      {/* ── LEFT: CoreBTR BOOTCAMP big — expand only ── */}
      <div className="bch__left-title">
        <span className="bch__left-title-text">
          CoreBTR
          <br />
          BOOTCAMP
        </span>
      </div>

      {/* ── Bottom tagline ── */}
      <p className="bch__tagline">Crack the exam. Own the rank.</p>

      {/* ── Scroll line ── */}
      <div className="bch__scroll">
        <span />
      </div>
      {/* MOBILE ONLY: "NEET PG / BOOTCAMP" top-centre (like "ELEVATING BHARAT") */}
      <div className="bch__mob-top">
        <span className="bch__mob-top-text">CoreBTR</span>
        <span className="bch__mob-top-text">BOOTCAMP</span>
      </div>

      {/* MOBILE ONLY: "Dr. Zainab Vora" bottom-left (like "BEERBICEPS MEDIA WORLD") */}
      <div className="bch__mob-bottom">
        <span className="bch__mob-bottom-name">Dr. Zainab Vora</span>
        <span className="bch__mob-bottom-sub">
          at Vidya Jeevan, Greater Noida
        </span>
        <span className="bch__mob-cta">NEW BATCH STARTED</span>
      </div>
    </section>
  );
}
