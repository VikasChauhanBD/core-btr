import React, { useState, useEffect, useCallback } from "react";
import "./Annotated.css";

const annotatedImages = [
  {
    src: "https://cdn.dribbble.com/userupload/47156247/file/05bfc020a8cf2b14a1e68bdc49c966f2.jpeg",
    alt: "Annotated notes page 1",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156251/file/1af82589a6be90957b67c0f05e035f6c.jpeg",
    alt: "Annotated notes page 2",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156254/file/9e8fd49c61c784ea069cee1b74305e57.jpeg",
    alt: "Annotated notes page 3",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156253/file/9c8dd9e86673f47b7d4473fac2b760e4.jpeg",
    alt: "Annotated notes page 4",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156252/file/b630a1b83fce39f4fc14fec76aba4b70.jpeg",
    alt: "Annotated notes page 5",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156250/file/a7cf23c164dbbfa1e4dea6a37158b24a.jpeg",
    alt: "Annotated notes page 6",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156255/file/32d95908c246036714fd23e0e7bd7c8c.jpeg",
    alt: "Annotated notes page 7",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156256/file/def5f194dee2c772eb88bf466d98173e.jpeg",
    alt: "Annotated notes page 8",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156248/file/502861d24758b7a2a133d261431cc3d1.jpeg",
    alt: "Annotated notes page 9",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156249/file/c42588be57777c789c12a182ccf2a1bf.jpeg",
    alt: "Annotated notes page 10",
  },
];

const highlights = [
  {
    points: [
      "Based on PYQs and exam trends",
      "Clear, structured, high-yield notes",
      "Helps revise quickly without overthinking",
      "Can be used alongside videos for better clarity",
    ],
  },
];

function ImageCarouselPopup({ images, startIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(1);

  const goNext = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div className="ann-popup-overlay" onClick={onClose}>
      <div className="ann-popup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ann-popup-header">
          <span className="ann-popup-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="ann-popup-title">Notes Preview</span>
          <button
            className="ann-popup-close-btn"
            onClick={onClose}
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>

        <div className="ann-popup-stage">
          <button
            className="ann-popup-nav ann-popup-nav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="ann-popup-image-wrapper">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="ann-popup-image"
              style={{ transform: `scale(${zoom})` }}
              draggable={false}
            />
          </div>
          <button
            className="ann-popup-nav ann-popup-nav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="ann-popup-footer">
          <div className="ann-popup-zoom-controls">
            <button
              className="ann-zoom-btn"
              onClick={zoomOut}
              aria-label="Zoom out"
              disabled={zoom <= 0.5}
            >
              −
            </button>
            <button className="ann-zoom-reset-btn" onClick={resetZoom}>
              {Math.round(zoom * 100)}%
            </button>
            <button
              className="ann-zoom-btn"
              onClick={zoomIn}
              aria-label="Zoom in"
              disabled={zoom >= 3}
            >
              +
            </button>
          </div>
          <div className="ann-popup-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`ann-popup-dot${i === currentIndex ? " ann-popup-dot--active" : ""}`}
                onClick={() => {
                  setZoom(1);
                  setCurrentIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Annotated() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupStartIndex, setPopupStartIndex] = useState(0);

  const openPopup = (index = 0) => {
    setPopupStartIndex(index);
    setShowPopup(true);
  };

  return (
    <div className="annotated-container">
      <div className="annotated-sections">
        <section className="annotated-highlights">
          <h2 className="annotated-section-heading">
            Annotated <span>Notes</span>
          </h2>
          <h4 className="annotated-section-sub-heading">
            Set of 3 Books | Ready for Revision
          </h4>
          <p className="annotated-lead">
            Created by Dr. Zainab Vora, these books are designed to save time
            and keep you focused on what is truly important.
          </p>
          <div className="annotated-highlight-grid">
            <div
              className="annotated-highlight-image annotated-highlight-image--clickable"
              onClick={() => openPopup(0)}
            >
              <img
                src="https://cdn.dribbble.com/userupload/47150179/file/2797e7c5125ef94e919282423d5bd711.jpg"
                alt="coreBTR Annotated Workbooks"
              />
              <div className="annotated-image-overlay">
                <span className="annotated-image-overlay-icon">
                  Check Sample Pages
                </span>
              </div>
            </div>
            {highlights.map((h, idx) => (
              <div className="annotated-highlight-card" key={idx}>
                <ul className="annotated-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {h.badge && (
                  <span className="annotated-highlight-badge">{h.badge}</span>
                )}
                <button
                  className="annotated-preview-cta"
                  onClick={() => openPopup(0)}
                >
                  Preview Sample Pages
                </button>
              </div>
            ))}
          </div>
          <div className="annotated-volumes">
            <div className="annotated-volumes-card">
              <h3>Volume 1 & 2</h3>
              <ul>
                <li>Covers all subjects (except integrated systems)</li>
                <li>Directly aligned with lecture content</li>
                <li>Acts as your primary revision notes</li>
              </ul>
            </div>
            <hr />
            <div className="annotated-volumes-card">
              <h3>Volume 3 - Integrated Systems</h3>
              <ul>
                <li>
                  Covers Physiology, Pathology, Pharmacology & Medicine
                  (integrated)
                </li>
                <li>More conceptual and comprehensive</li>
                <li>Content is expanded for deeper understanding</li>
                <li>Designed to improve clinical integration and clarity</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {showPopup && (
        <ImageCarouselPopup
          images={annotatedImages}
          startIndex={popupStartIndex}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Annotated;
