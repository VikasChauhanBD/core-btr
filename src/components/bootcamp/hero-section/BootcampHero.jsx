import React, { useEffect, useState } from "react";
import "./BootcampHero.css";

const DR_IMAGE_URL =
  "https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png";

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
        {/* <span className="bch__r-place">
          at Vidya Jeevan, Greater Noida
        </span> */}
        <span className="bch__r-cta">
          When concepts click <br /> everything changes
        </span>
      </div>
      <div className="bch__right">
        {/* <span className="bch__r-cta2">
          REGISTRATION STARTS ON <br /> 13TH APRIL{" "}
        </span> */}

        <span className="bch__r-cta2">
          REGISTRATION STARTS FOR <br /> NEET PG BOOTCAMP
        </span>

        {/* <span className="bch__r-cta2">
          REGISTRATION CLOSED FOR NEET PG BOOTCAMP
        </span> */}
      </div>

      {/* ── LEFT: CoreBTR BOOTCAMP big — expand only ── */}
      <div className="bch__left-title">
        <span className="bch__left-title-text">
          CoreBTR
          <br />
          BOOTCAMP
        </span>
        <span className="bch__r-place">at Vidya Jeevan, Greater Noida</span>
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
        <span className="bch__mob-bottom-cta">
          When concepts click, everything changes
        </span>

        {/* <span className="bch__mob-cta">REGISTRATION STARTS ON 13TH APRIL </span> */}

        <span className="bch__mob-cta">
          REGISTRATION STARTS FOR NEET PG BOOTCAMP
        </span>

        {/* <span className="bch__mob-cta">REGISTRATION CLOSED FOR NEET PG BOOTCAMP</span> */}
      </div>
    </section>
  );
}
