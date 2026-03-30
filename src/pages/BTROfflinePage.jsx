import React from "react";
import BTRoffline from "../components/btr-offline/BTRoffline";
import BTROfflineDetails from "../components/bTROfflineDetails/BTROfflineDetails";
import { Helmet } from "react-helmet";

function BTROfflinePage() {
  return (
    <div>
      <Helmet>
        <title>Core BTR Offline - Core BTR </title>

        <meta
          name="description"
          content="Core BTR Offline designed by Dr. Zainab Vora helps NEET PG, INI-CET, FMGE aspirants to strengthen concepts with focused revision & exam preparation."
        />
      </Helmet>

      <BTRoffline />
      <BTROfflineDetails />
    </div>
  );
}

export default BTROfflinePage;
