import React from 'react'
import img from "../../assets/images/about.png"
import "./about.scss"
import { MISSION, NETWORKS } from '../../static'
import img1 from "../../assets/images/hero-2.jpg"

const About = () => {
  return (
    <div className='container about'>
      <div className="about__top">
        <h2 className="about__top-title">О компании SK Enmove</h2>
        <img className='about__top-img' src={img} alt="about-images" />
      </div>
      <div className="about__take">
        <h2 className="about__take-title">Кто мы такие</h2>
        <div className="about__take-info">
          <h2 className="about__take-info-title">
            Глобальный холдинг SK – мировой лидер в ключевых отраслях, определяющих образ будущего</h2>
          <p className="about__take-info-text">SK строит целые индустрии и инвестирует в бизнесы, которые меняют правила игры для всех участников. Мы отдаем приоритет долгосрочному успеху и благополучию в интересах будущих поколений.</p>

          <div className="about__take-info-cards">
            {
              MISSION?.map(el => (
                <div key={el.id} className="about__take-info-card">
                  <h2 className="about__take-info-card-title">{el?.price}</h2>
                  <p className="about__take-info-card-text">{el?.title}</p>
                </div>
              ))
            }
          </div>

          <div className="about-info">
            <p className="about-info-title">Для развития глобального бизнеса смазочных материалов ZIC и базового масла YUBASE в 2009 году была создана дочерняя компания SK Lubricants, ответственная за развитие направления, в том числе на территории России и стран СНГ, где масла ZIC продаются с 1998 года.</p>
            <p className="about-info-text"><span>В 2022 году компания официально сменила название на SK Enmove,</span> чтобы отразить обновлённую бизнес-стратегию и курс на экологическую безопасность.</p>
          </div>

          <div className="about-imgs">
            <img src={img1} alt="about img" className="about-imgs-img" />
            <div className="about-imgs-info">
              <p className="about-imgs-info-title"><span>SK Enmove - мировой лидер по поставке синтетических базовых масел группы III по классификации API.</span> Мы предлагаем качественные решения для различных потребностей клиентов благодаря собственным технологиям, опережающим время.</p>
              <p className="about-imgs-info-text">Мы ответственно ведем бизнес и производим базовые масла и смазочные материалы с заботой об окружающей среде.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about__networks">
        <h2 className="about__networks-title">отрасли</h2>
        <div className="about__networks__cards">
          {
            NETWORKS?.map(el => (
              <div key={el?.id} className="about__networks__card">
                <div className="about__networks__card-info">
                  <h2 className='about__networks__card-info-title'>{el?.title}</h2>
                  <p className='about__networks__card-info-text'>{el?.text}</p>
                </div>
                <div className="about__networks__card-imgs">
                  <img src={el?.img} alt={el?.title} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About