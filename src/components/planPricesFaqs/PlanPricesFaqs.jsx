import React, { useState } from "react";
import "./PlanPricesFaqs.css";

const faqs = [
  {
    id: 1,
    question: "What does CoreBTR include?",
    answer: `CoreBTR offers a complete revision ecosystem—high-yield videos, structured notes, PYQs, a curated QBank, video solutions, grand tests, and topic-wise pearls—all in one platform.`,
  },
  {
    id: 2,
    question: "Are the revision videos enough for exam preparation?",
    answer: `Yes. The videos are designed to be concise, high-yield, and concept-driven, covering all 19 subjects with integrated systems for effective revision.`,
  },
  {
    id: 3,
    question: "How are the notes and workbooks structured?",
    answer: `The notes and workbooks are aligned with the video content and focus on quick revision, active recall, and easy retention during multiple revisions.`,
  },
  {
    id: 4,
    question: "Does CoreBTR include PYQs from all exams?",
    answer: `Yes. PYQs from NEET PG, INI-CET, and FMGE are included, organized topic-wise and exam-wise for targeted practice.`,
  },
  {
    id: 5,
    question: "What makes the QBank different?",
    answer: `The QBank is curated with application-based MCQs that help improve clinical thinking, accuracy, and exam temperament—not just theory recall.`,
  },
  {
    id: 6,
    question: "What are #ZVRecommended PYQs?",
    answer: `These are handpicked, high-yield PYQs recommended by Dr. Zainab Vora.`,
  },
  {
    id: 7,
    question: "Are there tests to track performance?",
    answer: `Yes. CoreBTR includes Grand Tests and Subject Tests to help you assess your preparation, identify weak areas, and improve performance.`,
  },
  {
    id: 8,
    question: "What are Topic-Wise Pearls?",
    answer: `These are ultra high-yield, quick-revision points designed for last-minute recall and rapid revision before exams.`,
  },
  {
    id: 9,
    question: "Will there be flashcards available?",
    answer: `Yes. Flashcards are coming soon and will help with active recall, memory reinforcement, and efficient revision.`,
  },
  {
    id: 10,
    question: "Is CoreBTR suitable for revision?",
    answer: `Absolutely. The entire platform is designed for rapid, high-yield revision—making it ideal for both ongoing prep and last-phase revision.`,
  },
  {
    id: 11,
    question:
      "If we buy the launch plan, will that be added to our existing subscription?",
    answer: `Yes it shall be added to your existing subscription and will start after the existing subscription ends`,
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`plan-faq-item ${open ? "plan-faq-item-open" : ""}`}
      style={{ "--i": index }}
      onClick={() => setOpen(!open)}
    >
      <div className="plan-faq-item-header">
        <span className="plan-faq-item-number">
          {String(faq.id).padStart(2, "0")}
        </span>
        <h3 className="plan-faq-item-question">{faq.question}</h3>
        <span className="plan-faq-item-icon">{open ? "−" : "+"}</span>
      </div>
      <div className="plan-faq-item-body">
        <div
          className="plan-faq-item-answer"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
}

function PlanPricesFaqs() {
  return (
    <div className="plan-faq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="plan-faq-main">
        <div className="plan-faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanPricesFaqs;
