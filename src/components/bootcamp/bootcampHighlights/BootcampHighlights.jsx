import React from "react";
import "./BootcampHighlights.css";

function BootcampHighlights() {
  return (
    <div className="bootcamp-highlights-sections">
      <section className="bootcamp-highlights">
        {/* TOP IMAGE */}
        <div className="bootcamp-highlights-image">
          <img
            src="https://cdn.dribbble.com/userupload/47178593/file/1bfaa70f0c6507317a6cb8d3c9100c74.png"
            alt="coreBTR BootCamp Class 2026 - Top"
          />
          <p className="bootcamp-highlights-subtitle-top">
            Learn The BTR Way :{" "}
            <span className="bootcamp-highlights-yellow">
              19 Subjects | System-Wise | High-Yield
            </span>
          </p>
        </div>
        {/* <h3 className="bootcamp-highlights-sub-heading-img-2">
           19 Subjects | System-Wise | High-Yield
          </h3> */}
        <div className="bootcamp-highlights-content">
          <h2 className="bootcamp-highlights-title">
            Concepts. Clarity. Confidence.
          </h2>

          <p className="bootcamp-highlights-description">
            With <strong>Dr. Zainab Vora</strong>, learning is not about
            memorizing more—it’s about understanding better. Complex topics are
            simplified with integrated, system-wise learning across all 19
            subjects.
          </p>

          <ul className="bootcamp-highlights-points">
            <li>High-yield focus for NEET PG, INI-CET & FMGE</li>
            <li>System-wise structured preparation</li>
            <li>Built for retention, recall & real exam pressure</li>
          </ul>

          <p className="bootcamp-highlights-tagline">
            This is not just teaching. <span>This is the BTR approach.</span>
          </p>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="bootcamp-highlights-image">
          <img
            src="https://cdn.dribbble.com/userupload/47178594/file/67a6d44caf08a8edf187a3f80c9938cb.png"
            alt="coreBTR BootCamp Class 2026 - Bottom"
          />
          <p className="bootcamp-highlights-subtitle-top">
            <span className="bootcamp-highlights-yellow">
              Real Exam Environment. Real Preparation.
            </span>
          </p>
        </div>

        <div className="bootcamp-highlights-content">
          <h2 className="bootcamp-highlights-title">
            Consistent Testing. Real Progress.
          </h2>

          <p className="bootcamp-highlights-description">
            <strong> After completing each subject,</strong> you’ll take
            structured tests to assess your understanding and identify gaps. On
            non-class days, daily mini tests ensure you stay in the habit of
            solving MCQs
          </p>

          <p className="bootcamp-highlights-tagline">
            So practice becomes consistent,<span> not occasional.</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default BootcampHighlights;
