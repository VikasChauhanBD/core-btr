import React from "react";
import "./WhyCoreBTR.css";

const difference = [
  {
    icon: "🏗️",
    label: "Complete System",
    points: [
      "Built as a complete revision system — not just scattered content — so every resource works together seamlessly.",
    ],
  },
  {
    icon: "🎯",
    label: "High-Yield Focus",
    points: [
      "Focused strictly on high-yield, exam-relevant topics. No unnecessary overload, no wasted study time.",
    ],
  },
  {
    icon: "⚡",
    label: "Fast Revision",
    points: [
      "Designed for fast revision without compromising on concepts — clarity and speed working together.",
    ],
  },
  {
    icon: "📐",
    label: "Exam-Pattern Aligned",
    points: [
      "Fully aligned with the latest NEET PG & INI-CET patterns so you prepare for exactly what will be tested.",
    ],
  },
];

function WhyCoreBTR() {
  return (
    <div className="why-why-core-btr-container">
      <div className="why-core-btr-sections">
        <section className="why-core-btr-features">
          <div className="why-core-btr-eyebrow">
            <span className="why-core-btr-eyebrow-line" />
            <span className="why-core-btr-eyebrow-text">Why CoreBTR</span>
          </div>
          <h2 className="why-core-btr-section-heading">
            What Makes CoreBTR <em>Different?</em>
          </h2>

          <div className="why-core-btr-features-table">
            {difference.map((f) => (
              <div className="why-core-btr-feature-row" key={f.label}>
                <div className="why-core-btr-feature-label">
                  <span className="why-core-btr-feature-icon">{f.icon}</span>
                  <span className="why-core-btr-feature-name">{f.label}</span>
                </div>
                <div className="why-core-btr-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="why-core-btr-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyCoreBTR;
