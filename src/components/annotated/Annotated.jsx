import React from "react";
import "./Annotated.css";

const highlights = [
  {
    title:
      "Created by Dr. Zainab Vora, the content is focused on what is actually important for exams.",
    points: [
      "Based on PYQs",
      "Clear, structured notes",
      "Helps revise quickly",
      "Useful for active recall",
    ],
  },
];

function Annotated() {
  return (
    <div className="annotated-container">
      <div className="annotated-sections">
        <section className="annotated-highlights">
          <h2 className="annotated-section-heading">
            Annotated <span>Workbooks</span>
          </h2>
          <h4 className="annotated-section-sub-heading">
            Set of 3 Books | Ready for Revision
          </h4>
          <p className="annotated-lead">
            These are made for faster revision, especially when time is limited.
          </p>
          <div className="annotated-highlight-grid">
            <div className="annotated-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/47150179/file/2797e7c5125ef94e919282423d5bd711.jpg"
                alt="coreBTR Annotated Workbooks"
              />
            </div>

            {highlights.map((h) => (
              <div className="annotated-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="annotated-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {h.badge && (
                  <span className="annotated-highlight-badge">{h.badge}</span>
                )}
              </div>
            ))}
          </div>
          <p className="annotated-section-para">
            Good for when you want everything in one place without overthinking.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Annotated;
