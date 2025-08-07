import React from 'react'
import img from "../../../assets/icons/logo.png"
import "./footer.scss"


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-line"></div>
      <nav className="footer__nav container">
        <div className="footer__nav-logo">
          <img src={img} alt="footer logo" />
        </div>
        <ul className="footer__item">
           <li className="footer__item-list">SK Enmove</li>
           <li className="footer__item-list">Бренд Valesco</li>
           <li className="footer__item-list">Каталог</li>
           <li className="footer__item-list">Подбор масла</li>
        </ul>
        <ul className="footer__item">
           <li className="footer__item-list">Где купить</li>
           <li className="footer__item-list">PR</li>
           <li className="footer__item-list">База знаний</li>
           <li className="footer__item-list">Контакты</li>
        </ul>
        <ul className="footer__item">
           <li className="footer__item-list">Вход для партнеров</li>
           <li className="footer__item-list">Политика обработки cookies</li>
           <li className="footer__item-list">Мы во Вконтакте</li>
           <li className="footer__item-list">Карта сайта</li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer