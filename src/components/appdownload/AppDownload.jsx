import React from "react";
import "./AppDownload.css";

// 👇 Replace these with your actual asset paths
import appleStoreBadge from "../../assets/images/app.png";
import googlePlayBadge from "../../assets/images/ps1.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="app-download__content">

        <h1 className="app-download__title">
          Transform Your Medical Journey with{" "}
          <span className="app-download__brand">CoreBTR</span>
        </h1>

        <p className="app-download__subtitle">
          Master high-yield concepts, integrate subjects seamlessly &amp; boost performance with smart revision, PYQs & MCQs—designed for NEET PG, INI-CET & FMGE aspirants. 
          <br /> <b>Download now and move one step closer to your dream seat.</b>
        </p>

        <div className="app-download__buttons">

          {/* Apple App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="app-download__btn"
            aria-label="Download on the App Store"
          >
            <img
              src={appleStoreBadge}
              alt="Download on the App Store"
              className="app-download__badge-img"
            />
          </a>

          {/* Google Play Store */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="app-download__btn"
            aria-label="Get it on Google Play"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="app-download__badge-img"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;