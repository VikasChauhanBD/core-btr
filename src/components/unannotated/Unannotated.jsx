import React, { useState, useEffect, useCallback } from "react";
import "./Unannotated.css";

const unannotatedImages = [
  {
    src: "https://cdn.dribbble.com/userupload/47156365/file/dc0cfbcfd5cb46d731a7638e665014f3.jpeg",
    alt: "Unannotated workbook page 1",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156367/file/ab9fbe4b7c588a4b24ec397a51c0ddd6.jpeg",
    alt: "Unannotated workbook page 2",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156370/file/8fa07b793c781b7480e806955d66dcfb.jpeg",
    alt: "Unannotated workbook page 3",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156358/file/953ad100be428496700ac76ec6e85d43.jpeg",
    alt: "Unannotated workbook page 5",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156353/file/b5a4450acfb7fa8ba5f06c444aa6785d.jpeg",
    alt: "Unannotated workbook page 7",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156350/file/695daa8199323e8da7699e0cebc7cf6d.jpeg",
    alt: "Unannotated workbook page 8",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156371/file/e0bb1157e641835ed262ebd45337b31c.jpeg",
    alt: "Unannotated workbook page 9",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156368/file/1d03dea56f358b3914bd7ec80c3b4c2e.jpeg",
    alt: "Unannotated workbook page 10",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156356/file/51a2c773bea43d37e508d845d399dbec.jpeg",
    alt: "Unannotated workbook page 11",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156361/file/a6a4dc10bc1e8a3a9b9a6d9dc54f3976.jpeg",
    alt: "Unannotated workbook page 12",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156362/file/66746e5291b7fc3542fbb025ce2e858f.jpeg",
    alt: "Unannotated workbook page 13",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156354/file/0d199aa3c70e7b3dce1439fbbfe10095.jpeg",
    alt: "Unannotated workbook page 14",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156352/file/9e9c9ff02e784fca271c36d54b45e426.jpeg",
    alt: "Unannotated workbook page 15",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156364/file/56a13a18efdaf755c2d17670e0786cd0.jpeg",
    alt: "Unannotated workbook page 17",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156351/file/a87b234cad2b4c2ee87ecdf4990e7173.jpeg",
    alt: "Unannotated workbook page 19",
  },
  {
    src: "https://cdn.dribbble.com/userupload/47156348/file/e7088b9b8c5253142e9e1267eeb048b0.jpeg",
    alt: "Unannotated workbook page 20",
  },
];

const half = Math.ceil(unannotatedImages.length / 2);
const firstHalfImages = unannotatedImages.slice(0, half);
const secondHalfImages = unannotatedImages.slice(half);

const highlightPoints = [
  "Write while watching videos",
  "Build your own understanding",
  "Stay focused during study time",
  "Improve memory through self-notes",
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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <span className="popup-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="popup-title">Workbook Preview</span>
          <button
            className="popup-close-btn"
            onClick={onClose}
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>

        <div className="popup-stage">
          <button
            className="popup-nav popup-nav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="popup-image-wrapper">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="popup-image"
              style={{ transform: `scale(${zoom})` }}
              draggable={false}
            />
          </div>
          <button
            className="popup-nav popup-nav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="popup-footer">
          <div className="popup-zoom-controls">
            <button
              className="zoom-btn"
              onClick={zoomOut}
              aria-label="Zoom out"
              disabled={zoom <= 0.5}
            >
              −
            </button>
            <button className="zoom-reset-btn" onClick={resetZoom}>
              {Math.round(zoom * 100)}%
            </button>
            <button
              className="zoom-btn"
              onClick={zoomIn}
              aria-label="Zoom in"
              disabled={zoom >= 3}
            >
              +
            </button>
          </div>
          <div className="popup-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`popup-dot${i === currentIndex ? " popup-dot--active" : ""}`}
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

function Unannotated() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [popupStartIndex, setPopupStartIndex] = useState(0);

  const openPopup = (images, index = 0) => {
    setPopupImages(images);
    setPopupStartIndex(index);
    setShowPopup(true);
  };

  return (
    <div className="unannotated-container">
      <div className="unannotated-sections">
        <section className="unannotated-highlights">
          <h2 className="unannotated-section-heading">
            Unannotated <span>Workbooks</span>
          </h2>
          <h4 className="unannotated-section-sub-heading">
            2 Volumes | Make Your Own Notes & Master Active Recall
          </h4>
          <p className="unannotated-lead">
            These workbooks are aligned with CoreBTR lecture videos and are
            built for active learning.
          </p>

          {/* Two image columns — each with CTA below */}
          <div className="unannotated-highlight-grid">
            {/* Volume 1 */}
            <div className="unannotated-image-block">
              <div
                className="unannotated-highlight-image unannotated-highlight-image--clickable"
                onClick={() => openPopup(firstHalfImages, 0)}
              >
                <img
                  src="https://cdn.dribbble.com/userupload/47187681/file/f896a9a524c0637e3a89dbe53750f38b.jpeg"
                  alt="coreBTR Unannotated Workbook Volume 1"
                />
                <div className="unannotated-image-overlay">
                  <span className="unannotated-image-overlay-icon">
                    Preview Sample Pages
                  </span>
                </div>
              </div>
              <button
                className="unannotated-preview-cta"
                onClick={() => openPopup(firstHalfImages, 0)}
              >
                <span className="cta-icon">📖</span>
                Preview Sample Pages
              </button>
            </div>

            {/* Volume 2 */}
            <div className="unannotated-image-block">
              <div
                className="unannotated-highlight-image unannotated-highlight-image--clickable"
                onClick={() => openPopup(secondHalfImages, 0)}
              >
                <img
                  src="https://cdn.dribbble.com/userupload/47187684/file/6d48fefeab3c1eb192009e02b0e313fe.jpeg"
                  alt="coreBTR Unannotated Workbook Volume 2"
                />
                <div className="unannotated-image-overlay">
                  <span className="unannotated-image-overlay-icon">
                    Preview Sample Pages
                  </span>
                </div>
              </div>
              <button
                className="unannotated-preview-cta"
                onClick={() => openPopup(secondHalfImages, 0)}
              >
                <span className="cta-icon">📖</span>
                Preview Sample Pages
              </button>
            </div>
          </div>

          {/* Points card — no CTA */}
          <div className="unannotated-highlight-card unannotated-points-card">
            <h3>Why Use These Workbooks?</h3>
            <ul className="unannotated-highlight-list">
              {highlightPoints.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <p className="unannotated-section-para">
            You can also use them for active recall after watching videos 1-2
            times: Keep the workbook in front of you and try to recall
            everything - speak aloud, teach someone, or revise mentally. These
            books help you move from passive watching to strong retention and
            recall.
          </p>
        </section>
      </div>

      {showPopup && (
        <ImageCarouselPopup
          images={popupImages}
          startIndex={popupStartIndex}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Unannotated;
