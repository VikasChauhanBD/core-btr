import React from "react";
import "./Workbook.css";
import { NavLink } from "react-router-dom";
import AnnotatedWorkbook from "../../assets/images/annotated-workbook.webp";
import UnannotatedWorkbook from "../../assets/images/unannotated-workbook.webp";

function Workbook() {
  return (
    <div className="workbook-container">
      <div className="workbook-cards">
        <NavLink to="/unannotated" className="workbook-card">
          <div className="workbook-image">
            <img src={UnannotatedWorkbook} alt="Unannotated Workbook" />
          </div>
          <h2>BTR Unannotated Workbook</h2>
          <p>
            Unlock your potential with the BTR Unannotated Workbook,
            meticulously designed to help you excel in your medical exams.
            Whether you’re preparing for NEET PG, INI-CET, FMGE this workbook is
            your ultimate study companion.
          </p>
        </NavLink>

        <NavLink to="/annotated" className="workbook-card">
          <div className="workbook-image">
            <img src={AnnotatedWorkbook} alt="Annotated Workbook" />
          </div>
          <h2>BTR Annotated Workbook</h2>
          <p>
            Many of you expressed the need for a resource that saves time in
            annotation while complementing the traditional BTR unannotated
            workbook. We believe this will enhance your learning experience by
            allowing you to use both workbooks together effectively.
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Workbook;
