// import React, { useEffect, useState } from 'react'
// import "./singleProduct.scss"
// import Advantages from '../../components/advantages/Advantages'
// import Packing from '../../components/packing/Packing'
// import Specificat from '../../components/specificat/Specificat'
// import Characterist from '../../components/characterist/Characterist'
// import Document from '../../components/document/Document'
// import { data, NavLink, useParams } from 'react-router-dom'
// import { useGetProductByIdQuery } from '../../context/api/productApi'
// import SingleLoading from '../../components/singleLoading/SingleLoading'
// import { useTranslation } from 'react-i18next'
// import { useGetCategoriesByIdQuery } from '../../context/api/categoryApi'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const ImageLoader = ({ src, alt, onClick, className, isActive }) => {
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(false)

//     return (
//         <div className={`image-container ${className || ''}`} onClick={onClick}>
//             {loading && (
//                 <div className="image-loading">
//                     <div className="image-spinner"></div>
//                 </div>
//             )}
//             {error ? (
//                 <div className="image-error">
//                     <span>⚠️</span>
//                 </div>
//             ) : (
//                 <img
//                     src={src}
//                     alt={alt}
//                     onLoad={() => setLoading(false)}
//                     onError={() => {
//                         setLoading(false)
//                         setError(true)
//                     }}
//                     className={`${loading ? 'loading' : ''} ${isActive ? 'active' : ''}`}
//                 />
//             )}
//         </div>
//     )
// }

// const SingleProduct = () => {
//     const { t, i18n } = useTranslation()
//     const { data: Freezee } = useGetCategoriesByIdQuery(25)
//     const { data: FILTER } = useGetCategoriesByIdQuery(14)
//     const { data: BREAKE } = useGetCategoriesByIdQuery(12)
//     const FREEZEEDATA = Freezee?.products
//     const FILTERDATA = FILTER?.products
//     const BREAKEDATA = BREAKE?.products
//     console.log(FILTERDATA);

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])

//     const { id } = useParams()
//     const { data: byData, isLoading } = useGetProductByIdQuery(id)
//     const [activeImg, setActiveImg] = useState(null);

//     useEffect(() => {
//         if (byData?.image?.length > 0) {
//             setActiveImg(byData.image[0]);
//         }
//     }, [byData]);

//     return (
//         <div className='single'>
//             {
//                 isLoading
//                     ?
//                     <>
//                         <SingleLoading />
//                     </>
//                     :
//                     <>
//                         <div className="single-top container">
//                             <div className="single-top-left">
//                                 <div className="single-top-left-bottom-imgs">
//                                     {byData?.image?.map((img, idx) => (
//                                         <ImageLoader
//                                             key={idx}
//                                             src={img}
//                                             alt={`product-${idx}`}
//                                             onClick={() => setActiveImg(img)}
//                                             className="thumb-img"
//                                             isActive={activeImg === img}
//                                         />
//                                     ))}
//                                 </div>

//                                 <div className="single-top-left-img">
//                                     {activeImg && (
//                                         <ImageLoader
//                                             src={activeImg}
//                                             alt="single img active"
//                                             className="main-img"
//                                         />
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="single-top-right">
//                                 <h2 className="single-top-right-title">{byData?.title}</h2>
//                                 <p className="single-top-right-text">
//                                     {
//                                         i18n?.languages[0] === "ru"
//                                             ?
//                                             byData?.description_ru
//                                             :
//                                             byData?.description_en
//                                     }
//                                 </p>
//                                 {
//                                     byData?.category?.title?.ru === "Фильтры" || byData?.category?.title?.en === "Filters"
//                                         ?
//                                         <>
//                                             <div className="info-card">
//                                                 <div className="row">
//                                                     <span className="label">MODEL</span>
//                                                 </div>
//                                                 <div className="row">
//                                                     <span className="value">{byData?.kinematic_one?.[0]}</span>
//                                                 </div>
//                                                 <div className="row">
//                                                     <span className="label">TYPE</span>
//                                                 </div>
//                                                 <div className="row">
//                                                     <span className="value">{byData?.kinematic_two?.[0]}</span>
//                                                 </div>
//                                             </div>
//                                         </>
//                                         :
//                                         <></>
//                                 }
//                             </div>
//                         </div>
//                         {
//                             byData?.category?.title?.ru === "Моторные масла для легковой и легкой коммерческой техники" || byData?.category?.title?.en === "Motor oils for passenger cars and light commercial vehicles"
//                                 ?
//                                 <div className="single-dropdown">
//                                     <ul className="single-dropdown-item container">
//                                         <li className="single-dropdown-item-list"><a href="#addvantages">{t("Преимущества")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#packing">{t("Фасовка и артикул")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#specy">{t("Спецификации")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#characterist">{t("Характеристики")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#document">{t("Документация")}</a></li>
//                                     </ul>
//                                     <div className="single-dropdown-result">
//                                         <Advantages data={byData?.info} />
//                                         <Packing data={byData} />
//                                         <Specificat data={byData?.specifications} />
//                                         <Characterist data={byData} />
//                                         <Document data={byData?.documents} />
//                                     </div>
//                                 </div>
//                                 :
//                                 <></>
//                         }

