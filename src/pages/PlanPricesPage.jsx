import React from "react";
import PlanPrices from "../components/planPrices/PlanPrices";
import PlanPricesHeader from "../components/planPricesHeader/PlanPricesHeader";
import PlanPricesFaqs from "../components/planPricesFaqs/PlanPricesFaqs";
import { Helmet } from "react-helmet";

function PlanPricesPage() {
  return (
    <div>
      <Helmet>
        <title>Plan Prices - CoreBTR</title>

        <meta
          name="description"
          content="Check out CoreBTR plan prices designed for flexible learning, structured revision programs, quality content and value driven preparation options."
        />
      </Helmet>

      <PlanPricesHeader />
      <PlanPrices />
      <PlanPricesFaqs />
    </div>
  );
}

export default PlanPricesPage;
