import React, { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import './market.scss'

import img1 from "../../assets/icons/mark.jpg"
import img2 from "../../assets/icons/mark1.png"
import { useTranslation } from 'react-i18next'

const Market = () => {
    const [activeTab, setActiveTab] = useState('oil');
    const { t, i18n } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const marketplaces = [
    //     { name: img1, subtitle: 'МАРКЕТ', color: '#0060F0', bgColor: '#FFFFFF' },
    //     { name: img2, subtitle: 'АВТОЗАПЧАСТИ', color: 'red', bgColor: '#FFFFFF' },
    // ];

    return (
        <div className='market container'>
            <div className="market-top">
                {/* <h2 className="market-top-title">{t("Маркетплейсы")}</h2>
                <button className='market-top-btn'>
                    <ShoppingCart size={20} />
                    {t("Купить онлайн")}
                </button> */}
            </div>

            <h3 className="market-title">{t("Где купить")}</h3>

            <div className="market-place">

                <div className="market-place-top">
                    <div
                        className={`market-place-top-left ${activeTab === 'oil' ? 'active' : ''}`}
                        onClick={() => setActiveTab('oil')}>
                        {t("Масла")}
                    </div>
                    <div
                        className={`market-place-top-right ${activeTab === 'antifreeze' ? 'active' : ''}`}
                        onClick={() => setActiveTab('antifreeze')}>
                        {t("Антифризы")}
                    </div>
                    <div className={`sliding-indicator ${activeTab === 'antifreeze' ? 'right' : 'left'}`} />
                </div>

                <div className="market-place-content">
                    <div className="market-place-products">
                        <div className={`tab-content ${activeTab === 'oil' ? 'active' : ''}`}>
                            <div className="marketplace-grid">

                                <a href="https://exzap.uz/brands/VALESCO">
                                    <div className="marketplace-card-one">
                                        <div className="bottom-slide">{t("В магазин")}</div>
                                    </div>
                                </a>

                                <a href="https://uzum.uz/uz/search?query=valesco&needsCorrection=1">
                                    <div className="marketplace-card-two">
                                        <div className="bottom-slide">{t("В магазин")}</div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Market
