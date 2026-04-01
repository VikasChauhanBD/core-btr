import React from "react";
import AppDownload from "../components/appdownload/AppDownload";
import { Helmet } from "react-helmet";

function AppDownloadPage() {
  return (
    <div>
      <Helmet>
        <title>Download App - CoreBTR</title>

        <meta
          name="description"
          content="Download the CoreBTR app for quick access to high yield revision content, smart study tools, and structured preparation designed for serious medical aspirants."
        />
      </Helmet>

      <AppDownload />
    </div>
  );
}

export default AppDownloadPage;
