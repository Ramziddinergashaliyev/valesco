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
    window.scrollTo(0,0)
  },[])

  const Data = [
    {
      country: 'АЗЕРБАЙДЖАН',
      distributor: 'ООО «Мурад ЛТД»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'АРМЕНИЯ',
      distributor: 'Дистрибьютор ООО «Автофан Эй Си»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'БЕЛАРУСЬ',
      distributor: 'Armtek (ООО "Еврозапчасть")',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'ГРУЗИЯ',
      distributor: 'ООО «Грузавто Дистрибьюшн»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'КАЗАХСТАН',
      distributor: 'ТОО «КазАвтоТрейд»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'КЫРГЫЗСТАН',
      distributor: 'ОсОО «Бишкек Моторс»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'МОЛДОВА',
      distributor: 'SRL «Молдова Авто Парт»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'РОССИЯ',
      distributor: 'ООО «РосАвтоЗапчасть»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'ТАДЖИКИСТАН',
      distributor: 'ООО «Душанбе Авто»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'ТУРКМЕНИСТАН',
      distributor: 'ЧП «Ашхабад Моторс»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'УЗБЕКИСТАН',
      distributor: 'ООО «Ўзбек Авто Савдо»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    },
    {
      country: 'УКРАИНА',
      distributor: 'ТОВ «Українські Автозапчастини»',
      title: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
      number: ["994(18)6540909"],
      mail: "ofifice@muradltd.az"
    }
  ];

  const filterCountries = [
    'АЗЕРБАЙДЖАН',
    'АРМЕНИЯ',
    'БЕЛАРУСЬ',
    'ГРУЗИЯ',
    'КАЗАХСТАН',
    'КЫРГЫЗСТАН',
    'ТАДЖИКИСТАН'
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
        {filteredData.length === 0 ? (
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
                      <div className="distrbut-result-info-right">
                        <span className='distrbut-result-info-span'>Электронная почта</span>
                        <a href={`mailto:${el?.mail}`} className='distrbut-result-info-right-title'>
                          {el?.mail}
                        </a>
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