// import React, { useEffect, useState, useRef } from "react";
// import "./HeroHeader.css";

// // ─── swap these paths for your actual asset paths ───
// import AppStoreImg  from "../../assets/images/app-store-icon.png";
// import PlayStoreImg from "../../assets/images/play-store-icon.png";
// import MockupImg    from "../../assets/images/mockup.png"; // your 3-phones image

// const HEADLINE  = "The Ultimate Revision App for NEET PG | INI-CET | FMGE";
// const SUBLINE   = "From Revision to Revolution";

// export default function HeroHeader() {
//   // phase: "intro" → "exit" → "side"
//   const [phase, setPhase]       = useState("intro");
//   const [typed1, setTyped1]     = useState("");
//   const [typed2, setTyped2]     = useState("");
//   const [cur1, setCur1]         = useState(false);
//   const [cur2, setCur2]         = useState(false);
//   const [storeIn, setStoreIn]   = useState(false);
//   const t1Ref = useRef(null);
//   const t2Ref = useRef(null);

//   useEffect(() => {
//     // Step 1 – after 2.4 s intro, start exit
//     const exitTimer = setTimeout(() => setPhase("exit"), 2400);

//     // Step 2 – after exit animation (0.7 s), show side layout
//     const sideTimer = setTimeout(() => {
//       setPhase("side");
//       // start typing headline
//       setCur1(true);
//       let i = 0;
//       t1Ref.current = setInterval(() => {
//         i++;
//         setTyped1(HEADLINE.slice(0, i));
//         if (i >= HEADLINE.length) {
//           clearInterval(t1Ref.current);
//           setCur1(false);
//           // pause 300 ms then type subline
//           setTimeout(() => {
//             setCur2(true);
//             let j = 0;
//             t2Ref.current = setInterval(() => {
//               j++;
//               setTyped2(SUBLINE.slice(0, j));
//               if (j >= SUBLINE.length) {
//                 clearInterval(t2Ref.current);
//                 setCur2(false);
//                 setStoreIn(true);   // fade-in store buttons last
//               }
//             }, 55);
//           }, 350);
//         }
//       }, 36);
//     }, 3100);

//     return () => {
//       clearTimeout(exitTimer);
//       clearTimeout(sideTimer);
//       clearInterval(t1Ref.current);
//       clearInterval(t2Ref.current);
//     };
//   }, []);

//   const isIntro = phase === "intro";
//   const isExit  = phase === "exit";
//   const isSide  = phase === "side";

//   return (
//     <section className="hh-root">

//       {/* ── fixed background ── */}
//       <div className="hh-bg" />

//       {/* ══════════════════════════════════════════════════
//           PHASE 1  –  EDITORIAL / BANANA-STYLE INTRO
//       ══════════════════════════════════════════════════ */}
//       <div className={`hh-intro
//         ${isIntro ? "hh-intro--visible" : ""}
//         ${isExit  ? "hh-intro--exit"    : ""}
//         ${isSide  ? "hh-intro--gone"    : ""}
//       `}>

//         {/* "WELCOME TO" label */}
//         <p className="hh-welcome">Welcome to</p>

//         {/* ── three-layer composition ──
//             top text  |  mockup (z-above)  |  bottom text   */}
//         <div className="hh-editorial">

//           {/* top word */}
//           <div className="hh-word hh-word--top">
//             <span>core</span>
//           </div>

//           {/* mockup sits in the middle, overlaps both rows */}
//           <div className="hh-mockup-stage">
//             <img
//               src={MockupImg}
//               alt="coreBTR app mock-up"
//               className="hh-mockup-img"
//             />
//           </div>

//           {/* bottom word */}
//           <div className="hh-word hh-word--bottom">
//             <span className="hh-accent">BTR</span>
//           </div>
//         </div>

//       </div>

//       {/* ══════════════════════════════════════════════════
//           PHASE 2  –  SIDE LAYOUT
//       ══════════════════════════════════════════════════ */}
//       <div className={`hh-side ${isSide ? "hh-side--in" : ""}`}>

//         {/* left – mockup slides from right of screen to left panel */}
//         <div className={`hh-side-left ${isSide ? "hh-side-left--in" : ""}`}>
//           <img
//             src={MockupImg}
//             alt="coreBTR app mock-up"
//             className="hh-side-mockup"
//           />
//         </div>

//         {/* right – text panel */}
//         <div className={`hh-side-right ${isSide ? "hh-side-right--in" : ""}`}>

//           <span className="hh-pill">
//             <em>core</em><strong>BTR</strong> – Believe. Trust. Revise
//           </span>

//           <h1 className="hh-headline">
//             {typed1}
//             {cur1 && <span className="hh-cursor" />}
//           </h1>

//           <p className="hh-sub">
//             {typed2}
//             {cur2 && <span className="hh-cursor hh-cursor--sm" />}
//           </p>

