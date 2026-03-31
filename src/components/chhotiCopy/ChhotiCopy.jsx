import React from "react";
import "./ChhotiCopy.css";

function ChhotiCopy() {
  return (
    <div className="chhoti-container">
      <section className="chhoti-highlights">
        <h2 className="chhoti-section-heading">Chhoti Copy</h2>

        <p className="chhoti-lead">
          Chhoti Copy is your personal space to build high-yield revision notes
          alongside your CoreBTR books. Use it to note down key concepts,
          PYQ-based points, and your own mistakes while studying. Keep it crisp,
          selective, and focused only on what you want to revise before the
          exam. Over time, it becomes your last-day revision weapon - everything
          important, in one place.
        </p>

        <div className="chhoti-image">
          <img
            src="https://cdn.dribbble.com/userupload/47230344/file/cb5f48cb3802c58fed6cf00b2b8db951.jpeg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default ChhotiCopy;
