import React from "react";
import "./PlanPricesHeader.css";

const whoFor = [
  "<b>High-Yield Revision Videos</b> - </br>Concise, concept-driven lectures across 19 subjects, including integrated systems for holistic understanding.",
  "<b>Structured Notes & Workbooks (Set of 5 books)</b> - </br>Revision-focused material aligned with video content for rapid recall.",
  "<b>PYQs (Previous Year Questions)</b> - </br>NEET PG, INI-CET & FMGE PYQs organized topic-wise and exam-wise.",
  "<b>Curated QBank</b> - </br>Application-based MCQs designed to improve problem-solving and exam temperament.",
  "<b>Video Solutions</b> - </br>Detailed explanations by Dr. Zainab Vora for QBank MCQs and selected PYQs.",
  "<b>#ZVRecommended PYQs</b> - </br>High-yield, must-do questions for quick revision when time is limited.",
  "<b>Grand Tests & Subject Tests</b> - </br>Track performance and identify weak areas with regular assessments.",
  "<b>Topic-Wise Pearls</b> - </br>Ultra high-yield, quick-revision points for last-minute recall.",
  "Coming Soon: <b>Flashcards</b> - </br>Active recall tools to strengthen memory and retention.",
];

// Replaces "Coming Soon" with a red-highlighted span, keeps <b> as bold
function renderPoint(html) {
  // Highlight "Coming Soon" in red
  const withHighlight = html.replace(
    /Coming Soon/g,
    '<span class="coming-soon">Coming Soon</span>',
  );
  return <span dangerouslySetInnerHTML={{ __html: withHighlight }} />;
}

function PlanPricesHeader() {
  return (
    <div className="prices-header-container">
      <div className="prices-header-sections">
        <section className="prices-header-who-for">
          <h1 className="prices-header-section-heading">
            Core<span>BTR</span> is designed to simplify your revision and
            maximize your results.
          </h1>
          <h3>
            Every feature is built to help you learn faster, retain better, and
            perform with confidence in NEET PG, INI-CET & FMGE.
          </h3>
          <h4>What You Get with CoreBTR</h4>
          <div className="prices-header-who-grid">
            <div className="prices-header-who-card1">
              <ul className="prices-header-who-list">
                {whoFor.map((point, index) => (
                  <li key={index}>{renderPoint(point)}</li>
                ))}
              </ul>
            </div>
            <div className="prices-header-who-card2">
              <img
                src="https://cdn.dribbble.com/userupload/47198292/file/3d7da8f9174ab84ad4ee4db0d5bcfcf4.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlanPricesHeader;
