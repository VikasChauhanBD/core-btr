import React, { useEffect, useRef, useState } from "react";
import "./WhyDiff2.css";

const features = [
  {
    number: "01",
    tag: "Not Just Lectures",
    title: "A Complete System",
    desc: "Bootcamp Ensures Daily Testing + Analysis + Revision",
    color: "wd2-blue",
  },
  {
    number: "02",
    tag: "Specific Focus",
    title: "Exam-Specific Focus",
    desc: "Designed Exclusively for NEET PG, INI-CET and FMGE, Not a Generic Crash Course",
    color: "wd2-gold",
  },
  {
    number: "03",
    tag: "Structured Day-by-Day Schedule",
    title: "Accountability & Discipline",
    desc: "Keeps Procrastination away & Ensures Course Completion",
    color: "wd2-blue",
  },
  {
    number: "04",
    tag: "Unlike Traditional Classes",
    title: "Mentorship-Driven Learning",
    desc: "This Program Emphasizes Strategy, Consistency & Mental Conditioning along with Academics",
    color: "wd2-gold",
  },
  {
    number: "05",
    tag: "From Concepts to Practice ",
    title: "End-to-End Prep",
    desc: "From Concepts -> Practice -> PYQs -> GTs -> Rapid Revision, Everything is Covered under One Roof",
    color: "wd2-blue",
  },
];

export default function WhyDiff2() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const obs = refs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible((p) => [...new Set([...p, i])]);
        },
        { threshold: 0.12 },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section className="wd2-section">
      <div className="wd2-inner">
        {/* Header */}
        <div className="wd2-header">
          <div className="wd2-eyebrow">
            <div className="wd2-eyebrow-line" />
            <span className="wd2-eyebrow-text">WHAT'S INSIDE</span>
          </div>
          <h2 className="wd2-heading">
            What Makes It <span className="wd2-heading-accent">Different</span>
            <br />
            From Other Offline Classes
          </h2>
        </div>

        {/* Cards grid */}
        <div className="wd2-grid">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className={`wd2-card ${f.color} ${visible.includes(i) ? "wd2-in" : ""}`}
              style={{ "--i": i }}
            >
              <div className="wd2-card-num">{f.number}</div>
              <div className="wd2-card-body">
                <span className="wd2-card-tag">{f.tag}</span>
                <h3 className="wd2-card-title">{f.title}</h3>
                <p className="wd2-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}

          {/* Bottom banner card */}
          <div
            ref={(el) => (refs.current[5] = el)}
            className={`wd2-banner ${visible.includes(5) ? "wd2-in" : ""}`}
            style={{ "--i": 5 }}
          >
            <p className="wd2-banner-quote">
              At CoreBTR Bootcamp -{" "}
              <strong>
                We guide you all the way until you achieve your goal
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
