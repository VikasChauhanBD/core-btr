import React, { useEffect, useRef } from "react";
import "./WhyCoreBTR.css";
import { BiLayer, BiTargetLock, BiTimer, BiCheckShield } from "react-icons/bi";

function WhyCoreBTR() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerRef.current?.classList.add("animate");

            cardRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card?.classList.add("animate");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const coreData = [
    {
      id: 1,
      icon: BiLayer,
      title: "Complete System",
      desp: "Built as a complete revision system — not just scattered content.",
    },
    {
      id: 2,
      icon: BiTargetLock,
      title: "High-Yield Focus",
      desp: "Focused strictly on exam-relevant topics.",
    },
    {
      id: 3,
      icon: BiTimer,
      title: "Fast Revision",
      desp: "Designed for fast revision with clarity.",
    },
    {
      id: 4,
      icon: BiCheckShield,
      title: "Exam-Pattern Aligned",
      desp: "Aligned with latest NEET PG & INI-CET patterns.",
    },
  ];

  return (
    <div className="why-core-btr-container">
      <section className="why-core-btr-features" ref={sectionRef}>
        <div className="why-core-btr-eyebrow">
          <span className="why-core-btr-eyebrow-line" />
          <span className="why-core-btr-eyebrow-text">Why CoreBTR</span>
        </div>

        <h2
          className="why-core-btr-section-heading why-core-btr-header"
          ref={headerRef}
        >
          What Makes CoreBTR <em>Different?</em>
        </h2>

        <div className="why-core-btr-cards">
          {coreData.map((data) => {
            const Icon = data.icon;
            return (
              <div
                key={data.id}
                className="why-core-btr-card"
                ref={addToCardRefs}
              >
                <Icon className="why-core-btr-icon" />
                <h4>{data.title}</h4>
                <p>{data.desp}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default WhyCoreBTR;
