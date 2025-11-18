import React, { useEffect, useState } from 'react'
import "./market.scss"
import { IoCart } from 'react-icons/io5'

const Market = () => {
    const [activeTab, setActiveTab] = useState('oil');

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    return (
        <div className='market container'>
            <div className="market-top">
                <h2 className="market-top-title">Где купить</h2>
                <button className='market-top-btn'><IoCart /> Купить онлайн</button>
            </div>
            
            <h3 className="market-title">Маркетплейсы</h3>

            <div className="market-place">
                <div className="market-place-top">
                    <div
                        className={`market-place-top-left ${activeTab === 'oil' ? 'active' : ''}`}
                        onClick={() => setActiveTab('oil')}>
                        Масла
                    </div>
                    <div
                        className={`market-place-top-right ${activeTab === 'antifreeze' ? 'active' : ''}`}
                        onClick={() => setActiveTab('antifreeze')}>
                        Антифризы
                    </div>
                    <div className={`sliding-indicator ${activeTab === 'antifreeze' ? 'right' : 'left'}`} />
                </div>

                <div className="market-place-content">
                    <div className="market-place-products">
                        <div className={`tab-content ${activeTab === 'oil' ? 'active' : 'inactive-left'}`}>
                            <h2>Масла</h2>
                            <p>Контент для масел...</p>
                        </div>

                        <div className={`tab-content ${activeTab === 'antifreeze' ? 'active' : 'inactive-right'}`}>
                            <h2>Антифризы</h2>
                            <p>Контент для антифризов...</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Market