//                         {
//                             byData?.category?.title?.ru === "Моторные масла для дизельных двигателей" || byData?.category?.title?.en === "Motor oils for diesel engines"
//                                 ?
//                                 <div className="single-dropdown">
//                                     <ul className="single-dropdown-item container">
//                                         <li className="single-dropdown-item-list"><a href="#addvantages">{t("Преимущества")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#packing">{t("Фасовка и артикул")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#specy">{t("Спецификации")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#characterist">{t("Характеристики")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#document">{t("Документация")}</a></li>
//                                     </ul>
//                                     <div className="single-dropdown-result">
//                                         <Advantages data={byData?.info} />
//                                         <Packing data={byData} />
//                                         <Specificat data={byData?.specifications} />
//                                         <Characterist data={byData} />
//                                         <Document data={byData?.documents} />
//                                     </div>
//                                 </div>
//                                 :
//                                 <></>
//                         }

//                         {
//                             byData?.category?.title?.ru === "Трансмиссионные масла" || byData?.category?.title?.en === "Transmission oils"
//                                 ?
//                                 <div className="single-dropdown">
//                                     <ul className="single-dropdown-item container">
//                                         <li className="single-dropdown-item-list"><a href="#addvantages">{t("Преимущества")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#packing">{t("Фасовка и артикул")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#specy">{t("Спецификации")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#characterist">{t("Характеристики")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#document">{t("Документация")}</a></li>
//                                     </ul>
//                                     <div className="single-dropdown-result">
//                                         <Advantages data={byData?.info} />
//                                         <Packing data={byData} />
//                                         <Specificat data={byData?.specifications} />
//                                         <Characterist data={byData} />
//                                         <Document data={byData?.documents} />
//                                     </div>
//                                 </div>
//                                 :
//                                 <></>
//                         }

//                         {
//                             byData?.category?.title?.ru === "Гидравлические масла" || byData?.category?.title?.en === "Hydraulic oils"
//                                 ?
//                                 <div className="single-dropdown">
//                                     <ul className="single-dropdown-item container">
//                                         <li className="single-dropdown-item-list"><a href="#addvantages">{t("Преимущества")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#packing">{t("Фасовка и артикул")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#specy">{t("Спецификации")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#characterist">{t("Характеристики")}</a></li>
//                                         <li className="single-dropdown-item-list"><a href="#document">{t("Документация")}</a></li>
//                                     </ul>
//                                     <div className="single-dropdown-result">
//                                         <Advantages data={byData?.info} />
//                                         <Packing data={byData} />
//                                         <Specificat data={byData?.specifications} />
//                                         <Characterist data={byData} />
//                                         <Document data={byData?.documents} />
//                                     </div>
//                                 </div>
//                                 :
//                                 <></>
//                         }

//                         {
//                             byData?.category?.title?.ru === "Антифриз" || byData?.category?.title?.en === "Antifreeze"
//                                 ?
//                                 <>
//                                     <Swiper
//                                         modules={[Navigation, Pagination, Autoplay]}
//                                         spaceBetween={20}
//                                         slidesPerView={1}
//                                         navigation
//                                         loop={true}
//                                         pagination={{ clickable: true }}
//                                         autoplay={{ delay: 4000, disableOnInteraction: false }}
//                                         breakpoints={{
//                                             640: {
//                                                 slidesPerView: 2,
//                                                 spaceBetween: 20,
//                                             },
//                                             768: {
//                                                 slidesPerView: 3,
//                                                 spaceBetween: 30,
//                                             },
//                                             1024: {
//                                                 slidesPerView: 4,
//                                                 spaceBetween: 40,
//                                             },
//                                         }}
//                                         className="single-freezees container"
//                                     >
//                                         {
//                                             FREEZEEDATA?.map((el, index) => (
//                                                 <SwiperSlide key={index} className='single-freezee'>
//                                                     <NavLink to={`/singleProduct/${el?.id}`}>
//                                                         <div className="single-freezee-img">
//                                                             <img src={el?.image?.[1]} alt="single-freezee-im" />
//                                                         </div>
//                                                         <div className="single-freeze-item">
//                                                             <p className="single-freezee-item-text">{el?.title}</p>
//                                                         </div>
//                                                     </NavLink>
//                                                 </SwiperSlide>
//                                             ))
//                                         }
//                                     </Swiper>
//                                 </>
//                                 :
//                                 <></>
//                         }

