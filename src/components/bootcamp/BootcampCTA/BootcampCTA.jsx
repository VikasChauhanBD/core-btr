import React from "react";
import "./BootcampCTA.css";
import { NavLink } from "react-router-dom";

function BootcampCTA() {
  return (
    <div className="bootcamp-cta-container">
      <section className="bootcamp-cta-info">
        <div className="bootcamp-cta-info-label">Join the Bootcamp</div>

        <p className="bootcamp-cta-info-CTA">
          If you’re ready to stop feeling lost and start seeing progress - this
          is where it begins.
        </p>

        <p className="bootcamp-cta-info-CTA">
          Start Your Transformation with CoreBTR Bootcamp
        </p>

        <NavLink to="#">Join the Bootcamp</NavLink>
      </section>
    </div>
  );
}

export default BootcampCTA;
