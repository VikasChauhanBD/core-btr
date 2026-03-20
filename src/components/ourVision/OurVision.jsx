import React from "react";
import "./OurVision.css";

function OurVision() {
  return (
    <div className="our-vision-container">
      <div className="our-vision-sections">
        <section className="our-vision-info">
          <div className="our-vision-info-label">Our Vision</div>

          <p className="our-vision-info-vision">
            To simplify PG medical entrance preparation so that every student
            feels <em>confident, in control, and exam-ready.</em>
          </p>

          <div className="our-vision-info-exams">
            {["NEET PG", "INI-CET", "FMGE"].map((exam) => (
              <span className="our-vision-info-exam-tag" key={exam}>
                {exam}
              </span>
            ))}
          </div>

          <p className="our-vision-info-tagline">
            Your preparation needs focus. Your rank needs strategy.
            <br />
            <strong style={{ color: "#fff" }}>
              Revise Smart. Revise CORE.
            </strong>
          </p>
        </section>
      </div>
    </div>
  );
}

export default OurVision;
