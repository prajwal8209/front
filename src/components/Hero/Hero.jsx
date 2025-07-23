import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1
import CoverImg from "../../assets/cb.jpg";
import HeroPng from "../../assets/earth.png";
import BitcoinImg from "../../assets/bitcoin.png";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Step 2

  return (
    <div className="relative min-h-[550px] w-full overflow-hidden">
      {/* ✅ Background image */}
      <img
        src={CoverImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-[1.1] z-0"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black opacity-[0.8] z-0"></div>

      {/* ✅ Content */}
      <div className="relative z-10 flex items-center min-h-[550px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="text-center sm:text-left pt-10 sm:pt-0">
              <p className="text-3xl font-bold" style={{ color: "#e99d11" }}>
                Welcome To
              </p>

              <h1 className="text-[4rem] font-bold leading-[71px] bg-gradient-to-r from-[#e99d11] to-[#ffffff] text-transparent bg-clip-text">
                Next-Gen Mining<br />for Autonomy
              </h1>

              <p className="mt-[15px] text-[22px] font-semibold text-white">
                "Harness the power of efficient mining to support a truly decentralized world. Our technology ensures speed, sustainability, and transparency at every step"
              </p>

              {/* ✅ Step 3: Add navigation to login */}
              <button
                onClick={() => navigate("/login")}
                className="mt-8 inline-block px-6 py-3 rounded-2xl font-semibold text-white"
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(248 185 19), rgb(241 180 21))",
                }}
              >
                User Login
              </button>
            </div>

            {/* Image Section */}
            <div className="relative w-full p-[28px] mt-[22px]">
              <img
                src={HeroPng}
                alt="Hero Earth"
                className="w-full sm:scale-125 md:scale-110 animate-spin-slow"
              />

              <img
                src={BitcoinImg}
                alt="Bitcoin Overlay"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[327px] z-10 animate-bounce-rotate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
