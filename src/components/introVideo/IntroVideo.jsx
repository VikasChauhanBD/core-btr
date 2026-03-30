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
          src="https://cdn.dribbble.com/userupload/47132304/file/large-fa9460e6f9bc26cfcf2490ffffa144d5.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
