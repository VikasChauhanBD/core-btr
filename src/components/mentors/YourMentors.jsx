import React from "react";
import "./YourMentors.css";
import { NavLink } from "react-router-dom";

function YourMentors() {
  const mentors = [
    {
      name: "Dr. Ravi Sharma",
      image:
        "https://cdn.dribbble.com/userupload/47148400/file/059d9e926eea42733d6020c1abea7cdd.png",
      description:
        "Dr. Ravi Sharma is a Neurosurgeon who brings a calm, experience-driven perspective to medical exam preparation. With a reassuring belief that “tu kar, main hoon tere saath,” his mentorship focuses on discipline, consistency, and mental strength — helping students stay steady through pressure, self-doubt, and long study phases. With a practical and motivating approach, he ensures students remain focused, confident, and exam-ready till the very end.",
    },
    {
      name: "Dr. Apurv Mehra",
      image:
        "https://cdn.dribbble.com/userupload/47148401/file/1007fcbde4afe5e428766c261f30b946.png",
      description:
        "Dr. Apurv Mehra is an Orthopedic Surgeon who brings real-world clinical experience and strong mentorship to NEET PG, INI-CET, and FMGE aspirants. With a strong belief that “teri kismat da likhya tere to koi kho nai sakda, te je us di meher hove te tenu o v mil jae jo tera ho nai sakda,” his guidance focuses on discipline, consistency, and mental strength - helping students stay focused, resilient, and exam-ready throughout their journey.",
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

      <div className="your-mentors-info">
        <div className="dr-zainab-vora">
          <div className="dr-zainab-vora-image">
            <img
              src="https://cdn.dribbble.com/userupload/47148402/file/210d605b7a0fe225a1cd8f1a658ca919.png"
              alt="Dr. Zainab Vora "
            />
          </div>

          <div className="dr-zainab-vora-info">
            <h4>Dr. Zainab Vora</h4>
            <p>
              Dr. Zainab Vora is one of the most trusted and result-oriented
              educators for NEET PG, INI-CET, and FMGE aspirants, known for her
              revolutionary BTR approach that has transformed revision into a
              smarter, faster, and more effective process. An MBBS, MD Radiology
              (Gold Medalist) from AIIMS New Delhi, she secured AIR 1 in AIIMS &
              NIMHANS (2015), reflecting her strong academic foundation. With
              years of teaching experience and deep insight into exam patterns,
              she focuses on high-yield concepts, structured revision systems,
              and simplifying complex subjects into clear, exam-ready
              understanding — all driven by her belief that “kahani tumhari hai…
              ho sake toh kamaal likhna.”
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
    </div>
  );
}

export default YourMentors;
