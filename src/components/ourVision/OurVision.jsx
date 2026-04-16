import React from "react";
import "./OurVision.css";
import { NavLink } from "react-router-dom";

function OurVision() {
  return (
    <div className="our-vision-container">
      <section className="our-vision-info">
        <div className="our-vision-info-label">Our Vision</div>

        <p className="our-vision-info-vision">
          To simplify PG medical entrance preparation so that every student
          feels confident, in control, and exam-ready.
        </p>

        <div className="our-vision-info-exams">
          {["NEET PG", "INI-CET", "FMGE"].map((exam) => (
            <span className="our-vision-info-exam-tag" key={exam}>
              {exam}
            </span>
          ))}
        </div>

        <p className="our-vision-info-vision">
          Your preparation needs focus. Your rank needs strategy.
          <br />
          <strong>Revise Smart. Revise Core.</strong>
        </p>

        <NavLink to="https://portal.corebtr.com/login" target="_blank">
          Get Started with CoreBTR
        </NavLink>
      </section>
    </div>
  );
}

export default OurVision;
