import React from "react";
import LeadForm from "../components/leadForm/LeadForm";
import { Helmet } from "react-helmet";

function LeadFormPage() {
  return (
    <div>
      {/* <Helmet>
        <title></title>

        <meta name="description" content="" />
      </Helmet> */}

      <LeadForm />
    </div>
  );
}

export default LeadFormPage;
