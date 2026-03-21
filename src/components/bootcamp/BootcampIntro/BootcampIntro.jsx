import React from "react";
import "./BootcampIntro.css";

/* ── SVG Icons ── */
const IconCalendar = () => (
  <svg viewBox="0 0 36 36" fill="none">
    <rect x="4" y="8" width="28" height="24" rx="4" stroke="#7d6beb" strokeWidth="2"/>
    <rect x="4" y="14" width="28" height="2" fill="#7d6beb" opacity="0.25"/>
    <path d="M12 4v6M24 4v6" stroke="#7d6beb" strokeWidth="2" strokeLinecap="round"/>
    <rect x="9"  y="19" width="4" height="4" rx="1" fill="#7d6beb" opacity="0.6"/>
    <rect x="16" y="19" width="4" height="4" rx="1" fill="#7d6beb" opacity="0.6"/>
    <rect x="23" y="19" width="4" height="4" rx="1" fill="#7d6beb" opacity="0.3"/>
    <rect x="9"  y="25" width="4" height="4" rx="1" fill="#7d6beb" opacity="0.3"/>
    <rect x="16" y="25" width="4" height="4" rx="1" fill="#7d6beb" opacity="0.3"/>
  </svg>
);

const IconMentor = () => (
  <svg viewBox="0 0 36 36" fill="none">
    <circle cx="14" cy="12" r="6" stroke="#e07b3a" strokeWidth="2"/>
    <path d="M3 30c0-6.075 4.925-11 11-11" stroke="#e07b3a" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="20" r="7" fill="#fde8d4" stroke="#e07b3a" strokeWidth="2"/>
    <path d="M23 20l2 2 4-4" stroke="#e07b3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 36 36" fill="none">
    <rect x="3"  y="5" width="14" height="26" rx="2" stroke="#3db88a" strokeWidth="2"/>
    <rect x="19" y="5" width="14" height="26" rx="2" stroke="#3db88a" strokeWidth="2"/>
    <path d="M7 11h6M7 16h6M7 21h4"  stroke="#3db88a" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M23 11h6M23 16h6M23 21h4" stroke="#3db88a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="#d44d8a" strokeWidth="2"/>
    <circle cx="18" cy="18" r="8"  stroke="#d44d8a" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="3.5" fill="#d44d8a" opacity="0.75"/>
    <path d="M18 4v4M18 28v4M4 18h4M28 18h4" stroke="#d44d8a" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="27" cy="9" r="4" fill="#fce4f0" stroke="#d44d8a" strokeWidth="1.2"/>
    <path d="M25.5 9l1.2 1.2 2.4-2.4" stroke="#d44d8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const stats = [
  { icon: <IconCalendar />, bold: "4 Months",  sub: "Intensive Program", color: "violet" },
  { icon: <IconMentor />,   bold: "Expert",    sub: "Mentorship",        color: "orange" },
  { icon: <IconBook />,     bold: "Focused",   sub: "Revision",          color: "green"  },
  { icon: <IconTarget />,   bold: "NEET PG &", sub: "INI-CET 2026",      color: "pink"   },
];

export default function BootcampIntro() {
  return (
    <section className="bci">
      {/* decorative dot grids */}
      <div className="bci__dots bci__dots--left"  aria-hidden="true" />
      <div className="bci__dots bci__dots--right" aria-hidden="true" />
      {/* decorative blobs */}
      <div className="bci__blob bci__blob--tl" aria-hidden="true" />
      <div className="bci__blob bci__blob--br" aria-hidden="true" />
      <div className="bci__dot-accent bci__dot-accent--l" aria-hidden="true" />
      <div className="bci__dot-accent bci__dot-accent--r" aria-hidden="true" />

      <div className="bci__inner">

        {/* Heading */}
        <h1 className="bci__heading">
          NEET PG <em>Bootcamp</em>{" "}
          <span className="bci__year">2026</span>
        </h1>

        {/* Subheading */}
        <p className="bci__subheading">
          An Intensive, Personalised Offline Crash Course for NEET PG &amp; INI-CET Aspirants
        </p>
        <div className="bci__underline" aria-hidden="true" />

        {/* Description card */}
        <div className="bci__desc-card">
          <p className="bci__desc">
            The <strong>NEET PG Bootcamp</strong> is a{" "}
            <strong>4-month, high-intensity offline crash program</strong> designed
            for students who want focused revision, expert mentorship, and real exam
            readiness under one roof.
          </p>
          <p className="bci__desc">
            With mentorship from{" "}
            <strong>Dr. Zainab Vora, Dr. Ravi Sharma, and Dr. Apurv Mehra</strong>,
            the Bootcamp is built for serious aspirants targeting{" "}
            <strong>NEET PG &amp; INI-CET 2026.</strong>
          </p>
        </div>

        {/* Stat pills */}
        <div className="bci__stats">
          {stats.map((s, i) => (
            <div key={i} className={`bci__stat bci__stat--${s.color}`}>
              <div className="bci__stat-icon">{s.icon}</div>
              <p className="bci__stat-bold">{s.bold}</p>
              <p className="bci__stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}