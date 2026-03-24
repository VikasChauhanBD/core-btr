import React from "react";
import "./BtrWorkBook.css";
import { NavLink } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

function BtrWorkBook() {
  return (
    <div className="workbook-container">
      <div className="wookbook-banner">
        <img
          src="https://cdn.dribbble.com/userupload/47149656/file/7cce222767c7583d4dab09d47fd5a5e1.webp"
          alt="CoreBTR Workbook"
        />
      </div>

      <div className="wookbook-content">
        <h1>Workbooks That Turn Revision Into Revolution</h1>
        <h4>For NEET PG | INI CET | FMGE</h4>
        <p>
          At CoreBTR, the focus is simple - revise what actually matters. These
          workbooks are made to help you stay clear, consistent, exam-ready and
          have been aligned with video content for rapid recall.
          <br />
          Whether you're preparing for NEET PG, INI CET, or FMGE, this system
          helps you cover all 19 subjects in a practical and manageable way.
        </p>
      </div>
    </div>
  );
}

export default BtrWorkBook;
