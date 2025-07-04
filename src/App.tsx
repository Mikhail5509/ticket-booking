import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs/>
      <HowItWorks/>
      <Reviews/>
      <Footer/>
    </>
  );
};

export default App;
