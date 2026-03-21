// import React from "react";
// import "./StudentReviews.css";
// import { FaQuoteRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
// import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
// import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
// import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
// import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
// import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
// import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
// import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
// import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
// import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
// import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
// import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
// import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
// import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
// import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
// import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
// import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
// import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
// import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";
// import DrGarimaSharma from "../../assets/studentsImages/dr-garima-sharma.jpg";

// const testimonials = [
//   {
//     feedback:
//       "This rank wouldn't have been possible without BTR and Dr. Zainab Vora ma'am. Dr. Zainab Vora ma'am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
//     name: "Dr. Akshitha thatikonda",
//     image: DrAkshithaThatikonda,
//   },
//   {
//     feedback:
//       "Best concise notes of BTR and Dr. Zainab Vora ma'am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
//     name: "Dr. Tanisha Gupta",
//     image: DrTanishaGupta,
//   },
//   {
//     feedback:
//       "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. i am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
//     name: "Dr. kritika aggarwal",
//     image: DrkritikaAggarwal,
//   },
//   {
//     feedback:
//       "BTR really helped me stay consistent and built a mind map. Also Dr. Zainab Vora ma'am TnDs were really helpful.",
//     name: "Dr. Aravind Krishnan",
//     image: DrAravindKrishnan,
//   },
//   {
//     feedback:
//       "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma'am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
//     name: "Dr. Prakruti Bhat",
//     image: DrPrakrutiBhat,
//   },
//   {
//     feedback:
//       "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules.",
//     name: "Dr. Shravya",
//     image: DrShravya,
//   },
//   {
//     feedback:
//       "Loved every bit of BTR Super helpful and enough for preparation.",
//     name: "Dr. Arshiya Garg",
//     image: DrArshiyaGarg,
//   },
//   {
//     feedback:
//       "I was an online BTR subscriber and honestly, Dr. Zainab Vora mam's TnD was a complete game changer for me. The way she guided us, I actually learned how to master MCQ solving. And the effort she puts into her compiled modules, going that extra mile every single time—it really made a huge difference in my prep. Forever grateful ❤️.",
//     name: "Dr. Ifrah Ansari",
//     image: DrIfrahAnsari,
//   },
//   {
//     feedback:
//       "It was great experience, I had taken BTR ONLINE , truly a great learning experience especially, Dr. Zainab Vora ma'am She is just amazing and a great mentor truly Looking forward to meet her atleast once in my lifetime.",
//     name: "Dr. Vinoot Kalasappagol",
//     image: DrVinootKalasappagol,
//   },
//   {
//     feedback:
//       "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible.",
//     name: "Dr. Aparna Warrier",
//     image: DrAparnaWarrier,
//   },
//   {
//     feedback: "Very good platform. Hat's off to Dr. Zainab Vora ma'am.",
//     name: "Dr. Yogitha Poojari",
//     image: DrYogithaPoojari,
//   },
//   {
//     feedback:
//       "I would reccommend BTR to anyone starting their pg prep because I could not have done this without ma'am.",
//     name: "Dr. Alphonsa Mary Mathew",
//     image: DrAlphonsaMaryMathew,
//   },
//   {
//     feedback: "BTR is a full package and it was very helpful.",
//     name: "Dr. Faizan Aftab Wani",
//     image: DrFaizanAftabWani,
//   },
//   {
//     feedback:
//       "BTR is the most important and helpful source in my entire exam preparation.",
//     name: "Dr. Sakshita Pal",
//     image: DrSakshitaPal,
//   },
//   {
//     feedback:
//       "I am deeply indebted to Dr. Zainab Vora ma'am for BTR as well as her overall guidance.",
//     name: "Dr. Aveek Chakraborty",
//     image: DrAveekChakraborty,
//   },
//   {
//     feedback:
//       "I have been a BTR Online Student for 1 year. My entire preparation has been anchored in place by the 2 BTR books and Dr. Zainab Vora ma'am has been an everlasting beacon of light that has guided me through difficult times. I highly recommend following her BTR EnD Cycles and follow her plan exactly how she says.",
//     name: "Dr. Avneesh Madan",
//     image: DrAvneeshMadan,
//   },
//   {
//     feedback:
//       "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time i had , i had to choose my resource wisely to get max output. All of this was possible because of BTR which i gave my heart n soul to master as Dr. Zainab Vora ma'am always said. Her teaching, her advices is something i followed religiously. She is the biggest blessing for neet pg aspirants like us. Thankyou so much ma'am.",
//     name: "Dr. Devanshi Pundeer",
//     image: DrDevanshiPundeer,
//   },
//   {
//     feedback:
//       "BTR was a game changer for me. Dr. Zainab Vora ma'am is a true inspiration. Please give me a chance to thanks her.",
//     name: "Dr. Garima Sharma",
//     image: DrGarimaSharma,
//   },
//   {
//     feedback:
//       "From someone who didnt know how to start the preparation, I came here with blank slate. With no first reading , no rapid revisions nothing. Fresh out of college after internship. I learned what to study and most importantly what not to study. The atmosphere here is welcoming, comforting and also competitive. You come here with empty hands and go back with so much other than the contents of BTR. Dr. Zainab Vora ma'am you will always be mentioned in my every success story speech. Thank you.",
//     name: "Dr. Sneha Rani",
//     image: DrSnehaRani,
//   },
//   {
//     feedback:
//       "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable. The atmosphere is filled with such positive energy—it's genuinely uplifting. I appreciated how the entire team went above and beyond to make everyone feel comfortable and supported throughout the journey. I honestly can't think of a single thing to criticize. Thank you Dr. Zainab Vora ma'am.",
//     name: "Dr. Shruti Rawat",
//     image: DrShrutiRawat,
//   },
// ];

