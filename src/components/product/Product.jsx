import React, { useState } from 'react'
import "./product.scss"
import { MdArrowOutward } from 'react-icons/md'
import filter from "../../assets/icons/filter.svg"
import img1 from "../../assets/icons/col-icn.svg"
import img2 from "../../assets/icons/row-icn.svg"
import { BOXS } from '../../static'
import { FiPlus } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Product = () => {
    const [hide, setHide] = useState(false)
    const [filterHide, setFilterHide] = useState(null)

    return (
        <div className='product container'>
            <h2 className="product-title">Моторные масла для легковой и легкой коммерческой техники</h2>
            <div className="product-top">
                <p className='product-top-text'>Для оптимального подбора продукта ZIC, соответствующего вашему автомобилю, пожалуйста, воспользуйтесь нашим модулем подбора масла.</p>
                <button className='product-top-btn'> Подобрать масло<MdArrowOutward /></button>
            </div>

            <div className="product-filter">
                <button onClick={() => setFilterHide(p => !p)} className='product-filter-left'>
                    <img src={filter} alt="filterImg" />
                    {filterHide ? 'Показать фильтр' : 'Скрыть фильтр'}
                </button>
                <div className="product-filter-right">
                    <button
                        onClick={() => setHide(false)}
                        className={`product-filter-right-info ${!hide ? 'active' : ''}`}
                    >
                        <img src={img2} alt="product-col-img" />
                    </button>
                    <button
                        onClick={() => setHide(true)}
                        className={`product-filter-right-info ${hide ? 'active' : ''}`}
                    >
                        <img src={img1} alt="product-row-img" />
                    </button>
                </div>
            </div>

            <div className={`product-filter-container ${filterHide ? 'show' : 'hide'}`}>
                <div className="product-filter-result">
                    <div className="product-filter-result-left animate-item" style={{ '--delay': '0.1s' }}>
                        <p className="product-filter-result-left-text">Линейка моторных масел</p>
                        <div className="product-filter-result-left-btns">
                            <button className="product-filter-result-left-btn">Top<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Zero<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Racing<FiPlus /></button>
                            <button className="product-filter-result-left-btn">X9<FiPlus /></button>
                            <button className="product-filter-result-left-btn">X7<FiPlus /></button>
                            <button className="product-filter-result-left-btn">X5<FiPlus /></button>
                        </div>
                    </div>
                    <div className="product-filter-result-left animate-item" style={{ '--delay': '0.2s' }}>
                        <p className="product-filter-result-left-text">Вязкость</p>
                        <div className="product-filter-result-left-btns">
                            <button className="product-filter-result-left-btn">0W - 20<FiPlus /></button>
                            <button className="product-filter-result-left-btn">0W - 30<FiPlus /></button>
                            <button className="product-filter-result-left-btn">5W - 30<FiPlus /></button>
                            <button className="product-filter-result-left-btn">0W - 40<FiPlus /></button>
                            <button className="product-filter-result-left-btn">5W - 40<FiPlus /></button>
                            <button className="product-filter-result-left-btn">0W - 16<FiPlus /></button>
                            <button className="product-filter-result-left-btn">10W - 50<FiPlus /></button>
                            <button className="product-filter-result-left-btn">10W - 40<FiPlus /></button>
                        </div>
                    </div>
                    <div className="product-filter-result-left animate-item" style={{ '--delay': '0.3s' }}>
                        <p className="product-filter-result-left-text">Допуск автопроизводителя</p>
                        <div className="product-filter-result-left-btns">
                            <button className="product-filter-result-left-btn">Mercedes-Benz<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Volvo<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Jaguar<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Land Rover<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Ford<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Chrysler<FiPlus /></button>
                            <button className="product-filter-result-left-btn">BMW<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Volkswagen<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Porsche<FiPlus /></button>
                            <button className="product-filter-result-left-btn">Audi<FiPlus /></button>
                        </div>
                    </div>
                </div>
            </div>

            {
                hide
                    ?
                    <div className="product-cards fade-in">
                        {
                            BOXS?.map((el, index) => (
                                <div key={el?.id} className="product-card animate-card" style={{ '--delay': `${index * 0.1}s` }}>
                                    <div className="product-card-img">
                                        <NavLink to={"/singleProduct"}>
                                           <img src={el?.img} alt="product-img" />
                                        </NavLink>
                                    </div>
                                    <div className="product-card-info">
                                        <h2 className="product-card-info-title">{el?.title}</h2>
                                        <p className="product-card-info-text">{el?.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="product-boxs fade-in">
                        {
                            BOXS?.map((el, index) => (
                                <div key={el?.id} className="product-box animate-box" style={{ '--delay': `${index * 0.1}s` }}>
                                    <div className="product-box-left">
                                        <div className="product-box-left-img">
                                            <NavLink to={"/singleProduct"}>
                                               <img src={el?.img} alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="product-box-left-info">
                                            <h2 className="product-box-left-info-title">{el?.title}</h2>
                                            <p className="product-box-left-info-text">{el?.text}</p>
                                        </div>
                                    </div>
                                    <NavLink to={"/singleProduct"}><button className='product-box-btn'>Подробнее<MdArrowOutward /></button></NavLink>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Product