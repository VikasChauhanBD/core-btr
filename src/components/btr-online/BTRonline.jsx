import React from "react";
import "./BTRonline.css";

const highlights = [
  {
    title: "Program Highlights",
    points: [
      "Complete 19-subject crash revision covering all major exam areas",
      "Focus on high-yield points based on PYQs",
      "Quick revision recorded videos for all 19 subjects",
      "Test-discussion videos: Curated highly conceptual & application-based MCQs with detailed discussions",
      "Pathology, Pharmacology, Physiology & Medicine covered as Integrated Systems",
      "In-app annotated PDFs available as revision notes",
      "FREE hardcopy BTR booklet/workbook for note-making and last-minute revision",
    ],
  },
];

const features = [
  {
    icon: "📚",
    label: "19 Subjects",
    points: [
      "Complete crash revision across all 19 subjects — structured, high-yield, and exam-relevant.",
    ],
  },
  {
    icon: "🎯",
    label: "PYQ-Based Focus",
    points: [
      "Every session is anchored in previous year questions, ensuring you revise only what actually gets asked.",
    ],
  },
  {
    icon: "🎬",
    label: "Recorded Videos",
    points: [
      "Quick revision recorded videos for all 19 subjects — watch, pause, and rewatch at your own pace.",
    ],
  },
  {
    icon: "🧩",
    label: "Integrated Systems",
    points: [
      "Pathology, Pharmacology, Physiology & Medicine taught as Integrated Systems for a holistic conceptual foundation.",
    ],
  },
  {
    icon: "📋",
    label: "Annotated PDFs",
    points: [
      "In-app annotated PDFs serve as ready-to-use revision notes, saving you annotation time.",
    ],
  },
  {
    icon: "📒",
    label: "Free BTR Booklet",
    points: [
      "FREE hardcopy BTR booklet/workbook included for personal note-making and last-minute revision.",
    ],
  },
];

const whatYouGet = [
  {
    icon: "🧠",
    title: "Smart Revision",
    body: "Revise smarter, faster, and with clarity using a proven system built around high-yield, exam-relevant content.",
  },
  {
    icon: "💡",
    title: "Topper Mindset",
    body: "Test-discussion videos teach you how to think like a topper — mastering the art of solving MCQs.",
  },
  {
    icon: "🔗",
    title: "Integrated Learning",
    body: "Key subjects taught as integrated systems, giving you a holistic conceptual basis for the most important PG topics.",
  },
  {
    icon: "📱",
    title: "In-App Notes",
    body: "Access annotated PDFs directly in-app — no need to write everything from scratch, just read and revise.",
  },
  {
    icon: "📦",
    title: "Physical Booklet",
    body: "Receive a free hardcopy BTR workbook for offline note-making, self-study, and last-minute revision.",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    body: "One of the most successful revision programs for NEET PG and INI-CET aspirants, with a consistent track record.",
  },
];

const additionalInfo = [
  "BTR Online is a one-of-its-kind 19-subject complete revision program designed specifically for the final phase of medical entrance exam preparation.",
  "The program focuses on high-yield, exam-relevant concepts instead of overwhelming students with excess content.",
  "With a proven track record and consistent results, BTR Online has emerged as one of the most successful revision plans for NEET PG and INI-CET aspirants.",
];

function BTRonline() {
  return (
    <div className="btr-online-container">
      <div className="btr-online-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46394030/file/2f74baf955f88eeaf2416e5147f177d9.webp"
          alt="BTR Online by Dr. Zainab Vora"
        />
      </div>

      <div className="btr-online-content">
        <h1>One Course. One Faculty. All 19 Subjects</h1>
        <p>
          <b>
            BTR Online is a one-of-its-kind 19-subject complete revision
            program,{" "}
          </b>
          designed specifically for the final phase of medical entrance exam
          preparation. It focuses on <b>high-yield, exam-relevant concepts</b>{" "}
          instead of overwhelming students with excess content. With a proven
          track record and consistent results, BTR Online has emerged as one of
          the <b>most successful revision plans</b> for{" "}
          <b>NEET PG and INI-CET aspirants.</b>
          <br />
          The program is built to help students revise smarter, faster, and with
          clarity.
        </p>
      </div>

      <div className="btr-online-sections">
        <section className="btr-online-highlights">
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <span className="btr-online-eyebrow-text">Overview</span>
          </div>
          <h2 className="btr-online-section-heading">
            Program <em>Highlights</em>
          </h2>
          <p className="btr-online-lead">
            A complete 19-subject online revision program built around PYQs,
            high-yield topics, recorded videos, and integrated systems teaching.
          </p>

          <div className="btr-online-highlight-grid">
            <div className="btr-online-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/46394040/file/30079b3f3b0a736db9bd61a7d89ac0cb.webp"
                alt="Dr. Zainab Vora with BTR Subscriber"
              />
            </div>

            {highlights.map((h) => (
              <div className="btr-online-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="btr-online-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="btr-online-features">
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <span className="btr-online-eyebrow-text">What's Inside</span>
          </div>
          <h2 className="btr-online-section-heading">
            Key Features of <em>BTR Online</em>
          </h2>

          <div className="btr-online-features-table">
            {features.map((f) => (
              <div className="btr-online-feature-row" key={f.label}>
                <div className="btr-online-feature-label">
                  <span className="btr-online-feature-icon">{f.icon}</span>
                  <span className="btr-online-feature-name">{f.label}</span>
                </div>
                <div className="btr-online-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="btr-online-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="btr-online-what-you-get">
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <span className="btr-online-eyebrow-text">Benefits</span>
          </div>
          <h2 className="btr-online-section-heading">
            What You <em>Get</em>
          </h2>

          <div className="btr-online-get-grid">
            {whatYouGet.map((item) => (
              <div className="btr-online-get-card" key={item.title}>
                <span className="btr-online-get-icon">{item.icon}</span>
                <h3 className="btr-online-get-title">{item.title}</h3>
                <p className="btr-online-get-body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="btr-online-info">
          <div className="btr-online-info-label">Additional Info</div>
          <div className="btr-online-info-items">
            {additionalInfo.map((item, i) => (
              <div className="btr-online-info-item" key={i}>
                <span className="btr-online-info-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BTRonline;