// function StarRating({ count = 5 }) {
//   return (
//     <div className="review-card-stars">
//       {Array.from({ length: count }).map((_, i) => (
//         <span key={i}>★</span>
//       ))}
//     </div>
//   );
// }

// function ReviewCard({ t }) {
//   return (
//     <div className="review-card">
//       <span className="review-card-quote-mark" aria-hidden="true">
//         <FaQuoteRight />
//       </span>
//       <StarRating count={t.stars} />
//       <p className="review-card-text">"{t.feedback}"</p>
//       <div className="review-card-divider" />
//       <div className="review-card-author">
//         <img src={t.image} alt={t.name} className="review-card-avatar" />
//         <div className="review-card-author-info">
//           <span className="review-card-name">{t.name}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StudentReviews() {
//   const row1 = [...testimonials, ...testimonials];
//   // const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()];

//   return (
//     <div className="reviews-page">
//       <header className="reviews-hero">
//         <div className="reviews-hero-bg-quote" aria-hidden="true">
//           <FaQuoteRight />
//         </div>

//         <div className="reviews-eyebrow">
//           <span>Student Stories</span>
//         </div>

//         <h1>
//           Real Results.
//           <br />
//           <em>Real Voices.</em>
//         </h1>

//         <p className="reviews-hero-sub">
//           Thousands of NEET PG, INI-CET & FMGE aspirants have transformed their
//           preparation with BTR. Here is what they have to say.
//         </p>

//         <div className="reviews-stats">
//           <div className="reviews-stat">
//             <span className="reviews-stat-num">115,221+</span>
//             <span className="reviews-stat-label">Students</span>
//           </div>
//           <div className="reviews-stat">
//             <span className="reviews-stat-num">4.9★</span>
//             <span className="reviews-stat-label">Avg Rating</span>
//           </div>
//           <div className="reviews-stat">
//             <span className="reviews-stat-num">95%</span>
//             <span className="reviews-stat-label">Recommend</span>
//           </div>
//         </div>
//       </header>

//       <div className="reviews-scroll-section">
//         <div className="reviews-scroll-row reviews-scroll-row--ltr">
//           {row1.map((t, i) => (
//             <ReviewCard key={`r1-${i}`} t={t} />
//           ))}
//         </div>

