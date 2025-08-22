import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaWallet,
  FaChartLine,
  FaTachometerAlt,
  FaUser,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaHeadset,
} from "react-icons/fa";

import Logo from "../../assets/logo2.png";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [referralLink] = useState("https://referral.com/user123");
  const [copied, setCopied] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Team", path: "/team", icon: <FaUsers /> },
    { name: "TopUp", path: "/topup", icon: <FaMoneyBillWave /> },
    { name: "Withdrawal", path: "/withdrawal", icon: <FaMoneyBillWave /> },
    { name: "Report", path: "/report", icon: <FaFileAlt /> },
    { name: "Support", path: "/support", icon: <FaHeadset /> },
  ];

  // Load active menu from localStorage
  useEffect(() => {
    const savedMenu = localStorage.getItem("activeMenu");
    if (savedMenu) {
      setActiveMenu(savedMenu);
    }
  }, []);

  // Save active menu to localStorage
  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  return (
    <div className="ramuapp-dashboard-container">
      {/* Sidebar */}
      <aside className={`ramuapp-sidebar ${isOpen ? "open" : ""}`}>
        {/* Mobile Close Button */}
        <button className="ramuapp-close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="ramuapp-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="ramuapp-menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={activeMenu === item.name ? "active" : ""}
              onClick={() => setActiveMenu(item.name)}
            >
              <Link to={item.path}>
                <span className="ramuapp-menu-icon">{item.icon}</span>
                <span className="ramuapp-menu-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="ramuapp-main">
        {/* Header */}
        <header className="ramuapp-header">
          {/* Sidebar Toggle for Mobile */}
          <button className="ramuapp-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="ramuapp-user">
            <FaUserCircle size={32} />
            <span>Musharof</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="ramuapp-dashboard">
          <h2>{activeMenu}</h2>

          {/* Top Cards */}
          <div className="ramuapp-top-cards">
            {/* Balance Card */}
            <div className="ramuapp-card balance-card">
              <div className="ramuapp-icon-box flex items-center justify-center">
                <FaUser size={40} />
              </div>

              <h3 className="text-center">$1050.25</h3>
              <p className="text-center">Available Balance</p>
              <div className="ramuapp-btns flex justify-center gap-3 mt-4">
                <button className="ramuapp-btn yellow">Withdrawal</button>
                <button className="ramuapp-btn yellow">TopUp</button>
              </div>
            </div>

            {/* Referral Card */}
            <div className="ramuapp-card referral-card">
              <h4>Referral Link</h4>
              <div className="ramuapp-ref-link">
                <span>{referralLink}</span>
                <button className="ramuapp-btn yellow" onClick={handleCopy}>
                  {copied ? "Copied!" : "COPY"}
                </button>
              </div>
              <p>Refer Friends. Get Rewarded</p>
              <p className="ramuapp-small">
                Earn 1,000 points per approved referral, up to 5,000 points per
                year.
              </p>
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="ramuapp-stats-grid">
            {[
              { title: "Status", value: "Active" },
              { title: "Total Team", value: "0.00$" },
              { title: "Level ROI Income", value: "0.00$" },
              { title: "Direct Income", value: "0.00$" },
              { title: "Direct Referral Bonus", value: "0.00$" },
              { title: "REWARD Income", value: "0.00$" },
              { title: "Total Income", value: "0.00$" },
              { title: "Total Withdrawal", value: "0.00$" },
            ].map((item, i) => (
              <div key={i} className="ramuapp-stat-card">
                <div className="ramuapp-icon-box">
                  <FaChartLine size={30} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;
