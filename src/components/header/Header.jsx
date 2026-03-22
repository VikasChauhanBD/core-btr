import React from "react";
import "./Header.css";
import AppStore from "../../assets/images/app-store-icon.png";
import PlayStore from "../../assets/images/play-store-icon.png";

function Header() {
  return (
    <div className="header-container animate">
      <h4>
        <span>core</span>BTR – Believe. Trust. Revise
      </h4>
      <h1>
        The Ultimate Revision App for <br />
        NEET PG | INI-CET | FMGE
      </h1>
      <p>From Revision to Revolution</p>
      <div className="header-store">
        <img src={AppStore} alt="App Store icon" />
        <img src={PlayStore} alt="Play Store icon" />
      </div>
      <div className="header-image">
        <img
          src="https://cdn.dribbble.com/userupload/47131956/file/a46228b741eadc654b1cd0323eb48723.png"
          alt="App mock-ups"
        />
      </div>
    </div>
  );
}

export default Header;
