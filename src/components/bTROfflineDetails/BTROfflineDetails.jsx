import React from "react";
import "./BTROfflineDetails.css";

const features = [
  { text: "3-day face-to-face Crash Course with Dr. Zainab" },
  { text: "Complimentary workbook for Recall drilling" },
  { text: "High-yield, exam-centric Topics only" },
  { text: "Conducted in multiple cities" },
  { text: "Doubt-clearing + confidence Boosting sessions" },
];

const cities = [
  {
    name: "Mumbai",
    date: "14th - 16th June",
    image:
      "https://cdn.dribbble.com/userupload/47138861/file/8a947e3dc3cd919549cf7ae50378f167.jpg",
  },
  {
    name: "Rajkot",
    date: "28th - 30th June",
    highlight: true,
    image:
      "https://cdn.dribbble.com/userupload/47138863/file/6f65331c71b26b1d0aa46bca4673d329.jpg",
  },
  {
    name: "Chennai",
    date: "10th - 12th July",
    image:
      "https://cdn.dribbble.com/userupload/47138865/file/c6355e85ea8e38f3b879170fcacadc9a.jpg",
  },
  {
    name: "Kolkata",
    date: "22nd - 24th July",
    image:
      "https://cdn.dribbble.com/userupload/47138962/file/7c7f8acf0503ee7cd8cdedde6ef9061c.jpg",
  },
  {
    name: "Hyderabad",
    date: "2nd - 4th August",
    image:
      "https://cdn.dribbble.com/userupload/47138864/file/ca63000f77fa3d05469dec2109801326.jpg",
  },
  {
    name: "Delhi",
    date: "12th - 14th August",
    image:
      "https://cdn.dribbble.com/userupload/47138862/file/92bdb222e6fe2257afb9d7f6165f9b11.webp",
  },
];

export default function BTROfflineDetails() {
  return (
    <div className="offline-details-container">
      <div className="offline-details-wrapper">
        <div className="offline-details-header">
          <h2 className="offline-details-subtitle">
            BTR NEET PG Offline Cities &amp; Schedule 2026
          </h2>
          <div className="offline-details-tagline">
            <h4>Best for Students close to the exam who need a final push</h4>
          </div>
        </div>

        <div className="offline-details-features">
          {features.map((f, i) => (
            <div className="offline-details-feature-item" key={i}>
              <span className="offline-details-feature-icon">▶</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>

        <div className="offline-details-cities-section">
          <h3 className="offline-details-cities-title">
            Upcoming BTR NEET PG Offline Cities and Schedule
          </h3>
          <div className="offline-details-cities-grid">
            {cities.map((city, i) => (
              <div className="offline-details-city-card" key={i}>
                <div
                  className={`offline-details-city-circle ${city.highlight ? "highlight" : ""}`}
                >
                  <img
                    className="offline-details-city-image"
                    src={city.image}
                    alt={city.name}
                  />
                </div>
                <p className="offline-details-city-name">{city.name}</p>
                <span className="offline-details-city-date">{city.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
