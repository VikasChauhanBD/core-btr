import React, { useEffect, useRef, useState } from "react";
import "./MentorSection.css";

const mentors = [
  {
    id: 1,
    name: "Dr. Zainab Vora",
    role: "Lead Academic Mentor",
    desc: "Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed..",
    tag: "Academic Lead",
    image:
      "https://cdn.dribbble.com/userupload/47178187/file/97918da2ccaa81da8481b22b60b4d074.jpg?w=400&h=500&fit=crop&crop=faces",
    color: "#1767be",
    light: "#e8f0fb",
  },
  {
    id: 2,
    name: "Dr. Ravi Sharma",
    role: "Mental Strength Coach",
    desc: "Bringing calm, discipline, and mental strength to keep you grounded under pressure.",
    tag: "Mindset & Discipline",
    image:
      "https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg?w=400&h=500&fit=crop&crop=faces",
    color: "#1d204b",
    light: "#eeeffe",
  },
  {
    id: 3,
    name: "Dr. Apurv Mehra",
    role: "Resilience & Strategy Mentor",
    desc: "Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.",
    tag: "Real-World Focus",
    image:
      "https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg?w=400&h=700&fit=crop&crop=faces",
    color: "#c47d00",
    light: "#fff6e0",
  },
];

const footerNote = {
  title: "Why Students Choose coreBTR Bootcamp",
  intro: "Because they get what they need:",
  bullets: ["The right teacher", "The right system", "The right environment"],
  closing: "And at CoreBTR Bootcamp, they get all three.",
};

function useReveal(ref, visibleClass = "ms-visible", threshold = 0.1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add(visibleClass);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, visibleClass]);
}

export default function MentorSection() {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

  useReveal(headerRef, "ms-visible");
  useReveal(gridRef, "ms-visible", 0.06);
  useReveal(footerRef, "bfc-visible"); // ✅ fixed: adds bfc-visible

  return (
    <>
      <section className="ms-section">
        <div className="ms-container">
          {/* ── Header ── */}
          <div className="ms-header" ref={headerRef}>
            <div className="ms-eyebrow">
              <span className="ms-eyebrow-line" />
              <span className="ms-eyebrow-text">MEET YOUR MENTORS</span>
              <span className="ms-eyebrow-line" />
            </div>
            <h1 className="ms-h1">
              Mentorship That Keeps
              <br />
              You <span className="ms-h1-accent">Steady</span>
            </h1>
            <p className="ms-subhead">
              Guided by Dr. Zainab Vora along with Dr.Ravi Sharma & Dr.Apurv
              Mehra, you stay consistent, focused, and steady through every
              phase.
            </p>
          </div>

          {/* ── Mentor Cards ── */}
          <div className="ms-grid" ref={gridRef}>
            {mentors.map((m, i) => (
              <div
                key={m.id}
                className={`ms-card${active === i ? " ms-card--active" : ""}`}
                style={{
                  "--accent": m.color,
                  "--accent-light": m.light,
                  "--delay": `${i * 0.12}s`,
                }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {/* Image */}
                <div className="ms-img-wrap">
                  <img src={m.image} alt={m.name} className="ms-img" />
                </div>

                {/* Text */}
                <div className="ms-card-body">
                  <div className="ms-card-bar" />
                  <h3 className="ms-card-name">{m.name}</h3>
                  <p className="ms-card-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Note ── */}
      <div className="bfc-footer-note" ref={footerRef}>
        <div className="bfc-footer-inner">
          <div className="bfc-footer-left">
            <div className="bfc-footer-accent" />
            <h3 className="bfc-footer-title">{footerNote.title}</h3>
          </div>
          <div className="bfc-footer-right">
            <p className="bfc-footer-intro">{footerNote.intro}</p>
            <ul className="bfc-footer-bullets">
              {footerNote.bullets.map((b) => (
                <li key={b} className="bfc-footer-bullet">
                  <span className="bfc-bullet-dot" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="bfc-footer-closing">{footerNote.closing}</p>
          </div>
        </div>
      </div>
    </>
  );
}
