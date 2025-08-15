import React from 'react'
import "./prideArea.scss"
import { MdArrowOutward } from 'react-icons/md'
import { PRIDE } from '../../static'
import { NavLink } from 'react-router-dom'


const PrideArea = () => {
    return (
        <div className='prideArea'>
            <div className="prideArea__container container">
                <div className="prideArea__top">
                    <h2 className="prideArea__top-title">Наша гордость</h2>
                    <p className="prideArea__top-text"><span>Масла на полностью синтетической основе</span> – новая премиальная линейка
                        продукции ZIC TOP. Теперь доступны и в России!
                    </p>
                </div>
                <div className="prideArea__bottom">
                    <button className='prideArea__bottom-btn'>Все премиальные продукты<MdArrowOutward /></button>
                    <div className="prideArea__bottom-cards">
                        {
                            PRIDE?.map(el => (
                                <div key={el?.id} className="prideArea__bottom-card">
                                    <div className="prideArea__bottom-card-img">
                                        <NavLink to={"/singleProduct"}>
                                           <img src={el?.img} alt={el?.title} />
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