//                          {
//                             byData?.category?.title?.ru === "Фильтры" || byData?.category?.title?.en === "Filters"
//                                 ?
//                                 <>
//                                     <Swiper
//                                         modules={[Navigation, Pagination, Autoplay]}
//                                         spaceBetween={20}
//                                         slidesPerView={1}
//                                         navigation
//                                         loop={true}
//                                         pagination={{ clickable: true }}
//                                         autoplay={{ delay: 4000, disableOnInteraction: false }}
//                                         breakpoints={{
//                                             640: {
//                                                 slidesPerView: 2,
//                                                 spaceBetween: 20,
//                                             },
//                                             768: {
//                                                 slidesPerView: 3,
//                                                 spaceBetween: 30,
//                                             },
//                                             1024: {
//                                                 slidesPerView: 4,
//                                                 spaceBetween: 40,
//                                             },
//                                         }}
//                                         className="single-freezees container"
//                                     >
//                                         {
//                                             FILTERDATA?.map((el, index) => (
//                                                 <SwiperSlide key={index} className='single-freezee'>
//                                                     <NavLink to={`/singleProduct/${el?.id}`}>
//                                                         <div className="single-freezee-img">
//                                                             <img src={el?.image?.[0]} alt="single-freezee-im" />
//                                                         </div>
//                                                         <div className="single-freeze-item">
//                                                             <p className="single-freezee-item-text">{el?.title}</p>
//                                                         </div>
//                                                     </NavLink>
//                                                 </SwiperSlide>
//                                             ))
//                                         }
//                                     </Swiper>
//                                 </>
//                                 :
//                                 <></>
//                         }

//                         {
//                             byData?.category?.title?.ru === "Тормозная жидкость" || byData?.category?.title?.en === "Brake fluid"
//                                 ?
//                                 <>
//                                     <Swiper
//                                         modules={[Navigation, Pagination, Autoplay]}
//                                         spaceBetween={20}
//                                         slidesPerView={1}
//                                         navigation
//                                         loop={true}
//                                         pagination={{ clickable: true }}
//                                         autoplay={{ delay: 4000, disableOnInteraction: false }}
//                                         breakpoints={{
//                                             640: {
//                                                 slidesPerView: 2,
//                                                 spaceBetween: 20,
//                                             },
//                                             768: {
//                                                 slidesPerView: 3,
//                                                 spaceBetween: 30,
//                                             },
//                                             1024: {
//                                                 slidesPerView: 4,
//                                                 spaceBetween: 40,
//                                             },
//                                         }}
//                                         className="single-freezees container"
//                                     >
//                                         {
//                                             BREAKEDATA?.map((el, index) => (
//                                                 <SwiperSlide key={index} className='single-freezee'>
//                                                     <NavLink to={`/singleProduct/${el?.id}`}>
//                                                         <div className="single-freezee-img">
//                                                             <img src={el?.image?.[0]} alt="single-freezee-im" />
//                                                         </div>
//                                                         <div className="single-freeze-item">
//                                                             <p className="single-freezee-item-text">{el?.title}</p>
//                                                         </div>
//                                                     </NavLink>
//                                                 </SwiperSlide>
//                                             ))
//                                         }
//                                     </Swiper>
//                                 </>
//                                 :
//                                 <></>
//                         }

//                     </>
//             }

//         </div>
//     )
// }

// export default SingleProduct

import React, { useEffect, useState, useMemo, useCallback } from 'react'
import "./singleProduct.scss"
import Advantages from '../../components/advantages/Advantages'
import Packing from '../../components/packing/Packing'
import Specificat from '../../components/specificat/Specificat'
import Characterist from '../../components/characterist/Characterist'
import Document from '../../components/document/Document'
import { NavLink, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import SingleLoading from '../../components/singleLoading/SingleLoading'
import { useTranslation } from 'react-i18next'
import { useGetCategoriesByIdQuery } from '../../context/api/categoryApi'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ImageLoader = ({ src, alt, onClick, className, isActive }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const handleLoad = useCallback(() => setLoading(false), [])
    const handleError = useCallback(() => {
        setLoading(false)
        setError(true)
    }, [])

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
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`${loading ? 'loading' : ''} ${isActive ? 'active' : ''}`}
                />
            )}
        </div>
    )
}

