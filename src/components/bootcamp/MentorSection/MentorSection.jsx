import React, { useEffect, useRef, useState } from "react";
import "./MentorSection.css";

const mentors = [
  {
    id: 1,
    name: "Dr. Zainab Vora",
    role: "Lead Academic Mentor",
    desc: "Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed..",
    tag: "Academic Lead",
    image: "https://cdn.dribbble.com/userupload/47178187/file/97918da2ccaa81da8481b22b60b4d074.jpg?w=400&h=500&fit=crop&crop=faces",
    color: "#1767be",
    light: "#e8f0fb",
  },
  {
    id: 2,
    name: "Dr. Ravi Sharma",
    role: "Mental Strength Coach",
    desc: "Bringing calm, discipline, and mental strength to keep you grounded under pressure.",
    tag: "Mindset & Discipline",
    image: "https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg?w=400&h=500&fit=crop&crop=faces",
    color: "#1d204b",
    light: "#eeeffe",
  },
  {
    id: 3,
    name: "Dr. Apurv Mehra",
    role: "Resilience & Strategy Mentor",
    desc: "Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.",
    tag: "Real-World Focus",
    image: "https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg?w=400&h=700&fit=crop&crop=faces",
    color: "#c47d00",
    light: "#fff6e0",
  },
];

function useReveal(ref, threshold = 0.1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("ms-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function MentorSection() {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const noteRef   = useRef(null);

  useReveal(headerRef);
  useReveal(gridRef, 0.06);
  useReveal(noteRef, 0.1);

  return (
    <section className="ms-section">
      {/* subtle bg pattern */}
      <div className="ms-bg-pattern" />

      <div className="ms-container">

        {/* ── Header ── */}
        <div className="ms-header" ref={headerRef}>
          <div className="ms-eyebrow">
            <span className="ms-eyebrow-line" />
            <span className="ms-eyebrow-text">MEET YOUR MENTORS</span>
            <span className="ms-eyebrow-line" />
          </div>
          <h1 className="ms-h1">
            Mentorship That Keeps<br />
            You <span className="ms-h1-accent">Steady</span>
          </h1>
          <p className="ms-subhead">
            Guided by Dr. Zainab Vora along with Dr.Ravi Sharma & Dr.Apurv Mehra, you stay consistent, focused, and steady through every phase.
          </p>
        </div>

        {/* ── Mentor Cards ── */}
        <div className="ms-grid" ref={gridRef}>
          {mentors.map((m, i) => (
            <div
              key={m.id}
              className={`ms-card${active === i ? " ms-card--active" : ""}`}
              style={{ "--accent": m.color, "--accent-light": m.light, "--delay": `${i * 0.12}s` }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {/* Image */}
              <div className="ms-img-wrap">
                <img src={m.image} alt={m.name} className="ms-img" />
                {/* <div className="ms-img-overlay" /> */}
                {/* Tag badge */}
                {/* <span className="ms-tag">{m.tag}</span> */}
              </div>

              {/* Text */}
              <div className="ms-card-body">
                <div className="ms-card-bar" />
                <h3 className="ms-card-name">{m.name}</h3>
                {/* <p className="ms-card-role">{m.role}</p> */}
                <p className="ms-card-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        {/* <div className="ms-note" ref={noteRef}>
          <div className="ms-note-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#feb122"/>
            </svg>
          </div>
          <p className="ms-note-text">
            Because preparation isn't just academic—<strong>it's mental.</strong>{" "}
            Our mentors are here to make sure you never feel alone in your journey.
          </p>
        </div> */}

      </div>
    </section>
  );
}