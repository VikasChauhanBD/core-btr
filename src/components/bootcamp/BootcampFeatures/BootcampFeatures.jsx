import React, { useEffect, useRef, useState } from "react";
import "./BootcampFeatures.css";

/* ── Inline bold for doctor names ── */
function BoldDoctors({ text }) {
  const doctors = ["Dr. Zainab Vora", "Dr. Apurv Mehra", "Dr. Ravi Sharma"];
  const pattern = new RegExp(`(${doctors.join("|")})`, "gi");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        doctors.some((d) => d.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className="bfc-doctor-name">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

const challenges = [
  {
    number: "01",
    title: "A System That Keeps You on Track",
    body: "Even the best teaching needs the right structure to deliver results. That's where the bootcamp system supports you.",
    mentors: null,
    bullets: null,
    image:
      "https://cdn.dribbble.com/userupload/47178227/file/1e94455eecbce68acfd6f35cc154b362.jpg",
  },
  {
    number: "02",
    title: "An Environment Built for Focus",
    body: "At the Vidya Jeevan Experience Centre, everything is designed to help you stay distraction-free, consistent, and fully focused on your goal.",
    mentors: null,
    bullets: null,
    image:
      "https://cdn.dribbble.com/userupload/47138862/file/92bdb222e6fe2257afb9d7f6165f9b11.webp",
  },
  {
    number: "03",
    title: "Structured, Disciplined Preparation",
    body: "A clear plan, regular testing, and continuous feedback—so you always know where you stand and what to improve.",
    mentors: null,
    bullets: null,
    image:
      "https://cdn.dribbble.com/userupload/47178228/file/e1c7ff641f9c14e673d2ac4662ab7e95.jpg",
  },
  // {
  //   number: "04",
  //   title: "Mentorship That Keeps You Steady",
  //   body: "Alongside Dr. Zainab Vora, you're guided by mentors who help you stay consistent through every phase of preparation. Because preparation isn't just academic—it's mental.",
  //   mentors: [
  //     {
  //       name: "Dr. Ravi Sharma",
  //       desc: "Bringing calm, discipline, and mental strength",
  //     },
  //     {
  //       name: "Dr. Apurv Mehra",
  //       desc: "Guiding with resilience, focus, and real-world perspective",
  //     },
  //   ],
  //   bullets: null,
  //   image:
  //     "https://cdn.dribbble.com/userupload/47131946/file/3407472911a39d6e886b3f41fed1c00f.jpeg",
  // },
];

const footerNote = {
  title: "Why Students Choose coreBTR Bootcamp",
  intro: "Because they get what they need:",
  bullets: ["The right teacher", "The right system", "The right environment"],
  closing: "And at CoreBTR Bootcamp, they get all three.",
};

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("bfc-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function BootcampFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const footerRef = useRef(null);

  useReveal(headerRef);
  useReveal(panelRef);
  useReveal(footerRef);

  function handleSelect(i) {
    if (i === activeIndex) return;
    setFadeKey((k) => k + 1);
    setActiveIndex(i);
  }

  // Auto-shuffle — slow: 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeKey((k) => k + 1);
      setActiveIndex((prev) => (prev + 1) % challenges.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = challenges[activeIndex];

  return (
    <div className="bootcamp-features-container">
      <section className="bootcamp-features-sections">
        <div className="bootcamp-features-what-you-get">
          {/* ── Header ── */}
          <div className="bfc-header" ref={headerRef}>
            <div className="bootcamp-features-eyebrow">
              <span className="bootcamp-features-eyebrow-line" />
              <span className="bootcamp-features-eyebrow-text">
                WHAT'S INSIDE
              </span>
            </div>
            <h2 className="bootcamp-features-section-heading">
              Why Students Prefer Core<span>BTR</span> Bootcamp
            </h2>
            <p className="bootcamp-features-lead">
              Great preparation is built on both the right learning and the
              right environment.{" "}
              <b>
                At coreBTR Bootcamp, structured teaching goes hand in hand with
                discipline, guidance, and a system designed to keep you
                consistent.
              </b>{" "}
              That's what makes the experience at Vidya Jeevan Experience Centre
              different—<b>it's not just a venue</b> but{" "}
              <b>
                a thoughtfully built ecosystem shaped by the journeys of
                thousands of students.
              </b>
            </p>
          </div>

          {/* ── Split Panel ── */}
          <div className="bfc-split-panel" ref={panelRef}>
            {/* LEFT — Pointer list */}
            <div className="bfc-pointers">
              {challenges.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={item.number}
                    className={`bfc-pointer-item${isActive ? " bfc-pointer-active" : ""}`}
                    onClick={() => handleSelect(i)}
                    aria-label={`View ${item.title}`}
                  >
                    <div className="bfc-pointer-chip">
                      <span className="bfc-pointer-num">{item.number}</span>
                    </div>

                    <div className="bfc-pointer-content">
                      <div className="bfc-pointer-title-row">
                        <h3 className="bfc-pointer-title">{item.title}</h3>
                        <span
                          className={`bfc-pointer-arrow${isActive ? " bfc-arrow-active" : ""}`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5 10h10M11 6l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <p className="bfc-pointer-body">
                        <BoldDoctors text={item.body} />
                      </p>

                      {/* Mentor bullet points for card 04 */}
                      {item.mentors && (
                        <div className="bfc-mentor-list">
                          {item.mentors.map((m) => (
                            <div key={m.name} className="bfc-mentor-card">
                              <div className="bfc-mentor-icon">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <circle
                                    cx="8"
                                    cy="5"
                                    r="3"
                                    stroke="#1767be"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5"
                                    stroke="#1767be"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </div>
                              <div>
                                <span className="bfc-mentor-name">
                                  {m.name}
                                </span>
                                <span className="bfc-mentor-desc">
                                  {" "}
                                  — {m.desc}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT — Wider fading image */}
            <div className="bfc-image-panel">
              <div className="bfc-image-inner" key={fadeKey}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="bfc-fade-img"
                />
                <div className="bfc-image-overlay" />
                <div className="bfc-image-badge">
                  <span className="bfc-badge-num">{active.number}</span>
                  <span className="bfc-badge-label">{active.title}</span>
                </div>
              </div>

              <div className="bfc-dots">
                {challenges.map((_, i) => (
                  <button
                    key={i}
                    className={`bfc-dot${i === activeIndex ? " bfc-dot-active" : ""}`}
                    onClick={() => handleSelect(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
