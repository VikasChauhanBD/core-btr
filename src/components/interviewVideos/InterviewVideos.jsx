import { useState, useEffect } from "react";
import "./InterviewVideos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { div } from "framer-motion/client";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151749/file/42b71fce06159b036858fe679a9f9f13.jpg",
    alt: "Dr. Sairam Baramkula: INICET Rank- 1",
    url: "https://www.youtube.com/embed/CLJTtT20BlA",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151744/file/e8c0647c5d916577a86835d613511f57.jpg",
    alt: "Dr. Harshit: INICET Rank- 5",
    url: "https://www.youtube.com/embed/TFC6gFFyA9k",
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151753/file/a7b527a4d1bd2ff422ec0d727f5fa7c1.jpg",
    alt: "Dr. Prajwal Borde: NEET PG Rank- 44",
    url: "https://www.youtube.com/embed/c-7KaaCW2Kw",
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151746/file/921df818ba8b7b9783361fc7bd31085d.jpg",
    alt: "AIR 21 Dr. Manav Bansal & AIR 73 Dr. Shiwani Bansal",
    url: "https://www.youtube.com/embed/x4dNpOOmD08",
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151747/file/f17399fc7cad69404b07bee05ebf2419.jpg",
    alt: "Dr. Jasnoot: INICET Rank- 75",
    url: "https://www.youtube.com/embed/F4J4VnSh224",
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151752/file/d359c1953a082e18d2326aa733e709b2.jpg",
    alt: "Dr. Raj Sparsh: NEET PG Rank- 107",
    url: "https://www.youtube.com/embed/C6djshZhQNs",
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151750/file/294eb0d0ea0269c2704882dde6ff9744.jpg",
    alt: "Dr. Tejan Sood: NEET PG Rank- 108",
    url: "https://www.youtube.com/embed/TU0SjOPbjME",
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151745/file/7319f6586aec9b0817c19cb35f97d138.jpg",
    alt: "Dr. Amalya Verma: INICET Rank- 111",
    url: "https://www.youtube.com/embed/M5fPuzEeXmw",
  },
  {
    id: 9,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151743/file/e504d0e016c974b96c7249a9a376efc8.jpg",
    alt: "Dr. Chhaya: INICET Rank- 142",
    url: "https://www.youtube.com/embed/dMHh9NzXfvg",
  },
  {
    id: 10,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151748/file/231c3eebcdddd21ebcd740733a569f53.jpg",
    alt: "Dr. Raushni: INICET Rank- 149",
    url: "https://www.youtube.com/embed/uEtv-X0ntoE",
  },
  {
    id: 11,
    thumbnail:
      "https://cdn.dribbble.com/userupload/47151751/file/d44439afce4d3f8076923af6ee0859bc.jpg",
    alt: "Dr. Harsha Gupta: NEET PG Rank- 161",
    url: "https://www.youtube.com/embed/lhsnmiQ70aA",
  },
];

function InterviewVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="interview-videos-container">
      <h2>INI CET | NEET PG 2025 Interviews</h2>
      <div className="interview-videos-cards" data-aos="fade-up">
        {videosData.map((video) => (
          <div
            key={video.id}
            className="interview-videos-card"
            onClick={() =>
              setActiveVideo(activeVideo === video.id ? null : video.id)
            }
          >
            {activeVideo === video.id ? (
              <iframe
                src={`${video.url}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
                title={`Video ${video.id}`}
              ></iframe>
            ) : (
              <>
                <img src={video.thumbnail} alt={video.alt} />
                <div className="interview-videos-play-icon">
                  <FaPlayCircle />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewVideos;
