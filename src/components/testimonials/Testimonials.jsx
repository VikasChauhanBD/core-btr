import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ava Martinez",
    role: "Travel Ready graduate",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
  {
    name: "Noah Kim",
    role: "International Student graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
  {
    name: "Ethan Wake",
    role: "Career Booster graduate",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
  {
    name: "Ava Martinez",
    role: "Travel Ready graduate",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
  {
    name: "Noah Kim",
    role: "International Student graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
  {
    name: "Ethan Wake",
    role: "Career Booster graduate",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    if (index < testimonials.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="testimonials-container">
      <h2>Hear from our path graduates</h2>

      <div className="testimonials-slider-wrapper">
        <div
          className="testimonials-slider"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((item, i) => {
            const isTop = i % 2 === 0;

            return (
              <div className="testimonial-card" key={i}>
                {isTop && (
                  <div className="testimonials-user-info top">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                )}

                <p className="testimonial-text">{item.text}</p>

                {!isTop && (
                  <div className="testimonials-user-info bottom">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="testimonials-navigation">
        <button className="testimonials-nav-btn" onClick={prevSlide}>
          ←
        </button>
        <div className="testimonials-line"></div>
        <button className="testimonials-nav-btn" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
