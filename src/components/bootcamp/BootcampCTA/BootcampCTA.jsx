import React from "react";
import "./BootcampCTA.css";
import { NavLink } from "react-router-dom";

function BootcampCTA() {
  return (
    <div className="our-CTA-container">
      <section className="our-CTA-info">
        <div className="our-CTA-info-label">Join the Bootcamp</div>

        <p className="our-CTA-info-CTA">
          If you’re ready to stop feeling lost and start seeing progress—this is where it begins.
        </p>

        

        <p className="our-CTA-info-CTA">
          Start Your Transformation with CoreBTR Bootcamp
          
          
        </p>

        <NavLink to="#">Join the Bootcamp</NavLink>
      </section>
    </div>
  );
}

export default BootcampCTA;
