import React, { useState, useEffect } from 'react'
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import "./header.scss"
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo.png"
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from "react-icons/ai";
import { useGetCategoriesQuery } from '../../../context/api/categoryApi';
import { useSearchProductsQuery } from '../../../context/api/productApi';

const Header = () => {
  const [searchHide, setSearchHide] = useState(false)
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [hide, setHide] = useState(false)
  const { data } = useGetCategoriesQuery()
  const [value, setValue] = useState("")
  const [localSearch, setLocalSearch] = useState(null)
  const navigate = useNavigate()

  const { data: searchData, isLoading } = useSearchProductsQuery(
    { query: value },
    { skip: !value.trim() } 
  );

  const handleChange = (e) => {
    const val = e.target.value
    setValue(val)
    if (!val.trim()) {
      setLocalSearch(null) 
    }
  }

  useEffect(() => {
    if (searchData) setLocalSearch(searchData)
  }, [searchData])

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const handleClick = (id) => {
    navigate(`/singleProduct/${id}`)
    setValue("")
    setSearchHide(false)
  }

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
              {/* SK Enmove <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/about">{t("company")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/news">{t("news")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/impact">{t("social")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/culture">{t("culture")}</NavLink></li>
              </ul> */}
              
            </li>
            <li onClick={() => setHide(false)} className="header__nav__list"><NavLink to="/about">{t("company")}</NavLink></li>


            <li className="header__nav__list">
              {t("catalog")} <IoMdArrowDropdown />
              <ul className="dropdown-item">
                {
                  data?.map((el, inx) => (
                    <li key={inx} onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to={`/categories/${el?.id}`}>{el?.title?.ru}</NavLink></li>
                  ))
                }
              </ul>
            </li>

            {/* <li className="header__nav__list">
              {t("oilSelection")} <IoMdArrowDropdown />
              <ul className="dropdown-item">
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/oil">{t("oilSelectionTitle")}</NavLink></li>
                <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/chinaAuto">{t("chinaCars")}</NavLink></li>
              </ul>
            </li> */}

            <li onClick={() => setHide(false)} className="dropdown-item-list"><NavLink to="/distrbut">{t("distributors")}</NavLink></li>

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
          {hide && <div onClick={() => setHide(false)} className="header-overlay"></div>}
        </nav>
      </header>

      <div className={`header-search-result ${searchHide ? "header-search-result-hide" : ""}`}>
        <div className="header-search-result-form container">
          <div className="header-search-result-form-icon">
            <input 
              value={value} 
              onChange={handleChange} 
              placeholder={t("searchPlaceholder")} 
              type="text" 
            />
            <FiSearch />
          </div>
          <p className='header-search-result-form-text'>{t("searchHelp")}</p>
        </div>

        <div className="header-search-info container">
          {isLoading && value && <p className='header-search-info-loading'>Загрузка...</p>}

          {!isLoading && localSearch?.length === 0 && value && (
            <p className='header-search-info-loading'>Ничего не найдено</p>
          )}

          {!isLoading && value && localSearch?.map((el, idx) => (
            <div key={idx} className="header-search-info-item">
              {el?.image?.[0] ? (
                  <img onClick={() => handleClick(el?.id)} src={el.image[0]} alt={el.title} className="header-search-info-item-img" />
              ) : (
                <img src="/placeholder.png" alt="no-img" className="header-search-info-item-img" />
              )}
              <p className="header-search-info-item-title">{el?.title}</p>
            </div>
          ))}
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
