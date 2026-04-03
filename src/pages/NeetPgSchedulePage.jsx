import React from "react";
import NeetPgSchedule from "../components/schedule/NeetPgSchedule";
import { Helmet } from "react-helmet";

function NeetPgSchedulePage() {
  return (
    <div>
      <Helmet>
        <title>Bootcamp Schedule - CoreBTR</title>

        <meta
          name="description"
          content="Check the CoreBTR Bootcamp Schedule to plan your revision, attend high yield sessions, and stay aligned with a structured strategy for NEET PG success."
        />
      </Helmet>

      <NeetPgSchedule />
    </div>
  );
}

export default NeetPgSchedulePage;
