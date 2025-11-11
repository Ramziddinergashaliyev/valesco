import React, { useEffect, useState } from 'react'
import img from "../../assets/icons/filter.svg"
import "./distr.scss"

import { CgMathPlus } from "react-icons/cg";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";
import video from "../../assets/videos/dist.webm"

const Distr = () => {
  const [hide, setHide] = useState(null)
  const [activeFilters, setActiveFilters] = useState([])
  const { t, i18n } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Data = [
    {
      country: 'Украина',
      distributor: 'ТОВ «ПЕТОЛАВТО»',
      title: 'Пироговский путь, 34; Киев, 03083, Украина',
      number: ["+380(50)3146633"],
    },
    {
      country: 'Казахстан',
      distributor: 'TOO «AVTODETAIL»',
      title: 'Казахстан, Южно-Казахстанская область, 160021, город Шымкент, Абайский район, ул Байтулы баба 14А',
      number: ["77022837999"]
    },
    {
      country: 'Таджикистан',
      distributor: 'ООО «ТОСОЛ-ПЛЮС»',
      title: 'Таджикистан, Согдийская область, Дж. Расуловский район, пгт Мехробод ул. И. Нурматов 45/4',
      number: ["+992 92 707 49 86"]
    },
    {
      country: 'Туркменистан',
      distributor: 'ИП «НУРЫЕВ ГУВАНЧ ТАГАНДУРДЫЕВИЧ»',
      title: 'Туркменистан, Марыйский велаят, Векилбазар Этрап, Акгонур',
      number: ["+993 65 551008"]
    }
  ];

  const DataEN = [
    {
      country: 'Ukraine',
      distributor: 'LLC «PETOLAVTO»',
      title: 'Pirogovsky Way, 34; Kyiv, 03083, Ukraine',
      number: ["+380(50)3146633"],
    },
    {
      country: 'Kazakhstan',
      distributor: 'LLP «AVTODETAIL»',
      title: 'Kazakhstan, South Kazakhstan Region, 160021, Shymkent City, Abai District, 14A Baituly Baba St',
      number: ["77022837999"]
    },
    {
      country: 'Tajikistan',
      distributor: 'LLC «TOSOL-PLUS»',
      title: 'Tajikistan, Sughd Region, J. Rasulov District, Mehrobod Settlement, 45/4 I. Nurmatov St',
      number: ["+992 92 707 49 86"]
    },
    {
      country: 'Turkmenistan',
      distributor: 'IE «NURYYEV GUVANCH TAGANDURDYEVICH»',
      title: 'Turkmenistan, Mary Region, Vekilbazar District, Akgonur',
      number: ["+993 65 551008"]
    }
  ];

  const DATADISTURB = i18n?.languages[0] === "ru" ? Data : DataEN

  const filterCountries = [
    'Украина',
    'Казахстан',
    'Таджикистан',
    'Туркменистан'
  ];

  const filterCountriesEN = [
    'Ukraine',
    'Kazakhstan',
    'Tajikistan',
    'Turkmenistan'
  ];

  const distrbutData = i18n?.languages[0] === "ru" ? filterCountries : filterCountriesEN

  const handleFilterClick = (country) => {
    setActiveFilters(prev => {
      if (prev.includes(country)) {
        return prev.filter(f => f !== country)
      } else {
        return [...prev, country]
      }
    })
  }

  const filteredData = activeFilters.length === 0
    ? DATADISTURB
    : DATADISTURB.filter(item => activeFilters.includes(item.country))

  return (
    <div className='distr container'>
      {/* <div className="distr-info">
        <h2 className="distr-info-title">{t("дистрибьюторы")}</h2>
        <p className="distr-info-text">{t("Вы можете")}</p>
      </div> */}

      <div className="distr-filter">
        <button onClick={() => setHide(p => !p)} className='distr-filter-btn'>
          <img src={img} alt="filter-img" />
          {hide ? t("Показать фильтр") : t("Скрыть фильтр")}
        </button>

        <div className={`distr-filter-box ${hide ? "distr-filter-box-hide" : ""}`}>
          {distrbutData.map(country => (
            <button
              key={country}
              onClick={() => handleFilterClick(country)}
              className={`distr-filter-box-info ${activeFilters.includes(country) ? 'active' : ''}`}
            >
              {country === 'КЫРГЫЗСТАН' ? 'Киргизия' : country}
              <CgMathPlus />
            </button>
          ))}
        </div>
      </div>

      <div className="distr-result">
        {filteredData?.length === 0 ? (
          <p className="no-results">По выбранным фильтрам результатов не найдено</p>
        ) : (
          filteredData.map((el, index) => (
            <React.Fragment key={index}>
              <p className='distr-result-text'>{el?.country}</p>
              <div>
                <Accordion className='distr-result-title'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography component="span">{el?.distributor}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className='distr-result-bottom'>
                    <span>Адрес</span>
                    <p className='distr-result-bottom-text'>{el?.title}</p>
                    <div className="distr-result-info">
                      <div className="distr-result-info-left">
                        <span className='distr-result-info-span'>Телефон</span>
                        {el?.number?.map((phone, phoneIndex) => (
                          <a
                            key={phoneIndex}
                            href={`tel:${phone}`}
                            className="distr-result-info-left-title"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  )
}

export default Distr