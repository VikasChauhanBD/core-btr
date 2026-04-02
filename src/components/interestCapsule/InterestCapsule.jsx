import React from "react";
import { useNavigate } from "react-router-dom";
import "./InterestCapsule.css";

const InterestCapsule = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/interested");
  };

  return (
    <div className="capsule-container" onClick={handleClick}>
      Interested in CoreBTR ?
    </div>
  );
};

export default InterestCapsule;