//         {/* <div className="reviews-scroll-row reviews-scroll-row--rtl">
//           {row2.map((t, i) => (
//             <ReviewCard key={`r2-${i}`} t={t} />
//           ))}
//         </div> */}
//       </div>

//       <div className="reviews-cta">
//         <NavLink to="#" className="reviews-cta-btn">
//           Start Your Smart Revision
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="5" y1="12" x2="19" y2="12" />
//             <polyline points="12 5 19 12 12 19" />
//           </svg>
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default StudentReviews;

import React, { useRef } from "react";
import "./StudentReviews.css";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";
import DrGarimaSharma from "../../assets/studentsImages/dr-garima-sharma.jpg";

const HERO_BG =
  "https://cdn.dribbble.com/userupload/46355808/file/f2274fc9ca13235e117b03ebf82f2320.jpg";
// ↑ Replace with your actual hosted URL:
// "https://yourcdn.com/f2274fc9ca13235e117b03ebf82f2320.jpg"

const testimonials = [
  {
    feedback:
      "This rank wouldn't have been possible without BTR and Dr. Zainab Vora ma'am. Dr. Zainab Vora ma'am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
    name: "Dr. Akshitha Thatikonda",
    image: DrAkshithaThatikonda,
  },
  {
    feedback:
      "Best concise notes of BTR and Dr. Zainab Vora ma'am. Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor, guide, my constant inspiration.",
    name: "Dr. Tanisha Gupta",
    image: DrTanishaGupta,
  },
  {
    feedback:
      "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. I am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
    name: "Dr. Kritika Aggarwal",
    image: DrkritikaAggarwal,
  },
  {
    feedback:
      "BTR really helped me stay consistent and built a mind map. Also Dr. Zainab Vora ma'am TnDs were really helpful.",
    name: "Dr. Aravind Krishnan",
    image: DrAravindKrishnan,
  },
  {
    feedback:
      "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma'am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
    name: "Dr. Prakruti Bhat",
    image: DrPrakrutiBhat,
  },
  {
    feedback:
      "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules.",
    name: "Dr. Shravya",
    image: DrShravya,
  },
  {
    feedback: "Loved every bit of BTR. Super helpful and enough for preparation.",
    name: "Dr. Arshiya Garg",
    image: DrArshiyaGarg,
  },
  {
    feedback:
      "I was an online BTR subscriber and honestly, Dr. Zainab Vora mam's TnD was a complete game changer for me. The way she guided us, I actually learned how to master MCQ solving. And the effort she puts into her compiled modules, going that extra mile every single time—it really made a huge difference in my prep. Forever grateful ❤️.",
    name: "Dr. Ifrah Ansari",
    image: DrIfrahAnsari,
  },
  {
    feedback:
      "It was a great experience. I had taken BTR ONLINE — truly a great learning experience especially Dr. Zainab Vora ma'am. She is just amazing and a great mentor. Looking forward to meet her at least once in my lifetime.",
    name: "Dr. Vinoot Kalasappagol",
    image: DrVinootKalasappagol,
  },
  {
    feedback:
      "I studied for NEET PG right after my internship got over, just for 3 months and honestly without BTR and Dr. Zainab Vora ma'am, nothing would have been possible.",
    name: "Dr. Aparna Warrier",
    image: DrAparnaWarrier,
  },
  {
    feedback: "Very good platform. Hat's off to Dr. Zainab Vora ma'am.",
    name: "Dr. Yogitha Poojari",
    image: DrYogithaPoojari,
  },
  {
    feedback:
      "I would recommend BTR to anyone starting their PG prep because I could not have done this without ma'am.",
    name: "Dr. Alphonsa Mary Mathew",
    image: DrAlphonsaMaryMathew,
  },
  {
    feedback: "BTR is a full package and it was very helpful.",
    name: "Dr. Faizan Aftab Wani",
    image: DrFaizanAftabWani,
  },
  {
    feedback:
      "BTR is the most important and helpful source in my entire exam preparation.",
    name: "Dr. Sakshita Pal",
    image: DrSakshitaPal,
  },
  {
    feedback:
      "I am deeply indebted to Dr. Zainab Vora ma'am for BTR as well as her overall guidance.",
    name: "Dr. Aveek Chakraborty",
    image: DrAveekChakraborty,
  },
  {
    feedback:
      "I have been a BTR Online Student for 1 year. My entire preparation has been anchored in place by the 2 BTR books and Dr. Zainab Vora ma'am has been an everlasting beacon of light. I highly recommend following her BTR EnD Cycles and follow her plan exactly how she says.",
    name: "Dr. Avneesh Madan",
    image: DrAvneeshMadan,
  },
  {
    feedback:
      "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time I had, I had to choose my resource wisely to get max output. Her teaching, her advices is something I followed religiously. She is the biggest blessing for NEET PG aspirants like us.",
    name: "Dr. Devanshi Pundeer",
    image: DrDevanshiPundeer,
  },
  {
    feedback:
      "BTR was a game changer for me. Dr. Zainab Vora ma'am is a true inspiration. Please give me a chance to thank her.",
    name: "Dr. Garima Sharma",
    image: DrGarimaSharma,
  },
  {
    feedback:
      "From someone who didn't know how to start the preparation, I came here with a blank slate. I learned what to study and most importantly what not to study. The atmosphere here is welcoming, comforting and also competitive. Dr. Zainab Vora ma'am you will always be mentioned in my every success story speech.",
    name: "Dr. Sneha Rani",
    image: DrSnehaRani,
  },
  {
    feedback:
      "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable.",
    name: "Dr. Shruti Rawat",
    image: DrShrutiRawat,
  },
];

