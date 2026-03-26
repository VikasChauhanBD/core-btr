import React from "react";
import "./BtrWorkBook.css";
import { NavLink } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

function BtrWorkBook() {
  return (
    <div className="workbook-container">
      <div className="wookbook-banner">
        <img
          src="https://cdn.dribbble.com/userupload/47149656/file/8ab86e5cfb50e5d05217e320b1c814a0.jpeg"
          alt="CoreBTR Workbook by Dr. Zainab Vora"
        />
      </div>

      <div className="wookbook-content">
        <h1>Books That Turn Revision Into Revolution</h1>
        <h4>For NEET PG | INI CET | FMGE</h4>
        <p>
          At CoreBTR, the focus is simple - revise what actually matters. This
          5-book system is designed to help you stay clear, consistent, and
          exam-ready while covering all 19 subjects in a practical and
          manageable way.
        </p>
        <h4 className="wookbook-content-last">What You Get</h4>
      </div>
    </div>
  );
}

export default BtrWorkBook;
