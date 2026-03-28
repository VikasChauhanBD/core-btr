import React, { useRef } from "react";
import "./StudentReviews.css";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Reviews from "../reviews/Reviews";

const HERO_BG =
  "https://cdn.dribbble.com/userupload/46355808/file/f2274fc9ca13235e117b03ebf82f2320.jpg";

function ReviewCard({ t }) {
  return (
    <div className="review-card">
      <span className="review-card-quote-mark" aria-hidden="true">
        <FaQuoteRight />
      </span>
      <div className="review-card-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="review-card-text">"{t.feedback}"</p>
      <div className="review-card-divider" />
      <div className="review-card-author">
        <img src={t.image} alt={t.name} className="review-card-avatar" />
        <div className="review-card-author-info">
          <span className="review-card-name">{t.name}</span>
        </div>
      </div>
    </div>
  );
}

function StudentReviews() {
  const rowRef = useRef(null);

  const SCROLL_AMOUNT = 500;

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div className="student-student-reviews-page">
      <header className="student-reviews-hero">
        <div
          className="student-reviews-hero-bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden="true"
        />

        <div className="student-reviews-hero-overlay" aria-hidden="true" />

        <div className="student-reviews-hero-content">
          <div className="student-reviews-eyebrow">
            <span>Student Stories</span>
          </div>

          <h1>Real Results. Real Voices</h1>

          <p className="student-reviews-hero-sub">
            Thousands of NEET PG, INI-CET &amp; FMGE aspirants have transformed
            their preparation with BTR. Here is what they have to say.
          </p>
        </div>
      </header>

      <Reviews />
    </div>
  );
}

export default StudentReviews;
