import React from "react";
import Schedule from "../components/schedule/Schedule";
import { Helmet } from "react-helmet";

function SchedulePage() {
  return (
    <div>
      <Helmet>
        <title>Schedule INI-CET May 2026- CoreBTR</title>

        <meta
          name="description"
          content="Schedule INI CET May 2026 with CoreBTR and stay ahead with a focused revision plan designed to strengthen concepts and improve exam readiness for aspirants."
        />
      </Helmet>

      <Schedule />
    </div>
  );
}

export default SchedulePage;
