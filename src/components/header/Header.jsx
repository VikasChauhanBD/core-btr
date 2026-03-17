import React from "react";
import "./Header.css";
import AppStore from "../../assets/images/app-store-icon.png";
import PlayStore from "../../assets/images/play-store-icon.png";
import HeaderImage from "../../assets/images/header-image.png";

function Header() {
  return (
    <div className="header-container">
      <h4>Best Medical Service</h4>
      <h1>Manage Your Health Anytime, Anywhere</h1>
      <p>
        Curely helps you book appointments, track wellness, consult doctors, and
        manage reports – all in one simple app.
      </p>

      <div className="header-store">
        <img src={AppStore} alt="App Store icon" />
        <img src={PlayStore} alt="Play Store icon" />
      </div>

      <div className="header-image">
        <img src={HeaderImage} alt="App mock-ups" />
      </div>
    </div>
  );
}

export default Header;
