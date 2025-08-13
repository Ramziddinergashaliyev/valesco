import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./faq.scss";

const faqData = [
  {
    q: "Как узнать дату производства продуктов ZIC",
    a: "На лицевую этикетку каждой из канистр наносится номер партии масла и дата производства, указанная по американско-корейским правилам — сначала пишется год, потом месяц и дата."
  },
  {
    q: "Одинаковое масло иногда имеет разный цвет и запах. Свидетельствует ли это о браке?",
    a: "Да, такое может иногда случаться. В некоторых случаях для производства масел с определенной вязкостью..."
  },
  {
    q: "Что означает термин «энергосберегающее масло» и зачем он нужен?",
    a: "Энергосбережение включает в себя уменьшение расхода топлива..."
  },
  {
    q: "Синтетическое масло имеет больший интервал замены по сравнению с минеральным?",
    a: "В этом плане очень многое зависит от условий эксплуатации автомобиля..."
  },
  {
    q: "После замены масло в двигателе меняет цвет, что это значит?",
    a: "Потемнение масла это признак того, что оно нормально реализует свои моющие..."
  },
  {
    q: "Можно ли применять добавки в масло для улучшения его свойств?",
    a: "Каждое качественное моторное масло содержит индивидуально сбалансированный пакет присадок, каждая из которых отвечает за определенные функции моторного масла, любые дополнительные активные соединения могут нарушить химический баланс масла, что повлечет ухудшение его эксплуатационных характеристик. Большинство ведущих производителей моторных масел, в том числе корпорация SK высказывается против любых добавок в масло, не предусмотренных оригинальной технологией производства.s"
  },
  {
    q: "Как промывается КПП?",
    a: "Для изношенных КПП, находящихся в плохом техническом состоянии, промывка рекомендуется. Для КПП в нормальном состоянии этого не требуется."
  },
  {
    q: "Промывать или нет двигатель при замене масла?",
    a: "Рекомендуется промывать масляную систему двигателя перед сменой масла в двигателях, с большим сроком эксплуатации в изношенном состоянии. В двигателях с нормальным состоянием промывка не является обязательной. Практические замеры показали отсутствие разницы в двигателях, в которых применялась промывка, и в которых она не применялась."
  }
];

const Faq = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className='faq container'>
      <h2 className='faq-title'>FAQ</h2>
      <div className='faq-acc'>
        {faqData.slice(0, visibleCount).map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography component="span">{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.a}
            </AccordionDetails>
          </Accordion>
        ))}

        {visibleCount < faqData.length && (
          <button
            className="faq-load-more"
            onClick={handleLoadMore}
          >
            Загрузить еще
          </button>
        )}
      </div>
    </div>
  );
}

export default Faq;
