import React from "react";
import FairUsagePolicy from "../components/Policies/FairUsagePolicy";
import { Helmet } from "react-helmet";

function FairUsagePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Fair Usage Policy - CoreBTR</title>

        <meta name="description" content="" />
      </Helmet>

      <FairUsagePolicy />
    </div>
  );
}

export default FairUsagePolicyPage;
