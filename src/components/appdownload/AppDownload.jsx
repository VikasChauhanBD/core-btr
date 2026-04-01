import React from "react";
import "./AppDownload.css";
import appleStoreBadge from "../../assets/images/app.png";
import googlePlayBadge from "../../assets/images/ps1.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="app-download__content">
        <h1 className="app-download__title">
          Transform Your Medical Journey with Core<span>BTR</span>
        </h1>

        <p className="app-download__subtitle">
          Master high-yield concepts, integrate subjects seamlessly &amp; boost
          performance with smart revision, PYQs & MCQs—designed for NEET PG,
          INI-CET & FMGE aspirants.
        </p>
        <h6>Download now and move one step closer to your dream seat.</h6>

        <div className="app-download__buttons">
          <a
            href="https://apps.apple.com/in/app/corebtr/id6760164235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <img src={appleStoreBadge} alt="Download on the App Store" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.corebtr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img src={googlePlayBadge} alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
