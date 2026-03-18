import React from "react";
import "./BtrWorkBook.css";
import { NavLink } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

function BtrWorkBook() {
  return (
    <div className="workbook-container">
      <h2>BTR Workbooks – Your Revision Companions</h2>
      <div className="workbook-cards">
        <div className="workbook-card">
          <div>
            <h3>BTR Annotated Workbook</h3>
            <p>
              A time-saving, pre-annotated version was created based on student
              feedback. Helps reduce annotation effort and allows faster
              revision, while perfectly complementing the unannotated workbook
              for effective last-minute preparation.
            </p>
          </div>

          <div>
            <NavLink to="/annotated" className="workbook-cta">
              <button className="workbook-cta-button">
                Know More
                <span className="workbook-cta-icon">
                  <IoArrowForwardCircle size={22} color="#fff" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>

        <div className="workbook-card">
          <div>
            {" "}
            <h3>BTR Unannotated Workbook</h3>
            <p>
              A flexible workbook designed for self-made notes and active
              revision. Ideal for NEET PG and INI-CET aspirants who want to
              write, customise, and revise high-yield points in their own way
              during the final phase.
            </p>
          </div>

          <div>
            <NavLink to="/unannotated" className="workbook-cta">
              <button className="workbook-cta-button">
                Know More
                <span className="workbook-cta-icon">
                  <IoArrowForwardCircle size={22} color="#fff" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtrWorkBook;
