import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Annotated.css";
// import AnnotatedVolumesIntegrated from "./AnnotatedVolumesIntegrated";

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
    src: "https://cdn.dribbble.com/userupload/47174603/file/b61875e61eebbbde1f903fb08f167471.jpeg",
    alt: "Annotated notes page 9",
  },
];

const integratedImages = [
  {
    src: "https://cdn.dribbble.com/userupload/47185362/file/6a3312aae68d2c2dcd525e60c1b32d67.jpeg",
    alt: "Integrated Systems page 1",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185273/file/51dc110600c9958a5a711dff2135dcf3.jpeg",
    alt: "Integrated Systems page 2",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185361/file/f5f41e88a90a37e0d3f9e11e579d6ffa.jpeg",
    alt: "Integrated Systems page 3",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185364/file/e00ff31385bce0f964e2127c8a247939.jpeg",
    alt: "Integrated Systems page 4",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185365/file/705bc2539b83754e7417944704ba97eb.jpeg",
    alt: "Integrated Systems page 5",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185272/file/b9bcdc84a82636334eef7323e6e64396.jpeg",
    alt: "Integrated Systems page 6",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185363/file/8b94fcd7d6b94f62b4aa28e4ada6a2ad.jpeg",
    alt: "Integrated Systems page 7",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47185274/file/cc8a4c1cde9e2bf2278d1cd32eedd346.jpeg",
    alt: "Integrated Systems page 8",
  },
];

// Split annotatedImages into two halves
const annHalf = Math.ceil(annotatedImages.length / 2);
const annotatedFirstHalf = annotatedImages.slice(0, annHalf);
const annotatedSecondHalf = annotatedImages.slice(annHalf);

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
          aria-label="Previous"
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
          aria-label="Next"
        >
          Next ›
        </button>
      </div>
    </div>
  );
}

function ImageCarouselPopup({ images, startIndex = 0, onClose, title }) {
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
          <span className="ann-popup-title">{title}</span>
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
  const [popupImages, setPopupImages] = useState(annotatedImages);
  const [popupStartIndex, setPopupStartIndex] = useState(0);
  const [popupTitle, setPopupTitle] = useState("Notes Preview");

  // const openPopup = (images, index = 0) => {
  //   setPopupImages(images);
  //   setPopupStartIndex(index);
  //   setShowPopup(true);
  // };

  const openPopup = (images, index = 0, title = "Notes Preview") => {
    setPopupImages(images);
    setPopupStartIndex(index);
    setPopupTitle(title);
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

          {/* <p className="annotated-price">Annotated Notes Price - Rs. 2000/-</p> */}

          {/* Three image columns */}
          <div className="annotated-highlight-grid">
            {/* Book 1 — first half of annotatedImages */}
            <div className="annotated-image-block">
              <div
                className="annotated-highlight-image annotated-highlight-image--clickable"
                onClick={() =>
                  openPopup(annotatedFirstHalf, 0, "Annotated Notes Vol. 1")
                }
              >
                <img
                  src="https://cdn.dribbble.com/userupload/47187682/file/35fd36049bdc1dfe49efe682ccfd99bc.jpeg"
                  alt="coreBTR Annotated Book 1"
                />
                <div className="annotated-image-overlay">
                  <span className="annotated-image-overlay-icon">
                    Preview Sample Pages
                  </span>
                </div>
              </div>
              <button
                className="annotated-preview-cta"
                onClick={() =>
                  openPopup(annotatedFirstHalf, 0, "Annotated Notes Vol. 1")
                }
              >
                Preview Sample Pages
              </button>
            </div>

            {/* Book 2 — second half of annotatedImages */}
            <div className="annotated-image-block">
              <div
                className="annotated-highlight-image annotated-highlight-image--clickable"
                onClick={() =>
                  openPopup(annotatedSecondHalf, 0, "Annotated Notes Vol. 2")
                }
              >
                <img
                  src="https://cdn.dribbble.com/userupload/47187685/file/65b2781218419c3c9ba396d818fe52c7.jpeg"
                  alt="coreBTR Annotated Book 2"
                />
                <div className="annotated-image-overlay">
                  <span className="annotated-image-overlay-icon">
                    Preview Sample Pages
                  </span>
                </div>
              </div>
              <button
                className="annotated-preview-cta"
                onClick={() =>
                  openPopup(annotatedSecondHalf, 0, "Annotated Notes Vol. 2")
                }
              >
                Preview Sample Pages
              </button>
            </div>

            {/* Book 3 — full integratedImages */}
            <div className="annotated-image-block">
              <div
                className="annotated-highlight-image annotated-highlight-image--clickable"
                onClick={() =>
                  openPopup(
                    integratedImages,
                    0,
                    "Annotated Notes Vol. 3 - Integrated Systems",
                  )
                }
              >
                <img
                  src="https://cdn.dribbble.com/userupload/47187683/file/28d3f95c331901fa90fbc544e716c5e5.jpeg"
                  alt="coreBTR Annotated Book 3"
                />
                <div className="annotated-image-overlay">
                  <span className="annotated-image-overlay-icon">
                    Preview Sample Pages
                  </span>
                </div>
              </div>
              <button
                className="annotated-preview-cta"
                onClick={() =>
                  openPopup(
                    integratedImages,
                    0,
                    "Annotated Notes Vol. 3 - Integrated Systems",
                  )
                }
              >
                Preview Sample Pages
              </button>
            </div>
          </div>

          {/* Points card */}
          <div className="annotated-highlight-card annotated-points-card">
            <h3>Why Use These Notes?</h3>
            <ul className="annotated-highlight-list">
              {highlights[0].points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* <AnnotatedVolumesIntegrated
            integratedImages={integratedImages}
            openPopup={openPopup}
          /> */}
        </section>
      </div>

      {showPopup && (
        // <ImageCarouselPopup
        //   images={popupImages}
        //   startIndex={popupStartIndex}
        //   onClose={() => setShowPopup(false)}
        // />
        <ImageCarouselPopup
          images={popupImages}
          startIndex={popupStartIndex}
          title={popupTitle}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Annotated;
