import { useState } from "react";

// FX Status Cards Component
const data = [
  { id: 1, title: "Status", value: "Active" },
  { id: 3, title: "Total Team", value: "0.00" },
  { id: 4, title: "Level ROI Income", value: "0.00$" },
  { id: 6, title: "Direct Income", value: "0.00$" },
  { id: 7, title: "Direct Referral Bonus", value: "0.00$" },
  { id: 8, title: "REWARD Income", value: "0.00$" },
  { id: 9, title: "Total Income", value: "0.00$" },
  { id: 10, title: "Total Withdrawal", value: "0.00$" },
  { id: 11, title: "Total Withdrawal", value: "0.00$" },
  { id: 12, title: "Total Downline Business", value: "0.00$" },
];

function StatusCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative bg-[#000000] border border-yellow-500 rounded-lg p-4 flex items-center space-x-4 text-white"
        >
          <div className="bg-[#423105] border border-yellow-500 p-4 rounded">
            <img
              src="/images/logo1.png" // Replace with your actual FX icon path
              alt="FX"
              className="w-12 h-12"
            />
          </div>
          <div>
            <p className="text-sm">{item.title}</p>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
          <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-bl">
            {item.id.toString().padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
}

// Ecommerce Metrics Component
function EcommerceMetrics() {
  const [copied, setCopied] = useState(false);
  const referralLink = "Referral.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 p-4 ">
      {/* Balance Card */}
      <div
        className="col-span-12 md:col-span-4 border border-yellow-500  p-6 rounded-lg text-white flex flex-col items-center justify-center"
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold">$1050.25</h2>
        <p className="text-sm mb-4">Available Balance</p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
            Withdrawal
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
            TopUp
          </button>
        </div>
      </div>

      {/* Referral Card */}
      <div
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
        className="col-span-12 md:col-span-8 border border-yellow-500  p-6 rounded-lg  text-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
      >
        <div>
          <h3 className="text-xl font-semibold mb-3">Referral Link</h3>
          <div className="flex items-center mb-3">
            <span className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded-l">
              Referral Link
            </span>
            <span className="bg-gray-800 px-3 py-1">{referralLink}</span>
            <button
              className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded-r"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "COPY"}
            </button>
          </div>
          <div>
            <p className="font-semibold mb-1">Refer Friends. Get Rewarded</p>
            <p className="text-sm text-gray-300">
              Earn 1,000 points per approved referral, up to 5,000 points per year.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
       <img
  src="/images/fd.png"
  alt="Crypto Illustration"
  className="w-[230px] h-auto animate-left-right"
/>

        </div>
      </div>
    </div>
  );
}

// Combine and Render
export default function Dashboard() {
  return (
    <div className=" min-h-screen">
      <EcommerceMetrics />
      <StatusCards />
      
    </div>
  );
}
