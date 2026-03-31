import React from "react";
import TermsAndConditions from "../components/Policies/TermsAndConditions";
import { Helmet } from "react-helmet";

function TermsAndConditions() {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - CoreBTR</title>

        <meta
          name="description"
          content="CoreBTR terms and conditions explains about acceptable use & academic integrity, plans, payments, renewals & refunds, Free trials and demos & more."
        />
      </Helmet>

      <TermsAndConditions />
    </div>
  );
}

export default TermsAndConditions;
