import React from "react";

import DecentralizationImage from "../../assets/dex1.png";
import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

const MiddleSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h1 class="text-center text-[4rem] font-bold leading-[71px] bg-gradient-to-r from-[#e99d11] to-[#ffffff] text-transparent bg-clip-text">Modern Systems &<br></br> Decentralization</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
           
            <p className="text-white text-lg mb-6 mt-[15px] text-[17px] text-white-500 font-semibold">
              Enabling trust and resilience without central authority.
            </p>
            <p className="text-white mb-6 mt-[15px] text-[17px] text-white-500 font-semibold">
              Decentralization plays a crucial role in reducing central control, promoting
              autonomy, and ensuring balanced access across systems. It improves data
              security, enhances system transparency, and reduces the risk of single points
              of failure. By distributing control, it enables resilient and trustless
              networks across industries like finance, communication, and governance.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-full text-black text-xl">
                  <FaRocket />
                </div>
                <span className="font-semibold text-lg">Faster Decision-Making</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-full text-black text-xl">
                  <FaShieldAlt />
                </div>
                <span className="font-semibold text-lg">Robust Data Security</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-full text-black text-xl">
                  <FaUsers />
                </div>
                <span className="font-semibold text-lg">Miner Empowerment</span>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center">
            <img
              src={DecentralizationImage}
              alt="Decentralization Illustration"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
