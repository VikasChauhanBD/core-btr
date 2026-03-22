import React from "react";
import "./ThePlatform.css";

const whatYouGet = [
  {
    title: "High-Yield Revision Videos",
    body: "Concise, concept-driven lectures across all 19 subjects, including integrated system-based learning, making it a perfect for NEET PG, INI CET and FMG exams preparation.",
    image:
      "https://cdn.dribbble.com/userupload/47131992/file/085c8599dae7a5a13ef5b6f70262278f.jpeg",
  },
  {
    title: "Structured Notes & Workbooks",
    body: "5 books designed for rapid revision and long-term retention, perfectly aligned with video content, making it a powerful annotated workbooks app. ",
    image:
      "https://cdn.dribbble.com/userupload/47131997/file/6a3f49b1422e081046a2830db39b46e9.jpeg",
  },
  {
    title: "PYQs",
    body: "NEET PG, INI-CET & FMGE previous year questions organized topic-wise for focused PYQ based revision.",
    image:
      "https://cdn.dribbble.com/userupload/47131999/file/a3169785ccf8ff11eb88c72c6250e4db.jpeg",
  },
  {
    title: "Curated QBank",
    body: "Application-based MCQs to sharpen your problem-solving skills and build exam temperament.",
    image:
      "https://cdn.dribbble.com/userupload/47132001/file/5a5f5537445e0b34a9d82156755e6026.jpeg",
  },
  {
    title: "Video Solutions by Dr. Zainab Vora",
    body: "Understand the logic behind every answer with detailed video explanations from the faculty herself, available at the Dr. Zainab Vora app. ",
    image:
      "https://cdn.dribbble.com/userupload/47131990/file/53f5354ff4f39cbe87af1fb5ae71ea79.jpeg",
  },
  {
    title: "#ZVRecommended PYQs",
    body: "Handpicked, must-do questions for quick revision when time is limited — curated for maximum impact.",
    image:
      "https://cdn.dribbble.com/userupload/47132068/file/f1c780491f79ec7ea31d7a65430d2d98.jpeg",
  },
  {
    title: "Grand Tests & Subject Tests",
    body: "Analyze your performance, identify weak areas, and track your progress with structured test series designed for NEET PG, INI CET, and FMGE preparation. ",
    image:
      "https://cdn.dribbble.com/userupload/47131991/file/a9e47cc1ab11153e982c48035be3c3d6.jpeg",
  },
  {
    title: "Topic-Wise Pearls",
    body: "Ultra high-yield points for last-minute revision and instant recall —the perfect exam-day companion. ",
    image:
      "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
  },
  {
    title: "Flashcards",
    body: "Powerful active recall tools to boost memory and retention — coming soon to the platform.",
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
            What You Get with core<span>BTR</span>
          </h2>
          <p className="the-platform-lead">
            Everything you need for a complete, structured, high-yield revision
            — all in one place, including <b>PYQ based revision</b> and a{" "}
            <b>smart system-wise medical study</b> approach.
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
