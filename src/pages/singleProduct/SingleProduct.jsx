import React, { useEffect } from 'react'
import "./singleProduct.scss"

import img from "../../assets/images/pride1.jpg"
import Advantages from '../../components/advantages/Advantages'
import Packing from '../../components/packing/Packing'
import Specificat from '../../components/specificat/Specificat'
import Characterist from '../../components/characterist/Characterist'
import Document from '../../components/document/Document'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import SingleLoading from '../../components/singleLoading/SingleLoading'

const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const { id } = useParams()
    const { data: byData, isLoading } = useGetProductByIdQuery(id)
    console.log(byData);

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
                                {/* <div className="single-top-left-bottom-imgs">
                                    <img src={img} alt="single img active" />
                                    <img src={img} alt="single-middle img" />
                                    <img src={img} alt="single-bottom img" />
                                </div> */}
                                <div className="single-top-left-img">
                                    <img src={byData?.image[0]} alt="" />
                                </div>
                            </div>
                            <div className="single-top-right">
                                <h2 className="single-top-right-title">{byData?.title}</h2>
                                <p className="single-top-right-text">{byData?.description_ru}</p>
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
                                <Packing data={byData?.packing} />
                                <Specificat data={byData?.specifications} />
                                <Characterist data={byData} />
                                <Document />
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}

export default SingleProduct