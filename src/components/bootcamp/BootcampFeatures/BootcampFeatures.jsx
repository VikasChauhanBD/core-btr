import React, { useEffect, useRef } from "react";
import "./BootcampFeatures.css";

const challenges = [
  {
    number: "01",
    title: "A Focused Learning Environment",
    body: "Vidya Jeevan offers a calm, disciplined, and inspiring atmosphere where students can step away from distractions and fully immerse themselves in revision. A strong environment creates stronger concentration, better consistency, and more meaningful learning.",
    image: "https://cdn.dribbble.com/userupload/47154439/file/0d2dfdac79b0e128968c4fbd8118c239.jpg",
  },
  {
    number: "02",
    title: "Nutritious Food and Daily Support",
    body: "Good preparation also depends on physical well-being. With proper food and a well-managed setup, students are able to stay energised, healthier, and mentally sharper throughout the bootcamp experience.",
    image: "https://cdn.dribbble.com/userupload/47154493/file/657574912c59fe06d6b24787383536f6.jpg",
  },
  {
    number: "03",
    title: "Mentorship That Truly Matters",
    body: "Every student needs someone who says “Tu kar, main hoon tere saath”. At CoreBTR Bootcamp, mentorship is both academic and emotional. Dr. Zainab Vora leads the academic journey with her proven revision system, teaching you exactly what to study, how to study, and how to think in the exam. Her focus is always on clarity, retention, and exam-oriented preparation. Dr. Ravi Sharma brings motivation grounded in real clinical experience — helping you stay strong, disciplined, and confident when preparation feels overwhelming. Dr. Apurv Mehra adds a powerful perspective as a surgeon and mentor — guiding you with practical wisdom, mindset, and the discipline required to succeed in this journey. Together, this mentorship ensures that you are not just preparing - you are supported, guided, and constantly reminded that you are not alone in this.",
    image: "https://cdn.dribbble.com/userupload/47154438/file/1403841f3d745bd51cba0486f721fad9.jpg",
  },
  {
    number: "04",
    title: "A Space to Learn, Grow, and Collaborate",
    body: "Preparation can often feel lonely. Vidya Jeevan is designed to change that. It creates a healthy ecosystem where students feel supported, connected, and motivated by being surrounded by others on the same path. If you don't know where to start from, you start from here.",
    image: "https://cdn.dribbble.com/userupload/47154578/file/a07ac4a09c73c81d76513a76bd1180a3.png",
  },
];

function useReveal(ref) {
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          el.classList.add("bfc-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return function () { observer.disconnect(); };
  }, [ref]);
}

function ChallengeRow(props) {
  var item = props.item;
  var index = props.index;
  var rowRef = useRef(null);
  useReveal(rowRef);
  var isEven = index % 2 === 0;

  return (
    <div
      className={"bfc-row " + (isEven ? "bfc-row--img-left" : "bfc-row--img-right")}
      ref={rowRef}
      style={{ "--delay": (index * 0.13) + "s" }}
    >
      <div className="bfc-img-col">
        <div className="bfc-img-frame">
          <img src={item.image} alt={item.title} className="bfc-img-el" />
          <div className="bfc-img-overlay" />
          <div className="bfc-img-chip">
            <span className="bfc-chip-num">{item.number}</span>
          </div>
        </div>
      </div>

      <div className="bfc-text-col">
        <div className="bfc-text-inner">
          {/* <span className="bfc-step-tag">{item.number}</span> */}
          <h3 className="bfc-row-title">{item.title}</h3>
          <div className="bfc-title-bar" />
          <p className="bfc-row-body">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function BootcampFeatures() {
  return (
    <div className="bootcamp-features-container">
      <section className="bootcamp-features-sections">
        <div className="bootcamp-features-what-you-get">

          <div className="bfc-header">
            <div className="bootcamp-features-eyebrow">
              <span className="bootcamp-features-eyebrow-line" />
              <span className="bootcamp-features-eyebrow-text">WHAT'S INSIDE</span>
            </div>
            <h2 className="bootcamp-features-section-heading">
              Why Students Prefer <span>CoreBTR Bootcamp</span>
            </h2>
            <p className="bootcamp-features-lead">
              <b>Preparation is never shaped by study material alone.</b> It is shaped by the environment you sit in, the people who guide you, the food you eat,
              the discipline around you, and the emotional support that keeps you going
              on difficult days. That is what makes the<b> CoreBTR Bootcamp</b> at <b>Vidya Jeevan Experience Centre</b> 
              different. Vidya Jeevan is not just a venue. It is an ecosystem created
              from the <b>journey of thousands of students, built on the belief that
              students need more than classes.</b>
            </p>
            
          </div>

          <div className="bfc-list">
            {challenges.map(function (item, i) {
              return <ChallengeRow key={item.number} item={item} index={i} />;
            })}
          </div>

        </div>
      </section>
    </div>
  );
}