import React from "react";
import Header from "../components/header/Header";
import FeaturesSection from "../components/featuresSection/FeaturesSection";
import PricingSection from "../components/pricingSection/PricingSection";

function Homepage() {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
}

export default Homepage;
