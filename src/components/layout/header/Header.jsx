import React from 'react'
import logo from "../../../assets/icons/logo.png"
import { FiMenu, FiSearch } from "react-icons/fi";
import "./header.scss"
import { IoIosArrowDown, IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

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
              <li>Уникальность</li>
              <li>Преимущества</li>
              <li>Партнерство</li>
              <li>OEM</li>
              <li>Отзывы</li>
            </ul>
          </li>

          <li className="header__nav__list">
            Каталог <IoMdArrowDropdown />
            <ul className="dropdown">
              <li>Моторные масла</li>
              <li>Трансмиссионные масла</li>
              <li>Антифризы</li>
            </ul>
          </li>

          <li className="header__nav__list">
            Подбор масла <IoMdArrowDropdown />
            <ul className="dropdown">
              <li>По авто</li>
              <li>По параметрам</li>
            </ul>
          </li>

          <li className="header__nav__list">
            Где купить <IoMdArrowDropdown />
            <ul className="dropdown">
              <li>Дистрибьюторы</li>
              <li>Интернет-магазины</li>
              <li>Офлайн-магазины</li>
            </ul>
          </li>

          <li className="header__nav__list">
            База знаний <IoMdArrowDropdown />
            <ul className="dropdown">
              <li>FAQ</li>
              <li>Статьи</li>
              <li>Видео</li>
            </ul>
          </li>

          <li className="header__nav__list">Контакты</li>
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
