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
          src="https://cdn.dribbble.com/userupload/47317390/file/large-567afd63b9e1ddf5898a4b464cde6a98.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
