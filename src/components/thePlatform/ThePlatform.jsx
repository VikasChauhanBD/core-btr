import React from "react";
import "./ThePlatform.css";

const whatYouGet = [
  {
    title: "High-Yield Revision Videos",
    body: "Concise, concept-driven lectures across all 19 subjects, including integrated system-based learning.",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80",
  },
  {
    title: "Structured Notes & Workbooks",
    body: "5 books designed for rapid revision and long-term retention, perfectly aligned with video content.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80",
  },
  {
    title: "PYQs",
    body: "NEET PG, INI-CET & FMGE previous year questions organized topic-wise for focused practice.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    title: "Curated QBank",
    body: "Application-based MCQs to sharpen your problem-solving skills and build exam temperament.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
  },
  {
    title: "Video Solutions by Dr. Zainab Vora",
    body: "Understand the logic behind every answer with detailed video explanations from the faculty herself.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    title: "#ZVRecommended PYQs",
    body: "Handpicked, must-do questions for quick revision when time is limited — curated for maximum impact.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    title: "Grand Tests & Subject Tests",
    body: "Analyze your performance, identify weak areas, and track your progress with structured test series.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Topic-Wise Pearls",
    body: "Ultra high-yield points for last-minute revision and instant recall — the perfect exam-day companion.",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80",
  },
  {
    title: "Flashcards",
    body: "Powerful active recall tools to boost memory and retention — coming soon to the platform.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
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
              <div
                className="the-platform-get-card"
                key={item.title}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="the-platform-get-card-overlay" />
                <div className="the-platform-get-card-content">
                  <h3 className="the-platform-get-title">{item.title}</h3>
                  <p className="the-platform-get-body">{item.body}</p>
                </div>
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
