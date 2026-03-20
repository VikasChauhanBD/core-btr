import React from "react";
import "./ThePlatform.css";

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

function ThePlatform() {
  return (
    <div className="the-platform-container">
      <div className="the-platform-sections">
        <section className="the-platform-what-you-get">
          <div className="the-platform-eyebrow">
            <span className="the-platform-eyebrow-line" />
            <span className="the-platform-eyebrow-text">The Platform</span>
          </div>
          <h2 className="the-platform-section-heading">
            What You Get with <em>CoreBTR</em>
          </h2>
          <p className="the-platform-lead">
            Everything you need for a complete, structured, high-yield revision
            — all in one place.
          </p>

          <div className="the-platform-get-grid">
            {whatYouGet.map((item) => (
              <div className="the-platform-get-card" key={item.title}>
                <span className="the-platform-get-icon">{item.icon}</span>
                <h3 className="the-platform-get-title">{item.title}</h3>
                <p className="the-platform-get-body">{item.body}</p>
                {item.badge && (
                  <span className="the-platform-get-badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThePlatform;
