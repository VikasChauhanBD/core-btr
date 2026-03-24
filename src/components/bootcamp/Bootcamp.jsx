import React from "react";
import "./Bootcamp.css";
import { NavLink } from "react-router-dom";
import BootcampHero from "./hero-section/BootcampHero";
import BootcampFeatures from "./Bootcampfeatures/BootcampFeatures";
import WhyDiff2 from "./WhyDifferent/WhyDiff2";

const highlights = [
  {
    title: "Program Highlights",
    points: [
      "Duration: 4 Months",
      "Mode: Intensive Personalised Offline Program",
      "Target Exams: NEET PG & INI-CET 2026",
      "Subject-wise tests with detailed discussions",
      "Mock Grand Tests (CBT-based)",
      "Personal desktop with access to internet only for Academic Purposes",
      "Mini tests with explanations",
    ],
    badge: "New Batch Starting Soon",
  },
];

function Bootcamp() {
  return (
    <div className="bootcamp-container">
      <BootcampHero />

      <div className="bootcamp-content">
        <h1>
          <span>Core</span>BTR Bootcamp 2026
        </h1>
        <h3>
          An Intensive, Personalised Offline Crash Course for NEET PG &amp;
          INI-CET Aspirants
        </h3>
        <p>
          The <b>CoreBTR Bootcamp</b> is a{" "}
          <b>4-month, high-intensity offline crash program</b> designed for
          students who want focused revision, expert mentorship, and real exam
          readiness under one roof. With mentorship from{" "}
          <b>Dr. Zainab Vora, Dr. Ravi Sharma, and Dr. Apurv Mehra,</b> the
          Bootcamp is built for serious aspirants targeting{" "}
          <b>NEET PG &amp; INI-CET 2026.</b>
        </p>
      </div>

      <div className="bootcamp-sections">
        <section className="bootcamp-highlights">
          <div className="bootcamp-eyebrow">
            <span className="bootcamp-eyebrow-line" />
            <span className="bootcamp-eyebrow-text">Overview</span>
          </div>
          <h2 className="bootcamp-section-heading">
            Program <span>Highlights</span>
          </h2>
          <p className="bootcamp-lead">
            A structured, intensive offline program designed to give NEET PG
            &amp; INI-CET aspirants the revision, testing, and mentorship they
            need to crack the exam.
          </p>

          <div className="bootcamp-highlight-grid">
            <div className="bootcamp-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/46394035/file/bd0a89a0a1b12002437146371728adee.webp"
                alt="coreBTR BootCamp Class 2026"
              />
            </div>

            {highlights.map((h) => (
              <div className="bootcamp-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="bootcamp-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {h.badge && (
                  <span className="bootcamp-highlight-badge">{h.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <BootcampFeatures />
      
      <WhyDiff2 />
    </div>
  );
}

export default Bootcamp;