const ProductSections = ({ byData, t }) => (
    <div className="single-dropdown">
        <ul className="single-dropdown-item container">
            <li className="single-dropdown-item-list"><a href="#addvantages">{t("Преимущества")}</a></li>
            {/* <li className="single-dropdown-item-list"><a href="#packing">{t("Фасовка и артикул")}</a></li> */}
            <li className="single-dropdown-item-list"><a href="#specy">{t("Спецификации")}</a></li>
            <li className="single-dropdown-item-list"><a href="#characterist">{t("Характеристики")}</a></li>
            <li className="single-dropdown-item-list"><a href="#document">{t("Документация")}</a></li>
        </ul>
        <div className="single-dropdown-result">
            <Advantages data={byData?.info} />
            {/* <Packing data={byData} /> */}
            <Specificat data={byData?.specifications} />
            <Characterist data={byData} />
            {byData?.documents?.length > 0 && (
                <Document data={byData?.documents} />
            )}

            {/* <Document data={byData?.documents} /> */}
        </div>
    </div>
)

const RelatedProductsCarousel = ({ products }) => (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 }
        }}
        className="single-freezees container"
    >
        {products?.map((el, index) => (
            <SwiperSlide key={el?.id || index} className='single-freezee'>
                <NavLink to={`/singleProduct/${el?.id}`}>
                    <div className="single-freezee-img">
                        <img src={el?.image?.[0] || el?.image?.[1]} alt={el?.title} />
                    </div>
                    <div className="single-freeze-item">
                        <p className="single-freezee-item-text">{el?.title}</p>
                    </div>
                </NavLink>
            </SwiperSlide>
        ))}
    </Swiper>
)

const SingleProduct = () => {
    const { t, i18n } = useTranslation()
    const { id } = useParams()
    const { data: byData, isLoading } = useGetProductByIdQuery(id)
    const [activeImg, setActiveImg] = useState(null)

    const { data: Freezee } = useGetCategoriesByIdQuery(25)
    const { data: FILTER } = useGetCategoriesByIdQuery(14)
    const { data: BREAKE } = useGetCategoriesByIdQuery(12)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id])

    useEffect(() => {
        if (byData?.image?.length > 0) {
            setActiveImg(byData.image[0])
        }
    }, [byData])

    const isOilCategory = useMemo(() => {
        const categoryTitleRu = byData?.category?.title?.ru
        const categoryTitleEn = byData?.category?.title?.en

        const oilCategories = [
            { ru: "Моторные масла для легковой и легкой коммерческой техники", en: "Motor oils for passenger cars and light commercial vehicles" },
            { ru: "Моторные масла для дизельных двигателей", en: "Motor oils for diesel engines" },
            { ru: "Трансмиссионные масла", en: "Transmission oils" },
            { ru: "Гидравлические масла", en: "Hydraulic oils" }
        ]

        return oilCategories.some(cat =>
            categoryTitleRu === cat.ru || categoryTitleEn === cat.en
        )
    }, [byData?.category])

    const relatedProducts = useMemo(() => {
        const categoryTitleRu = byData?.category?.title?.ru
        const categoryTitleEn = byData?.category?.title?.en

        if (categoryTitleRu === "Антифриз" || categoryTitleEn === "Antifreeze") {
            return Freezee?.products
        }
        if (categoryTitleRu === "Фильтры" || categoryTitleEn === "Filters") {
            return FILTER?.products
        }
        if (categoryTitleRu === "Тормозная жидкость" || categoryTitleEn === "Brake fluid") {
            return BREAKE?.products
        }
        return null
    }, [byData?.category, Freezee?.products, FILTER?.products, BREAKE?.products])

    const showFilterInfo = useMemo(() => {
        const categoryTitleRu = byData?.category?.title?.ru
        const categoryTitleEn = byData?.category?.title?.en
        return categoryTitleRu === "Фильтры" || categoryTitleEn === "Filters"
    }, [byData?.category])

    if (isLoading) {
        return (
            <div className='single'>
                <SingleLoading />
            </div>
        )
    }

    return (
        <div className='single'>
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
                    <p className="single-top-right-text">
                        {i18n?.language === "ru"
                            ? byData?.description_ru
                            : byData?.description_en
                        }
                    </p>

                    {showFilterInfo && (
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
                    )}
                </div>
            </div>

            {isOilCategory && <ProductSections byData={byData} t={t} />}

            {relatedProducts && <RelatedProductsCarousel products={relatedProducts} />}
        </div>
    )
}

export default SingleProduct