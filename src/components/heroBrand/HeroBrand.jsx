import React from 'react'
import "./heroBrand.scss"
import { MdArrowOutward } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const HeroBrand = () => {
    return (
        <div className='heroBrand '>
            <div className="container heroBrand__container">
                <h2 className="heroBrand__title">Бренд Valesco</h2>
                <div className="heroBrand__info">
                    <h3 className="heroBrand__info-title">
                        Бренд Valesco принадлежит компании по производству смазочных материалов SK Enmove.</h3>
                    <p className="heroBrand__info-text"><span>Наша главная цель</span> — это предоставлять продукты, которые опережают свое время, используя творческий подход и новейшие технологии.</p>
                    <NavLink to={"/about"}>
                       <button className="heroBrand__info-btn">Узнать больше<MdArrowOutward /></button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default HeroBrand