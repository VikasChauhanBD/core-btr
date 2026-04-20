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
          content="NEET PG & INICET aspirants can choose plan prices for preparation. CoreBTR have duration-based plans. Avail launch offers & coupon to save money."
        />
      </Helmet>

      <PlanPricesHeader />
      <PlanPrices />
      <PlanPricesFaqs />
    </div>
  );
}

export default PlanPricesPage;
