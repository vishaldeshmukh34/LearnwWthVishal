import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "Do I need prior coding knowledge?",
    answer: "No, we start from basics and gradually move to advanced level."
  },
  {
    question: "Will I get placement support?",
    answer: "Yes, we provide resume building, mock interviews and placement assistance."
  },
  {
    question: "Are live classes available?",
    answer: "Yes, we conduct live interactive sessions and provide recordings."
  },
  {
    question: "Is there any refund policy?",
    answer: "Yes, we offer a 7-day refund policy if you're not satisfied."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="section-title">Frequently Asked Questions ❓</h2>
      <p className="section-subtitle">
        Everything you need to know before joining
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;