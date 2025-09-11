import React, { useEffect, useState } from 'react'
import "./singleProduct.scss"

import img from "../../assets/images/pride1.jpg"
import Advantages from '../../components/advantages/Advantages'
import Packing from '../../components/packing/Packing'
import Specificat from '../../components/specificat/Specificat'
import Characterist from '../../components/characterist/Characterist'
import Document from '../../components/document/Document'
import { data, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import SingleLoading from '../../components/singleLoading/SingleLoading'

const ImageLoader = ({ src, alt, onClick, className, isActive }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    return (
        <div className={`image-container ${className || ''}`} onClick={onClick}>
            {loading && (
                <div className="image-loading">
                    <div className="image-spinner"></div>
                </div>
            )}
            {error ? (
                <div className="image-error">
                    <span>⚠️</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                        setLoading(false)
                        setError(true)
                    }}
                    className={`${loading ? 'loading' : ''} ${isActive ? 'active' : ''}`}
                />
            )}
        </div>
    )
}

const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const { id } = useParams()
    const { data: byData, isLoading } = useGetProductByIdQuery(id)
    const [activeImg, setActiveImg] = useState(null);

    useEffect(() => {
        if (byData?.image?.length > 0) {
            setActiveImg(byData.image[0]);
        }
    }, [byData]);

    return (
        <div className='single'>
            {
                isLoading
                    ?
                    <>
                        <SingleLoading />
                    </>
                    :
                    <>
                        <div className="single-top container">
                            <div className="single-top-left">
                                <div className="single-top-left-bottom-imgs">
                                    {byData?.image?.map((img, idx) => (
                                        <ImageLoader
                                            key={idx}
                                            src={img}
                                            alt={`product-${idx}`}
                                            onClick={() => setActiveImg(img)}
                                            className="thumb-img"
                                            isActive={activeImg === img}
                                        />
                                    ))}
                                </div>

                                <div className="single-top-left-img">
                                    {activeImg && (
                                        <ImageLoader
                                            src={activeImg}
                                            alt="single img active"
                                            className="main-img"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="single-top-right">
                                <h2 className="single-top-right-title">{byData?.title}</h2>
                                <p className="single-top-right-text">{byData?.description_ru}</p>
                                {
                                    byData?.category?.title?.ru === "Фильтры" || byData?.category?.title?.en === "Filters"
                                        ?
                                        <>
                                            <div className="info-card">
                                                <div className="row">
                                                    <span className="label">MODEL</span>
                                                </div>
                                                <div className="row">
                                                    <span className="value">{byData?.kinematic_one?.[0]}</span>
                                                </div>
                                                <div className="row">
                                                    <span className="label">TYPE</span>
                                                </div>
                                                <div className="row">
                                                    <span className="value">{byData?.kinematic_two?.[0]}</span>
                                                </div>
                                            </div>
                                        </>
                                        :
                                    <></>
                                }
                            </div>
                        </div>
                        {
                            byData?.category?.title?.ru === "Моторные масла для легковой и легкой коммерческой техники" || byData?.category?.title?.en === "Motor oils for passenger cars and light commercial vehicles"
                                ?
                                <div className="single-dropdown">
                                    <ul className="single-dropdown-item container">
                                        <li className="single-dropdown-item-list"><a href="#addvantages">Преимущества</a></li>
                                        <li className="single-dropdown-item-list"><a href="#packing">Фасовка и артикул</a></li>
                                        <li className="single-dropdown-item-list"><a href="#specy">Спецификации</a></li>
                                        <li className="single-dropdown-item-list"><a href="#characterist">Характеристики</a></li>
                                        <li className="single-dropdown-item-list"><a href="#document">Документация</a></li>
                                    </ul>
                                    <div className="single-dropdown-result">
                                        <Advantages data={byData?.info}/>
                                        <Packing data={byData} />
                                        <Specificat data={byData?.specifications} />
                                        <Characterist data={byData} />
                                        <Document />
                                    </div>
                                </div>
                                :
                                <></>
                        }

                        {
                            byData?.category?.title?.ru === "Моторные масла для дизельных двигателей" || byData?.category?.title?.en === "Motor oils for diesel engines"
                                ?
                                <div className="single-dropdown">
                                    <ul className="single-dropdown-item container">
                                        <li className="single-dropdown-item-list"><a href="#addvantages">Преимущества</a></li>
                                        <li className="single-dropdown-item-list"><a href="#packing">Фасовка и артикул</a></li>
                                        <li className="single-dropdown-item-list"><a href="#specy">Спецификации</a></li>
                                        <li className="single-dropdown-item-list"><a href="#characterist">Характеристики</a></li>
                                        <li className="single-dropdown-item-list"><a href="#document">Документация</a></li>
                                    </ul>
                                    <div className="single-dropdown-result">
                                        <Advantages data={byData?.info} />
                                        <Packing data={byData} />
                                        <Specificat data={byData?.specifications} />
                                        <Characterist data={byData} />
                                        <Document />
                                    </div>
                                </div>
                                :
                                <></>
                        }

                        {
                            byData?.category?.title?.ru === "Трансмиссионные масла" || byData?.category?.title?.en === "Transmission oils"
                                ?
                                <div className="single-dropdown">
                                    <ul className="single-dropdown-item container">
                                        <li className="single-dropdown-item-list"><a href="#addvantages">Преимущества</a></li>
                                        <li className="single-dropdown-item-list"><a href="#packing">Фасовка и артикул</a></li>
                                        <li className="single-dropdown-item-list"><a href="#specy">Спецификации</a></li>
                                        <li className="single-dropdown-item-list"><a href="#characterist">Характеристики</a></li>
                                        <li className="single-dropdown-item-list"><a href="#document">Документация</a></li>
                                    </ul>
                                    <div className="single-dropdown-result">
                                        <Advantages data={byData?.info}/>
                                        <Packing data={byData} />
                                        <Specificat data={byData?.specifications} />
                                        <Characterist data={byData} />
                                        <Document />
                                    </div>
                                </div>
                                :
                                <></>
                        }

                        {
                            byData?.category?.title?.ru === "Гидравлические масла" || byData?.category?.title?.en === "Hydraulic oils"
                                ?
                                <div className="single-dropdown">
                                    <ul className="single-dropdown-item container">
                                        <li className="single-dropdown-item-list"><a href="#addvantages">Преимущества</a></li>
                                        <li className="single-dropdown-item-list"><a href="#packing">Фасовка и артикул</a></li>
                                        <li className="single-dropdown-item-list"><a href="#specy">Спецификации</a></li>
                                        <li className="single-dropdown-item-list"><a href="#characterist">Характеристики</a></li>
                                        <li className="single-dropdown-item-list"><a href="#document">Документация</a></li>
                                    </ul>
                                    <div className="single-dropdown-result">
                                        <Advantages data={byData?.info}/>
                                        <Packing data={byData} />
                                        <Specificat data={byData?.specifications} />
                                        <Characterist data={byData} />
                                        <Document />
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </>
            }

        </div>
    )
}

export default SingleProduct