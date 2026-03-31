import React from "react";
import ShippingAndDeliveryPolicy from "../components/Policies/ShippingAndDeliveryPolicy";
import { Helmet } from "react-helmet";

function ShippingAndDeliveryPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Shipping & Delivery Policy - CoreBTR</title>

        <meta
          name="description"
          content="CoreBTR Shipping & Delivery Policy provides clear details on workbook dispatch, delivery timelines, and order tracking to ensure timely learning support."
        />
      </Helmet>

      <ShippingAndDeliveryPolicy />
    </div>
  );
}

export default ShippingAndDeliveryPolicyPage;
