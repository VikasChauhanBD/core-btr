import React from "react";
import "./IntroVideo.css";

function IntroVideo({ onEnd }) {
  return (
    <div className="intro-video-container">
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onEnd}
      >
        <source
          src="https://res.cloudinary.com/dyih24tl8/video/upload/v1774413369/core_BTR_Logo_4K_ycmqjy.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
