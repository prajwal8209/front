import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Logo from "../../assets/logo2.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // 👈 Create navigate function

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const goToLogin = () => {
    closeSidebar();     // Close sidebar if open
    navigate("/login"); // 👈 Navigate to login route
  };

  return (
    <>
      <div className="bg-black p-[11px] relative z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4 text-white">
              <a href="/">
                <img src={Logo} alt="Logo" style={{ width: "199px", marginLeft: "-36px" }} />

              </a>
            </div>

            {/* Desktop Menu */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
              <ul className="flex gap-6 text-white" style={{ fontSize: "19px" }} >
                <li><a href="" className="cursor-pointer font-bold" >Home</a></li>
                <li><a href="/" className="cursor-pointer font-bold">About</a></li>
                <li><a href="/" className="cursor-pointer font-bold">Objective</a></li>
                <li><a href="/" className="cursor-pointer font-bold">Decentrix</a></li>
                <li><a href="/" className="cursor-pointer font-bold">BNB</a></li>
                <li><a href="/" className="cursor-pointer font-bold">FAQ</a></li>
              </ul>
            </div>

            {/* Right Side / Mobile Toggle */}
            <div className="text-white flex items-center gap-4 sm:gap-6">
              <button
                onClick={goToLogin}
                className="hidden sm:inline-block px-6 py-3 rounded-2xl font-semibold text-white"
                style={{
                  background: "linear-gradient(to right, rgb(248 185 19), rgb(241 180 21))",
                }}
              >
                Get Started
              </button>

              <button
                className="sm:hidden text-white text-2xl"
                onClick={toggleSidebar}
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src={Logo} alt="Logo" style={{ width: "140px" }} />
          <button onClick={closeSidebar} className="text-2xl">
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6">
          <li><a href="#" onClick={closeSidebar} className="font-semibold">Home</a></li>
          <li><a href="#" onClick={closeSidebar} className="font-semibold">About</a></li>
          <li><a href="#" onClick={closeSidebar} className="font-semibold">Objective</a></li>
          <li><a href="#" onClick={closeSidebar} className="font-semibold">Decentrix</a></li>
          <li><a href="#" onClick={closeSidebar} className="font-semibold">BNB</a></li>
          <li><a href="#" onClick={closeSidebar} className="font-semibold">FAQ</a></li>
          <li>
            <button
              onClick={goToLogin}
              className="block w-full bg-[#EBCE00Start Exploring] text-center py-2 rounded-xl font-semibold mt-4"
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
