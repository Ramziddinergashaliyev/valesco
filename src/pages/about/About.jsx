import React, { useEffect } from 'react'
import img from "../../assets/images/about.png"
import "./about.scss"
import { MISSION } from '../../static'
import img1 from "../../assets/images/hero-2.jpg"
import vd from "../../assets/videos/vd.mp4"
import { useTranslation } from 'react-i18next'
import imgbg from "../../assets/images/aboutbg.webp"

const About = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='about'>
      <div className="">
        <div className="about__top container">
          <h2 className="about__take-title">{t("company")}</h2>
          <div className="about__top-img">
            <img src={imgbg} alt="" />
          </div>
        </div>

        <div className="about__middle">
          <div className="container about__take">
            <h2 className="about__take-title"></h2>
            <div className="about__take-info">
              {/* <h2 className="about__take-info-title">{t("Наша компания")}</h2>
              <p className="about__take-info-text">{t("начало")}</p> */}
              <h2 className="about__take-info-title">У нас вы найдете всё необходимое для надежной работы автомобиля:</h2>
              <p className="about__take-info-text">моторные масла для легковых и лёгких коммерческих машин, специальные масла для дизельных двигателей, трансмиссионные и гидравлические составы. В нашем ассортименте также представлены тормозные жидкости, антифризы и фильтры — всё, чтобы ваша техника служила дольше и работала безупречно.</p>

              {/* <div className="about-info">
                <p className="about-info-text">{t("производства")}</p>
                <p className="about-info-text">{t("Продукция компании")}</p>
              </div> */}

              <div className="about-info">
                <p className="about-info-text">С VALESCO ваш автомобиль всегда в надежных руках.</p>
                <p className="about-info-text">VALESCO знает, что каждый автомобиль уникален, и мы понимаем, что ему нужно! В нашем ассортименте — моторные масла и технические жидкости, проверенные по стандартам Европы, Америки и Азии. Используйте наш подборщик и узнайте, какое масло идеально подходит вашему автомобилю — быстро, просто и точно.</p>
              </div>

              {/* <div className="about-imgs">
                <div className="about-imgs-info">
                  <p className="about-info-text">{t("Так как")}</p>
                </div>
              </div> */}
                  <p className="about-info-text">С VALESCO ваш автомобиль получает только лучшее.</p>
            </div>
          </div>
        </div>

        <div className="about__take-info-cards container">
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