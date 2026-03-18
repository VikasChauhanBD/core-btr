import React from "react";
import "./OfflineBTR.css";

const highlights = [
  {
    title: "What You'll Learn",
    points: [
      "19 Subjects Crash Course — Complete rapid revision",
      "PYQ-Based Approach — Focus only on what actually gets asked",
      "High-Yield NEET PG Topics",
      "BTR Core Facts like IPC / Milestones / Staging / Scores",
      "Medicine High-Yield Topics like ABG / ECG / Fluid analysis / Stroke localization",
      "Must-Know Images from all subjects",
      "Face-to-Face Live Sessions with direct interaction",
      "Printed BTR Booklet provided for revision support",
    ],
  },
];

const features = [
  {
    icon: "📋",
    label: "19 Subjects",
    points: [
      "Complete rapid crash revision covering all 19 NEET PG subjects in a structured, no-nonsense manner.",
    ],
  },
  {
    icon: "🎯",
    label: "PYQ-Based Approach",
    points: [
      "Strictly focused on previous year questions and high-yield facts — only what actually gets asked in the exam.",
    ],
  },
  {
    icon: "🧠",
    label: "BTR Core Facts",
    points: [
      "Key must-know facts including IPC, Milestones, Staging, and Scores for quick recall under exam pressure.",
    ],
  },
  {
    icon: "❤️",
    label: "Medicine High-Yield",
    points: [
      "Dedicated focus on ABG, ECG, Fluid Analysis, and Stroke Localization — topics that consistently appear in NEET PG.",
    ],
  },
  {
    icon: "🖼️",
    label: "Must-Know Images",
    points: [
      "Curated high-yield images from all subjects to prepare you for image-based questions in the exam.",
    ],
  },
  {
    icon: "📒",
    label: "Printed BTR Booklet",
    points: [
      "Each student receives a printed BTR Booklet as a dedicated revision support resource to use alongside sessions.",
    ],
  },
];

const whatYouGet = [
  {
    icon: "🏫",
    title: "Face-to-Face Sessions",
    body: "Live, in-person classes with direct faculty interaction for real-time doubt resolution and engagement.",
  },
  {
    icon: "📌",
    title: "Structured Revision",
    body: "Systematic subject-by-subject crash revision ensuring every high-yield topic is covered before your exam.",
  },
  {
    icon: "⚡",
    title: "Quick Recall Techniques",
    body: "Mnemonics, patterns, and BTR methods that help you retain and retrieve information fast during the exam.",
  },
  {
    icon: "📖",
    title: "Printed Booklet",
    body: "Take home your own printed BTR Booklet — a compact, exam-ready revision resource for continued study.",
  },
  {
    icon: "🔍",
    title: "PYQ Focus",
    body: "Every session is built around previous year questions so you spend time only on what matters most.",
  },
  {
    icon: "🏆",
    title: "Exam Confidence",
    body: "Walk into NEET PG with clarity, confidence, and the quick recall ability needed to rank better.",
  },
];

const additionalInfo = [
  "BTR Offline is not theory overload — it's about what to remember, how to apply it, and what not to miss.",
  "Built strictly around PYQs and high-yield facts, BTR helps you revise all 19 subjects in a focused, face-to-face setting.",
  '"Kahani tumhaari hai, Ho sake toh kamaal likhna."',
];

function OfflineBTR() {
  return (
    <div className="btr-offline-container">
      <div className="btr-offline-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46394015/file/86537fb81017d699d53e04a9bee72d19.jpeg"
          alt="BTR Offline (Offline Crash Course) by Dr. Zainab Vora"
        />
      </div>

      <div className="btr-offline-content">
        <h1>BTR Offline: Revise Smart. Recall Fast. Rank Better</h1>
        <p>
          <b>BTR Offline</b> is a focused, face-to-face crash revision program
          designed for NEET PG aspirants who want clarity, confidence, and quick
          recall before the exam. Built strictly around{" "}
          <b>PYQs and high-yield facts,</b> BTR helps you revise all 19 subjects
          in a structured, no-nonsense manner.
          <br />
          <br />
          This is not theory overload — it's about{" "}
          <b>what to remember, how to apply, and what not to miss.</b>
        </p>
        <h6>"Kahani tumhaari hai, Ho sake toh kamaal likhna."</h6>
      </div>

      <div className="btr-offline-sections">
        <section className="btr-offline-highlights">
          <div className="btr-offline-eyebrow">
            <span className="btr-offline-eyebrow-line" />
            <span className="btr-offline-eyebrow-text">Overview</span>
          </div>
          <h2 className="btr-offline-section-heading">
            What You'll <em>Learn</em>
          </h2>
          <p className="btr-offline-lead">
            A PYQ-focused crash revision program covering all 19 subjects with
            high-yield facts, must-know images, and live face-to-face sessions.
          </p>

          <div className="btr-offline-highlight-grid">
            {highlights.map((h) => (
              <div className="btr-offline-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="btr-offline-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="btr-offline-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/46394037/file/779239c41dca64941a9c00383e17cfcd.webp"
                alt="BTR Offline Course"
              />
            </div>
          </div>
        </section>

        <section className="btr-offline-features">
          <div className="btr-offline-eyebrow">
            <span className="btr-offline-eyebrow-line" />
            <span className="btr-offline-eyebrow-text">What's Inside</span>
          </div>
          <h2 className="btr-offline-section-heading">
            Key Features of <em>BTR Offline</em>
          </h2>

          <div className="btr-offline-features-table">
            {features.map((f) => (
              <div className="btr-offline-feature-row" key={f.label}>
                <div className="btr-offline-feature-label">
                  <span className="btr-offline-feature-icon">{f.icon}</span>
                  <span className="btr-offline-feature-name">{f.label}</span>
                </div>
                <div className="btr-offline-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="btr-offline-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="btr-offline-what-you-get">
          <div className="btr-offline-eyebrow">
            <span className="btr-offline-eyebrow-line" />
            <span className="btr-offline-eyebrow-text">Benefits</span>
          </div>
          <h2 className="btr-offline-section-heading">
            What You <em>Get</em>
          </h2>

          <div className="btr-offline-get-grid">
            {whatYouGet.map((item) => (
              <div className="btr-offline-get-card" key={item.title}>
                <span className="btr-offline-get-icon">{item.icon}</span>
                <h3 className="btr-offline-get-title">{item.title}</h3>
                <p className="btr-offline-get-body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="btr-offline-info">
          <div className="btr-offline-info-label">Additional Info</div>
          <div className="btr-offline-info-items">
            {additionalInfo.map((item, i) => (
              <div className="btr-offline-info-item" key={i}>
                <span className="btr-offline-info-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default OfflineBTR;
