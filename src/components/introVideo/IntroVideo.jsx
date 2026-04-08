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
          src="https://cdn.dribbble.com/userupload/47317390/file/a03d164a0b109ccb719ca1304b882663.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
