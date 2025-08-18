import React from 'react'
import img from "../../../assets/icons/logo.png"
import "./footer.scss"
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-line"></div>
      <nav className="footer__nav container">
        <div className="footer__nav-logo">
          <img src={img} alt="footer logo" />
        </div>
        <ul className="footer__item">
          <li className="footer__item-list">
            <NavLink>SK Enmove</NavLink>
          </li>
          <li className="footer__item-list"><NavLink>Бренд Valesco</NavLink></li>
          <li className="footer__item-list"><NavLink>Каталог</NavLink></li>
          <li className="footer__item-list"><NavLink>Подбор масла</NavLink></li>
        </ul>
        <ul className="footer__item">
          <li className="footer__item-list"><NavLink>Где купить</NavLink></li>
          <li className="footer__item-list"><NavLink>PR</NavLink></li>
          <li className="footer__item-list"><NavLink>База знаний</NavLink></li>
          <li className="footer__item-list"><NavLink>Контакты</NavLink></li>
        </ul>
        <ul className="footer__item">
          <li className="footer__item-list"><NavLink>Вход для партнеров</NavLink></li>
          <li className="footer__item-list"><NavLink>Политика обработки cookies</NavLink></li>
          <li className="footer__item-list"><NavLink>Мы во Вконтакте</NavLink></li>
          <li className="footer__item-list"><NavLink>Карта сайта</NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer