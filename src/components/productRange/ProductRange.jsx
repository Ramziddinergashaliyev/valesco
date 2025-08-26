import React from 'react'
import "./productRange.scss"
import { MdArrowOutward } from 'react-icons/md'
import { CATEGORY } from '../../static'
import { NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../context/api/categoryApi'

const ProductRange = () => {

    const { data } = useGetCategoriesQuery()
    console.log(data);


    return (
        <div className='productRange container'>
            <div className="productRange__container">
                <div className="productRange__info">
                    <h1 className="productRange__info-title">Широкая линейка продуктов</h1>
                    <h3 className="productRange__info-text">В России много разных машин. А у нас много разных масел, в том числе с допусками и спецификациями европейских и американских автопроизводителей.</h3>
                    <p className="productRange__info-desc">Воспользуйтесь нашим подборщиком, чтобы определить, какое масло подходит для вашей машины.</p>
                    <NavLink to={"/oil"} className="productRange__info-btn">
                        Подбери свой Valesco <MdArrowOutward />
                    </NavLink>
                </div>
                <div className="productRange__category">
                    {
                        data?.map(el => (
                            <NavLink to={`/categories/${el?.id}`}>
                                <div key={el?.id} className="productRange__card">
                                    <h2 className="productRange__card-title">{el?.title?.ru}</h2>
                                    <div className='productRange__card-bottom'><p className='productRange__card-bottom-text'>Узнать больше</p><span><MdArrowOutward /></span> </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductRange