import { useState, useRef, useEffect } from "react";
import "./Reviews.css";
import { testimonialsData } from "../../assets/data/testimonials";

const INITIAL_ROWS = 4;
const COLS = 4;
const LOAD_MORE_ROWS = 4;

const StarRating = () => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="star">
        ★
      </span>
    ))}
  </div>
);

function ReviewCard({ t, index }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [t.feedback]);

  const handleToggle = () => {
    if (!expanded && wrapperRef.current) {
      setCollapsedHeight(wrapperRef.current.offsetHeight);
    } else {
      setCollapsedHeight(null);
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div
      ref={wrapperRef}
      className={`review-card-wrapper${expanded ? " review-card-wrapper--expanded" : ""}`}
      style={
        expanded && collapsedHeight ? { height: collapsedHeight } : undefined
      }
    >
      <div
        className={`review-card${expanded ? " expanded" : ""}`}
        style={{
          animationDelay: `${(index % (COLS * LOAD_MORE_ROWS)) * 60}ms`,
        }}
      >
        <div className="card-top">
          <StarRating />
        </div>
        <div className="card-feedback-wrapper">
          <blockquote
            ref={textRef}
            className={`card-feedback${expanded ? " card-feedback--expanded" : ""}`}
          >
            "{t.feedback}"
          </blockquote>
          {isClamped && (
            <button
              className="read-more-btn"
              onClick={handleToggle}
              aria-expanded={expanded}
            >
              {expanded ? "Show less ▲" : "Read more ▼"}
            </button>
          )}
        </div>
        <div className="card-author">
          <img className="author-avatar" src={t.image} alt={t.name} />
          <div>{t.initials}</div>
          <div className="author-name">{t.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ROWS * COLS);
  const [hasLoadedMore, setHasLoadedMore] = useState(false); // ← NEW
  const visibleTestimonials = testimonialsData.slice(0, visibleCount);
  const hasMore = visibleCount < testimonialsData.length;

  const handleLoadMore = () => {
    setHasLoadedMore(true); // ← NEW
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_ROWS * COLS, testimonialsData.length),
    );
  };

  const handleCollapseBack = () => {
    // ← NEW
    setVisibleCount(INITIAL_ROWS * COLS);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-grid">
        {visibleTestimonials.map((t, i) => (
          <ReviewCard key={i} t={t} index={i} />
        ))}
      </div>
      <div className="cta-wrapper">
        {hasMore && (
          <button className="cta-btn" onClick={handleLoadMore}>
            <span>Read More Stories</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        )}
        {hasLoadedMore && ( // ← NEW: only visible after first "Read More" click
          <button
            className="cta-btn cta-btn--collapse"
            onClick={handleCollapseBack}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
