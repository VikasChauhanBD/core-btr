import React from "react";
import "./Programs.css";
import { BookOpen, ClipboardList, Activity } from "lucide-react";
import { IoArrowForwardCircle, IoNotificationsOutline } from "react-icons/io5";

const programs = [
  {
    title: "NEET PG Crash Course",
    icon: <Activity size={28} />,
    description:
      "Intensive program designed for last-minute revision with high-yield topics and rapid-fire MCQs.",
    features: ["200+ hours of lectures", "5000+ MCQs", "Live doubt sessions"],
  },
  {
    title: "FMGE Prep Program",
    icon: <BookOpen size={28} />,
    description:
      "Complete preparation across all 19 subjects with strong emphasis on clinical and image-based learning.",
    features: [
      "Full syllabus coverage",
      "Previous year analysis",
      "Mock tests",
    ],
  },
  {
    title: "NExT Ready",
    icon: <ClipboardList size={28} />,
    description:
      "Structured for the upcoming NExT pattern with integrated clinical approach and OSCE training.",
    features: [
      "Clinical case studies",
      "OSCE preparation",
      "Integrated approach",
    ],
  },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <h2>Our Programs</h2>
        <p>
          Choose the program that best fits your exam timeline and preparation
          needs.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card">
            <div className="card-top">
              <div className="icon">{program.icon}</div>
            </div>

            <h3>{program.title}</h3>
            <p className="description">{program.description}</p>

            <ul>
              {program.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="programs-cta">
        <button className="programs-cta-button">
          Explore Now
          <span className="programs-cta-icon">
            <IoArrowForwardCircle size={22} color="#fff" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Programs;
