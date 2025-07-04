import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div data-testid="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <HowItWorks />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
};

export default App;