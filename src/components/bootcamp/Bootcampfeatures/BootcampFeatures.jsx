import React from "react";
import "./BootcampFeatures.css";

/* ── SVG Icons (no emoji) ── */
const IconMentorship = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="14" r="8" fill="#e8c84a" />
    <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#e8c84a" strokeWidth="3" strokeLinecap="round" />
    <path d="M34 10l4-4m0 0l2-2m-2 2l2 2m-2-2l-2 2" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
    <circle cx="38" cy="8" r="5" fill="#f7d96a" opacity="0.6" />
  </svg>
);

const IconRevision = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="16" rx="2" fill="#5b7fe8" />
    <rect x="20" y="10" width="12" height="16" rx="2" fill="#7d9ef5" />
    <rect x="34" y="8" width="8" height="16" rx="2" fill="#a0b8ff" />
    <rect x="6" y="28" width="36" height="3" rx="1.5" fill="#3d5dc7" />
  </svg>
);

const IconLibrary = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="28" rx="3" fill="#9aa5b8" />
    <rect x="12" y="12" width="24" height="4" rx="1" fill="#fff" opacity="0.6" />
    <rect x="12" y="20" width="24" height="4" rx="1" fill="#fff" opacity="0.6" />
    <rect x="12" y="28" width="16" height="4" rx="1" fill="#fff" opacity="0.6" />
    <rect x="4" y="36" width="40" height="4" rx="2" fill="#6b7a91" />
  </svg>
);

const IconDesktop = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="26" rx="3" fill="#5b7fe8" />
    <rect x="10" y="10" width="28" height="18" rx="1.5" fill="#ccd9ff" />
    <rect x="18" y="34" width="12" height="3" rx="1" fill="#9aa5c8" />
    <rect x="14" y="37" width="20" height="3" rx="1.5" fill="#7d8fb8" />
    <rect x="12" y="14" width="8" height="2" rx="1" fill="#5b7fe8" opacity="0.5" />
    <rect x="12" y="18" width="12" height="2" rx="1" fill="#5b7fe8" opacity="0.5" />
    <rect x="12" y="22" width="6" height="2" rx="1" fill="#5b7fe8" opacity="0.5" />
    <path d="M28 16l4 4-4 4" stroke="#3d5dc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBorderline = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="#e05c7a" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="11" stroke="#e05c7a" strokeWidth="2" strokeDasharray="4 3" />
    <circle cx="24" cy="24" r="5" fill="#e05c7a" />
    <line x1="24" y1="4" x2="24" y2="8" stroke="#e05c7a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="44" stroke="#e05c7a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="4" y1="24" x2="8" y2="24" stroke="#e05c7a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="24" x2="44" y2="24" stroke="#e05c7a" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const featureIcons = {
  "Expert Mentorship":      <IconMentorship />,
  "Subject-wise Revision":  <IconRevision />,
  "Library & Self-Study":   <IconLibrary />,
  "Personal Desktop":       <IconDesktop />,
  "Borderline Student Focus": <IconBorderline />,
};

