import React from 'react'
import "./prideArea.scss"
import { MdArrowOutward } from 'react-icons/md'
import { PRIDE } from '../../static'
import { NavLink } from 'react-router-dom'
import { useGetProductsQuery } from '../../context/api/productApi'
import { useGetCategoriesByIdQuery } from '../../context/api/categoryApi'

const PrideArea = () => {
    const { data } =useGetCategoriesByIdQuery(10)
    console.log(data?.products);
    
    return (
        <div className='prideArea'>
            <div className="prideArea__container container">
                <div className="prideArea__top">
                    <h2 className="prideArea__top-title">Наша гордость</h2>
                    <p className="prideArea__top-text"><span>Масла на полностью синтетической основе</span> – новая премиальная линейка
                        продукции Valesco TOP. Теперь доступны и в России!
                    </p>
                </div>
                <div className="prideArea__bottom">
                    <NavLink to={"/productItem"}>
                        <button className='prideArea__bottom-btn'>Все премиальные продукты<MdArrowOutward /></button>
                    </NavLink>
                    <div className="prideArea__bottom-cards">
                        {
                            data?.products?.slice(0,3)?.map(el => (
                                <div key={el?.id} className="prideArea__bottom-card">
                                    <div className="prideArea__bottom-card-img">
                                        <NavLink to={`/singleProduct/${el.id}`}>
                                            <img src={el?.image[0]} alt={el?.title} />
                                        </NavLink>
                                    </div>
                                    <h3 className="prideArea__bottom-card-title">{el?.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrideArea