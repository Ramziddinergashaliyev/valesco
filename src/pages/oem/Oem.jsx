import React, { useEffect, useState } from 'react'
import img from "../../assets/images/oem.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import "./oem.scss"

const Oem = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='oem container'>
      <div className="oem-top">
        <h2 className="oem-top-title">OEM</h2>
        <div className="oem-top-img">
          <img src={img} alt="oem-img" />
        </div>
      </div>

      <div className="oem-accardion">
        <h2 className="oem-accardion-title">Автопроизводители</h2>
        <div className="oem-accardion-info">
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              className='oem-accardion-info-title'
              id="panel1-header"
            >
              <Typography component="span">General Motors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Американская корпорация General Motors была крупнейшим мировым автопроизводителем 77 лет подряд с 1931 по 2007 год И сейчас компания уверенно входит в тройку мировых лидеров наряду с Toyota и Volkswagen. <br />На заводах компании, расположенных в 37 странах, выпускаются автомобили таких популярных марок, как Chevrolet, Opel, Cadillac, Buick, GMC, Vauxhall и других. </p>
              <p className='oem-accardion-info-desc'>Компания SK с 2010 года поставляет для General Motors жидкость для автоматических коробок передач. Это масло используется для заводской заливки на предприятиях в Северной Америке (США, Канада, Мексика), Австралии и Южной Корее.</p>
              <p className='oem-accardion-info-desc'>В конце 2013 года SK выиграла тендер и получила право помимо Dexron VI поставлять и моторные масла для бензиновых двигателей ZIC dexos 1 с вязкостями 5W-30, 0W-20 и 5W-20.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Kia Motors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Корейские автопроизводители Хёндэ (Hyundai Motors) и Киа (KIA Motors) составляют единую структуру Hyundai Motor Group. По итогам 2012 года группа вошла в пятерку крупнейших мировых автопроизводителей, продав более семи миллионов машин.</p>
              <p className='oem-accardion-info-desc'>Инженеры обеих компаний плотно взаимодействуют между собой. Как результат многие ключевые автокомпоненты, такие как двигатели и коробки передач, этих компаний унифицированы. Также в Хёндэ и Киа, как правило, поддерживаются единообразные стандарты регулярного технического обслуживания: интервалы и требования к применяемым материалам, в том числе и карта смазки.</p>
              <p className='oem-accardion-info-desc'>Компании SK и Hyundai Motor Group связывают давние тесные связи. SK поставляет различные масла и жидкости на заводы компаний вот уже несколько десятилетий. Автоинженеры Hyundai и технические специалисты SK регулярно встречаются по рабочим вопросам. В результате столь плотного взаимодействия появились многие смазочные материалы, применяемые в автомобилях Хёндэ и Киа. Все эти продукты ZIC поставляются на заводы Хёндэ Мотор Групп в Южной Корее, Китае, Индии, Турции, России, Словакии, Чехии, США и Бразилии.</p>
              <p className='oem-accardion-info-desc'>В скором будущем с развитием технологий ожидается появление новых специальных масел и жидкостей ZIC для Хёндэ и Киа.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Avtovaz</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>АвтоВАЗ – российская автомобилестроительная компания, крупнейший производитель легковых автомобилей в России и Восточной Европе. Контролирует компанию альянс Renault-Nissan и Ростех. Из 46 заводов альянса только АвтоВАЗ имеет полный цикл производства автомобилей под 4 брендами (LADA, Renault, Nissan и Datsun). На 2016 год рыночная доля продаж Lada в России составила 20%.</p>
              <p className='oem-accardion-info-desc'>Чтобы соответствовать званию надежного отечественного автопроизводителя, АвтоВАЗ плотно сотрудничает с крупнейшим поставщиком базовых масел третьей группы – SK. Масла ZIC имеют не только допуск АвтоВАЗа, но еще и поставляют жидкость для гидроусилителя руля на заводы автопроизводителя в качестве первой заливки.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Daewoo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Южнокорейская компания Daewoo, что в переводе с корейского означает «Великая вселенная», была основана в 1967 году, но в 1992 совместно с узбекской компанией «Узавтосаноат» было создано «UZ-DAEWOO». Производство автомобилей осуществляется в Узбекистане, а в России Daewoo остается одним из самых продаваемых брендов. Компания UZ-DAEWOO с 2002 года является частью концерна General Motors, с которыми уже давно сотрудничает SK.</p>
              <p className='oem-accardion-info-desc'>Компания SK осуществляет поставку на завод UZ-DAEWOO в Узбекистане синтетической жидкости для автоматических трансмиссий.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Doosan Infracore</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Doosan Infracore - южнокорейская корпорация, занимающая 7 место в мире по выпуску экскаваторной, дорожно-строительной и специальной техники. Годовой оборот компании составляет 11 млрд долларов. <br />Продукцией компании являются колесные и гусеничные экскаваторы, фронтальные погрузчики, карьерная техника и шарнирно-сочлененные самосвалы, перегружатели металла и леса, миниэкскаваторы и разрушители. Заводы компании располагаются в Южной Корее, Китае и Бельгии. Doosan Infracore выпускает более 50 000 единиц техники в год по всему миру.</p>
              <p className='oem-accardion-info-desc'>Doosan на русском языке означает примерно следующее: "небольшие горки песка, сложенные вместе, образуют могущественную и нерушимую гору". Это означает, что большого успеха можно добиться только объединив все усилия вместе. Философия Doosan отражается даже в выборе комплектующих и расходных материалов для техники. В соответствии с этим Doosan очень тщательно подходит к выбору смазочных материалов для первой заливки при производстве своей техники, так как во многом от этого зависит надежная эксплуатация техники в гарантийный и постгарантийный период.</p>
              <p className='oem-accardion-info-desc'>Именно поэтому компания SK была выбрана в качестве надежного поставщика гидравлических масел самого высокого качества для первой заливки в технику Doosan.  Масло предназначено для использования в мобильных гидравлических системах строительной, карьерной и другой техники, работающих в жестких условиях экстремальных температур и давлений.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Foton</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Китайский автопроизводитель Foton (Beiqi Futian Motor Co., Ltd) производит легковые автомобили, внедорожники, микроавтобусы, большие городские автобусы, грузовые автомобили, двигатели, тракторы и сельскохозяйственную технику.   Компания является одним из ключевых предприятий Китая и имеет репутацию ведущей Компании в автомобильной промышленности Китая. Слоган компании: "техника Foton - надежный выбор для любой сферы применения!" Для первой заливки используются моторные и трансмиссионные масла, производимые компанией SK. На завод данные масла поступают под маркировкой Foton Genuine Unit. На российском рынке данные масла реализуются под брендом ZIC. Смазочные материалы ZIC – надежные масла для любых условий применения!</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Hyundai</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Корейские автопроизводители Хёндэ (Hyundai Motors) и Киа (KIA Motors) составляют единую структуру Hyundai Motor Group. По итогам 2012 года группа вошла в пятерку крупнейших мировых автопроизводителей, продав более семи миллионов машин.</p>
              <p className='oem-accardion-info-desc'>Инженеры обеих компаний плотно взаимодействуют между собой. Как результат многие ключевые автокомпоненты, такие как двигатели и коробки передач, этих компаний унифицированы. Также в Хёндэ и Киа, как правило, поддерживаются единообразные стандарты регулярного технического обслуживания: интервалы и требования к применяемым материалам, в том числе и карта смазки.</p>
              <p className='oem-accardion-info-desc'>Компании SK и Hyundai Motor Group связывают давние тесные связи. SK поставляет различные масла и жидкости на заводы компаний вот уже несколько десятилетий. Автоинженеры Hyundai и технические специалисты SK регулярно встречаются по рабочим вопросам. В результате столь плотного взаимодействия появились многие смазочные материалы, применяемые в автомобилях Хёндэ и Киа. Все эти продукты ZIC поставляются на заводы Хёндэ Мотор Групп в Южной Корее, Китае, Индии, Турции, России, Словакии, Чехии, США и Бразилии.</p>
              <p className='oem-accardion-info-desc'>В скором будущем с развитием технологий ожидается появление новых специальных масел и жидкостей ZIC для Хёндэ и Киа.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Hyundai Heavy Industries</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Hyundai Heavy Industries (HHI) – южнокорейский многопрофильный концерн, один из мировых лидеров в производстве тяжелой техники и судостроения. Например, на компанию приходится 17% объёма мирового производства судов, 30% объёма мирового производства судовых двигателей. Основным направлением Департамента по производству специальной техники (подразделение Hyundai Heavy Industries) является разработка и производство различной строительной техники: экскаваторов, погрузчиков и других. Ежегодно компания выпускает около 35 000 единиц специальной техники. Сотрудничество SK и Hyundai Heavy Industries носит многолетний успешный характер. SK является официальным поставщиком гидравлического масла первой заливки. Значение слова Hyundai трактуется как "современность", что полностью отражает стратегию развития. Поэтому соответствовать жестким требованиям HHI по гидравлическим маслам – уже серьезный уровень, который гарантирует качество работы смазочных материалов ZIC в тяжелых условиях. Эти смазочные материалы предназначены для использования в мобильных гидравлических системах строительной, карьерной и другой техники, работающих в жестких условиях экстремальных температур и давлений.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Nissan</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Альянс Рено-Ниссан (Renault-Nissan Alliance) - это стратегическое партнерство французского и японского производителей автомобильной техники. В состав Альянса входят автосборочные заводы по всему миру (Япония, Франция, Китай, США, Россия, Корея, Индия и т.д.). Количество произведенных автомобилей предприятиями Альянса в 2013 году составило более 8-и млн. шт.</p>
              <p className='oem-accardion-info-desc'>Компания SK с 2012 года является официальным поставщиком на заводы Альянса Рено-Ниссан в России, Корее, Индии и Турции. Поставляемые на заводы продукты SK - масла первой заливки.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">POSCO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Posco – южнокорейская металлургическая компания, которая входит в топ-5 мировых производителей стали. POSCO специализируется на производстве горячекатаной стали, листовой стали для автомобильной промышленности, а также нержавеющей стали. На южнокорейском рынке реализуется 70% продукции POSCO, 30% поставляется на экспорт. Компании принадлежат два завода в Корее: в Пхохане и Кванъяне.</p>
              <p className='oem-accardion-info-desc'>На заводах Posco огромным установкам по литью стали необходимо работать без перерывов, выдерживая круглосуточные нагрузки. В этом им помогает смазочно-охлаждающая жидкость, которую производит такая же глобальная корпорация, входящая в список крупнейших компаний мира по версии рейтинга Fortune 500 – SK. А все потому что качество превыше всего!</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Renault</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Альянс Рено-Ниссан (Renault-Nissan Alliance) - это стратегическое партнерство французского и японского производителей автомобильной техники.
                В состав Альянса входят автосборочные заводы по всему миру (Япония, Франция, Китай, США, Россия, Корея,Индия и т.д.). Количество произведенных автомобилей предприятиями Альянса в 2013 году составило более 8-и млн. шт.</p>
              <p className='oem-accardion-info-desc'>Компания SK с 2012 года является официальным поставщиком на заводы Альянса Рено-Ниссан в России, Корее, Индии и Турции.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Samsung</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Samsung ассоциируется в основном с электронной техникой, но на самом деле компания стала производить автомобили еще в 1994 году под маркой SamsungMotors при участии компании Nissan. В 2000 году Renault приобрело 70% акций компании, так название поменялось на Renault-SamsungMotors. Компания располагается в Южной Корее и занимает довольно высокие позиции на автомобильном рынке, полностью контролируясь группой Renault. В настоящее время автомобильная марка Samsung известна только внутри страны, а на внешние рынки (в том числе и российский) корейские модели поставляются под брендом Renault и Nissan.</p>
              <p className='oem-accardion-info-desc'>Крупная компания должна соответствовать всем стандартам, поэтому Samsung начали сотрудничать с SK, чье масло ZIC стало маслом первой заливки на заводах Renault-Nissan. Качественное масло для качественных автомобилей!</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">SsangYong</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Корейская компания SsangYong Motor Company основана в 1954 году и с 1988 года SsangYong выпускает полноприводные внедорожники. В модельный ряд компании входят такие автомобили как Rexton, Kyron, Actyon, Actyon Sports, Stavic. <br />Особое внимание в любой внедорожной технике уделяется трансмиссионным маслам, т.к. элементы трансмиссии испытывают серьезные нагрузки при внедорожной эксплуатации. Именно поэтому компания SK была выбрана SsangYong Motor Company в качестве поставщика высококачественных трансмиссионных масел первой заливки.</p>
              <p className='oem-accardion-info-desc'>Данные масла произведены по технологии LOW SAPS (пониженное содержание сульфатной золы, фосфора и серы) и рекомендуются для использования в бензиновых и дизельных двигателях самых современных легковых автомобилей с турбонаддувом и без него, в том числе для автомобилей, отвечающих нормам Евро IV и выше, оснащенных самыми современными системами нейтрализации отработавших газов.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Volvo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Volvo – шведская автомобилестроительная компания, известная своими легковыми автомобилями, входит в концерн Volvo Group. В этот концерн входит еще и Volvo Construction Equipment, производящий строительно-дорожные машины. <br />Гусеничные и колесные экскаваторы – гордость компании. Эти экскаваторы обладают увеличенным временем межсервисных интервалов, что позволяет им работать с наименьшими затратами на обслуживание. Чтобы энергия не иссякала, необходимо использовать лучшее гидравлическое масло. Именно такое производит SK. Масло ZIC предназначено для применения в гидравлических системах экскаваторов и отвечает спецификациям Volvo, поэтому именно его выбирают во время первой заливки.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel15"} onChange={handleChange("panel15")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">XGMA</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className='oem-accardion-info-desc'>Завод XGMA выпускает широкий спектр современной строительной техники: фронтальные погрузчики, катки, автогрейдера, экскаваторы, бульдозера, вилочные погрузчики, коммунальную технику.</p>
              <p className='oem-accardion-info-desc'>Компания SK тесно сотрудничает с крупнейшим заводом в Китае по производству дорожно-строительной техники XGMA. <br />Вся эта техника требует значительных объемов смазочных материалов для различных узлов и агрегатов. Благодаря высокому качеству данных смазочных материалов обеспечивается беcперебойная и надежная работа техники в гарантийный период.</p>
              <p className='oem-accardion-info-desc'>Это тем более важно, т.к. строительная и землеройная техника работает порой в крайне тяжелых условиях эксплуатации (высокие нагрузки, критические температуры, пыльный воздух, круглосуточная работа и т.п.).  Надежная эксплуатация техники в этих условиях, а также сокращение сервисных простоев - это основные преимущества использования смазочных материалов Valesco.</p>
              s            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Oem