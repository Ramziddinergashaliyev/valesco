import React, { useEffect, useState } from 'react'
import img from "../../assets/icons/filter.svg"
import "./distrbut.scss"
import { CgMathPlus } from "react-icons/cg";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { MdArrowOutward } from "react-icons/md";

const Distrbut = () => {
  const [hide, setHide] = useState(null)
  const [activeFilters, setActiveFilters] = useState([])

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

  const filterCountries = [
    'Украина',
    'Казахстан',
    'Таджикистан',
    'Туркменистан'
  ];

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
    ? Data
    : Data.filter(item => activeFilters.includes(item.country))

  return (
    <div className='distrbut container'>
      <div className="distrbut-info">
        <h2 className="distrbut-info-title">дистрибьюторы</h2>
        <p className="distrbut-info-text">Вы можете приобрести подлинные масла у наших официальных дистрибьюторов.</p>
      </div>

      <div className="distrbut-filter">
        <button onClick={() => setHide(p => !p)} className='distrbut-filter-btn'>
          <img src={img} alt="filter-img" />
          {hide ? 'Показать фильтр' : 'Скрыть фильтр'}
        </button>
        <div className={`distrbut-filter-box ${hide ? "distrbut-filter-box-hide" : ""}`}>
          {filterCountries.map(country => (
            <button
              key={country}
              onClick={() => handleFilterClick(country)}
              className={`distrbut-filter-box-info ${activeFilters.includes(country) ? 'active' : ''}`}
            >
              {country === 'КЫРГЫЗСТАН' ? 'Киргизия' : country}
              <CgMathPlus />
            </button>
          ))}
        </div>
      </div>

      <div className="distrbut-result">
        {filteredData?.length === 0 ? (
          <p className="no-results">По выбранным фильтрам результатов не найдено</p>
        ) : (
          filteredData.map((el, index) => (
            <React.Fragment key={index}>
              <p className='distrbut-result-text'>{el?.country}</p>
              <div>
                <Accordion className='distrbut-result-title'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography component="span">{el?.distributor}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className='distrbut-result-bottom'>
                    <span>Адрес</span>
                    <p className='distrbut-result-bottom-text'>{el?.title}</p>
                    <div className="distrbut-result-info">
                      <div className="distrbut-result-info-left">
                        <span className='distrbut-result-info-span'>Телефон</span>
                        {el?.number?.map((phone, phoneIndex) => (
                          <a
                            key={phoneIndex}
                            href={`tel:${phone}`}
                            className="distrbut-result-info-left-title"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                    <button className='distrbut-result-info-btn'>
                      Перейти на сайт<MdArrowOutward />
                    </button>
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

export default Distrbut