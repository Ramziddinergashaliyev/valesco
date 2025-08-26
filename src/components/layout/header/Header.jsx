import React, { useState } from 'react'
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import "./header.scss"
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.png"
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from "react-icons/ai";
import { useGetCategoriesQuery } from '../../../context/api/categoryApi';

const Header = () => {
  const [searchHide, setSearchHide] = useState(false)
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [hide, setHide] = useState(false)
  const { data } = useGetCategoriesQuery()
  console.log(data);
  

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <>
      <header className='header'>
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <a href="/">
              <img src={logo} alt="header logo" />
            </a>
          </div>

          <ul className={`header__nav__item ${hide ? "header__nav__hide" : ""}`}>
            <button className='header__nav__btn'>{t("authCheck")}</button>
            <button onClick={() => setHide(false)} className='header__nav__close'><AiOutlineClose /></button>

            <li className="header__nav__list">
              SK Enmove <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/about">{t("company")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/news">{t("news")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/impact">{t("social")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/culture">{t("culture")}</NavLink></li>
              </ul>
            </li>

            <li className="header__nav__list">
              {t("catalog")} <IoMdArrowDropdown />
              <ul className="dropdown-item">
                {
                  data?.map(el => (
                    <li key={el?.id} onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to={`/categories/${el?.id}`}>{el?.title?.ru}</NavLink></li>
                  ))
                }
                
                {/* <li onClick={() => setHide(false)} className="dropdown-item-list">{t("Моторные масла для дизельных двигателей")}</li>
                <li onClick={() => setHide(false)} className="dropdown-item-list">{t("Тормозная жидкость")}</li>
                <li onClick={() => setHide(false)} className="dropdown-item-list">{t("Гидравлические масла")}</li>
                <li onClick={() => setHide(false)} className="dropdown-item-list">{t("Фильтры")}</li> */}
              </ul>
            </li>

            <li className="header__nav__list">
              {t("oilSelection")} <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/oil">{t("oilSelectionTitle")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/chinaAuto">{t("chinaCars")}</NavLink></li>
              </ul>
            </li>

            <li className="header__nav__list">
              {t("whereBuy")} <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/distrbut">{t("distributors")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to={"/outlets"}>{t("outlets")}</NavLink></li>
              </ul>
            </li>

            <li onClick={() => setHide(false)} className="header__nav__list"><NavLink to="/contact">{t("contacts")}</NavLink></li>
          </ul>

          <div className="header__nav__bottom">
            <div className="lang-dropdown">
              <select
                className="custom-select"
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>

            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setSearchHide(p => !p)}
              className='header__nav__bottom-search'
            >
              {!searchHide ? <FiSearch /> : <IoMdClose />}
            </span>

            <span onClick={() => setHide(true)} className='header__nav__bottom-menu'><FiMenu /></span>
          </div>
          {
            hide
              ?
              <>
                <div onClick={() => setHide(false)} className="header-overlay"></div>
              </>
              :
              <></>
          }
        </nav>
      </header>

      <div className={`header-search-result ${searchHide ? "header-search-result-hide" : ""}`}>
        <div className="header-search-result-form container">
          <div className="header-search-result-form-icon">
            <input placeholder={t("searchPlaceholder")} type="text" />
            <FiSearch />
          </div>
          <p className='header-search-result-form-text'>{t("searchHelp")}</p>
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
