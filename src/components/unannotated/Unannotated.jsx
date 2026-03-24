import React from "react";
import "./Unannotated.css";

const highlights = [
  {
    // title:
    //   "If you like writing things down and learning in your own way, this format will suit you",
    points: [
      "Write while watching videos",
      "Build your own understanding",
      "Stay focused during study time",
      "Improve memory through self-notes",
    ],
  },
];

function Unannotated() {
  return (
    <div className="unannotated-container">
      <div className="unannotated-sections">
        <section className="unannotated-highlights">
          <h2 className="unannotated-section-heading">
            Unannotated <span>Workbooks</span>
          </h2>
          <h4 className="unannotated-section-sub-heading">
            2 Volumes | Make Your Own Notes & Master Active Recall
          </h4>
          <p className="unannotated-lead">
            These workbooks are aligned with CoreBTR lecture videos and are
            built for active learning.
          </p>
          <div className="unannotated-highlight-grid">
            <div className="unannotated-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/47150180/file/50d95f28f4938ab6c8b0c8a2fac7d52c.jpg"
                alt="coreBTR Unannotated Workbooks"
              />
            </div>

            {highlights.map((h) => (
              <div className="unannotated-highlight-card" key={h.title}>
                {/* <h3>{h.title}</h3> */}
                <ul className="unannotated-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {h.badge && (
                  <span className="unannotated-highlight-badge">{h.badge}</span>
                )}
              </div>
            ))}
          </div>
          <p className="unannotated-section-para">
            You can also use them for active recall after watching videos 1-2
            times: Keep the workbook in front of you and try to recall
            everything - speak aloud, teach someone, or revise mentally. These
            books help you move from passive watching to strong retention and
            recall.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Unannotated;
