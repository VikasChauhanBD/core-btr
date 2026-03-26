import React from "react";
import "./UseWorkbook.css";

function UseWorkbook() {
  return (
    <div className="use-workbook-container">
      <div className="use-workbook-sections">
        <section className="use-workbook-highlights">
          <h2 className="use-workbook-section-heading">
            How to Use Core<span>BTR</span> Books
          </h2>
          <h4 className="use-workbook-section-sub-heading">
            Simple, Structured, Effective
          </h4>
          <p>
            <b>1. Start with Annotated Books</b>
          </p>
          <h6>
            Keep them open while watching videos Focus on understanding, not
            writing everything Add only extra points if needed.
          </h6>
          <p>
            <b>2. Revise from Annotated Books</b>
          </p>
          <h6>
            Re-read after the video Focus on high-yield and PYQ-based content.
          </h6>
          <p>
            <b>3. Active Recall with Unannotated Workbooks</b>
          </p>
          <h6>
            Use after 1-2 video views Try to recall everything from memory
            Speak, teach, or revise mentally.
          </h6>
          <p>
            <b>4. Repeat for Retention</b>
          </p>
          <h6>Revisit topics regularly Use workbooks again for recall.</h6>
          <p>
            <b>5. Use Volume 3 (Integrated) for Concepts</b>
          </p>
          <h6>
            Focus on understanding and subject integration Take more time for
            clarity.
          </h6>
        </section>
      </div>
    </div>
  );
}

export default UseWorkbook;
