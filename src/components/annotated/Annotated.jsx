import React, { useState, useEffect, useCallback } from "react";
import "./Annotated.css";

const annotatedImages = [
  {
    src: "https://cdn.dribbble.com/userupload/47174610/file/dbd381bef0f2e6b3ce55391e9793601d.jpeg",
    alt: "Annotated notes page 1",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174606/file/7bb8d23795dfb9d5ea000633f15e3d45.jpeg",
    alt: "Annotated notes page 2",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174607/file/4ce9e2dfa0e0eaae11e1a8538dd2a7e2.jpeg",
    alt: "Annotated notes page 3",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174608/file/198884ca481a557256df5210784b2dab.jpeg",
    alt: "Annotated notes page 4",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174609/file/7eecf6e1013e0f1ac275e2fe4c1111dc.jpeg",
    alt: "Annotated notes page 5",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174605/file/e3325d6ce6bf5b8262a7b6b816de11f7.jpeg",
    alt: "Annotated notes page 6",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174602/file/824fb661fdec6ee326cb09880e813838.jpeg",
    alt: "Annotated notes page 7",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174604/file/7319d23d30d3cfb96455d34b96f135a5.jpeg",
    alt: "Annotated notes page 8",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47174603/file/b61875e61eebbbde1f903fb08f167471.jpeg",
    alt: "Annotated notes page 9",
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
