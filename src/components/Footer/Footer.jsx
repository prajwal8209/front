import React from "react";
import FooterBg from "../../assets/back.jpg"; // adjust the path as needed

const Footer = () => {
  return (
    <>
      <div className="relative text-white py-10">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>

        {/* Black overlay with 0.5 opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.7] z-0"></div>

        {/* Content */}
        <div className="relative z-10 container text-center">
          <h1 className="text-3xl font-bold">Let's Play</h1>
          <hr className="w-[150px] mx-auto my-4" />
          <p className="text-white/70">Made with DEMO</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
