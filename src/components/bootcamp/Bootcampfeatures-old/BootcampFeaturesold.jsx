// import React from "react";
// import "./BootcampFeatures.css";

// const whatYouGet = [
//   {
//     title: "Mentorship Beyond Classes",
//     body: "Regular strategy sessions with Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra for doubt clearance and mindset building.",
//     image:
//       "https://cdn.dribbble.com/userupload/47131946/file/3407472911a39d6e886b3f41fed1c00f.jpeg",
//   },
//   {
//     title: "Complete Coverage",
//     body: "All 19 Subjects Revised in a Structured Crash Course",
//     image:
//       "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
//   },
//   {
//     title: "Integrated Approach",
//     body: "MCQ Discussion, E&Ds & Mini Tests Designed to StrengthenConcepts + Application",
//     image:
//       "https://cdn.dribbble.com/userupload/47132128/file/7ac090fc0f6779db93246446f87edc37.jpeg",
//   },
//   {
//     title: "Real Exam Simulation",
//     body: "CBT-Based Grand Tests Conducted in an Authentic Exam Environment.",
//     image:
//       "https://cdn.dribbble.com/userupload/47132129/file/78364d434da0ce0859310eb484ea501e.jpeg",
//   },
// ];

// export default function BootcampFeatures() {
//   return (
//     <div className="bootcamp-features-container">
//       <div className="bootcamp-features-sections">
//         <section className="bootcamp-features-what-you-get">
//           <div className="bootcamp-features-eyebrow">
//             <span className="bootcamp-features-eyebrow-line" />
//             <span className="bootcamp-features-eyebrow-text">
//               WHAT'S INSIDE
//             </span>
//           </div>
//           <h2 className="bootcamp-features-section-heading">
//             Why Students Prefer<span> Bootcamp</span>
//           </h2>
//           <p className="bootcamp-features-lead">
//             Everything you need for a complete, structured, high-yield revision
//             - all in one place.
//           </p>

//           <div className="bootcamp-features-get-grid">
//             {whatYouGet.map((item) => (
//               <div
//                 className="bootcamp-features-get-card"
//                 key={item.title}
//                 style={{ backgroundImage: `url(${item.image})` }}
//               >
//                 <div className="bootcamp-features-get-card-overlay" />
//                 <div className="bootcamp-features-get-card-content">
//                   <h3 className="bootcamp-features-get-title">{item.title}</h3>
//                   <p className="bootcamp-features-get-body">{item.body}</p>
//                 </div>
//                 {item.badge && (
//                   <span className="bootcamp-features-get-badge">
//                     {item.badge}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import "./BootcampFeatures.css";

const challenges = [
  {
    number: "01",
    label: "A Focused Learning Environment",
    title: "A Focused Learning Environment",
    body: "Vidya Jeevan offers a calm, disciplined, and inspiring atmosphere where students can step away from distractions and fully immerse themselves in revision. A strong environment creates stronger concentration, better consistency, and more meaningful learning.",
    image:
      "https://cdn.dribbble.com/userupload/47131946/file/3407472911a39d6e886b3f41fed1c00f.jpeg",
  },
  {
    number: "02",
    label: "Nutritious Food and Daily Support",
    title: "Nutritious Food and Daily Support",
    body: "Good preparation also depends on physical well-being. With proper food and a well-managed setup, students are able to stay energised, healthier, and mentally sharper throughout the bootcamp experience.",
    image:
      "https://cdn.dribbble.com/userupload/47132002/file/367c57699e92e2ba8ff6bf24f744f46f.jpeg",
  },
  {
    number: "03",
    label: "Mentorship That Truly Matters",
    title: "Mentorship That Truly Matters",
    body: "Every student needs someone who says, "Tu kar, main hoon tere saath." At CoreBTR Bootcamp, this mentorship is both academic and emotional — designed to guide you, support you, and keep you moving forward even on your toughest days. Dr. Zainab Vora leads the academic journey. Dr. Ravi Sharma brings motivation grounded in real clinical experience. Dr. Apurv Mehra adds a powerful perspective as a surgeon and mentor.",
    image:
      "https://cdn.dribbble.com/userupload/47132128/file/7ac090fc0f6779db93246446f87edc37.jpeg",
  },
  {
    number: "04",
    label: "A Space to Learn, Grow, and Collaborate",
    title: "A Space to Learn, Grow, and Collaborate",
    body: "Preparation can often feel lonely. Vidya Jeevan is designed to change that. It creates a healthy ecosystem where students feel supported, connected, and motivated by being surrounded by others on the same path. If you don't know where to start from, you start from here.",
    image:
      "https://cdn.dribbble.com/userupload/47132129/file/78364d434da0ce0859310eb484ea501e.jpeg",
  },
];

function useIntersection(ref, threshold = 0.18) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("bfc-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

function ChallengeRow({ item, index }) {
  const rowRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  useIntersection(rowRef);

  const isEven = index % 2 === 0;

  return (
    <div
      className={`bfc-row bfc-fade-row ${isEven ? "bfc-row--normal" : "bfc-row--reverse"}`}
      ref={rowRef}
      style={{ "--delay": `${index * 0.08}s` }}
    >
      {/* Image side */}
      <div className="bfc-img-wrap">
        <div
          className="bfc-img"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="bfc-img-overlay" />
          <div className="bfc-img-badge">
            <span className="bfc-badge-num">{item.number}</span>
            <span className="bfc-badge-label">{item.label}</span>
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="bfc-text-wrap">
        <span className="bfc-step-num">{item.number}</span>
        <h3 className="bfc-row-title">{item.title}</h3>
        <p className="bfc-row-body">{item.body}</p>
      </div>
    </div>
  );
}

export default function BootcampFeatures() {
  return (
    <div className="bootcamp-features-container">
      <div className="bootcamp-features-sections">
        <section className="bootcamp-features-what-you-get">
          {/* Header */}
          <div className="bootcamp-features-eyebrow">
            <span className="bootcamp-features-eyebrow-line" />
            <span className="bootcamp-features-eyebrow-text">WHAT'S INSIDE</span>
          </div>
          <h2 className="bootcamp-features-section-heading">
            Why Students Prefer{" "}
            <span>CoreBTR Bootcamp</span>
          </h2>
          <p className="bootcamp-features-lead">
            Preparation is never shaped by study material alone. It is shaped by
            the environment you sit in, the people who guide you, the food you
            eat, the discipline around you, and the emotional support that keeps
            you going on difficult days.
          </p>
          <p className="bootcamp-features-lead" style={{ marginBottom: 0 }}>
            That is what makes the CoreBTR Bootcamp at Vidya Jeevan Experience
            Centre different. Vidya Jeevan is not just a venue. It is an
            ecosystem created from the journey of thousands of students — built
            on the belief that students need more than classes.
          </p>

          {/* Rows */}
          <div className="bfc-challenges-list">
            {challenges.map((item, i) => (
              <ChallengeRow key={item.number} item={item} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}