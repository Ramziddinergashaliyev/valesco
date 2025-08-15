import React, { useEffect } from 'react'
import "./singleProduct.scss"

import img from "../../assets/images/pride1.jpg"
import Advantages from '../../components/advantages/Advantages'
import Packing from '../../components/packing/Packing'
import Specificat from '../../components/specificat/Specificat'

const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='single'>
            <div className="single-top container">
                <div className="single-top-left">
                    <div className="single-top-left-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="single-top-left-bottom-imgs">
                        <img src={img} alt="single img" />
                        <img src={img} alt="single-middle img" />
                        <img src={img} alt="single-bottom img" />
                    </div>
                </div>
                <div className="single-top-right">
                    <h2 className="single-top-right-title">ZIC TOP ES 0W-20</h2>
                    <p className="single-top-right-text">Полностью синтетическое моторное масло</p>
                    <p className="single-top-right-text">Полностью синтетическое моторное масло с повышенной топливной экономичностью и превосходными низкотемпературными свойствами для современных бензиновых двигателей, в том числе, с непосредственным впрыском топлива (TFSI, FSI, GDI, EcoBoost и др.), и дизельных двигателей легковых автомобилей, а также для гибридных силовых установок.</p>
                    <p className="single-top-right-text">Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла YUBASE PLUS в сочетании с современным низкозольным пакетом присадок (Low SAPS).</p>
                </div>
            </div>

            <div className="single-dropdown">
                <ul className="single-dropdown-item container">
                    <li className="single-dropdown-item-list"><a href="#addvantages">Преимущества</a></li>
                    <li className="single-dropdown-item-list"><a href="#packing">Фасовка и артикул</a></li>
                    <li className="single-dropdown-item-list"><a href="#specy">Спецификации</a></li>
                    <li className="single-dropdown-item-list">Характеристики</li>
                    <li className="single-dropdown-item-list">Документация</li>
                </ul>
                <div className="single-dropdown-result">
                    <Advantages/>
                    <Packing/>
                    <Specificat/>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct