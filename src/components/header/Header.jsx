// import React from "react";
// import "./Header.css";
// import AppStore from "../../assets/images/app-store-icon.png";
// import PlayStore from "../../assets/images/play-store-icon.png";
// import HeroHeader from "./HeroHeader";

// function Header() {
//   return (

//     <div className="header-container animate">

//       <h4>
//         <span>core</span>BTR – Believe. Trust. Revise
//       </h4>
//       <h1>
//         The Ultimate Revision App for <br />
//         NEET PG | INI-CET | FMGE
//       </h1>
//       <p>From Revision to Revolution</p>
//       <div className="header-store">
//         <img src={AppStore} alt="App Store icon" />
//         <img src={PlayStore} alt="Play Store icon" />
//       </div>
//       <div className="header-image">
//         <img
//           src="https://cdn.dribbble.com/userupload/47131956/file/a46228b741eadc654b1cd0323eb48723.png"
//           alt="App mock-ups"
//         />
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useEffect, useState } from "react";
import "./Header.css";
import AppStore from "../../assets/images/app.png";
import PlayStore from "../../assets/images/ps1.png";

// Phase 1 image — centred, rises from bottom
const PHONE_P1 =
  "https://cdn.dribbble.com/userupload/47131956/file/b1dfddec8c1f06343042ab674e285bad.png";

// Phase 2 image — slides in from right (desktop) / top (mobile)
const PHONE_P2 =
  "https://cdn.dribbble.com/userupload/47148505/file/a7a8840b96f525cfebb3ccab6716a225.png";

export default function Header() {
  const [phase, setPhase] = useState("phase1");

  useEffect(() => {
    const t = setTimeout(() => setPhase("phase2"), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`hdr hdr--${phase}`}>
      {/* ── Background ── */}
      <video className="hdr__bg" autoPlay muted loop playsInline>
        <source
          src="https://cdn.dribbble.com/userupload/47140195/file/large-75f031aef8339cd929142c5b2ae4efa1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hdr__bg-overlay" />

      {/* ══════════════════════════════════════
          PHASE 1  —  centred intro
          Desktop: text top-centre, phone bottom-centre
          Mobile:  same — phone sticks to bottom
      ══════════════════════════════════════ */}
      <div className="hdr__p1">
        <div className="hdr__p1-text">
          <h3 className="hdr__p1-welcome">Welcome To</h3>
          <h1 className="hdr__p1-brand">
            Core<span>BTR</span>
          </h1>
          <p className="hdr__p1-tagline">Believe. Trust. Revise.</p>
        </div>
        <div className="hdr__p1-phone">
          <img src={PHONE_P1} alt="coreBTR App" />
        </div>
      </div>

      {/* ══════════════════════════════════════
          PHASE 2  —  split layout
          Desktop: text left, phone right
          Mobile:  phone top, text bottom
      ══════════════════════════════════════ */}
      <div className="hdr__p2">
        {/* Top centre badge */}

        {/* Left content (desktop) / Bottom content (mobile) */}
        <div className="hdr__p2-left">
          <span className="hdr__p2-eyebrow">Introducing</span>
          <h1 className="hdr__p2-heading">
            The Ultimate
            <br />
            Revision App for
            <br />
            NEET PG | INI-CET | FMGE
          </h1>
          {/* <h1 className="hdr__p2-heading2">CoreBTR</h1> */}
          <h3 className="hdr__p2-sub">From Revision to Revolution</h3>
          <h3 className="hdr__p2-sub2">Launching On 2nd April </h3>
          <div className="hdr__p2-store">
            <img src={PlayStore} alt="Get it on Google Play" />
            <img src={AppStore} alt="Download on App Store" />
          </div>
        </div>

        {/* Right phone (desktop) / Top phone (mobile) */}
        <div className="hdr__p2-phone">
          <img src={PHONE_P2} alt="coreBTR App mockup" />
        </div>
      </div>
    </div>
  );
}
