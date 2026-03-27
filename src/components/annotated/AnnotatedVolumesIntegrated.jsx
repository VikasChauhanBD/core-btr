import React, { useState, useEffect } from "react";
import "./AnnotatedVolumesIntegrated.css";

/* ---------- Hook ---------- */

function useVisibleCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 568) return 1;
    if (window.innerWidth <= 868) return 2;
    return 3;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return count;
}

/* ---------- Carousel ---------- */

function IntegratedCarousel({ images, onImageClick }) {
  const [index, setIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = images.length - visibleCount;

  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, images.length - visibleCount)));
  }, [visibleCount, images.length]);

  const translateX = -(index * (100 / visibleCount));

  return (
    <div>
      <div className="annotated-integrated-carousel">
        <div
          className="annotated-integrated-carousel-track"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="annotated-integrated-carousel-slide">
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => onImageClick(i)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="annotated-carousel-controls">
        <button
          className="annotated-carousel-btn"
          onClick={goPrev}
          disabled={index === 0}
        >
          ‹ Prev
        </button>

        <span className="annotated-carousel-counter">
          {index + 1} – {Math.min(index + visibleCount, images.length)} /{" "}
          {images.length}
        </span>

        <button
          className="annotated-carousel-btn"
          onClick={goNext}
          disabled={index >= maxIndex}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */

function AnnotatedVolumesIntegrated({ integratedImages, openPopup }) {
  return (
    <>
      {/* Integrated System Section */}

      <div className="annotated-integrated-system">
        <h2>
          Annotated Notes Vol. 3 - Integrated Systems Preview Sample Pages
        </h2>

        <IntegratedCarousel
          images={integratedImages}
          onImageClick={(i) => openPopup(integratedImages, i)}
        />
      </div>

      {/* Volumes Section */}

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
              Covers Physiology, Pathology, Pharmacology & Medicine (integrated)
            </li>

            <li>More conceptual and comprehensive</li>

            <li>Content is expanded for deeper understanding</li>

            <li>Designed to improve clinical integration and clarity</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AnnotatedVolumesIntegrated;
