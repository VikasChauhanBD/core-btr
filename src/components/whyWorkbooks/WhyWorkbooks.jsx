import React from "react";
import "./WhyWorkbooks.css";
import { NavLink } from "react-router-dom";

const highlights = [
  "Made for NEET PG, INI CET & FMGE",
  "Covers all 19 subjects",
  "Helps in quick revision and better retention",
  "Works well with the BTR app",
  "Based on Dr. Zainab Vora's approach",
];

function WhyWorkbooks() {
  return (
    <div className="why-workbooks-container">
      <section className="why-workbooks-info">
        <div className="why-workbooks-info-label">Why CoreBTR Workbooks?</div>

        <ul className="why-workbooks-info-highlights">
          {highlights.map((point, index) => (
            <li className="why-workbooks-info-highlight-item" key={index}>
              <span className="why-workbooks-highlight-icon">✦</span>
              {point}
            </li>
          ))}
        </ul>

        <h4 className="why-workbooks-info-title">CoreBTR Workbooks</h4>
        <h5 className="why-workbooks-info-subtitle">
          Simple. Structured. Effective.
        </h5>
        <p className="why-workbooks-info-vision">
          Made to help you revise better and perform better.
        </p>

        <NavLink to="#">Buy Now</NavLink>
      </section>
    </div>
  );
}

export default WhyWorkbooks;
