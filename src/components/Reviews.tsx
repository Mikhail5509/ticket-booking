import React from 'react';
import './Reviews.css';
import ekaterinaPhoto from '../assets/ekaterina.jpg';
import evgeniyPhoto from '../assets/evgeniy.jpg';

export const Reviews: React.FC = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="section-title">ОТЗЫВЫ</h2>
        
        <div className="reviews-list">
          {/* Отзыв 1 */}
          <div className="review-item">
            <div className="author-photo">
              <img src={ekaterinaPhoto} alt="Екатерина Вальнова" />
            </div>
            <div className="review-content">
              <h3 className="author-name">Екатерина Вальнова</h3>
              <p className="review-text">
                "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без ошибок купить ж/д билет, даже если вы заказываете онлайн билет впервые."
              </p>
            </div>
          </div>

          {/* Отзыв 2 */}
          <div className="review-item">
            <div className="author-photo">
              <img src={evgeniyPhoto} alt="Евгений Стрыкало" />
            </div>
            <div className="review-content">
              <h3 className="author-name">Евгений Стрыкало</h3>
              <p className="review-text">
                "СМС сопровождение до посадки. За 3 часа до отправления мы пришлем вам СМС-напоминание о поезде."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};