/* ── Card ── */
function ReviewCard({ t }) {
  return (
    <div className="review-card">
      <span className="review-card-quote-mark" aria-hidden="true">
        <FaQuoteRight />
      </span>
      <div className="review-card-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="review-card-text">"{t.feedback}"</p>
      <div className="review-card-divider" />
      <div className="review-card-author">
        <img src={t.image} alt={t.name} className="review-card-avatar" />
        <div className="review-card-author-info">
          <span className="review-card-name">{t.name}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */
function StudentReviews() {
  const rowRef = useRef(null);

  const SCROLL_AMOUNT = 500; // px per arrow click

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div className="reviews-page">

      {/* ══════════════════════════════════════════
          HERO  —  full-bleed background image
      ══════════════════════════════════════════ */}
      <header className="reviews-hero">
        {/* bg image layer */}
        <div
          className="reviews-hero-bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden="true"
        />
        {/* dark overlay */}
        <div className="reviews-hero-overlay" aria-hidden="true" />

        {/* content */}
        <div className="reviews-hero-content">
          <div className="reviews-eyebrow">
            <span>Student Stories</span>
          </div>

          <h1>
            Real Results.
            <br />
            <em>Real Voices.</em>
          </h1>

          <p className="reviews-hero-sub">
            Thousands of NEET PG, INI-CET &amp; FMGE aspirants have transformed
            their preparation with BTR. Here is what they have to say.
          </p>

          <div className="reviews-stats">
            <div className="reviews-stat">
              <span className="reviews-stat-num">115,221+</span>
              <span className="reviews-stat-label">Students</span>
            </div>
            {/* <div className="reviews-stat">
              <span className="reviews-stat-num">4.9★</span>
              <span className="reviews-stat-label">Avg Rating</span>
            </div>
            <div className="reviews-stat">
              <span className="reviews-stat-num">95%</span>
              <span className="reviews-stat-label">Recommend</span>
            </div> */}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          CAROUSEL  —  static + arrow scroll
      ══════════════════════════════════════════ */}
      <div className="reviews-scroll-section">

        {/* Arrow buttons */}
        <button
          className="reviews-arrow reviews-arrow--left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>

        <button
          className="reviews-arrow reviews-arrow--right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>

        {/* Static scrollable row (no animation) */}
        <div className="reviews-scroll-row" ref={rowRef}>
          {testimonials.map((t, i) => (
            <ReviewCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="reviews-cta">
        <NavLink to="#" className="reviews-cta-btn">
          Start Your Smart Revision
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default StudentReviews;