//           <div className={`hh-stores ${storeIn ? "hh-stores--in" : ""}`}>
//             <img src={AppStoreImg}  alt="Download on the App Store" />
//             <img src={PlayStoreImg} alt="Get it on Google Play"     />
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import "./HeroHeader.css";

// import AppStoreImg  from "../../assets/images/app-store-icon.png";
// import PlayStoreImg from "../../assets/images/play-store-icon.png";
// import MockupImg    from "../../assets/images/mockup.png"; // your angled phone image

// export default function HeroHeader() {
//   // "intro" → "side"
//   const [phase, setPhase] = useState("intro");

//   useEffect(() => {
//     const t = setTimeout(() => setPhase("side"), 2400);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className={`hh-root hh-root--${phase}`}>

//       {/* ── fixed parallax background ── */}
//       <div className="hh-bg" />

//       {/* ══════════════════════════════════════════════
//           PHASE 1  –  Full-screen editorial intro
//           core (small) / mockup (huge) / BTR (massive)
//       ══════════════════════════════════════════════ */}
//       <div className="hh-intro">

//         <p className="hh-welcome">W E L C O M E &nbsp;&nbsp; T O</p>

//         <div className="hh-comp">

//           {/* "core" — smaller word, sits above the mockup */}
//           <div className="hh-word hh-word-core">core</div>

//           {/* ── Mockup: huge, centred, behind BTR text ── */}
//           <div className="hh-mockup-wrap">
//             <img src={MockupImg} alt="coreBTR app mockup" className="hh-mockup" />
//           </div>

//           {/* "BTR" — massive word, overlaps bottom of mockup */}
//           <div className="hh-word hh-word-btr">BTR</div>

//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════
//           PHASE 2  –  Left mockup / Right text
//       ══════════════════════════════════════════════ */}
//       <div className="hh-side">

//         {/* Mockup slides to left */}
//         <div className="hh-side-left">
//           <img src={MockupImg} alt="coreBTR app mockup" className="hh-side-mockup" />
//         </div>

//         {/* Text appears immediately from right */}
//         <div className="hh-side-right">

//           <span className="hh-pill">
//             <em>core</em><strong>BTR</strong> &nbsp;–&nbsp; Believe. Trust. Revise
//           </span>

//           <h1 className="hh-headline">
//             The Ultimate<br />
//             Revision App for<br />
//             NEET PG | INI-CET | FMGE
//           </h1>

//           <p className="hh-sub">From Revision to Revolution</p>

//           <div className="hh-stores">
//             <img src={AppStoreImg}  alt="Download on the App Store" />
//             <img src={PlayStoreImg} alt="Get it on Google Play"     />
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import "./HeroHeader.css";

import AppStoreImg  from "../../assets/images/app-store-icon.png";
import PlayStoreImg from "../../assets/images/play-store-icon.png";
import MockupImg    from "../../assets/images/Phone.png";

export default function HeroHeader() {
  const [phase, setPhase] = useState("intro"); // "intro" | "side"

  useEffect(() => {
    const t = setTimeout(() => setPhase("side"), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hh ${phase === "side" ? "hh--side" : ""}`}>

      {/* ── Background ── */}
      <div className="hh-bg" />

      {/* ══════════════════════════════════════════
          PHASE 1  –  Full-viewport editorial
      ══════════════════════════════════════════ */}
      <div className="hh-p1">

        {/* Huge mockup – centrepiece */}
        <div className="hh-p1-mockup">
          <img src={MockupImg} alt="coreBTR app" />
        </div>

        {/* Text overlay — stacked vertically on top of mockup */}
        <div className="hh-p1-text">
          <p className="hh-p1-welcome">WELCOME TO</p>
          <div className="hh-p1-brand">
            <span className="hh-p1-core">core</span><span className="hh-p1-btr">BTR</span>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          PHASE 2  –  Left mockup + Right text
      ══════════════════════════════════════════ */}
      <div className="hh-p2">

        {/* Badge — top center */}
        <div className="hh-p2-badge">
          <span><em>core</em><strong>BTR</strong> &nbsp;–&nbsp; Believe. Trust. Revise</span>
        </div>

        {/* Row: mockup left + text right */}
        <div className="hh-p2-row">

          <div className="hh-p2-left">
            <img src={MockupImg} alt="coreBTR app" className="hh-p2-mockup" />
          </div>

          <div className="hh-p2-right">
            <h1 className="hh-p2-headline">
              The Ultimate<br />
              Revision App for<br />
              NEET PG | INI-CET | FMGE
            </h1>
            <p className="hh-p2-sub">From Revision to Revolution</p>
            <div className="hh-p2-stores">
              <img src={AppStoreImg}  alt="App Store"   />
              <img src={PlayStoreImg} alt="Google Play" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}