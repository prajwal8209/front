import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TrendingGames from "./components/TrendingGames/TrendingGames.jsx";
import RecommendedArticles from "./components/RecommendedArticles/RecommendedArticles.jsx";
import WhatsNew from "./components/WhatsNew/WhatsNew.jsx";
import MiddleSection from "./components/Wow/MiddleSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./components/login/LoginPage.jsx"; // 👈 Make sure path is correct
import Signup from "./components/signup/Signup.jsx";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingGames />
      <RecommendedArticles />
      <MiddleSection />
      <WhatsNew />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
 
 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
