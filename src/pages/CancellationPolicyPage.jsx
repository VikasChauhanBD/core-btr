import React from "react";
import CancellationPolicy from "../components/Policies/CancellationPolicy";
import { Helmet } from "react-helmet";

function CancellationPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Cancellation & Refund Policy - CoreBTR</title>

        <meta
          name="description"
          content="Please check out cancellation & refund policy which offers the terms under which cancellations, reschedules or refunds (if applicable) are processed."
        />
      </Helmet>

      <CancellationPolicy />
    </div>
  );
}

export default CancellationPolicyPage;
