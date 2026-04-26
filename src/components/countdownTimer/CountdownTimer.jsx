import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const targetDate = new Date("April 30, 2026 23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return { expired: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) {
    return <div className="expired">Offer Expired</div>;
  }

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Limited Time Offer</h2>

      <div className="countdown-timer">
        {["days", "hours", "minutes", "seconds"].map((unit, i) => (
          <div
            key={i}
            className={`countdown-time-box ${unit === "seconds" ? "pulse" : ""}`}
          >
            <span>{timeLeft[unit]}</span>
            <p>{unit}</p>
          </div>
        ))}
      </div>

      <p className="countdown-subtext">
        Offer ends on April 30<sup>th</sup> at 11:59 PM
      </p>
    </div>
  );
};

export default CountdownTimer;
