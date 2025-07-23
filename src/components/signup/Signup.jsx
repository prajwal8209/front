import React from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"; // ✅ Make sure this path is correct

const Signup = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="border border-yellow-500 rounded-2xl p-8 max-w-[41rem] w-full text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4 text-white">
              <a href="#">
                <img src={Logo} alt="Logo" style={{ width: "186px" }} />
              </a>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-white">Register </span><br />
            <span className="text-[#e99d11]">Automatic Registration!</span>
          </h2>

          {/* Description */}
          <p className="text-white/70 text-sm mb-6">
            Please check your invitee’s referral ID to confirm their eligibility.
          </p>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Referral ID"
            className="mb-4 px-4 py-3 w-full rounded-full text-black placeholder-gray-500 focus:outline-none"
          />

          {/* Button */}
          <button className="bg-[#e99d11] text-white font-semibold py-3 px-6 rounded-full w-full mb-4">
            Connect Wallet
          </button>

          {/* Registration Link */}
          <p className="text-sm text-white/70">
            Already a member?{" "}
               <Link to="/login" className="text-[#e99d11] underline">
  Register your account here.
</Link>
            
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
