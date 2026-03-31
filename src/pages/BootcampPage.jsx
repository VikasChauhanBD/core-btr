import React from "react";
import Bootcamp from "../components/bootcamp/Bootcamp";
import { Helmet } from "react-helmet";

function BootcampPage() {
  return (
    <div>
      <Helmet>
        <title>CoreBTR Bootcamp - CoreBTR</title>

        <meta
          name="description"
          content="CoreBTR Bootcamp is an intensive, high-impact offline program for NEET PG & INI-CET aspirants, designed for disciplined preparation & exam readiness."
        />
      </Helmet>

      <Bootcamp />
    </div>
  );
}

export default BootcampPage;
