import React from "react";
import DevicePolicy from "../components/Policies/DevicePolicy";
import { Helmet } from "react-helmet";

function DevicePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Device Policy - Core BTR</title>

        <meta
          name="description"
          content="Core BTR Device Policy explains supported devices & some restrictions. Our App uses DRM to protect educational content. Suggest using the free videos."
        />
      </Helmet>

      <DevicePolicy />
    </div>
  );
}

export default DevicePolicyPage;
