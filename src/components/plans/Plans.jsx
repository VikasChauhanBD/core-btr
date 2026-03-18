import React from "react";
import "./Plans.css";
import { NavLink } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

function Plans() {
  return (
    <div className="plans-container">
      <h2>BTR Workbooks – Your Revision Companions</h2>
      <div className="plans-cards">
        <div className="plans-card">
          <div>
            <h3>BTR Online</h3>
            <p>
              BTR Online is a one-of-its-kind 19-subject complete revision
              program, designed specifically for the final phase of medical
              entrance exam preparation. It focuses on high-yield, exam-relevant
              concepts instead of overwhelming students with excess content.
            </p>
          </div>

          <div>
            <NavLink to="/btr-online" className="plans-cta">
              <button className="plans-cta-button">
                Know More
                <span className="plans-cta-icon">
                  <IoArrowForwardCircle size={22} color="#fff" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>

        <div className="plans-card">
          <div>
            <h3>BTR Offline</h3>
            <p>
              BTR Offline is a focused, face-to-face crash revision program
              designed for NEET PG aspirants who want clarity, confidence, and
              quick recall before the exam. Built strictly around PYQs and
              high-yield facts, BTR helps you revise all 19 subjects in a
              structured, no-nonsense manner.
            </p>
          </div>

          <div>
            <NavLink to="/btr-offline" className="plans-cta">
              <button className="plans-cta-button">
                Know More
                <span className="plans-cta-icon">
                  <IoArrowForwardCircle size={22} color="#fff" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>

        <div className="plans-card">
          <div>
            <h3>NEET PG Bootcamp</h3>
            <p>
              An Intensive, Personalised Offline Crash Course for NEET PG &
              INI-CET Aspirants. The NEET PG Bootcamp is a 4-month,
              high-intensity offline crash program designed for students who
              want focused revision, expert mentorship, and real exam readiness
              under one roof.
            </p>
          </div>

          <div>
            <NavLink to="/neet-pg-bootcamp" className="plans-cta">
              <button className="plans-cta-button">
                Know More
                <span className="plans-cta-icon">
                  <IoArrowForwardCircle size={22} color="#fff" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
