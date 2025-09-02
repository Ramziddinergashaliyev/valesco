import React from 'react'
import img from "../../../assets/icons/logo.png"
import "./footer.scss"
import { NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../context/api/categoryApi'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { data } = useGetCategoriesQuery()
  console.log(data);
  const { t, i18n } = useTranslation()
  console.log(i18n?.language);
  
  return (
    <footer className='footer'>
      <div className="footer-line"></div>
      <nav className="footer__nav container">
        <div className="footer__nav-logo">
          <img src={img} alt="footer logo" />
        </div>
        <ul className="footer__item">
          <h3 className='footer__item-title'><NavLink>КОМПАНИЯ</NavLink></h3>
          <li className="footer__item-list"><NavLink to={"/about"}>О компании</NavLink></li>
          <li className="footer__item-list"><NavLink to={"/news"}>Новости</NavLink></li>
          <li className="footer__item-list"><NavLink to={"/impact"}>Социальная ответственность</NavLink></li>
          <li className="footer__item-list"><NavLink to={"/culture"}>Корпоративная культураs</NavLink></li>
        </ul>
        <ul className="footer__item">
          <h3 className='footer__item-title'>ПРОДУКЦИЯ</h3>
          {
            data?.map((el, index) => (
              <li key={index} className="footer__item-list">
                <NavLink to={`/categories/${el?.id}`}>
                  {
                    i18n?.language === "ru"
                    ?
                    el?.title?.ru
                    :
                    el?.title?.en
                  }
                </NavLink></li>
            ))
          }
        </ul>
        <ul className="footer__item">
          <h3 className='footer__item-title'>КОНТАКТЫ</h3>
          <li className="footer__item-contact">
            <span>Номер телефона</span>
            <a href="tel:+998 71 281 49 30">+998 71 281 49 30</a>
            <a href="tel:+998 71 203 20 31">+998 71 203 20 31</a>
          </li>
          <li className="footer__item-contact">
            <span>Адрес</span>
            100070, Республика Узбекистан, г. Ташкент, Яккасарайский р-н, ул. Глинка 14/3
          </li>
          <li className="footer__item-contact">
            <span>E-mail</span>
            <a href="mailTo:info@gpggroup.uz">info@gpggroup.uz</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer