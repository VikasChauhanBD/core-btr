import React from "react";
import "./BootcampFeatures.css";

const whatYouGet = [
  {
    title: "Mentorship Beyond Classes",
    body: "Regular strategy sessions with Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra for doubt clearance and mindset building.",
    image:
      "https://cdn.dribbble.com/userupload/47131946/file/3407472911a39d6e886b3f41fed1c00f.jpeg",
  },
  {
    title: "Complete Coverage",
    body: "All 19 Subjects Revised in a Structured Crash Course",
    image:
      "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
  },
  {
    title: "Integrated Approach",
    body: "MCQ Discussion, E&Ds & Mini Tests Designed to StrengthenConcepts + Application",
    image:
      "https://cdn.dribbble.com/userupload/47132128/file/7ac090fc0f6779db93246446f87edc37.jpeg",
  },
  {
    title: "Real Exam Simulation",
    body: "CBT-Based Grand Tests Conducted in an Authentic Exam Environment.",
    image:
      "https://cdn.dribbble.com/userupload/47132129/file/78364d434da0ce0859310eb484ea501e.jpeg",
  },
];

export default function BootcampFeatures() {
  return (
    <div className="bootcamp-features-container">
      <div className="bootcamp-features-sections">
        <section className="bootcamp-features-what-you-get">
          <div className="bootcamp-features-eyebrow">
            <span className="bootcamp-features-eyebrow-line" />
            <span className="bootcamp-features-eyebrow-text">
              WHAT'S INSIDE
            </span>
          </div>
          <h2 className="bootcamp-features-section-heading">
            Why Students Prefer<span> Bootcamp</span>
          </h2>
          <p className="bootcamp-features-lead">
            Everything you need for a complete, structured, high-yield revision
            - all in one place.
          </p>

          <div className="bootcamp-features-get-grid">
            {whatYouGet.map((item) => (
              <div
                className="bootcamp-features-get-card"
                key={item.title}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bootcamp-features-get-card-overlay" />
                <div className="bootcamp-features-get-card-content">
                  <h3 className="bootcamp-features-get-title">{item.title}</h3>
                  <p className="bootcamp-features-get-body">{item.body}</p>
                </div>
                {item.badge && (
                  <span className="bootcamp-features-get-badge">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
