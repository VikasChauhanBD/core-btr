import React from "react";
import "./Unannotated.css";
import Banner from "../../assets/images/unannotated-banner.webp";

const features = [
  {
    icon: "📚",
    label: "Comprehensive Coverage",
    points: [
      "Includes high-yield points from all 19 subjects, ensuring you don't miss any essential topics.",
    ],
  },
  {
    icon: "👩‍⚕️",
    label: "Curated by an Expert",
    points: [
      "Dr. Zainab Vora has carefully designed these volumes to focus on clarity, precision, and relevance.",
    ],
  },
  {
    icon: "📖",
    label: "Dual Volume Set",
    points: [
      "Both Volume I and Volume II are packed with information that simplifies complex concepts.",
    ],
  },
  {
    icon: "🎯",
    label: "Focused Preparation",
    points: ["Ideal for last-minute revisions and targeted learning."],
  },
];

const whatsInside = [
  "Clear, concise, and unannotated notes to keep your preparation streamlined.",
  "High-yield points for efficient learning and retention.",
];

function Unannotated() {
  return (
    <div className="unannotated-container">
      <div className="unannotated-header">
        <img src={Banner} alt="" />
      </div>

      <div className="unannotated-content">
        <p>
          Unlock your potential with the BTR Unannotated Workbook, meticulously
          designed to help you excel in your medical exams. Whether you're
          preparing for NEET PG, INI-CET, FMGE this workbook is your ultimate
          study companion.
        </p>
      </div>

      <div className="unannotated-sections">
        <section className="unannotated-why">
          <div className="unannotated-eyebrow">
            <span className="unannotated-eyebrow-line" />
            <span className="unannotated-eyebrow-text">Purpose</span>
          </div>
          <h2 className="unannotated-section-heading">
            Why Choose <em>BTR Unannotated</em> Workbook?
          </h2>
          <div className="unannotated-features-table">
            {features.map((f) => (
              <div className="unannotated-feature-row" key={f.label}>
                <div className="unannotated-feature-label">
                  <span className="unannotated-feature-icon">{f.icon}</span>
                  <span className="unannotated-feature-name">{f.label}</span>
                </div>
                <div className="unannotated-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="unannotated-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="unannotated-info">
          <div className="unannotated-info-label">What's Inside?</div>
          <div className="unannotated-info-items">
            {whatsInside.map((item, i) => (
              <div className="unannotated-info-item" key={i}>
                <span className="unannotated-info-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Unannotated;
