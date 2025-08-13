import React, { useState } from 'react'
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

const Distrbut = () => {
  const [hide, setHide] = useState(null)

  const Data = [
    {
      country: 'АЗЕРБАЙДЖАН',
      distributor: 'ООО «Мурад ЛТД»'
    },
    {
      country: 'АРМЕНИЯ',
      distributor: 'Дистрибьютор ООО «Автофан Эй Си»'
    },
    {
      country: 'БЕЛАРУСЬ',
      distributor: 'Armtek (ООО "Еврозапчасть")'
    },
    {
      country: 'ГРУЗИЯ',
      distributor: 'ООО «Грузавто Дистрибьюшн»'
    },
    {
      country: 'КАЗАХСТАН',
      distributor: 'ТОО «КазАвтоТрейд»'
    },
    {
      country: 'КЫРГЫЗСТАН',
      distributor: 'ОсОО «Бишкек Моторс»'
    },
    {
      country: 'МОЛДОВА',
      distributor: 'SRL «Молдова Авто Парт»'
    },
    {
      country: 'РОССИЯ',
      distributor: 'ООО «РосАвтоЗапчасть»'
    },
    {
      country: 'ТАДЖИКИСТАН',
      distributor: 'ООО «Душанбе Авто»'
    },
    {
      country: 'ТУРКМЕНИСТАН',
      distributor: 'ЧП «Ашхабад Моторс»'
    },
    {
      country: 'УЗБЕКИСТАН',
      distributor: 'ООО «Ўзбек Авто Савдо»'
    },
    {
      country: 'УКРАИНА',
      distributor: 'ТОВ «Українські Автозапчастини»'
    }
  ];

  return (
    <div className='distrbut container'>
      <div className="distrbut-info">
        <h2 className="distrbut-info-title">дистрибьюторы</h2>
        <p className="distrbut-info-text">Вы можете приобрести подлинные масла у наших официальных дистрибьюторов.</p>
      </div>

      <div className="distrbut-filter">
        <button onClick={() => setHide(p => !p)} className='distrbut-filter-btn'><img src={img} alt="filter-img" />Скрыть фильтр</button>
        <div className={`distrbut-filter-box ${hide ? "distrbut-filter-box-hide" : ""}`}>
          <button className='distrbut-filter-box-info'>Азербайджан <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Армения <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Беларусь <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Грузия <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Казахстан <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Киргизия <CgMathPlus /></button>
          <button className='distrbut-filter-box-info'>Таджикистан <CgMathPlus /></button>
        </div>
      </div>

      <div className="distrbut-result">
        {
          Data?.map(el => (
            <>
              <p>{el?.country}</p>
              <div>
                <Accordion className='distrbut-result-title'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{el?.distributor}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          ))
        }
      </div>

    </div>
  )
}

export default Distrbut