import React from "react";
import {
  FaBolt,
  FaCogs,
  FaBalanceScale,
  FaNetworkWired,
} from "react-icons/fa";

import BgImage from "../../assets/dgf.jpg"; // ✅ Update path as needed

const RecommendedArticles = () => {
  const challenges = [
    {
      icon: <FaBolt size={28} className="text-[#e99d11]" />,
      title: "High Energy Consumption",
      description:
        "Mining demands enormous computational power, resulting in high electricity use, often blamed for harming the environment.",
    },
    {
      icon: <FaCogs size={28} className="text-[#e99d11]" />,
      title: "Rising Mining Difficulty",
      description:
        "With more miners joining, block solving grows tougher, lowering reward chances without high-end mining equipment.",
    },
    {
      icon: <FaBalanceScale size={28} className="text-[#e99d11]" />,
      title: "Regulatory Uncertainty",
      description:
        "Some nations ban or limit mining due to energy or financial risks, posing legal and business uncertainties for operators.",
    },
    {
      icon: <FaNetworkWired size={28} className="text-[#e99d11]" />,
      title: "Centralization Risks",
      description:
        "Large-scale farms and mining pools may control major portions, threatening Bitcoin’s core principle of decentralization.",
    },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Box with background image */}
      <div
        className="relative z-10 max-w-7xl mx-auto border border-[#e99d11] rounded-[20px] p-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        {/* Overlay inside the box to darken background */}
        <div className="absolute inset-0 bg-black opacity-[0.8] rounded-[20px] z-0"></div>

        {/* Content inside the box */}
        <div className="relative z-10 text-center mb-14">
          <h1 className="text-[4rem] font-bold leading-[71px] bg-gradient-to-r from-[#e99d11] to-[#ffffff] text-transparent bg-clip-text">
            Challenges in Bitcoin Mining
          </h1>
          <p className="text-lg mt-3 text-gray-300">
            Navigating the Complex Terrain of Bitcoin Mining
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="border border-[#e99d11] rounded-xl p-6 bg-black bg-opacity-70 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedArticles;
