import React from "react";
import "./YourMentors.css";
import { NavLink } from "react-router-dom";

function YourMentors() {
  const mentors = [
    {
      name: "Dr. Ravi Sharma",
      image:
        "https://cdn.dribbble.com/userupload/47148400/file/bb5cdf9860f2800b182af7e16169dd6c.jpg",
      description:
        "A dedicated mentor who guides students on how to approach their preparation journey with clarity and focus. His constant support and strategic direction help students stay confident, disciplined, and motivated.",
    },
    {
      name: "Dr. Apurv Mehra",
      image:
        "https://cdn.dribbble.com/userupload/47148401/file/123e4d490b998148e7ac3095d5336c47.jpg",
      description:
        "An inspiring mentor who motivates students to grow not only as skilled professionals but also as compassionate human beings. His wisdom encourages confidence, purpose, and lifelong growth.",
    },
  ];

  return (
    <div className="your-mentors-container">
      <div className="your-mentors-content">
        <h2>
          <span>Your Transformation Starts Here with Core</span>BTR
        </h2>
        <h4>and the guidance of those who’ve been in your place.</h4>
        <h3>Meet Your Mentors</h3>
      </div>

      <div className="dr-zainab-vora">
        <div className="dr-zainab-vora-image">
          <img
            src="https://cdn.dribbble.com/userupload/47148402/file/c843d28ece4dd9328214dbc6ebb0dda2.jpg"
            alt="Dr. Zainab Vora "
          />
        </div>

        <div className="dr-zainab-vora-info">
          <h4>Dr. Zainab Vora</h4>
          <p>
            Renowned for her exceptional clarity and structured approach, she
            simplifies complex subjects into practical, retainable concepts. Her
            guidance builds strong fundamentals and confident clinical thinking.
          </p>
        </div>
      </div>

      <div className="your-mentors-cards">
        {mentors.map((mentor, index) => (
          <div key={index} className="your-mentors-card">
            <img src={mentor.image} alt={mentor.name} />
            <h4>{mentor.name}</h4>
            <p>{mentor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourMentors;
