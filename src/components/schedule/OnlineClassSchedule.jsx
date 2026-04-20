import React from "react";
import "./OnlineClassSchedule.css";
import { Helmet } from "react-helmet";

function OnlineClassSchedule() {
  return (
    <>
      <Helmet>
        <title>INICET May 2026 Schedule - CoreBTR</title>

        <meta
          name="description"
          content="Access CoreBTR INICET May 2026 schedule having structured classes, focused revision with a vast coverage of syllabus & supporting for exam readiness."
        />
      </Helmet>

      <div className="online-schedule-container">
        <div className="online-schedule-image">
          <img
            src="https://cdn.dribbble.com/userupload/47379232/file/35ac6930f926e54d7bd797719e6d077c.jpeg"
            alt="Online Classes Schedule - CoreBTR"
          />
        </div>
      </div>
    </>
  );
}

export default OnlineClassSchedule;
