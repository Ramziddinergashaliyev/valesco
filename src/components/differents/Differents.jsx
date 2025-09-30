import React from 'react'
import "./differents.scss"
import { MdArrowOutward } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import img1 from "../../assets/images/differ1.jpg"
import img2 from "../../assets/images/differ2.jpg"
import { NavLink } from 'react-router-dom'

const Differents = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className='differents container'>
            <div className="differents__left">
                <h1 className="differents__left-title">{t("делает")}</h1>
                {/* <p className="differents__left-text">{t("большим")}</p>
                <p className="differents__left-desc"><span>Valesco</span> — {t("масел")}</p> */}
                <p className="differents__left-text">VALESCO знает, что каждый автомобиль уникален, и мы понимаем, что ему нужно! В нашем ассортименте — моторные масла и технические жидкости, проверенные по стандартам Европы, Америки и Азии. Используйте наш подборщик и узнайте, какое масло идеально подходит вашему автомобилю — быстро, просто и точно.</p>
                <p className="differents__left-desc">С VALESCO ваш автомобиль получает только лучшее.</p>
                <NavLink to={"/about"} className='differents__left-btn'>{t("Узнать больше")}<MdArrowOutward /></NavLink>
            </div>
            <div className="differents__right">
                <img className='differents__right-topImg' src={img1} alt="different img-top" />
                <img className='differents__right-bottomImg' src={img2} alt="different img-bottom" />
            </div>
        </div>
    )
}

export default Differents