import React, { useState } from "react";
import "../Styles/FAQ.css"; // Import the CSS file
import NavBar from "../Components/NavBar";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the event dates?",
      answer: "The event will take place from 18th to 20th October 2024.",
    },
    {
      question: "Where is the event location?",
      answer: "The Venue will be revealed soon :) Don't worry it's closer than you think",
    },
    {
        question: "Should I pay a total of 19,000 LKR to participate?",
        answer: "Don't worry. Your entity will cover a portion for you. Contact your LCVP for more details",
      },
    {
      question: "How can I register for the event?",
      answer:
        "You can register online via our official website.",
    },
  ];

  return (
    <div className="faq-background">
      <NavBar />
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className={`arrow ${activeIndex === index ? "arrow-up" : "arrow-down"}`}></span>
            </div>
            <div className="faq-answer">
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default FAQ;
