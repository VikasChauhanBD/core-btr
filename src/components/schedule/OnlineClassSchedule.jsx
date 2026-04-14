import React from "react";
import "./OnlineClassSchedule.css";
import { Helmet } from "react-helmet";

function OnlineClassSchedule() {
  return (
    <>
      <Helmet>
        <title>INICET May 2026 Classes Schedule - CoreBTR</title>

        <meta
          name="description"
          content="INICET May 2026 Classes Schedule by CoreBTR offers a structured plan with focused concepts, smart revision, and guidance to boost preparation and confidence"
        />
      </Helmet>

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
