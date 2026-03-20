import React from "react";
import "./TargetAudience.css";
import { FaUserMd } from "react-icons/fa";
import { GiFinishLine } from "react-icons/gi";

const whoFor = [
  {
    icon: <FaUserMd />,
    title: "Exam Aspirants",
    points: ["NEET PG aspirants", "INI-CET aspirants", "FMGE aspirants"],
  },
  {
    icon: <GiFinishLine />,
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
              TARGET AUDIENCE
            </span>
          </div>
          <h2 className="target-audience-section-heading">
            Who Is core<span>BTR</span> For?
          </h2>

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
