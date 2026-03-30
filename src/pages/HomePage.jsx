import React from "react";
import Header from "../components/header/Header";
import CoreBTR from "../components/coreBTR/CoreBTR";
import ThePlatform from "../components/thePlatform/ThePlatform";
import WhyCoreBTR from "../components/whyCoreBTR/WhyCoreBTR";
import TargetAudience from "../components/targetAudience/TargetAudience";
import YourMentors from "../components/mentors/YourMentors";
import OurVision from "../components/ourVision/OurVision";
import { Helmet } from "react-helmet";

function HomePage({ introComplete }) {
  return (
    <div>
      <Helmet>
        <title>
          Core BTR - Concept-Based Rapid Revision for Medical PG Success
        </title>

        <meta
          name="description"
          content="Core BTR is designed for fast concept revision with high-yield topics, integrated learning, and exam-oriented strategies to help medical PG aspirants."
        />
      </Helmet>

      {/* <Header introComplete={introComplete} /> */}
      <Header />
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
