import React from "react";
import "./BTRonline.css";
import {
  BookOpen,
  Target,
  Video,
  Layers,
  FileText,
  NotebookPen,
} from "lucide-react";

const highlights = [
  {
    title: "Program Highlights",
    points: [
      "Complete 19-subject crash revision covering all major exam areas",
      "Focus on high-yield points based on PYQs",
      "Quick revision recorded videos for all 19 subjects",
      "Test-discussion videos: Curated highly conceptual & application-based MCQs with detailed discussions",
      "Pathology, Pharmacology, Physiology & Medicine covered as Integrated Systems",
      "In-app annotated PDFs available as revision notes",
      "FREE hardcopy BTR booklet/workbook for note-making and last-minute revision",
    ],
  },
];

const features = [
  {
    icon: <BookOpen size={24} />,
    label: "19 Subjects",
    points: [
      "Complete crash revision across all 19 subjects — structured, high-yield, and exam-relevant.",
    ],
  },
  {
    icon: <Target size={24} />,
    label: "PYQ-Based Focus",
    points: [
      "Every session is anchored in previous year questions, ensuring you revise only what actually gets asked.",
    ],
  },
  {
    icon: <Video size={24} />,
    label: "Recorded Videos",
    points: [
      "Quick revision recorded videos for all 19 subjects — watch, pause, and rewatch at your own pace.",
    ],
  },
  {
    icon: <Layers size={24} />,
    label: "Integrated Systems",
    points: [
      "Pathology, Pharmacology, Physiology & Medicine taught as Integrated Systems for a holistic conceptual foundation.",
    ],
  },
  {
    icon: <FileText size={24} />,
    label: "Annotated PDFs",
    points: [
      "In-app annotated PDFs serve as ready-to-use revision notes, saving you annotation time.",
    ],
  },
  {
    icon: <NotebookPen size={24} />,
    label: "Free BTR Booklet",
    points: [
      "FREE hardcopy BTR booklet/workbook included for personal note-making and last-minute revision.",
    ],
  },
];

function BTRonline() {
  return (
    <div className="btr-online-container">
      <div className="btr-online-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46394030/file/2f74baf955f88eeaf2416e5147f177d9.webp"
          alt="BTR Online by Dr. Zainab Vora"
        />
      </div>

      <div className="btr-online-content">
        <h1>One Course. One Faculty. All 19 Subjects</h1>
        <p>
          <b>
            BTR Online is a one-of-its-kind 19-subject complete revision
            program,{" "}
          </b>
          designed specifically for the final phase of medical entrance exam
          preparation. It focuses on <b>high-yield, exam-relevant concepts</b>{" "}
          instead of overwhelming students with excess content. With a proven
          track record and consistent results, BTR Online has emerged as one of
          the <b>most successful revision plans</b> for{" "}
          <b>NEET PG and INI-CET aspirants.</b>
          <br />
          The program is built to help students revise smarter, faster, and with
          clarity.
        </p>
      </div>

      <div className="btr-online-highlights-sections">
        <section className="btr-online-highlights">
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <span className="btr-online-eyebrow-text">Overview</span>
          </div>
          <h2 className="btr-online-section-heading">
            Program <span>Highlights</span>
          </h2>
          <p className="btr-online-lead">
            A complete 19-subject online revision program built around PYQs,
            high-yield topics, recorded videos, and integrated systems teaching.
          </p>

          <div className="btr-online-highlight-grid">
            <div className="btr-online-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/46394040/file/30079b3f3b0a736db9bd61a7d89ac0cb.webp"
                alt="Dr. Zainab Vora with BTR Subscriber"
              />
            </div>

            {highlights.map((h) => (
              <div className="btr-online-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="btr-online-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="btr-online-features-section">
        <section className="btr-online-features">
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <span className="btr-online-eyebrow-text">What's Inside</span>
          </div>
          <h2 className="btr-online-section-heading">
            Key Features of <span>BTR Online</span>
          </h2>

          <div className="btr-online-features-table">
            {features.map((f) => (
              <div className="btr-online-feature-row" key={f.label}>
                <div className="btr-online-feature-label">
                  <span className="btr-online-feature-icon">{f.icon}</span>
                  <span className="btr-online-feature-name">{f.label}</span>
                </div>
                <div className="btr-online-feature-desc">
                  {f.points.map((p, i) => (
                    <span key={i} className="btr-online-feature-point">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BTRonline;
