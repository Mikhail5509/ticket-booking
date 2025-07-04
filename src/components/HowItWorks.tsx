import React from 'react';
import './HowItWorks.css';
import { FaDesktop, FaBuilding, FaGlobeAmericas } from 'react-icons/fa';

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="content-container">
        <header className="section-header">
          <h2 className="howItWork-title">КАК ЭТО РАБОТАЕТ</h2>
          <button className="learn-more-btn">
            Узнать больше 
          </button>
        </header>

        <div className="features-grid">
          {/* 1. Иконка ПК */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaDesktop className="feature-icon" />
            </div>
            <p className="feature-text">Удобный заказ<br/> на сайте</p>
          </div>

          {/* 2. Иконка офиса */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaBuilding className="feature-icon" />
            </div>
            <p className="feature-text">Нет необходимости<br/> ехать в офис</p>
          </div>

          {/* 3. Иконка глобуса */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaGlobeAmericas className="feature-icon" />
            </div>
            <p className="feature-text">Огромный выбор<br/> направлений</p>
          </div>
        </div>
      </div>
    </section>
  );
};