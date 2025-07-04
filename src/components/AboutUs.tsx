import React from 'react';
import './AboutUs.css';

export const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="about-title">О НАС</h2>
        
        <div className="about-content">
          <div className="vertical-line"></div>
          <div className="text-content">
            <p className="about-text">
              Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем<br></br> все больше людей заказывают жд билеты через интернет.
            </p>
            
            <p className="about-text">
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?<br />
              Мы расскажем о преимуществах заказа через интернет.
            </p>
            
            <p className="about-text">
              <strong>Покупать жд билеты дешево можно за 90 суток до отправления поезда.</strong><br />
              <strong>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};