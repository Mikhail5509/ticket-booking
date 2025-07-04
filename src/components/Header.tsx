import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <>
      <div className="logo">Лого</div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#">О нас</a>
            <a href="#">Как это работает</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </header>
    </>
  );
};
