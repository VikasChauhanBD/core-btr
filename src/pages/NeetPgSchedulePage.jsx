import React from "react";
import NeetPgSchedule from "../components/schedule/NeetPgSchedule";
import { Helmet } from "react-helmet";

function NeetPgSchedulePage() {
  return (
    <div>
      {/* <Helmet>
        <title></title>

        <meta name="description" content="" />
      </Helmet> */}

      <NeetPgSchedule />
    </div>
  );
}

export default NeetPgSchedulePage;
