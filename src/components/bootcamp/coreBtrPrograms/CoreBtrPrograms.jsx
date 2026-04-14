import React from "react";
import "./CoreBtrPrograms.css";
import { NavLink } from "react-router-dom";

function CoreBtrPrograms() {
  return (
    <>
      <div className="corebtr-programs-container">
        <div className="corebtr-programs-header">
          <h2>
            Core<span>BTR</span> NEET PG T&D Bootcamp at Vidya Jeevan
          </h2>
          <h3>Starts From 28th May till 30th Aug 2026</h3>
          <h3> 3 Months offline Test & Discussion Program </h3>
          <p className="corebtr-programs-lead">
            An intensive, high-impact offline program for serious
            <b>
              {" "}
              NEET PG Aspirants.
              <br /> Designed for focused learning,
            </b>{" "}
            disciplined preparation, and a completely distraction-free
            environment.
          </p>
        </div>

        <div className="corebtr-programs-grid">
          {/* Program 1 - Right Side */}
          <div className="corebtr-program-card program1">
            <h3 className="corebtr-program-title">Program 1</h3>
            <p className="corebtr-program-subtitle">
              Live Classes + Personal Cubicle with Desktop for CBT / self study
            </p>

            <ul className="corebtr-features-list">
              <li>
                Subject wise computer based test followed by live discussion
              </li>
              <li>Grand Tests (every 15 days) followed by live discussion</li>
              <li>Weekly doubt solving sessions</li>
              <li>Daily Mini Tests on CBT Desktop</li>
              <li>Personal Desktop access for self study</li>
            </ul>

            <div className="corebtr-fees">
              <div className="corebtr-fees-label">
                Fees: <span className="corebtr-fees-amount">Rs 37,000</span>
              </div>
            </div>

            {/* <NavLink to="#" className="corebtr-enroll-btn">
            Registration Starts on Monday, 13 April at 12 PM
          </NavLink> */}

            {/* <NavLink
            to="https://portal.corebtr.com/login"
            className="corebtr-enroll-btn"
          >
            Register now
          </NavLink> */}

            <NavLink to="#" className="corebtr-enroll-btn">
              Registration Closed
            </NavLink>
          </div>

          {/* Program 2 - Left Side */}
          <div className="corebtr-program-card program2">
            <h3 className="corebtr-program-title">Program 2</h3>
            <p className="corebtr-program-subtitle">
              Relay Classes + Personal Cubicle for self study (No desktop)
            </p>

            <ul className="corebtr-features-list">
              <li>
                Subject wise computer based test on Desktop followed by
                discussion through relay
              </li>
              <li>GT (every 15 days) followed by discussion through relay</li>
              <li>Weekly doubt solving sessions through relay</li>
              <li>Daily Mini Tests on own device</li>
              <li>
                Personal cubicle space for self study <b>(No desktop)</b>
              </li>
            </ul>

            <div className="corebtr-fees">
              <div className="corebtr-fees-label">
                Fees: <span className="corebtr-fees-amount">Rs 32,000</span>
              </div>
            </div>

            {/* <NavLink to="#" className="corebtr-enroll-btn">
            Registration Starts on Monday, 13 April at 12 PM
          </NavLink> */}

            {/* <NavLink
            to="https://portal.corebtr.com/login"
            className="corebtr-enroll-btn"
          >
            Register now
          </NavLink> */}

            <NavLink to="#" className="corebtr-enroll-btn">
              Registration Closed
            </NavLink>
          </div>
        </div>

        <div className="corebtr-registration-box">
          <h3>Registrations will be on First come-first serve basis</h3>
          <div className="corebtr-registration-time">
            Registration may close anytime without prior notice <br />
            No refund / No transfer after registration
          </div>
        </div>
      </div>

      <div className="corebtr-registration-box-imp">
        <h3>Important Notice</h3>
        <ul className="corebtr-features-list-imp">
          <li>
            Seats cannot be cancelled or transferred to anyone, including
            friends.
          </li>
          <li>Seats cannot be shifted to any online plans.</li>
          <li>
            Registrations made using someone else’s account will not be
            accepted.
          </li>
          <li>Registration will be accepted only your own account and name</li>
        </ul>
      </div>

      <div className="corebtr-programs-schedule">
        <h2>
          Core<span>BTR</span> NEET PG T&D Bootcamp Schedule
        </h2>
        <NavLink
          to="/neetpg-bootcamp-schedule"
          className="corebtr-programs-schedule-btn"
        >
          Check Schedule
        </NavLink>
      </div>
    </>
  );
}

export default CoreBtrPrograms;
