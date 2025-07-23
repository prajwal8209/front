import React from "react";
import Logo from "../../assets/logo2.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"; // ✅ Make sure this path is correct

const LoginPage = () => {
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
            <span className="text-white">Enter Your </span>
            <span className="text-[#e99d11]">Credentials!</span>
          </h2>

          {/* Description */}
          <p className="text-white/70 text-sm mb-6">
            Use automatic login to seamlessly access all features and functionalities
            of your personal account—no need to re-enter credentials each time
          </p>

          {/* Button */}
          <button className="bg-[#e99d11] text-white font-semibold py-3 px-6 rounded-full w-full mb-4">
            Connect Wallet
          </button>

          {/* Registration Link */}
          <p className="text-sm text-white/70">
            New user?{" "}
            <Link to="/signup" className="text-[#e99d11] underline">
  Register your account here.
</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
