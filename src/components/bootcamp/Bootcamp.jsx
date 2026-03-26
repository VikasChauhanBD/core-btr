import React from "react";
import "./Bootcamp.css";
import { NavLink } from "react-router-dom";
import BootcampHero from "./hero-section/BootcampHero";
import CBTRoom from "../../assets/images/CBTRooms2.webp";
import SABR from "../../assets/images/SABR.webp";
import WhyDiff2 from "./WhyDifferent/WhyDiff2";
import BootcampFeatures from "./BootcampFeatures/BootcampFeatures";
import BootcampCTA from "./BootcampCTA/BootcampCTA";

const highlights = [
  {
    title: "Program Highlights",
    points: [
      "4 Months of High-Intensity Revision - designed to maximise output in limited time",
      "Personalised Offline Learning - focused environment with structured guidance",
      "Built for NEET PG & INI-CET 2026 - aligned with actual exam demands",
      "Subject-wise Tests + Detailed Discussions - learn how to think, not just what to study",
      "CBT-Based Grand Tests - real exam simulation with performance insights",
      "Mini Tests with Explanations - continuous practice with concept clarity",
      "Mentor-Guided Strategy Sessions - refine approach, improve accuracy, boost confidence",
      "Consistent Performance Tracking - identify weak areas and work on them strategically",
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
          Core<span>BTR</span> Bootcamp
        </h1>
        <h3>Learn with Dr. Zainab Vora. Transform with the System.</h3>
        <p>
          This is where concepts finally make sense. Where revision becomes
          structured And where your preparation starts moving in the right
          direction.
          <b>At coreBTR Bootcamp, </b> you’re not just attending classes—you’re
          learning directly under <b>Dr. Zainab Vora</b>, with a system designed
          to help you <b>stay consistent, focused, and exam-ready.</b> so you
          don’t just study more, you study better. Start Learning Smarter.{" "}
          <b>Explore Bootcamp</b>
        </p>
      </div>

      {/* <div className="bootcamp-sections">
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
        </section> */}
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
            An intensive, high-impact offline program for serious
            <b>
              {" "}
              NEET PG &amp; INI-CET Aspirants.<br /> Designed for focused
              learning,
            </b>{" "}
            disciplined preparation, and a completely distraction-free
            environment.
          </p>

          {/* POINTERS IN MIDDLE */}
          <div className="bootcamp-highlight-grid">
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

          {/* TOP IMAGE */}
          <div className="bootcamp-highlight-image bootcamp-highlight-image--top">
            <img
              src="https://cdn.dribbble.com/userupload/47155755/file/3f45cbd32c6198de7dc278e7d95dbf2d.jpeg"
              alt="coreBTR BootCamp Class 2026 - Top"
            />
            <p className="bootcamp-subtitle-top">Learn The BTR Way : 19 Subjects | System-Wise | High-Yield</p>
            
          </div>
          {/* <h3 className="bootcamp-section-sub-heading-img-2">
           19 Subjects | System-Wise | High-Yield
          </h3> */}
          <div className="bootcamp-highlight-content">
           

            <h2 className="bootcamp-title">Concepts. Clarity. Confidence.</h2>

            <p className="bootcamp-description">
              With <strong>Dr. Zainab Vora</strong>, learning is not about
              memorizing more—it’s about understanding better. Complex topics
              are simplified with integrated, system-wise learning across all 19
              subjects.
            </p>

            <ul className="bootcamp-points">
              <li>High-yield focus for NEET PG, INI-CET & FMGE</li>
              <li>System-wise structured preparation</li>
              <li>Built for retention, recall & real exam pressure</li>
            </ul>

            <p className="bootcamp-tagline">
              This is not just teaching. <span>This is the BTR approach.</span>
            </p>
          </div>

          {/* POINTERS IN MIDDLE */}
          {/* <div className="bootcamp-highlight-grid">
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
    </div> */}

          {/* BOTTOM IMAGE */}
          <div className="bootcamp-highlight-image bootcamp-highlight-image--bottom">
            <img
              src="https://cdn.dribbble.com/userupload/47155756/file/65427d7658a4f012368607444d02c2d1.jpeg"
              alt="coreBTR BootCamp Class 2026 - Bottom"
            />
          </div>
          <h3 className="bootcamp-section-sub-heading-img">
            Real Exam Environment. Real Preparation.
          </h3>
        </section>
      </div>
      <BootcampFeatures />

      <WhyDiff2 />
      <BootcampCTA />
    </div>
  );
}

export default Bootcamp;
