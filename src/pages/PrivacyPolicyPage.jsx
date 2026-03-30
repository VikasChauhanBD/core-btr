import React from "react";
import PrivacyPolicy from "../components/Policies/PrivacyPolicy";
import { Helmet } from "react-helmet";

function PrivacyPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy - Core BTR</title>

        <meta
          name="description"
          content="Core BTR Privacy Policy explains how we collect, use and protect your data, ensuring a safe and transparent learning experience for every student."
        />
      </Helmet>

      <PrivacyPolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
