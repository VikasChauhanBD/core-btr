import React from "react";
import FairUsagePolicy from "../components/Policies/FairUsagePolicy";
import { Helmet } from "react-helmet";

function FairUsagePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Fair Usage Policy - CoreBTR</title>

        <meta
          name="description"
          content="Core BTR Fair Usage Policy ensures balanced access to learning resources, maintaining quality performance and uninterrupted academic support for all students."
        />
      </Helmet>

      <FairUsagePolicy />
    </div>
  );
}

export default FairUsagePolicyPage;
