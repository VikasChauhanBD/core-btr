import React from "react";
import "./BTRoffline.css";
import { NavLink } from "react-router-dom";

const highlights = [
  {
    title: "What You'll Learn",
    points: [
      "19 Subjects Crash Course — Complete rapid revision",
      "PYQ-Based Approach — Focus only on what actually gets asked",
      "High-Yield NEET PG Topics",
      "BTR Core Facts like IPC / Milestones / Staging / Scores",
      "Medicine High-Yield Topics like ABG / ECG / Fluid analysis / Stroke localization",
      "Must-Know Images from all subjects",
      "Face-to-Face Live Sessions with direct interaction",
      "Printed BTR Booklet provided for revision support",
    ],
  },
];

function BTRoffline() {
  return (
    <div className="btr-offline-container">
      <div className="btr-offline-banner">
        <img
          src="https://cdn.dribbble.com/userupload/47138330/file/22e4881842fa5a52a3255f80d9874680.jpg"
          alt="coreBTR Offline by Dr. Zainab Vora"
        />
      </div>

      <div className="btr-offline-content">
        <h1>
          <span>Core</span>BTR Offline
        </h1>
        <h4>Revise Smart. Recall Fast. Rank Better</h4>
        <p>
          <b>CoreBTR Offline</b> is a focused, face-to-face crash revision
          program designed for NEET PG aspirants who want clarity, confidence,
          and quick recall before the exam. Built strictly around{" "}
          <b>PYQs and high-yield facts,</b> CoreBTR helps you revise all 19
          subjects in a structured, no-nonsense manner.
          <br />
          This is not theory overload - it's about{" "}
          <b>what to remember, how to apply, and what not to miss.</b>
        </p>
        <h6>"Kahani tumhaari hai, Ho sake toh kamaal likhna."</h6>
      </div>

      <div className="btr-offline-event">
        <h2>BTR INICET Offline at Vidya Jeevan, Greater Noida</h2>
        <h3>
          3 Day + 1 Day Offline Course from 3<sup>rd</sup> to 5<sup>th</sup> May
          | INICET Mock Test with Discussion on 6<sup>th</sup> May
        </h3>
        {/* <p>
          Dates: <span>3rd - 5th May 2026</span>
        </p>
        <p>
          T&D Session: <span>5th May 2026</span>
        </p>
        <p>
          Venue: <span>Vidya Jeevan, Greater Noida</span>
        </p> */}

        {/* <NavLink to="#">
          Registration Starts from Monday 13<sup>th</sup> April 12PM (Afternoon)
        </NavLink> */}

        {/* <NavLink to="https://portal.corebtr.com/login">Register now</NavLink> */}

        <NavLink to="#">Registration Closed</NavLink>
      </div>

      <div className="corebtr-programs-registration-imp">
        <h3>Important Notice</h3>
        <ul>
          <li>
            Seats cannot be cancelled or transferred to anyone, including
            friends.
          </li>
          <li>Seats cannot be shifted to any online plans.</li>
          <li>
            Registrations made using someone else’s account will not be
            accepted.
          </li>
          <li>Registration will be accepted only your own account and name</li>
        </ul>
      </div>

      <div className="btr-offline-highlights-sections">
        <section className="btr-offline-highlights">
          <div className="btr-offline-highlights-content">
            <div className="btr-offline-eyebrow">
              <span className="btr-offline-eyebrow-line" />
              <span className="btr-offline-eyebrow-text">Overview</span>
            </div>
            <h2 className="btr-offline-section-heading">
              What You'll <span>Learn</span>
            </h2>
            <p className="btr-offline-lead">
              A PYQ-focused crash revision program covering all 19 subjects with
              high-yield facts, must-know images, and live face-to-face
              sessions.
            </p>
          </div>

          <div className="btr-offline-highlight-grid">
            {highlights.map((h) => (
              <div className="btr-offline-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="btr-offline-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="btr-offline-highlight-image">
        <img
          src="https://cdn.dribbble.com/userupload/47137540/file/11e028e5dee519a0282473a5583c6fe4.jpg"
          alt="coreBTR Offline Course images"
        />
      </div>
    </div>
  );
}

export default BTRoffline;
