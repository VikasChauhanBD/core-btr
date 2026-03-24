import React from "react";
import Header from "../components/header/Header";
import CoreBTR from "../components/coreBTR/CoreBTR";
import ThePlatform from "../components/thePlatform/ThePlatform";
import WhyCoreBTR from "../components/whyCoreBTR/WhyCoreBTR";
import TargetAudience from "../components/targetAudience/TargetAudience";
import YourMentors from "../components/mentors/YourMentors";
import OurVision from "../components/ourVision/OurVision";

function HomePage({ introComplete }) {
  return (
    <div>
      <Header introComplete={introComplete} />
      <CoreBTR />
      <ThePlatform />
      <WhyCoreBTR />
      <TargetAudience />
      <YourMentors />
      <OurVision />
    </div>
  );
}

export default HomePage;
