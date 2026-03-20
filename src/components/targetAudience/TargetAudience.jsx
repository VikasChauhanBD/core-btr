import React from "react";
import "./TargetAudience.css";

const whoFor = [
  {
    icon: "🩺",
    title: "Exam Aspirants",
    points: ["NEET PG aspirants", "INI-CET aspirants", "FMGE aspirants"],
  },
  {
    icon: "🏁",
    title: "Revision Stage",
    points: [
      "Students aiming for last-mile high-yield revision",
      "Those who want clarity, speed & results",
      "Students who want a structured system, not scattered content",
    ],
  },
];

function TargetAudience() {
  return (
    <div className="target-audience-container">
      <div className="target-audience-sections">
        <section className="target-audience-who-for">
          <div className="target-audience-eyebrow">
            <span className="target-audience-eyebrow-line" />
            <span className="target-audience-eyebrow-text">
              Target Audience
            </span>
          </div>
          <h2 className="target-audience-section-heading">
            Who Is <em>CoreBTR</em> For?
          </h2>
          <p className="target-audience-lead">
            Whether you are just starting your revision or entering the final
            stretch before the exam, CoreBTR is built for you.
          </p>

          <div className="target-audience-who-grid">
            {whoFor.map((w) => (
              <div className="target-audience-who-card" key={w.title}>
                <span className="target-audience-who-icon">{w.icon}</span>
                <h3 className="target-audience-who-title">{w.title}</h3>
                <ul className="target-audience-who-list">
                  {w.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TargetAudience;
