import React from "react";
import "./WhyWorkbooks.css";
import { NavLink } from "react-router-dom";

const highlights = [
  "Made for NEET PG, INI CET & FMGE",
  "Covers all 19 subjects in a structured way",
  "Combines learning + revision + recall",
  "Saves time on note-making",
  "Improves retention through active recall",
  "Works seamlessly with the CoreBTR app",
  "Built on Dr. Zainab Vora’s proven BTR approach",
];

function WhyWorkbooks() {
  return (
    <div className="why-workbooks-container">
      <section className="why-workbooks-info">
        <div className="why-workbooks-info-label">Why CoreBTR Books?</div>

        <ul className="why-workbooks-info-highlights">
          {highlights.map((point, index) => (
            <li className="why-workbooks-info-highlight-item" key={index}>
              <span className="why-workbooks-highlight-icon">✦</span>
              {point}
            </li>
          ))}
        </ul>

        <h4 className="why-workbooks-info-title">The Core Approach</h4>
        <h5 className="why-workbooks-info-subtitle">
          Annotated Notes → Learn & Revise <br /> Unannotated Workbooks → Recall
          & Retain
        </h5>
        <p className="why-workbooks-info-vision">
          Simple. Structured. Effective. Made to help you revise better and
          perform better.
        </p>

        <NavLink to="#">Buy Now</NavLink>
      </section>
    </div>
  );
}

export default WhyWorkbooks;
