import React, { useEffect } from 'react'
import "./singleProduct.scss"

import img from "../../assets/images/pride1.jpg"
import Advantages from '../../components/advantages/Advantages'
import Packing from '../../components/packing/Packing'
import Specificat from '../../components/specificat/Specificat'
import Characterist from '../../components/characterist/Characterist'
import Document from '../../components/document/Document'

const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const data = [
        {
            id: 1,
            title: ["Гарантирует надежный пуск двигателя", "Продлевает срок службы двигателя"],
            title1: "backend",
            title2: "backend",
            title3: "backend",
            title4: "backend",
            title5: "backend",
            title6: "backend",
            title7: "backend"
        }
    ]

    return (
        <div className='single'>
            <div className="single-top container">
                <div className="single-top-left">
                    <div className="single-top-left-bottom-imgs">
                        <img src={img} alt="single img active" />
                        <img src={img} alt="single-middle img" />
                        <img src={img} alt="single-bottom img" />
                    </div>
                    <div className="single-top-left-img">
                        <img src={img} alt="" />
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
                    <li className="single-dropdown-item-list"><a href="#characterist">Характеристики</a></li>
                    <li className="single-dropdown-item-list"><a href="#document">Документация</a></li>
                </ul>
                <div className="single-dropdown-result">
                    <Advantages />
                    <Packing />
                    <Specificat />
                    <Characterist data={data} />
                    <Document />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct