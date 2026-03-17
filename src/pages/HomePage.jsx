import React from "react";
import Header from "../components/header/Header";
import FeaturesSection from "../components/featuresSection/FeaturesSection";
import PricingSection from "../components/pricingSection/PricingSection";
import LastSection from "../components/lastSection/LastSection";

function HomePage() {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <PricingSection />
      <LastSection />
    </div>
  );
}

export default HomePage;
