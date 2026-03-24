import React from "react";
import "./Bootcamp.css";
import { NavLink } from "react-router-dom";
import BootcampHero from "./hero-section/BootcampHero";
import CBTRoom from "../../assets/images/CBTRooms2.webp";
import SABR from "../../assets/images/SABR.webp";
import WhyDiff2 from "./WhyDifferent/WhyDiff2";
import BootcampFeatures from "./BootcampFeatures/BootcampFeatures";

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
          <span>Core</span>Bootcamp at Vidya Jeevan Experience Centre, Greater Noida
        </h1>
        <h3>
          An intensive, high-impact offline program for serious NEET PG &amp; INI-CET aspirants - hosted at the Vidya Jeevan Experience Centre, a space built for focused learning, discipline, and distraction-free preparation.
        </h3>
        <p>
          With mentorship from <b>Dr. Zainab Vora, Dr. Ravi Sharma, and Dr. Apurv Mehra</b> this program is designed to give you the{" "}
          <b>right environment, the right guidance, and the right strategy</b> so you don’t just study more, you study better.{" "}
          
          Where the environment, mentorship, and your{" "}
          <b>effort come together to create results.</b>
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
      A structured, intensive offline program designed to give NEET PG
      &amp; INI-CET aspirants the revision, testing, and mentorship they
      need to crack the exam.
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
        src={SABR}
        alt="coreBTR BootCamp Class 2026 - Top"
      />
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
        src={CBTRoom}
        alt="coreBTR BootCamp Class 2026 - Bottom"
      />
    </div>
  </section>
      </div>
      <BootcampFeatures />
      
      
      <WhyDiff2 />
    </div>
  );
}

export default Bootcamp;
