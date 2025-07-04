// HeroSection.tsx
import React from 'react';
import './HeroSection.css';
import { BookingForm } from './BookingForm';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Вся жизнь — <span className="hero-title-bold">путешествие!</span></h1>
      </div>
      <div className="hero-form-wrapper">
        <BookingForm />
      </div>
    </section>
  );
};