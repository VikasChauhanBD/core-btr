import React from "react";
import "./BootcampFeatures.css";

const whatYouGet = [
  {
    title: "Expert Mentorship",
    body: "Mentorship sessions by Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra.",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80",
  },
  {
    title: "Subject-wise Revision",
    body: "Dedicated revision classes covering all 19 subjects.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80",
  },
  {
    title: "Library & Self-Study",
    body: "Dedicated library cubicles for focused self-study sessions.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    title: "Personal Desktop",
    body: "Personal desktop with internet access strictly for academic use.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
  },
  {
    title: "Borderline Student Focus",
    body: "Special attention given to borderline students who need guided, targeted improvement.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
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
