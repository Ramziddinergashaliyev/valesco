import React, { useEffect } from 'react'
import "./otzive.scss"

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Otzive = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='otzive container'>
      <h2 className="otzive-title">SK Enmove - большая семья и мы ее ценим</h2>
      <div className="otzive-acc">
        <div></div>
        <div>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Моторное масло ZIC спасло мой двигатель...</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Началось всё с того, что я купила себе легендарный Mark2. Машина была с проблемами - питалась маслом :( Диагностики и проверки не дали никакого результата. Все говорили одно и то же, надо менять двигатель. Мой друг посоветовал мне использовать масло ZIC, Mark 2 как будто успокоился.  Перестал громко шуметь на  холостых оборотах, стал заводиться лучше в холодную погоду, и главное перестал, есть масло!   После смены масла расход топлива уменьшился с 17 литров на 100 км до 14 литров. К следующей замене масла я уже готова, поэтому приобрела канистру этого прекрасного масла на будущее.
            </AccordionDetails>
          </Accordion>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Использовали моторное масло ZIC Racing на протяжении 2020 и 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Использовали моторное масло ZIC Racing на протяжении 2020 и 2021 года в двигателях автомобилей участвующих в соревнованиях. Результаты использования этого масла выше всяких похвал! Уменьшился естественный расход масла до 1 литра на 3000 км, при учете что на другом высокопроизводительном масле другого бренда он составлял до 5ти литров. При дефектовке двигателей, были крайне удивлены, абсолютным отсутствием следов износа, и чистотой внутри ГБЦ. Даже на кулачках распредвалов отсутствовали какие либо видимые следы износа. Исходя из показаний датчика давления масла ZIC Racing создает достаточно высокое давление даже при интенсивном нагреве. Маслом довольны на 200%, планируем продолжать использовать!
            </AccordionDetails>
          </Accordion>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Здравствуйте! Хочу сказать Вам спасибо за ваш отличный продукт) За рулем уже </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Здравствуйте!
              Хочу сказать Вам спасибо за ваш отличный продукт) За рулем уже много лет, перепробовала кучу масел, но ваше не сравнится ни с чем) У машины как будто новая жизнь)
              С уважением и неисчерпаемой благодарностью, Наталья Бочкарева.
            </AccordionDetails>
          </Accordion>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Машина новая, пробег всего 2300 км. Решил заменить заводскую </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Машина новая, пробег всего 2300 км. Решил заменить заводскую полусинтетику на синтетику ZIC X9 5W-40 в мотор и G-FF 75W-85 в МКПП. Когда сливал старое масло оно было чёрным, так что думаю, надо менять масло на новых авто до 3000 км при езде по городу и где-то 4500 - 5000 по трассе.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Otzive