/* Illustration accent per card */
const CardIllustration = ({ label }) => {
  if (label === "Expert Mentorship") return (
    <div className="bcf-card__illo bcf-card__illo--mentorship">
      <svg viewBox="0 0 120 140" fill="none">
        {/* doctor silhouette */}
        <circle cx="60" cy="38" r="22" fill="#c3d4f8" />
        <ellipse cx="60" cy="105" rx="30" ry="32" fill="#dce7fd" />
        <rect x="46" y="58" width="28" height="36" rx="4" fill="#fff" opacity="0.7" />
        <circle cx="60" cy="38" r="14" fill="#e8c84a" opacity="0.25" />
        <line x1="54" y1="76" x2="66" y2="76" stroke="#7d9ef5" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="70" x2="60" y2="82" stroke="#7d9ef5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="90" cy="20" r="5" fill="#f7d96a" opacity="0.7" />
        <path d="M15 30 l3 3 -3 3" stroke="#a0b8ff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="80" r="3" fill="#c3d4f8" opacity="0.5" />
      </svg>
    </div>
  );

  if (label === "Subject-wise Revision") return (
    <div className="bcf-card__illo bcf-card__illo--revision">
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="20" y="10" width="60" height="80" rx="4" fill="#dce7fd" />
        <rect x="28" y="22" width="44" height="5" rx="2" fill="#7d9ef5" opacity="0.6" />
        <rect x="28" y="32" width="36" height="4" rx="2" fill="#a0b8ff" opacity="0.5" />
        <rect x="28" y="41" width="40" height="4" rx="2" fill="#a0b8ff" opacity="0.5" />
        <rect x="28" y="50" width="28" height="4" rx="2" fill="#a0b8ff" opacity="0.4" />
        <circle cx="88" cy="70" r="22" fill="#c3d4f8" opacity="0.5" />
        <path d="M78 70 l6 6 12-12" stroke="#5b7fe8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  if (label === "Library & Self-Study") return (
    <div className="bcf-card__illo bcf-card__illo--library">
      <svg viewBox="0 0 120 130" fill="none">
        <rect x="15" y="40" width="30" height="60" rx="2" fill="#b8c8e8" />
        <rect x="50" y="30" width="25" height="70" rx="2" fill="#9aafe0" />
        <rect x="80" y="45" width="20" height="55" rx="2" fill="#c3d4f8" />
        <rect x="10" y="98" width="100" height="5" rx="2" fill="#7d8fb8" />
        <circle cx="65" cy="18" r="12" fill="#f7d96a" opacity="0.4" />
        <path d="M59 18 l4 4 8-8" stroke="#e8c84a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  if (label === "Personal Desktop") return (
    <div className="bcf-card__illo bcf-card__illo--desktop">
      <svg viewBox="0 0 130 120" fill="none">
        <rect x="15" y="15" width="90" height="62" rx="5" fill="#dce7fd" />
        <rect x="22" y="22" width="76" height="48" rx="3" fill="#ccd9ff" />
        <rect x="30" y="30" width="20" height="3" rx="1" fill="#5b7fe8" opacity="0.6" />
        <rect x="30" y="37" width="30" height="3" rx="1" fill="#5b7fe8" opacity="0.5" />
        <rect x="30" y="44" width="14" height="3" rx="1" fill="#5b7fe8" opacity="0.4" />
        <path d="M68 35 l6 6-6 6" stroke="#3d5dc7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="50" y="77" width="20" height="8" rx="1" fill="#9aafe0" />
        <rect x="35" y="85" width="50" height="5" rx="2" fill="#7d8fb8" />
        <circle cx="105" cy="25" r="6" fill="#f7d96a" opacity="0.6" />
      </svg>
    </div>
  );

  if (label === "Borderline Student Focus") return (
    <div className="bcf-card__illo bcf-card__illo--borderline">
      <svg viewBox="0 0 130 130" fill="none">
        <circle cx="75" cy="65" r="40" stroke="#f4b8c8" strokeWidth="2" />
        <circle cx="75" cy="65" r="26" stroke="#f4b8c8" strokeWidth="2" strokeDasharray="5 4" />
        <circle cx="75" cy="65" r="12" fill="#e05c7a" opacity="0.2" />
        <circle cx="75" cy="65" r="6" fill="#e05c7a" opacity="0.5" />
        {/* person thinking */}
        <circle cx="32" cy="52" r="12" fill="#dce7fd" />
        <ellipse cx="32" cy="82" rx="16" ry="20" fill="#c3d4f8" />
        <path d="M44 46 q6-8 14-2" stroke="#a0b8ff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="60" cy="42" r="2" fill="#a0b8ff" />
        <circle cx="64" cy="38" r="1.5" fill="#a0b8ff" opacity="0.7" />
        <circle cx="67" cy="34" r="1" fill="#a0b8ff" opacity="0.4" />
      </svg>
    </div>
  );

  return null;
};

const features = [
  {
    label: "Expert Mentorship",
    points: ["Mentorship sessions by Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra."],
  },
  {
    label: "Subject-wise Revision",
    points: ["Dedicated revision classes covering all 19 subjects."],
  },
  {
    label: "Library & Self-Study",
    points: ["Dedicated library cubicles for focused self-study sessions."],
  },
  {
    label: "Personal Desktop",
    points: ["Personal desktop with internet access strictly for academic use."],
  },
  {
    label: "Borderline Student Focus",
    points: ["Special attention given to borderline students who need guided, targeted improvement."],
  },
];

export default function BootcampFeatures() {
  const topRow = features.slice(0, 2);   // 2 cards
  const midRow = features.slice(2, 4);   // 2 cards
  const botRow = features.slice(4);      // 1 card centred

  return (
    <section className="bcf">
      {/* background blobs */}
      <div className="bcf__blob bcf__blob--1" aria-hidden="true" />
      <div className="bcf__blob bcf__blob--2" aria-hidden="true" />

      <div className="bcf__inner">
        {/* ── Eyebrow ── */}
        <div className="bcf__eyebrow">
          <span className="bcf__eyebrow-line" />
          <span className="bcf__eyebrow-text">What's Inside</span>
          <span className="bcf__eyebrow-line" />
        </div>

        {/* ── Heading ── */}
        <h2 className="bcf__heading">
          Key Features of the <em>Bootcamp</em>
        </h2>

        {/* ── Card grid ── */}
        <div className="bcf__grid">
          {/* Row 1 — 2 cards */}
          <div className="bcf__row bcf__row--2">
            {topRow.map((f) => (
              <FeatureCard key={f.label} f={f} />
            ))}
          </div>

          {/* Row 2 — 2 cards */}
          <div className="bcf__row bcf__row--2">
            {midRow.map((f) => (
              <FeatureCard key={f.label} f={f} />
            ))}
          </div>

          {/* Row 3 — 1 centred card */}
          <div className="bcf__row bcf__row--1">
            {botRow.map((f) => (
              <FeatureCard key={f.label} f={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f }) {
  return (
    <div className="bcf-card">
      <div className="bcf-card__body">
        <div className="bcf-card__icon">{featureIcons[f.label]}</div>
        <h3 className="bcf-card__title">{f.label}</h3>
        <ul className="bcf-card__list">
          {f.points.map((p, i) => (
            <li key={i} className="bcf-card__point">{p}</li>
          ))}
        </ul>
      </div>
      <CardIllustration label={f.label} />
    </div>
  );
}