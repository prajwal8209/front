import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import FAQIllustration from "../../assets/hu.png";

const faqData = [
  { question: "What is Bitcoin mining?", answer: "Bitcoin mining is etc" },
  { question: "Why does mining require so much energy?", answer: "Because etc" },
  { question: "Can anyone mine Bitcoin?", answer: "Yes, however etc" },
  { question: "How are miners rewarded?", answer: "Miners are rewarded with etc" },
  { question: "Is Bitcoin mining legal?", answer: "It depends on..." },
];

const WhatsNew = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-5 text-white">
      <div class="max-w-7xl mx-auto text-center mb-8"><h1 class="text-center text-[4rem] font-bold leading-[71px] bg-gradient-to-r from-[#e99d11] to-[#ffffff] text-transparent bg-clip-text">FAQ</h1></div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Illustration and Title */}
        <div className="text-center md:text-left space-y-6">
         
          <img
            src={FAQIllustration}
            alt="FAQ Illustration"
            className="max-w-full h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Right Side: Accordion FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#e99d11] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-black hover:bg-[#26D2E6]/10 text-left"
              >
                <span className="font-medium">{item.question}</span>
                <span className="text-[#e99d11]">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-white/80">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
