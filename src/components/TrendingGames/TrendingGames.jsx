import React from "react";
import CoverImg from "../../assets/hero/hero_cover.jpg";
import HeroPng from "../../assets/def.png";

const bgImage = {
  // backgroundImage: `url(${CoverImg})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const TrendingGames = () => {
  return (
    <>
      <div style={bgImage} className="min-h-[550px] w-full overflow-hidden ">
        <div className="bg-black py-16 bg-gradient-to-t from-black from-10% to-transparent to-90% flex items-center min-h-[550px]">
          <div className="container">
         <h1 className="mb-[10px] text-center text-[4rem] font-bold leading-[71px] bg-gradient-to-r from-[#e99d11] to-[#ffffff] text-transparent bg-clip-text">
  About Us
</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={HeroPng}
                  alt="Not found"
                  className="w-full sm:scale-125 md:scale-110 p-[28px] mt-[22px]"
                />
              </div>
              {/* content section */}
              <div className="text-center sm:text-left pt-10 sm:pt-0">
                <p
                  className="mt-[15px] text-[17px] text-white-500 font-semibold"
                  style={{ color: "white" }}
                >
                  We are a dedicated Bitcoin mining company providing secure,
                  efficient, and high-performance mining solutions. Our mission
                  is to drive reliable BTC production using advanced
                  infrastructure.{" "}
                </p>

                <p
                  className="mt-[15px] text-[17px] text-white-500 font-semibold"
                  style={{ color: "white" }}
                >
                  Leveraging state-of-the-art ASIC miners, we ensure fast,
                  cost-effective Bitcoin generation in optimized environments.
                  Our services cater to both individual miners and enterprise
                  clients, offering full support from setup to real-time
                  performance monitoring. With tailored configurations and 24/7
                  assistance, we help maximize mining outcomes while maintaining
                  operational ease.{" "}
                </p>

                <p
                  className="mt-[15px] text-[17px] text-white-500 font-semibold"
                  style={{ color: "white" }}
                >
                  Backed by industry expertise and a commitment to innovation,
                  we prioritize transparency, uptime, and energy efficiency. Our
                  global facilities are built for scale and sustainability,
                  empowering clients to mine confidently in a dynamic market.{" "}
                </p>
               <button className="mt-8 inline-block px-6 py-3 rounded-2xl font-semibold text-white bg-[#e99d11]">
  Join Now
</button>

              </div>

              {/* image section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingGames;
