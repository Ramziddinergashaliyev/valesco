import React from 'react'
import logo from "../../../assets/icons/logo.png"
import { FiMenu, FiSearch } from "react-icons/fi";
import "./header.scss"
import { IoIosArrowDown, IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Oem from '../../../pages/oem/Oem';

const Header = () => {
  return (
    <header className='header'>
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <NavLink to={"/"}>
            <img src={logo} alt="header logo" />
          </NavLink>
        </div>

        <ul className="header__nav__item">
          <button className='header__nav__btn'>Проверка подлинности</button>

          <li className="header__nav__list">
            SK Enmove <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/about"}>О компании</NavLink></li>
              <li><NavLink to={"/news"}>Новости</NavLink></li>
              <li><NavLink to={"/impact"}>Социальная ответственность</NavLink></li>
              <li><NavLink to={"/culture"}>Корпоративная культура</NavLink></li>
            </ul>
          </li>

          <li className="header__nav__list">
            Бренд <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/unical"}>Уникальность</NavLink></li>
              <li><NavLink to={"/benafits"}>Преимущества</NavLink></li>
              <li>Партнерство</li>
              <li><NavLink to={"/oem"}>Oem</NavLink></li>
              <li><NavLink to={"/otziv"}>Отзывы</NavLink></li>
            </ul>
          </li>

          <li className="header__nav__list">
            Каталог <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/item"}>Моторные масла</NavLink></li>
              <li>Трансмиссионные масла</li>
              <li>Антифризы</li>
            </ul>
          </li>

          <li className="header__nav__list">
            Подбор масла <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/oil"}>Подбор масла</NavLink></li>
              <li><NavLink to={"/chinaAuto"}>Продукты для китайских автомобилей</NavLink></li>
            </ul>
          </li>

          <li className="header__nav__list">
            Где купить <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/distrbut"}>Дистрибьюторы</NavLink></li>
              <li>Торговые точки</li>
            </ul>
          </li>

          <li className="header__nav__list">
            База знаний <IoMdArrowDropdown />
            <ul className="dropdown">
              <li><NavLink to={"/faq"}>FAQ</NavLink></li>
              <li><NavLink to={"/public"}>Публикации</NavLink></li>
            </ul>
          </li>

          <li className="header__nav__list"><NavLink to={"/contact"}>Контакты</NavLink></li>
        </ul>

        <div className="header__nav__bottom">
          <span className='header__nav__bottom-search'><FiSearch /></span>
          <span className='header__nav__bottom-menu'><FiMenu /></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
