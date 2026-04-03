import React from "react";
import LeadForm from "../components/leadForm/LeadForm";
import { Helmet } from "react-helmet";

function LeadFormPage() {
  return (
    <div>
      <Helmet>
        <title>Interested Form - CoreBTR</title>

        <meta
          name="description"
          content="Fill the CoreBTR Interested Form to stay informed about upcoming courses, bootcamps, and high yield sessions designed to strengthen your medical PG preparation."
        />
      </Helmet>

      <LeadForm />
    </div>
  );
}

export default LeadFormPage;
