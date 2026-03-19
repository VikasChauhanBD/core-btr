import React from "react";
import "./CoreBTR.css";

const whatYouGet = [
  {
    icon: "🎬",
    title: "High-Yield Revision Videos",
    body: "Concise, concept-driven lectures across all 19 subjects, including integrated system-based learning for deeper understanding.",
  },
  {
    icon: "📚",
    title: "Structured Notes & Workbooks",
    body: "A set of 5 books designed for rapid revision and long-term retention, perfectly aligned with video content.",
  },
  {
    icon: "📋",
    title: "PYQs",
    body: "NEET PG, INI-CET & FMGE previous year questions organized topic-wise and exam-wise for focused, targeted practice.",
  },
  {
    icon: "🧩",
    title: "Curated QBank",
    body: "Application-based MCQs to sharpen your problem-solving skills and build the right exam temperament.",
  },
  {
    icon: "💡",
    title: "Video Solutions by Dr. Zainab Vora",
    body: "Understand the logic behind every answer with detailed video explanations from the faculty herself.",
  },
  {
    icon: "⭐",
    title: "#ZVRecommended PYQs",
    body: "Handpicked, must-do questions for quick revision when time is limited — curated for maximum impact.",
  },
  {
    icon: "📊",
    title: "Grand Tests & Subject Tests",
    body: "Analyze your performance, identify weak areas, and track your progress with structured test series.",
  },
  {
    icon: "💎",
    title: "Topic-Wise Pearls",
    body: "Ultra high-yield points for last-minute revision and instant recall — the perfect exam-day companion.",
  },
  {
    icon: "🃏",
    title: "Flashcards",
    body: "Powerful active recall tools to boost memory and retention — coming soon to the platform.",
    badge: "Coming Soon",
  },
];

const difference = [
  {
    icon: "🏗️",
    label: "Complete System",
    points: [
      "Built as a complete revision system — not just scattered content — so every resource works together seamlessly.",
    ],
  },
  {
    icon: "🎯",
    label: "High-Yield Focus",
    points: [
      "Focused strictly on high-yield, exam-relevant topics. No unnecessary overload, no wasted study time.",
    ],
  },
  {
    icon: "⚡",
    label: "Fast Revision",
    points: [
      "Designed for fast revision without compromising on concepts — clarity and speed working together.",
    ],
  },
  {
    icon: "📐",
    label: "Exam-Pattern Aligned",
    points: [
      "Fully aligned with the latest NEET PG & INI-CET patterns so you prepare for exactly what will be tested.",
    ],
  },
];

const whoFor = [
  {
    icon: "🩺",
    title: "Exam Aspirants",
    points: ["NEET PG aspirants", "INI-CET aspirants", "FMGE aspirants"],
  },
  {
    icon: "🏁",
    title: "Revision Stage",
    points: [
      "Students aiming for last-mile high-yield revision",
      "Those who want clarity, speed & results",
      "Students who want a structured system, not scattered content",
    ],
  },
];

function CoreBTR() {
  return (
    <div className="core-btr-container">
      <div className="core-btr-content">
        <h2>CoreBTR</h2>
        <p>
          CoreBTR is a next-generation revision platform built for medical
          aspirants who want <b>clarity, speed, and results</b> — without
          unnecessary overload. Designed with a student-first approach, CoreBTR
          transforms the way you revise by focusing only on{" "}
          <b>what truly matters in the exam.</b>
        </p>

        <div className="core-btr-curator">
          <strong>Curated by Dr. Zainab Vora</strong>
          <span>MBBS, MD Radiology – Gold Medalist, AIIMS New Delhi</span>
          <span>AIR 1 – AIIMS &amp; NIMHANS 2015</span>
        </div>

        <p>
          Built on years of teaching experience and student trust, CoreBTR is
          crafted to deliver maximum output with minimum confusion.
        </p>
      </div>

      <div className="core-btr-sections">
        <section className="core-btr-what-you-get">
          <div className="core-btr-eyebrow">
            <span className="core-btr-eyebrow-line" />
            <span className="core-btr-eyebrow-text">The Platform</span>
          </div>
          <h2 className="core-btr-section-heading">
            What You Get with <em>CoreBTR</em>
          </h2>
          <p className="core-btr-lead">
            Everything you need for a complete, structured, high-yield revision
            — all in one place.
          </p>

          <div className="core-btr-get-grid">
            {whatYouGet.map((item) => (
              <div className="core-btr-get-card" key={item.title}>
                <span className="core-btr-get-icon">{item.icon}</span>
                <h3 className="core-btr-get-title">{item.title}</h3>
                <p className="core-btr-get-body">{item.body}</p>
                {item.badge && (
                  <span className="core-btr-get-badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="core-btr-features">
          <div className="core-btr-eyebrow">
            <span className="core-btr-eyebrow-line" />
            <span className="core-btr-eyebrow-text">Why CoreBTR</span>
          </div>
          <h2 className="core-btr-section-heading">
            What Makes CoreBTR <em>Different?</em>
          </h2>

          <div className="core-btr-features-table">
            {difference.map((f) => (
              <div className="core-btr-feature-row" key={f.label}>
                <div className="core-btr-feature-label">
                  <span className="core-btr-feature-icon">{f.icon}</span>
                  <span className="core-btr-feature-name">{f.label}</span>
                </div>
                <div className="core-btr-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="core-btr-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="core-btr-who-for">
          <div className="core-btr-eyebrow">
            <span className="core-btr-eyebrow-line" />
            <span className="core-btr-eyebrow-text">Target Audience</span>
          </div>
          <h2 className="core-btr-section-heading">
            Who Is <em>CoreBTR</em> For?
          </h2>
          <p className="core-btr-lead">
            Whether you are just starting your revision or entering the final
            stretch before the exam, CoreBTR is built for you.
          </p>

          <div className="core-btr-who-grid">
            {whoFor.map((w) => (
              <div className="core-btr-who-card" key={w.title}>
                <span className="core-btr-who-icon">{w.icon}</span>
                <h3 className="core-btr-who-title">{w.title}</h3>
                <ul className="core-btr-who-list">
                  {w.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="core-btr-info">
          <div className="core-btr-info-label">Our Vision</div>

          <p className="core-btr-info-vision">
            To simplify PG medical entrance preparation so that every student
            feels <em>confident, in control, and exam-ready.</em>
          </p>

          <div className="core-btr-info-exams">
            {["NEET PG", "INI-CET", "FMGE"].map((exam) => (
              <span className="core-btr-info-exam-tag" key={exam}>
                {exam}
              </span>
            ))}
          </div>

          <p className="core-btr-info-tagline">
            Your preparation needs focus. Your rank needs strategy.
            <br />
            <strong style={{ color: "#fff" }}>
              Revise Smart. Revise CORE.
            </strong>
          </p>
        </section>
      </div>
    </div>
  );
}

export default CoreBTR;
