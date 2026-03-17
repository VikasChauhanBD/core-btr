import React from "react";
import Header from "../components/header/Header";
import FeaturesSection from "../components/featuresSection/FeaturesSection";
import PricingSection from "../components/pricingSection/PricingSection";
import Programs from "../components/programs/Programs";
import Testimonials from "../components/testimonials/Testimonials";
import LastSection from "../components/lastSection/LastSection";

function HomePage() {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <PricingSection />
      <Programs />
      <Testimonials />
      <LastSection />
    </div>
  );
}

export default HomePage;
