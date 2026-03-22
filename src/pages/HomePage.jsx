import React from "react";
import Header from "../components/header/Header";
import CoreBTR from "../components/coreBTR/CoreBTR";
import ThePlatform from "../components/thePlatform/ThePlatform";
import WhyCoreBTR from "../components/whyCoreBTR/WhyCoreBTR";
import TargetAudience from "../components/targetAudience/TargetAudience";
import OurVision from "../components/ourVision/OurVision";

function HomePage() {
  return (
    <div>
      <Header />
      <CoreBTR />
      <ThePlatform />
      <WhyCoreBTR />
      <TargetAudience />
      <OurVision />
    </div>
  );
}

export default HomePage;
