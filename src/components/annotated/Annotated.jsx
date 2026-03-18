import React from "react";
import "./Annotated.css";
import Banner from "../../assets/images/annotated-banner.webp";

const targets = [
  {
    icon: "💼",
    title: "Busy Professionals",
    points: [
      "Ideal for those juggling jobs, internships, or those in their final revision phase.",
    ],
  },
  {
    icon: "📖",
    title: "Active Learners",
    points: [
      "For students who appreciate the benefits of writing as they learn, you can still use the classic workbook to make your own notes.",
      "The annotated workbook provides a streamlined approach, allowing you to focus on understanding the content without the burden of extensive writing.",
    ],
  },
];

const features = [
  {
    icon: "✔",
    label: "Verified Content",
    points: [
      "Unlike unofficial annotations circulating in various forums, our workbook content has been meticulously verified to eliminate any inaccuracies.",
    ],
  },
  {
    icon: "🎨",
    label: "User-Friendly Design",
    points: [
      "The workbook is neatly typed, offering a visually appealing format that encourages engagement and retention.",
    ],
  },
  {
    icon: "🔗",
    label: "Combined Learning Approach",
    points: [
      "Utilize both annotated and unannotated workbooks for a comprehensive learning experience.",
      "While the annotated version serves as your foundation, the unannotated workbook is perfect for active recall and revision.",
    ],
  },
  {
    icon: "🎬",
    label: "Integrated Video Learning",
    points: [
      "We highly recommend using the annotated workbook alongside our video content.",
      "The annotations complement the video lessons, ensuring you grasp the full context rather than relying solely on memorization.",
    ],
  },
  {
    icon: "📝",
    label: "Flexible Learning",
    points: [
      "Each chapter includes blank pages for your notes, making this workbook a personalized tool for your studies.",
    ],
  },
];

const usages = [
  {
    num: "01",
    title: "For Quick Revision",
    body: "Use the annotated workbook as your primary resource while watching video lectures to reinforce learning.",
  },
  {
    num: "02",
    title: "For Active Recall",
    body: "Open the unannotated workbook and attempt to teach the content to someone else. This method enhances retention and understanding.",
  },
  {
    num: "03",
    title: "Personalized Notes",
    body: "Add your insights and additional information to the annotated workbook, tailoring it to your learning style.",
  },
];

const additionalInfo = [
  "We have also included timestamps in the workbook for easy reference to specific video segments, enhancing your study efficiency.",
  "Each workbook is designed to be your comprehensive learning resource, helping you identify areas that need revisiting during your revisions.",
];

function Annotated() {
  return (
    <div className="annotated-container">
      <div className="annotated-header">
        <img src={Banner} alt="" />
      </div>

      <div className="annotated-content">
        <p>
          We are thrilled to introduce our newly developed{" "}
          <b>BTR Annotated Workbook</b>, designed specifically based on the
          feedback from our students. <br />
          <br />
          Many of you expressed the need for a resource that saves time in
          annotation while complementing the traditional BTR unannotated
          workbook. We believe this will enhance your learning experience by
          allowing you to use both workbooks together effectively.
        </p>
      </div>

      <div className="annotated-sections">
        <section className="annotated-why">
          <div className="annotated-eyebrow">
            <span className="annotated-eyebrow-line" />
            <span className="annotated-eyebrow-text">Purpose</span>
          </div>
          <h2 className="annotated-section-heading">
            Why the <em>Annotated</em> BTR Workbook?
          </h2>
          <p className="annotated-lead">
            The demand for an annotated version arose because many students are
            pressed for time and may not be able to annotate everything on their
            own. This workbook serves as a solution for:
          </p>
          <div className="annotated-target-grid">
            {targets.map((t) => (
              <div className="annotated-target-card" key={t.title}>
                <span className="annotated-target-icon">{t.icon}</span>
                <h3 className="annotated-target-title">{t.title}</h3>
                <ul className="annotated-target-list">
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="annotated-features">
          <div className="annotated-eyebrow">
            <span className="annotated-eyebrow-line" />
            <span className="annotated-eyebrow-text">What's Inside</span>
          </div>
          <h2 className="annotated-section-heading">
            Key Features of the Annotated Workbook
          </h2>
          <div className="annotated-features-table">
            {features.map((f) => (
              <div className="annotated-feature-row" key={f.label}>
                <div className="annotated-feature-label">
                  <span className="annotated-feature-icon">{f.icon}</span>
                  <span className="annotated-feature-name">{f.label}</span>
                </div>
                <div className="annotated-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="annotated-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="annotated-usage">
          <div className="annotated-eyebrow">
            <span className="annotated-eyebrow-line" />
            <span className="annotated-eyebrow-text">How to Use</span>
          </div>
          <h2 className="annotated-section-heading">
            How to Use the Workbooks Effectively
          </h2>
          <div className="annotated-usage-grid">
            {usages.map((u) => (
              <div className="annotated-usage-card" key={u.num}>
                <span className="annotated-usage-num">{u.num}</span>
                <h3 className="annotated-usage-title">{u.title}</h3>
                <p className="annotated-usage-body">{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="annotated-info">
          <div className="annotated-info-label">Additional Info</div>
          <div className="annotated-info-items">
            {additionalInfo.map((item, i) => (
              <div className="annotated-info-item" key={i}>
                <span className="annotated-info-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Annotated;
