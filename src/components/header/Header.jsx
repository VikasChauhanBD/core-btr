import React, { useState, useEffect } from "react";
import "./Header.css";
import AppStore from "../../assets/images/app-store-icon.png";
import PlayStore from "../../assets/images/play-store-icon.png";
import HeaderImage from "../../assets/images/header-image.png";

function Header({ animationReady }) {
  return (
    <div className={`header-container ${animationReady ? "animate" : ""}`}>
      <h4>CORE BTR – Believe | Trust | Revise</h4>
      <h1>
        The Ultimate Revision App for <br />
        NEET PG, INI-CET & FMGE
      </h1>
      <p>Revise smarter. Retain longer. Perform better.</p>
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
