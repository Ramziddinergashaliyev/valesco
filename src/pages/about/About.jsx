import React, { useEffect } from 'react'
import img from "../../assets/images/about.png"
import "./about.scss"
import { MISSION } from '../../static'
import img1 from "../../assets/images/hero-2.jpg"
import vd from "../../assets/videos/vd.mp4"
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t, i18n } = useTranslation()
  console.log(i18n.languages);
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='container about'>
      <div className="container">

        <div className="about__top">
          <h2 className="about__top-title">{t("company")}</h2>
          <video
            className='about__top-vd'
            src={vd}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="about__take">
          <h2 className="about__take-title">{t("Кто мы такие")}</h2>
          <div className="about__take-info">
            <h2 className="about__take-info-title">
              {t("Наша компания")}</h2>
            <p className="about__take-info-text">{t("начало")}</p>

            {/* <div className="about__take-info-cards">
              {
                MISSION?.map(el => (
                  <div key={el.id} className="about__take-info-card">
                    <h2 className="about__take-info-card-title">{el?.price}</h2>
                    <p className="about__take-info-card-text">{el?.title}</p>
                  </div>
                ))
              }
            </div> */}

            <div className="about-info">
              <p className="about-info-text">{t("производства")}</p>
              <p className="about-info-text">{t("Продукция компании")}</p>
            </div>

            <div className="about-imgs">
              <img src={img1} alt="about img" className="about-imgs-img" />
              <div className="about-imgs-info">
                <p className="about-imgs-info-text">{t("Так как")}</p>
              </div>
            </div>
          </div>
        </div>

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
  )
}

export default About