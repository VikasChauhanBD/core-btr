import React from "react";
import "./Annotated.css";

const highlights = [
  {
    // title:
    //   "Created by Dr. Zainab Vora, the content is focused on what is actually important for exams.",
    points: [
      "Based on PYQs and exam trends",
      "Clear, structured, high-yield notes",
      "Helps revise quickly without overthinking",
      "Can be used alongside videos for better clarity",
    ],
  },
];

function Annotated() {
  return (
    <div className="annotated-container">
      <div className="annotated-sections">
        <section className="annotated-highlights">
          <h2 className="annotated-section-heading">
            Annotated <span>Notes</span>
          </h2>
          <h4 className="annotated-section-sub-heading">
            Set of 3 Books | Ready for Revision
          </h4>
          <p className="annotated-lead">
            Created by Dr. Zainab Vora, these books are designed to save time
            and keep you focused on what is truly important.
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
                {/* <h3>{h.title}</h3> */}
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

          <div className="annotated-volumes">
            <div className="annotated-volumes-card">
              <h3>Volume 1 & 2</h3>
              <ul>
                <li>Covers all subjects (except integrated systems)</li>
                <li>Directly aligned with lecture content</li>
                <li>Acts as your primary revision notes</li>
              </ul>
            </div>

            <hr />

            <div className="annotated-volumes-card">
              <h3>Volume 3 - Integrated Systems</h3>
              <ul>
                <li>
                  Covers Physiology, Pathology, Pharmacology & Medicine
                  (integrated)
                </li>
                <li>More conceptual and comprehensive</li>
                <li>Content is expanded for deeper understanding</li>
                <li>Designed to improve clinical integration and clarity</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Annotated;
