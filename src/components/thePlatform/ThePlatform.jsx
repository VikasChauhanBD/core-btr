import React from "react";
import "./ThePlatform.css";

const whatYouGet = [
  {
    title: "High-Yield Revision Videos",
    body: "Concise, concept-driven lectures across all 19 subjects, including integrated system-based learning.",
    image:
      "https://cdn.dribbble.com/userupload/47163471/file/bfbe0c8d4f366e2f4fa8415ba82d34aa.jpeg",
  },
  {
    title: "Structured Notes & Workbooks",
    body: "5 books designed for rapid revision and long-term retention, perfectly aligned with video content.",
    image:
      "https://cdn.dribbble.com/userupload/47150179/file/2797e7c5125ef94e919282423d5bd711.jpg",
  },
  {
    title: "PYQs",
    body: "Previous year questions organized topic-wise for focused PYQ based revision.",
    image:
      "https://cdn.dribbble.com/userupload/47163535/file/bebac77cbdd72726377d5eee6fb21072.jpg",
  },
  {
    title: "Curated QBank",
    body: "Application-based MCQs to sharpen your problem-solving skills and build exam temperament.",
    image:
      "https://cdn.dribbble.com/userupload/47132000/file/a7308653c1c7b7cdd6afd4128010c67c.jpeg",
  },
  {
    title: "Video Solutions by Dr. Zainab Vora",
    body: "Clear explanations to help you understand the logic behind every answer.",
    image:
      "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
  },
  {
    title: "ZVRecommended PYQs",
    body: "Handpicked, high-impact questions for quick revision when time is limited.",
    image:
      "https://cdn.dribbble.com/userupload/47132068/file/f1c780491f79ec7ea31d7a65430d2d98.jpeg",
  },
  {
    title: "Grand Tests & Subject Tests",
    body: "Analyze performance, identify weak areas, and track your progress.",
    image:
      "https://cdn.dribbble.com/userupload/47132128/file/7ac090fc0f6779db93246446f87edc37.jpeg",
  },
  {
    title: "Topic-Wise Pearls for Rapid Revision",
    body: "Ultra high-yield points for last-minute preparation and quick recall.",
    image:
      "https://cdn.dribbble.com/userupload/47162323/file/6b2f21c04c796ee6acade0b779942195.jpg",
  },
  {
    title: "Flashcards for Active Recall",
    body: "Boost retention and revise faster with powerful memory tools.",
    image:
      "https://cdn.dribbble.com/userupload/47132067/file/ed9501d6b27213fbe1b90340674c4163.jpeg",
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
            <span className="the-platform-eyebrow-text">THE PLATFORM</span>
          </div>
          <h2 className="the-platform-section-heading">
            What you get with Core<span>BTR</span>
          </h2>
          <p className="the-platform-lead">
            All-in-One Medical Learning & Revision System designed for NEET PG,
            INI-CET and FMGE aspirants who want a simpler, smarter way to
            prepare & bring everything you need into one clear, structured
            system.
            <br />
            No more scattered resources. Just focused learning that helps you
            move from confusion to clarity.
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
