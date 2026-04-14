import React from "react";
import BootcampHero from "../components/bootcamp/hero-section/BootcampHero";
import Bootcamp from "../components/bootcamp/Bootcamp";
import CoreBtrPrograms from "../components/bootcamp/coreBtrPrograms/CoreBtrPrograms";
import BootcampHighlights from "../components/bootcamp/bootcampHighlights/BootcampHighlights";
import BootcampFeatures from "../components/bootcamp/BootcampFeatures/BootcampFeatures";
import MentorSection from "../components/bootcamp/MentorSection/MentorSection";
import WhyDiff2 from "../components/bootcamp/WhyDifferent/WhyDiff2";
import BootcampCTA from "../components/bootcamp/BootcampCTA/BootcampCTA";
import { Helmet } from "react-helmet";

function BootcampPage() {
  return (
    <div>
      <Helmet>
        <title>CoreBTR Bootcamp - CoreBTR</title>

        <meta
          name="description"
          content="CoreBTR Bootcamp is an intensive, high-impact offline program for NEET PG & INI-CET aspirants, designed for disciplined preparation & exam readiness."
        />
      </Helmet>

      <BootcampHero />
      <Bootcamp />
      <CoreBtrPrograms />
      <BootcampHighlights />
      <BootcampFeatures />
      <MentorSection />
      <WhyDiff2 />
      <BootcampCTA />
    </div>
  );
}

export default BootcampPage;
