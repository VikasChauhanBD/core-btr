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
          src="https://cdn.dribbble.com/userupload/47132304/file/large-15c0ba706567e42cb157d2501ccef0ec.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
