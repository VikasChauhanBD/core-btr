import React from "react";
import "./NeetPgSchedule.css";
import { Helmet } from "react-helmet";

function NeetPgSchedule() {
  return (
    <>
      <Helmet>
        <title>NEET PG 2026 Bootcamp Schedule - CoreBTR</title>

        <meta
          name="description"
          content="Check the CoreBTR Bootcamp Schedule to plan your revision, attend high yield sessions, and stay aligned with a structured strategy for NEET PG success."
        />
      </Helmet>

      <div className="neetpg-schedule-container">
        <h1 className="neetpg-schedule-heading">
          Core<span>BTR</span> NEET PG T&D Bootcamp Schedule
        </h1>

        <div className="neetpg-schedule-section">
          <div className="neetpg-schedule-image">
            <img
              src="https://cdn.dribbble.com/userupload/47346285/file/f863f8bc01b1dab17fafff9b6998723c.png"
              alt="Online Classes Schedule - CoreBTR"
            />
          </div>

          <div className="neetpg-schedule-image">
            <img
              src="https://cdn.dribbble.com/userupload/47344725/file/e98c830fd99207bfe519fcb0a3e41014.jpeg"
              alt="Online Classes Schedule - CoreBTR"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NeetPgSchedule;
