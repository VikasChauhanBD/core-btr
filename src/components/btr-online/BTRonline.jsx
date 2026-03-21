import React, { useEffect, useRef } from "react";
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

function BTRonline() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerRef.current?.classList.add("animate");

            cardRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card?.classList.add("animate");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const keyFeatures = [
    {
      id: 1,
      icon: BookOpen,
      title: "19 Subjects",
      desp: "Complete crash revision across all 19 subjects — structured, high-yield, and exam-relevant.",
    },
    {
      id: 2,
      icon: Target,
      title: "PYQ-Based Focus",
      desp: "Every session is anchored in previous year questions, ensuring you revise only what actually gets asked.",
    },
    {
      id: 3,
      icon: Video,
      title: "Recorded Videos",
      desp: "Quick revision recorded videos for all 19 subjects — watch, pause, and rewatch at your own pace.",
    },
    {
      id: 4,
      icon: Layers,
      title: "Integrated Systems",
      desp: "Pathology, Pharmacology, Physiology & Medicine taught as Integrated Systems for a holistic conceptual foundation.",
    },
    {
      id: 5,
      icon: FileText,
      title: "Annotated PDFs",
      desp: "In-app annotated PDFs serve as ready-to-use revision notes, saving you annotation time.",
    },
    {
      id: 6,
      icon: NotebookPen,
      title: "Free BTR Booklet",
      desp: "FREE hardcopy BTR booklet/workbook included for personal note-making and last-minute revision.",
    },
  ];

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
        <section className="btr-online-features" ref={sectionRef}>
          <div className="btr-online-eyebrow">
            <span className="btr-online-eyebrow-line" />
            <p className="btr-online-eyebrow-text">
              WHY <span>core</span>
              <em>BTR</em>
            </p>
          </div>

          <h2 className="btr-online-section-heading" ref={headerRef}>
            What Makes core<span>BTR</span> Different?
          </h2>

          <div className="btr-online-grid">
            {keyFeatures.map((data) => {
              const Icon = data.icon;
              return (
                <div
                  key={data.id}
                  className="btr-online-card"
                  ref={addToCardRefs}
                >
                  <Icon className="btr-online-icon" />
                  <h4>{data.title}</h4>
                  <p>{data.desp}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BTRonline;
