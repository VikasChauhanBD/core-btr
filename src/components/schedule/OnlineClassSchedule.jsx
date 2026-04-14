import React from "react";
import "./OnlineClassSchedule.css";
import { Helmet } from "react-helmet";

function OnlineClassSchedule() {
  return (
    <>
      {/* <Helmet>
        <title>Schedule INI-CET May 2026 - CoreBTR</title>

        <meta
          name="description"
          content="Schedule INI CET May 2026 with CoreBTR and stay ahead with a focused revision plan designed to strengthen concepts and improve exam readiness for aspirants."
        />
      </Helmet> */}

      <div className="online-schedule-container">
        <div className="online-schedule-image">
          <img
            src="https://cdn.dribbble.com/userupload/47379232/file/cac381744cdc662e2f3cd8c515e240c1.jpeg"
            alt="Online Classes Schedule - CoreBTR"
          />
        </div>
      </div>
    </>
  );
}

export default OnlineClassSchedule;
