import React from "react";
import "./LastSection.css";
import AppStore from "../../assets/images/app-store-icon.png";
import PlayStore from "../../assets/images/play-store-icon.png";

function LastSection() {
  return (
    <div className="last-container">
      <div className="last-header">
        <h2 className="last-heading">
          Download Curely & Take Control of Your Health
        </h2>
        <p className="last-subheading">
          Download on App Store | Get it on Google Play <br /> Logos of App
          Store & Play Store with QR code
        </p>
      </div>

      <div className="last-store">
        <img src={AppStore} alt="App Store icon" />
        <img src={PlayStore} alt="Play Store icon" />
      </div>
    </div>
  );
}

export default LastSection;
