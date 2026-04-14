import React from "react";
import "./Bootcamp.css";
import { NavLink } from "react-router-dom";
import BootcampHero from "./hero-section/BootcampHero";
import WhyDiff2 from "./WhyDifferent/WhyDiff2";
import BootcampFeatures from "./BootcampFeatures/BootcampFeatures";
import BootcampCTA from "./BootcampCTA/BootcampCTA";
import MentorSection from "./MentorSection/MentorSection";
import BtrBootcamp from "./btrbootcamp/BtrBootcamp";
import CoreBtrPrograms from "./btrbootcamp/CoreBtrPrograms";

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
          structured and where your preparation starts moving in the right
          direction.
          <b>At coreBTR Bootcamp, </b> you’re not just attending classes, you’re
          learning directly under<b>Dr. Zainab Vora</b>, with a system designed
          to help you <b>stay consistent, focused, and exam-ready.</b> You don’t
          just study more, you study better. <b> Start Learning Smarter.</b>
        </p>
      </div>

      <CoreBtrPrograms />

      <div className="btr-bootcamp-section-home">
        <h1 className="btr-bootcamp-section-heading">
          CoreBTR NEET PG T&D <span>BOOTCAMP SCHEDULE</span>
        </h1>
        <NavLink
          to="/neetpg-bootcamp-schedule"
          className="corebtr-schedule-btn"
        >
          Check Schedule
        </NavLink>
      </div>

      <div className="bootcamp-sections">
        <section className="bootcamp-highlights">
          {/* TOP IMAGE */}
          <div className="bootcamp-highlight-image bootcamp-highlight-image--top">
            <img
              src="https://cdn.dribbble.com/userupload/47178593/file/1bfaa70f0c6507317a6cb8d3c9100c74.png"
              alt="coreBTR BootCamp Class 2026 - Top"
            />
            <p className="bootcamp-subtitle-top">
              Learn The BTR Way :{" "}
              <span className="highlight-yellow">
                19 Subjects | System-Wise | High-Yield
              </span>
            </p>
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

          {/* BOTTOM IMAGE */}
          <div className="bootcamp-highlight-image bootcamp-highlight-image--bottom">
            <img
              src="https://cdn.dribbble.com/userupload/47178594/file/67a6d44caf08a8edf187a3f80c9938cb.png"
              alt="coreBTR BootCamp Class 2026 - Bottom"
            />
            <h3 className="bootcamp-section-sub-heading-img">
              Real Exam Environment. Real Preparation.
            </h3>
          </div>
          {/* <h3 className="bootcamp-section-sub-heading-img">
            Real Exam Environment. Real Preparation.
          </h3> */}
          <div className="bootcamp-highlight-content">
            <h2 className="bootcamp-title">
              Consistent Testing. Real Progress.
            </h2>

            <p className="bootcamp-description">
              <strong> After completing each subject,</strong> you’ll take
              structured tests to assess your understanding and identify gaps.
              On non-class days, daily mini tests ensure you stay in the habit
              of solving MCQs
            </p>

            <p className="bootcamp-tagline">
              So practice becomes consistent,<span>not occasional.</span>
            </p>
          </div>
        </section>
      </div>

      <BootcampFeatures />

      <WhyDiff2 />

      <BootcampCTA />
    </div>
  );
}

export default Bootcamp;
