import React from "react";
import "./Bootcamp.css";
import { NavLink } from "react-router-dom";
import BootcampHero from "./hero-section/BootcampHero";
import BootcampFeatures from "./Bootcampfeatures/BootcampFeatures";
import BootcampIntro from "./BootcampIntro/BootcampIntro";


const highlights = [
  {
    title: "Program Highlights",
    points: [
      "Duration: 4 Months",
      "Mode: Intensive Personalised Offline Program",
      "Target Exams: NEET PG & INI-CET 2026",
      "Subject-wise tests with detailed discussions",
      "Mock Grand Tests (CBT-based)",
      "Mini tests with explanations",
    ],
    badge: "New Batch Started From 18th Jan 2026",
  },
];

const features = [
  {
    icon: "👨‍⚕️",
    label: "Expert Mentorship",
    points: [
      "Mentorship sessions by Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra.",
    ],
  },
  {
    icon: "📚",
    label: "Subject-wise Revision",
    points: ["Dedicated revision classes covering all 19 subjects."],
  },
  {
    icon: "🏛️",
    label: "Library & Self-Study",
    points: ["Dedicated library cubicles for focused self-study sessions."],
  },
  {
    icon: "💻",
    label: "Personal Desktop",
    points: [
      "Personal desktop with internet access strictly for academic use.",
    ],
  },
  {
    icon: "🎯",
    label: "Borderline Student Focus",
    points: [
      "Special attention given to borderline students who need guided, targeted improvement.",
    ],
  },
];

const whatYouGet = [
  {
    icon: "📝",
    title: "Regular Assessments",
    body: "Subject-wise tests, mini tests, and CBT-based Mock Grand Tests to track your progress continuously.",
  },
  {
    icon: "🔬",
    title: "Structured Revision",
    body: "Systematic subject-by-subject revision ensuring no topic is left behind before exam day.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    body: "Detailed discussion sessions after every test to analyse mistakes and reinforce concepts.",
  },
  {
    icon: "🧭",
    title: "Personal Guidance",
    body: "One-on-one mentorship sessions with faculty to set goals and overcome individual weak areas.",
  },
  {
    icon: "🖥️",
    title: "Academic Resources",
    body: "Library cubicles and personal desktops for distraction-free, internet-enabled academic study.",
  },
  {
    icon: "🏆",
    title: "Exam Readiness",
    body: "Comprehensive crash program designed to convert hard work into rank for NEET PG & INI-CET 2026.",
  },
];

const additionalInfo = [
  "The Bootcamp is built for serious aspirants who want focused revision, expert mentorship, and real exam readiness all under one roof.",
  "This program goes beyond routine classes — combining structured subject-wise revision, regular assessments, and close faculty guidance to help you convert hard work into rank.",
  "Limited seats available per batch to ensure personalised attention for every student.",
];

function Bootcamp() {
  return (
    <div className="bootcamp-container">
      <BootcampHero />
      {/* <div className="bootcamp-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46428531/file/ec15c4c33447539de5d8ff7c659bea8d.png"
          alt="NEET PG BootCamp 2026 by Dr. Zainab Vora"
        />
      </div> */}
      

      <div className="bootcamp-content">
        <h1>NEET PG Bootcamp 2026</h1>
        <h3>
          An Intensive, Personalised Offline Crash Course for NEET PG &amp;
          INI-CET Aspirants
        </h3>
        <p>
          The <b>NEET PG Bootcamp</b> is a{" "}
          <b>4-month, high-intensity offline crash program</b> designed for
          students who want focused revision, expert mentorship, and real exam
          readiness under one roof. With mentorship from{" "}
          <b>Dr. Zainab Vora, Dr. Ravi Sharma, and Dr. Apurv Mehra,</b> the
          Bootcamp is built for serious aspirants targeting{" "}
          <b>NEET PG &amp; INI-CET 2026.</b>
        </p>
      </div>

      <div className="bootcamp-sections">
        <section className="bootcamp-highlights">
          <div className="bootcamp-eyebrow">
            <span className="bootcamp-eyebrow-line" />
            <span className="bootcamp-eyebrow-text">Overview</span>
          </div>
          <h2 className="bootcamp-section-heading">
            Program <em>Highlights</em>
          </h2>
          <p className="bootcamp-lead">
            A structured, intensive offline program designed to give NEET PG
            &amp; INI-CET aspirants the revision, testing, and mentorship they
            need to crack the exam.
          </p>

          <div className="bootcamp-highlight-grid">
            <div className="bootcamp-highlight-image">
              <img
                src="https://cdn.dribbble.com/userupload/46394035/file/bd0a89a0a1b12002437146371728adee.webp"
                alt="NEET PG BootCamp Class 2026"
              />
            </div>

            {highlights.map((h) => (
              <div className="bootcamp-highlight-card" key={h.title}>
                <h3>{h.title}</h3>
                <ul className="bootcamp-highlight-list">
                  {h.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {h.badge && (
                  <span className="bootcamp-highlight-badge">{h.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>
        

        
      </div>
      <BootcampFeatures  />
    </div>
  );
}

export default Bootcamp;
