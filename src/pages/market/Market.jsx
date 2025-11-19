// import React, { useEffect, useState } from 'react'
// import "./market.scss"
// import { IoCart } from 'react-icons/io5'

// const Market = () => {
//     const [activeTab, setActiveTab] = useState('oil');

//     useEffect(() => {
//         scrollTo(0, 0)
//     }, [])

//     return (
//         <div className='market container'>
//             <div className="market-top">
//                 <h2 className="market-top-title">Где купить</h2>
//                 <button className='market-top-btn'><IoCart /> Купить онлайн</button>
//             </div>

//             <h3 className="market-title">Маркетплейсы</h3>

//             <div className="market-place">
//                 <div className="market-place-top">
//                     <div
//                         className={`market-place-top-left ${activeTab === 'oil' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('oil')}>
//                         Масла
//                     </div>
//                     <div
//                         className={`market-place-top-right ${activeTab === 'antifreeze' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('antifreeze')}>
//                         Антифризы
//                     </div>
//                     <div className={`sliding-indicator ${activeTab === 'antifreeze' ? 'right' : 'left'}`} />
//                 </div>

//                 <div className="market-place-content">
//                     <div className="market-place-products">
//                         <div className={`tab-content ${activeTab === 'oil' ? 'active' : 'inactive-left'}`}>
//                             <h2>Масла</h2>
//                             <p>Контент для масел...</p>
//                         </div>

//                         <div className={`tab-content ${activeTab === 'antifreeze' ? 'active' : 'inactive-right'}`}>
//                             <h2>Антифризы</h2>
//                             <p>Контент для антифризов...</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Market

// import React, { useEffect, useState } from 'react'
// import { ShoppingCart } from 'lucide-react'
// import './market.scss'

// const Market = () => {
//     const [activeTab, setActiveTab] = useState('oil');

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])

//     const marketplaces = [
//         { name: 'Uzum', subtitle: 'МАРКЕТ', color: '#FFF', bgColor: '#DC1F26', badge: '' },
//         { name: 'Exzap', subtitle: 'АВТОЗАПЧАСТИ', color: '#E41F26', bgColor: '#FFFFFF', border: true }
//     ];

//     return (
//         <div className='market container'>
//             <div className="market-top">
//                 <h2 className="market-top-title">Маркетплейсы</h2>
//                 <button className='market-top-btn'>
//                     <ShoppingCart size={20} />
//                     Купить онлайн
//                 </button>
//             </div>

//             <h3 className="market-title">Где купить</h3>

//             <div className="market-place">
//                 <div className="market-place-top">
//                     <div
//                         className={`market-place-top-left ${activeTab === 'oil' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('oil')}>
//                         Масла
//                     </div>
//                     <div
//                         className={`market-place-top-right ${activeTab === 'antifreeze' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('antifreeze')}>
//                         Антифризы
//                     </div>
//                     <div className={`sliding-indicator ${activeTab === 'antifreeze' ? 'right' : 'left'}`} />
//                 </div>

//                 <div className="market-place-content">
//                     <div className="market-place-products">
//                         <div className={`tab-content ${activeTab === 'oil' ? 'active' : ''}`} key={`oil-${activeTab}`}>
//                             <div className="marketplace-grid">
//                                 {marketplaces.map((marketplace, index) => (
//                                     <div
//                                         key={`oil-${marketplace.name}`}
//                                         className="marketplace-card"
//                                         style={{
//                                             backgroundColor: marketplace.bgColor,
//                                             border: marketplace.border ? '2px solid #E5E5E5' : 'none',
//                                             animationDelay: `${index * 100}ms`
//                                         }}>
//                                         {marketplace.badge && (
//                                             <div className="marketplace-badge">
//                                                 {marketplace.badge}
//                                             </div>
//                                         )}
//                                         <div className="marketplace-content">
//                                             <h4 
//                                                 className="marketplace-name"
//                                                 style={{ color: marketplace.color }}>
//                                                 {marketplace.name}
//                                             </h4>
//                                             {marketplace.subtitle && (
//                                                 <p 
//                                                     className="marketplace-subtitle"
//                                                     style={{ color: marketplace.color }}>
//                                                     {marketplace.subtitle}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className={`tab-content ${activeTab === 'antifreeze' ? 'active' : ''}`} key={`antifreeze-${activeTab}`}>
//                             <div className="marketplace-grid">
//                                 {marketplaces.map((marketplace, index) => (
//                                     <div
//                                         key={`antifreeze-${marketplace.name}`}
//                                         className="marketplace-card"
//                                         style={{
//                                             backgroundColor: marketplace.bgColor,
//                                             border: marketplace.border ? '2px solid #E5E5E5' : 'none',
//                                             animationDelay: `${index * 100}ms`
//                                         }}>
//                                         {marketplace.badge && (
//                                             <div className="marketplace-badge">
//                                                 {marketplace.badge}
//                                             </div>
//                                         )}
//                                         <div className="marketplace-content">
//                                             <h4 
//                                                 className="marketplace-name"
//                                                 style={{ color: marketplace.color }}>
//                                                 {marketplace.name}
//                                             </h4>
//                                             {marketplace.subtitle && (
//                                                 <p 
//                                                     className="marketplace-subtitle"
//                                                     style={{ color: marketplace.color }}>
//                                                     {marketplace.subtitle}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Market

import React, { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import './market.scss'

import img1 from "../../assets/icons/mark.jpg"
import img2 from "../../assets/icons/mark1.png"

const Market = () => {
    const [activeTab, setActiveTab] = useState('oil');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const marketplaces = [
    //     { name: 'UZUM', subtitle: 'МАРКЕТ', color: '#0060F0', bgColor: '#FFFFFF' },
    //     { name: 'EXZAP', subtitle: 'АВТОЗАПЧАСТИ', color: 'red', bgColor: '#FFFFFF' },
    // ];

    const marketplaces = [
        { name: img1, subtitle: 'МАРКЕТ', color: '#0060F0', bgColor: '#FFFFFF' },
        { name: img2, subtitle: 'АВТОЗАПЧАСТИ', color: 'red', bgColor: '#FFFFFF' },
    ];

    return (
        <div className='market container'>
            <div className="market-top">
                <h2 className="market-top-title">Маркетплейсы</h2>
                <button className='market-top-btn'>
                    <ShoppingCart size={20} />
                    Купить онлайн
                </button>
            </div>
            <h3 className="market-title">Где купить</h3>

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
                        <div className={`tab-content ${activeTab === 'oil' ? 'active' : ''}`}>
                            <div className="marketplace-grid">
                                <a href="https://exzap.uz/brands/VALESCO">
                                    <div className="marketplace-card-one">
                                        <div className="bottom-slide">В магазин</div>
                                    </div>
                                </a>

                                <a href="https://uzum.uz/uz/search?query=valesco&needsCorrection=1">
                                    <div className="marketplace-card-two">
                                        <div className="bottom-slide">В магазин</div>
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
