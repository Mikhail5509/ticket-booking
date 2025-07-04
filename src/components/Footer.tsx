import React from 'react';
import { 
  FaPhone,
  FaEnvelope,
  FaTicketAlt,
  FaMapMarkerAlt,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaFacebookF
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Левая колонка - Контакты */}
        <div className="footer__contacts">
          <h2 className="footer__title">Свяжитесь с нами</h2>
          
          <div className="footer__contact-item">
            <FaPhone className="footer__contact-icon" />
            <span>8 (800) 000 00 00</span>
          </div>
          
          <div className="footer__contact-item">
            <FaEnvelope className="footer__contact-icon" />
            <span>inbox@mail.ru</span>
          </div>
          
          <div className="footer__contact-item">
            <FaTicketAlt className="footer__contact-icon" />
            <span>tu.train.tickets</span>
          </div>
          
          <div className="footer__contact-item">
            <FaMapMarkerAlt className="footer__contact-icon" />
            <div className="footer__address">
              <span>г. Москва</span>
              <span>ул. Московская 27-35</span>
              <span>555 555</span>
            </div>
          </div>
        </div>

        {/* Правая колонка - Подписка и соцсети */}
        <div className="footer__right-col">
          <div className="footer__subscription">
            <h2 className="footer__title">Подписка</h2>
            <p className="footer__sub-text">Будьте в курсе событий</p>
            
            <div className="footer__email-row">
               <div className="footer__email-field">e-mail</div>
               <button className="footer__submit-btn">ОТПРАВИТЬ</button>
            </div>
          </div>
          
          <div className="footer__social">
            <h2 className="footer__title">Подписывайтесь на нас</h2>
            <div className="footer__social-icons">
              <FaYoutube className="footer__social-icon" />
              <FaTwitter className="footer__social-icon" />
              <FaInstagram className="footer__social-icon" />
              <FaGooglePlusG className="footer__social-icon" />
              <FaFacebookF className="footer__social-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;