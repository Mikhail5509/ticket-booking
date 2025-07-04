// BookingForm.tsx
import React from 'react';
import './BookingForm.css';

export const BookingForm: React.FC = () => {
  return (
    <div className="booking-form-container">
      <h2 className="form-title">Направление</h2>
      
      <form className="booking-form">
        <div className="form-group">
          <label className="input-label">Откуда</label>
          <input 
            type="text" 
            placeholder="Город вылета"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="input-label">Куда</label>
          <input 
            type="text" 
            placeholder="Город прилёта"
            className="form-input"
          />
        </div>

        <div className="date-row">
          <div className="form-group">
            <label className="input-label">Дата вылета</label>
            <input
              type="text"
              placeholder="ДД/ММ/ГГГГ"
              className="date-input"
            />
          </div>

          <div className="form-group">
            <label className="input-label">Дата возвращения</label>
            <input
              type="text"
              placeholder="ДД/ММ/ГГГГ"
              className="date-input"
            />
          </div>
        </div>

        <div className="date-formats">
          <span>ДД/ММ/ГГ</span>
          <span>ДД/ММ/ГГ</span>
        </div>

        <button type="submit" className="submit-btn">
          НАЙТИ БИЛЕТЫ
        </button>
      </form>
    </div>
  );
};