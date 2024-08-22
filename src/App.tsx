// import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Features from "./components/Features/Features";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Features from "./components/pages/Features";
// import Login from "./components/pages/Login";
// import Pricing from "./components/pages/Pricing";

import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";




function App() {


  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <Features />
    <Pricing />
    <Footer />

    </div>
    </>
  );
}

export default App;
