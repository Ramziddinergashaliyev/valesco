// import React, { useEffect, useState } from 'react'
// import img from "../../assets/icons/filter.svg"
// import "./distrbut.scss"

// import { CgMathPlus } from "react-icons/cg";
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import { MdArrowOutward } from "react-icons/md";
// import { useTranslation } from "react-i18next";
// import video from "../../assets/videos/dist.webm"

// const Distrbut = () => {
//   const [hide, setHide] = useState(null)
//   const [activeFilters, setActiveFilters] = useState([])
//   const { t, i18n } = useTranslation()
  
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   const Data = [
//     {
//       country: 'Украина',
//       distributor: 'ТОВ «ПЕТОЛАВТО»',
//       title: 'Пироговский путь, 34; Киев, 03083, Украина',
//       number: ["+380(50)3146633"],
//     },
//     {
//       country: 'Казахстан',
//       distributor: 'TOO «AVTODETAIL»',
//       title: 'Казахстан, Южно-Казахстанская область, 160021, город Шымкент, Абайский район, ул Байтулы баба 14А',
//       number: ["77022837999"]
//     },
//     {
//       country: 'Таджикистан',
//       distributor: 'ООО «ТОСОЛ-ПЛЮС»',
//       title: 'Таджикистан, Согдийская область, Дж. Расуловский район, пгт Мехробод ул. И. Нурматов 45/4',
//       number: ["+992 92 707 49 86"]
//     },
//     {
//       country: 'Туркменистан',
//       distributor: 'ИП «НУРЫЕВ ГУВАНЧ ТАГАНДУРДЫЕВИЧ»',
//       title: 'Туркменистан, Марыйский велаят, Векилбазар Этрап, Акгонур',
//       number: ["+993 65 551008"]
//     }
//   ];

//   const DataEN = [
//     {
//       country: 'Ukraine',
//       distributor: 'LLC «PETOLAVTO»',
//       title: 'Pirogovsky Way, 34; Kyiv, 03083, Ukraine',
//       number: ["+380(50)3146633"],
//     },
//     {
//       country: 'Kazakhstan',
//       distributor: 'LLP «AVTODETAIL»',
//       title: 'Kazakhstan, South Kazakhstan Region, 160021, Shymkent City, Abai District, 14A Baituly Baba St',
//       number: ["77022837999"]
//     },
//     {
//       country: 'Tajikistan',
//       distributor: 'LLC «TOSOL-PLUS»',
//       title: 'Tajikistan, Sughd Region, J. Rasulov District, Mehrobod Settlement, 45/4 I. Nurmatov St',
//       number: ["+992 92 707 49 86"]
//     },
//     {
//       country: 'Turkmenistan',
//       distributor: 'IE «NURYYEV GUVANCH TAGANDURDYEVICH»',
//       title: 'Turkmenistan, Mary Region, Vekilbazar District, Akgonur',
//       number: ["+993 65 551008"]
//     }
//   ];

//   const DATADISTURB = i18n?.languages[0] === "ru" ? Data : DataEN

//   const filterCountries = [
//     'Украина',
//     'Казахстан',
//     'Таджикистан',
//     'Туркменистан'
//   ];

//   const filterCountriesEN = [
//     'Ukraine',
//     'Kazakhstan',
//     'Tajikistan',
//     'Turkmenistan'
//   ];

//   const distrbutData = i18n?.languages[0] === "ru" ? filterCountries : filterCountriesEN

//   const handleFilterClick = (country) => {
//     setActiveFilters(prev => {
//       if (prev.includes(country)) {
//         return prev.filter(f => f !== country)
//       } else {
//         return [...prev, country]
//       }
//     })
//   }
         
//   const filteredData = activeFilters.length === 0
//     ? DATADISTURB
//     : DATADISTURB.filter(item => activeFilters.includes(item.country))

//   return (
//     <div className='distrbut container'>
//       <div className="distrbut-info">
//         <h2 className="distrbut-info-title">{t("дистрибьюторы")}</h2>
//         <p className="distrbut-info-text">{t("Вы можете")}</p>
//       </div>
    
//       <div className="distrbut-filter">
//         <button onClick={() => setHide(p => !p)} className='distrbut-filter-btn'>
//           <img src={img} alt="filter-img" />
//           {hide ? t("Показать фильтр") : t("Скрыть фильтр")}
//         </button>

//         <div className={`distrbut-filter-box ${hide ? "distrbut-filter-box-hide" : ""}`}>
//           {distrbutData.map(country => (
//             <button
//               key={country}
//               onClick={() => handleFilterClick(country)}
//               className={`distrbut-filter-box-info ${activeFilters.includes(country) ? 'active' : ''}`}
//             >
//               {country === 'КЫРГЫЗСТАН' ? 'Киргизия' : country}
//               <CgMathPlus />
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="distrbut-result">
//         {filteredData?.length === 0 ? (
//           <p className="no-results">По выбранным фильтрам результатов не найдено</p>
//         ) : (
//           filteredData.map((el, index) => (
//             <React.Fragment key={index}>
//               <p className='distrbut-result-text'>{el?.country}</p>
//               <div>
//                 <Accordion className='distrbut-result-title'>
//                   <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls={`panel${index}-content`}
//                     id={`panel${index}-header`}
//                   >
//                     <Typography component="span">{el?.distributor}</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails className='distrbut-result-bottom'>
//                     <span>Адрес</span>
//                     <p className='distrbut-result-bottom-text'>{el?.title}</p>
//                     <div className="distrbut-result-info">
//                       <div className="distrbut-result-info-left">
//                         <span className='distrbut-result-info-span'>Телефон</span>
//                         {el?.number?.map((phone, phoneIndex) => (
//                           <a
//                             key={phoneIndex}
//                             href={`tel:${phone}`}
//                             className="distrbut-result-info-left-title"
//                           >
//                             {phone}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </AccordionDetails>
//                 </Accordion>
//               </div>
//             </React.Fragment>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// export default Distrbut

import React, { useState } from 'react';
import { MapPin, Users, Package, TrendingUp } from 'lucide-react';
import "./distrbut.scss"

const Distrbut = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const distributors = [
    {
      id: 1,
      country: 'Украина',
      city: 'Киев',
      position: { top: '45%', left: '58%' },
      distributors: 12,
      products: 450,
      growth: '+25%',
      color: '#3B82F6'
    },
    {
      id: 2,
      country: 'Казахстан',
      city: 'Шымкент',
      position: { top: '35%', left: '62%' },
      distributors: 18,
      products: 680,
      growth: '+32%',
      color: '#10B981'
    },
    {
      id: 4,
      country: 'Таджикистан',
      city: 'Расуловский район',
      position: { top: '48%', left: '38%' },
      distributors: 28,
      products: 890,
      growth: '+42%',
      color: '#F59E0B'
    },
    {
      id: 5,
      country: 'Туркменистан',
      city: 'Марыйский велаят',
      position: { top: '58%', left: '52%' },
      distributors: 35,
      products: 1050,
      growth: '+38%',
      color: '#EF4444'
    }
  ];

  return (
    <div className="distributor-container">
      <div className="map-container">
        
        <svg className="world-map" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g className="continents">
            <path d="M 280 120 L 320 130 L 350 120 L 380 140 L 360 160 L 340 165 L 310 155 L 285 145 Z" />
            
            <path d="M 400 140 L 520 130 L 620 150 L 680 140 L 720 160 L 700 200 L 650 220 L 580 210 L 520 190 L 460 180 L 420 170 Z" />
            
            <path d="M 380 180 L 420 190 L 450 210 L 440 240 L 400 250 L 370 235 L 360 210 Z" />
            
            <path d="M 300 200 L 350 210 L 380 250 L 390 300 L 370 350 L 330 360 L 290 340 L 270 300 L 280 250 Z" />
            
            <path d="M 100 100 L 180 90 L 220 110 L 240 140 L 220 170 L 180 160 L 140 150 L 100 130 Z" />
            
            <path d="M 200 260 L 240 270 L 250 310 L 240 360 L 210 380 L 180 360 L 170 320 L 185 280 Z" />
            
            <path d="M 720 300 L 780 310 L 800 340 L 780 360 L 730 350 L 710 330 Z" />
          </g>

          <g className="connections">
            {distributors.map((dist, index) => 
              distributors.slice(index + 1).map((target, i) => (
                <line
                  key={`${index}-${i}`}
                  className="connection-line"
                  x1={parseFloat(dist.position.left) * 10}
                  y1={parseFloat(dist.position.top) * 10}
                  x2={parseFloat(target.position.left) * 10}
                  y2={parseFloat(target.position.top) * 10}
                />
              ))
            )}
          </g>
        </svg>

        {distributors.map((dist) => (
          <div
            key={dist.id}
            className={`marker ${selectedCountry?.id === dist.id ? 'active' : ''} ${hoveredCountry?.id === dist.id ? 'hovered' : ''}`}
            style={{
              top: dist.position.top,
              left: dist.position.left,
              '--marker-color': dist.color
            }}
            onMouseEnter={() => setHoveredCountry(dist)}
            onMouseLeave={() => setHoveredCountry(null)}
            onClick={() => setSelectedCountry(selectedCountry?.id === dist.id ? null : dist)}
          >
            <div className="marker-pulse" style={{ borderColor: dist.color }}></div>
            <div className="marker-inner" style={{ backgroundColor: dist.color }}>
              <MapPin size={20} />
            </div>
            
            {/* Tooltip */}
            <div className="marker-tooltip">
              <p className="tooltip-country">{dist.country}</p>
              <p className="tooltip-city">{dist.city}</p>
            </div>
          </div>
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        {distributors.map((dist) => (
          <div
            key={dist.id}
            className={`info-card ${selectedCountry?.id === dist.id ? 'selected' : ''}`}
            style={{ '--card-color': dist.color }}
            onClick={() => setSelectedCountry(selectedCountry?.id === dist.id ? null : dist)}
          >
            <div className="card-header">
              <div className="card-icon" style={{ backgroundColor: `${dist.color}20`, color: dist.color }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="card-country">{dist.country}</h3>
                <p className="card-city">{dist.city}</p>
              </div>
            </div>
            <div className="card-stats">
              <div className="card-stat">
                <Users size={16} />
                <span>{dist.distributors} distributorlar</span>
              </div>
              <div className="card-stat">
                <Package size={16} />
                <span>{dist.products} mahsulot</span>
              </div>
              <div className="card-stat">
                <TrendingUp size={16} />
                <span className="growth">{dist.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distrbut;