import React from "react";
import "./StudentReviews.css";

// ── Data ────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Ava Martinez",
    role: "Travel Ready Graduate",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
  {
    name: "Noah Kim",
    role: "International Student Graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
  {
    name: "Ethan Wake",
    role: "Career Booster Graduate",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "NEET PG Aspirant",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    role: "INI-CET Graduate",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
  {
    name: "Sara Lopes",
    role: "BTR Online Graduate",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    stars: 5,
  },
];

// Marquee items — doubled for seamless loop
const marqueeItems = [
  "Ranked AIR 12 — NEET PG 2025",
  "Cleared INI-CET in first attempt",
  "AIR 45 — NEET PG 2024",
  "From borderline to top 100",
  "Cleared FMGE with 90+ score",
  "4-month transformation — AIR 8",
  "BTR method changed everything",
  "Scored 680+ in NEET PG 2025",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function StarRating({ count = 5 }) {
  return (
    <div className="review-card-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

function StudentReviews() {
  // Double the marquee items for seamless infinite scroll
  const allMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="reviews-page">
      {/* ── Hero Header ── */}
      <header className="reviews-hero">
        <div className="reviews-hero-bg-quote" aria-hidden="true">
          "
        </div>

        <div className="reviews-eyebrow">
          <span>Student Stories</span>
        </div>

        <h1>
          Real Results.
          <br />
          <em>Real Voices.</em>
        </h1>

        <p className="reviews-hero-sub">
          Thousands of NEET PG, INI-CET & FMGE aspirants have transformed their
          preparation with BTR. Here is what they have to say.
        </p>

        {/* Stats */}
        <div className="reviews-stats">
          <div className="reviews-stat">
            <span className="reviews-stat-num">10,000+</span>
            <span className="reviews-stat-label">Students</span>
          </div>
          <div className="reviews-stat">
            <span className="reviews-stat-num">4.9★</span>
            <span className="reviews-stat-label">Avg Rating</span>
          </div>
          <div className="reviews-stat">
            <span className="reviews-stat-num">95%</span>
            <span className="reviews-stat-label">Recommend</span>
          </div>
        </div>
      </header>

      {/* ── Marquee Strip ── */}
      <div className="reviews-marquee-wrap" aria-hidden="true">
        <div className="reviews-marquee-track">
          {allMarqueeItems.map((item, i) => (
            <div className="reviews-marquee-item" key={i}>
              <span className="reviews-marquee-stars">★★★★★</span>
              {item}
              <span className="dot">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Review Cards Grid ── */}
      <section className="reviews-grid-section">
        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <div
              className={`review-card${i === 0 ? " review-card--featured" : ""}`}
              key={i}
            >
              {/* Decorative quote mark */}
              <span className="review-card-quote-mark" aria-hidden="true">
                "
              </span>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Text */}
              <p className="review-card-text">"{t.text}"</p>

              {/* Divider */}
              <div className="review-card-divider" />

              {/* Author */}
              <div className="review-card-author">
                <img
                  src={t.image}
                  alt={t.name}
                  className="review-card-avatar"
                />
                <div className="review-card-author-info">
                  <span className="review-card-name">{t.name}</span>
                  <span className="review-card-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="reviews-cta">
        <p>
          Ready to write your own <em>success story?</em>
        </p>
        <a href="#" className="reviews-cta-btn">
          Start Your Smart Revision
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default StudentReviews;
