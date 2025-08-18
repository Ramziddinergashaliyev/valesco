import React, { useEffect, useState } from 'react'
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import "./header.scss"
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.png"

const Header = () => {
  const [searchHide, setSearchHide] = useState(false)

  return (
    <>
      <header className='header'>
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <a href="/">
              <img src={logo} alt="header logo" />
            </a>
          </div>

          <ul className="header__nav__item">
            <button className='header__nav__btn'>Проверка подлинности</button>

            <li className="header__nav__list">
              SK Enmove <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li className="dropdown-item-list"><NavLink to="/about">О компании</NavLink></li>
                <li className="dropdown-item-list"><NavLink to="/news">Новости</NavLink></li>
                <li className="dropdown-item-list"><NavLink to="/impact">Социальная ответственность</NavLink></li>
                <li className="dropdown-item-list"><NavLink to="/culture">Корпоративная культура</NavLink></li>
              </ul>
            </li>

            <li className="header__nav__list">
              Каталог <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li className="dropdown-item-list"><NavLink to="/productItem">Моторные масла</NavLink></li>
                <li className="dropdown-item-list">Трансмиссионные масла</li>
                <li className="dropdown-item-list">Антифризы</li>
              </ul>
            </li>

            <li className="header__nav__list">
              Подбор масла <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li className="dropdown-item-list"><NavLink to="/oil">Подбор масла</NavLink></li>
                <li className="dropdown-item-list"><NavLink to="/chinaAuto">Продукты для китайских автомобилей</NavLink></li>
              </ul>
            </li>

            <li className="header__nav__list">
              Где купить <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li className="dropdown-item-list"><NavLink to="/distrbut">Дистрибьюторы</NavLink></li>
                <li className="dropdown-item-list"><NavLink to={"/outlets"}>Торговые точки</NavLink></li>
              </ul>
            </li>

            <li className="header__nav__list"><NavLink to="/contact">Контакты</NavLink></li>
          </ul>

          <div className="header__nav__bottom">
            <div className="lang-dropdown">
              <select className='header__nav__bottom-lang'>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
            </select>
            </div>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setSearchHide(p => !p)}
              className='header__nav__bottom-search'
            >
              {!searchHide ? <FiSearch /> : <IoMdClose />}
            </span>

            <span className='header__nav__bottom-menu'><FiMenu /></span>
          </div>
        </nav>
      </header>

      <div className={`header-search-result ${searchHide ? "header-search-result-hide" : ""}`}>
        <div className="header-search-result-form container">
          <div className="header-search-result-form-icon">
            <input placeholder='Поиск' type="text" />
            <FiSearch />
          </div>
          <p className='header-search-result-form-text'>Начните поиск по фразе или артикулу товара.</p>
        </div>
      </div>

      {searchHide && (
        <div
          onClick={() => setSearchHide(false)}
          className='header-search-result-form-overlay'
        />
      )}
    </>
  )
}

export default Header