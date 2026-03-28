import React from "react";
import PlanPrices from "../components/planPrices/PlanPrices";
import PlanPricesHeader from "../components/planPricesHeader/PlanPricesHeader";
import PlanPricesFaqs from "../components/planPricesFaqs/PlanPricesFaqs";

function PlanPricesPage() {
  return (
    <div>
      <PlanPricesHeader />
      <PlanPrices />
      <PlanPricesFaqs />
    </div>
  );
}

export default PlanPricesPage;
