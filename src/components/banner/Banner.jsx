import React from 'react'
import './banner.scss'
import { MdArrowOutward } from 'react-icons/md'
import { BANNER } from '../../static'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__container container">
                <div className="banner__top">
                    <h2 className='banner__top-title'>Почему ZIC</h2>
                    <p className='banner__top-text'>
                        ZIC способствует повышению производительности двигателей
                        и обеспечивает превосходную защиту даже в экстремальных
                        климатических условиях.</p>
                </div>

                <div className="banner__cards">
                    {
                        BANNER?.map(el => (
                            <div key={el?.id} className="banner__card">
                                <h2 className="banner__card-title">{el?.title}</h2>
                                <p className='banner__card-text'>{el?.text}</p>
                                <p className="banner__card-desc">Узнать больше <MdArrowOutward /></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner