import React from "react";
import "./BootcampFeatures.css";

const whatYouGet = [
  {
    title: "Expert Mentorship",
    body: "Mentorship sessions by Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra.",
    image:
      "https://cdn.dribbble.com/userupload/47131946/file/3407472911a39d6e886b3f41fed1c00f.jpeg",
  },
  {
    title: "Subject-wise Revision",
    body: "Dedicated revision classes covering all 19 subjects.",
    image:
      "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
  },
  {
    title: "Library & Self-Study",
    body: "Dedicated library cubicles for focused self-study sessions.",
    image:
      "https://cdn.dribbble.com/userupload/47132128/file/3f749b3457361dd64021686aeeedce11.webp",
  },
  {
    title: "Personal Desktop",
    body: "Personal desktop with internet access strictly for academic use.",
    image:
      "https://cdn.dribbble.com/userupload/47132129/file/55b639e65e7711c709d57b27a69b9c88.webp",
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
            Key Features of the<span>Bootcamp</span>
          </h2>
          <p className="bootcamp-features-lead">
            Everything you need for a complete, structured, high-yield revision
            — all in one place.
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
