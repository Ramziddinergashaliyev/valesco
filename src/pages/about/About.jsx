import React from 'react'
import img from "../../assets/images/about.png"
import "./about.scss"
import { MISSION } from '../../static'

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
        </div>
      </div>
    </div>
  )
}

export default About