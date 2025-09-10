// import React, { useState, useEffect } from 'react'
// import "./product.scss"
// import { MdArrowOutward } from 'react-icons/md'
// import filter from "../../assets/icons/filter.svg"
// import img1 from "../../assets/icons/col-icn.svg"
// import img2 from "../../assets/icons/row-icn.svg"
// import { FiPlus } from 'react-icons/fi'
// import { NavLink } from 'react-router-dom'
// import Loading from '../loading/Loading'
// import LoadingRow from '../loadingRow/LoadingRow'
// import { ClosedCaption } from 'lucide-react'
// import { IoMdClose } from "react-icons/io";

// const Product = ({ data, loading, title }) => {
//     const [hide, setHide] = useState(false)
//     const [filterHide, setFilterHide] = useState(null)
//     const [isMobile, setIsMobile] = useState(false)
//     const [selectedFilters, setSelectedFilters] = useState({
//         lineType: [],
//         viscosity: []
//     })
//     const [filteredData, setFilteredData] = useState([])

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 700)
//         }
//         handleResize()
//         window.addEventListener('resize', handleResize)
//         return () => window.removeEventListener('resize', handleResize)
//     }, [])

//     useEffect(() => {
//         if (!data) {
//             setFilteredData([])
//             return
//         }
//         let filtered = [...data]

//         if (selectedFilters.viscosity.length > 0) {
//             filtered = filtered.filter(item => {
//                 const itemViscosity = item.sae?.[0] || ''
//                 return selectedFilters.viscosity.includes(itemViscosity)
//             })
//         }

//         if (selectedFilters.lineType.length > 0) {
//             filtered = filtered.filter(item => {
//                 const title = item.title || ''
//                 return selectedFilters.lineType.some(lineType =>
//                     title.toLowerCase().includes(lineType.toLowerCase())
//                 )
//             })
//         }

//         setFilteredData(filtered)
//     }, [data, selectedFilters])

//     const handleFilterSelect = (filterType, value) => {
//         setSelectedFilters(prev => {
//             const updatedFilters = { ...prev }

//             if (updatedFilters[filterType].includes(value)) {
//                 updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value)
//             } else {
//                 updatedFilters[filterType] = [...updatedFilters[filterType], value]
//             }

//             return updatedFilters
//         })
//     }

//     const isFilterSelected = (filterType, value) => {
//         return selectedFilters[filterType].includes(value)
//     }

//     const getFilterButtonClass = (filterType, value) => {
//         return `product-filter-result-left-btn ${isFilterSelected(filterType, value) ? 'selected' : ''}`
//     }

//     const clearAllFilters = () => {
//         setSelectedFilters({
//             lineType: [],
//             viscosity: []
//         })
//     }

//     const displayData = filteredData

//     return (
//         <div className='product container'>
//             <h2 className="product-title">{title}</h2>

//             <div className="product-top">
//                 <p className='product-top-text'>Для оптимального подбора продукта Valesco, соответствующего вашему автомобилю, пожалуйста, воспользуйтесь нашим модулем подбора масла.</p>
//                 <button className='product-top-btn'> Подобрать масло<MdArrowOutward /></button>
//             </div>

//             <div className="product-filter">
//                 <button onClick={() => setFilterHide(p => !p)} className='product-filter-left'>
//                     <img src={filter} alt="filterImg" />
//                     {filterHide ? 'Показать фильтр' : 'Скрыть фильтр'}
//                 </button>
//                 <div className="product-filter-right">
//                     {!isMobile && (
//                         <button
//                             onClick={() => setHide(false)}
//                             className={`product-filter-right-info ${!hide ? 'active' : ''}`}
//                         >
//                             <img src={img2} alt="product-col-img" />
//                         </button>
//                     )}
//                     <button
//                         onClick={() => setHide(true)}
//                         className={`product-filter-right-info ${hide ? 'active' : ''}`}
//                     >
//                         <img src={img1} alt="product-row-img" />
//                     </button>
//                 </div>
//             </div>
//             {
//                 title === "Моторные масла для легковой и легкой коммерческой техники" || title === "Motor oils for passenger cars and light commercial vehicles"
//                     ?
//                     <>
//                         <div className={`product-filter-container ${filterHide ? 'show' : 'hide'}`}>
//                             <div className="product-filter-result">
//                                 <div className="product-filter-result-left animate-item" style={{ '--delay': '0.1s' }}>
//                                     <p className="product-filter-result-left-text">Линейка моторных масел</p>
//                                     <div className="product-filter-result-left-btns">
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'Top')}
//                                             onClick={() => handleFilterSelect('lineType', 'Top')}
//                                         >
//                                             Top<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'Zero')}
//                                             onClick={() => handleFilterSelect('lineType', 'Zero')}
//                                         >
//                                             Zero<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'Racing')}
//                                             onClick={() => handleFilterSelect('lineType', 'Racing')}
//                                         >
//                                             Racing<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'X9')}
//                                             onClick={() => handleFilterSelect('lineType', 'X9')}
//                                         >
//                                             X9<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'X7')}
//                                             onClick={() => handleFilterSelect('lineType', 'X7')}
//                                         >
//                                             X7<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('lineType', 'X5')}
//                                             onClick={() => handleFilterSelect('lineType', 'X5')}
//                                         >
//                                             X5<FiPlus />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="product-filter-result-left animate-item" style={{ '--delay': '0.2s' }}>
//                                     <p className="product-filter-result-left-text">Вязкость</p>
//                                     <div className="product-filter-result-left-btns">
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '0W-20')}
//                                             onClick={() => handleFilterSelect('viscosity', '0W-20')}
//                                         >
//                                             0W - 20<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '0W-30')}
//                                             onClick={() => handleFilterSelect('viscosity', '0W-30')}
//                                         >
//                                             0W - 30<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '5W-30')}
//                                             onClick={() => handleFilterSelect('viscosity', '5W-30')}
//                                         >
//                                             5W - 30<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '0W-40')}
//                                             onClick={() => handleFilterSelect('viscosity', '0W-40')}
//                                         >
//                                             0W - 40<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '5W-40')}
//                                             onClick={() => handleFilterSelect('viscosity', '5W-40')}
//                                         >
//                                             5W - 40<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '0W-16')}
//                                             onClick={() => handleFilterSelect('viscosity', '0W-16')}
//                                         >
//                                             0W - 16<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '10W-50')}
//                                             onClick={() => handleFilterSelect('viscosity', '10W-50')}
//                                         >
//                                             10W - 50<FiPlus />
//                                         </button>
//                                         <button
//                                             className={getFilterButtonClass('viscosity', '10W-40')}
//                                             onClick={() => handleFilterSelect('viscosity', '10W-40')}
//                                         >
//                                             10W - 40<FiPlus />
//                                         </button>
//                                     </div>

//                                 </div>
//                             </div>

//                             {(selectedFilters.lineType.length > 0 || selectedFilters.viscosity.length > 0) && (
//                                 <div className="product-filter-clear">
//                                     <button onClick={clearAllFilters} className="product-filter-clear-btn">
//                                         <IoMdClose />
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </>
//                     :
//                     <></>
//             }


//             {
//                 hide || isMobile
//                     ?
//                     <>
//                         {
//                             loading
//                                 ?
//                                 <Loading />
//                                 :
//                                 <div className="product-cards fade-in">
//                                     {
//                                         displayData?.map((el, index) => (
//                                             <div key={el?.id} className="product-card animate-card" style={{ '--delay': `${index * 0.1}s` }}>
//                                                 <div className="product-card-img">
//                                                     <NavLink to={`/singleProduct/${el?.id}`}>
//                                                         {
//                                                             el?.image?.length > 0
//                                                                 ?
//                                                                 <img className='product-card-img-link' src={el?.image[0]} alt="product-img" />
//                                                                 :
//                                                                 <>
//                                                                  <img className='product-card-img-link' src="" alt="product-hide-img" />
//                                                                 </>
//                                                         }
//                                                     </NavLink>
//                                                 </div>
//                                                 <div className="product-card-info">
//                                                     <h2 className="product-card-info-title">{el?.title}</h2>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                     {displayData?.length === 0 && !loading && (
//                                         <div className="no-products">
//                                             <p>По выбранным фильтрам продукты не найдены</p>
//                                         </div>
//                                     )}
//                                 </div>
//                         }
//                     </>
//                     :
//                     <>
//                         {
//                             loading
//                                 ?
//                                 <LoadingRow />
//                                 :
//                                 <div className="product-boxs fade-in">
//                                     {
//                                         displayData?.map((el, index) => (
//                                             <div key={el?.id} className="product-box animate-box" style={{ '--delay': `${index * 0.1}s` }}>
//                                                 <div className="product-box-left">
//                                                     <div className="product-box-left-img">
//                                                         <NavLink to={`/singleProduct/${el?.id}`}>
//                                                             {
//                                                                 el?.image?.length > 0
//                                                                     ?
//                                                                     <img src={el?.image[0]} alt="product-img" />
//                                                                     :
//                                                                     <>
//                                                                         <img src="" alt="product-hide-img" />
//                                                                     </>
//                                                             }
//                                                         </NavLink>
//                                                     </div>
//                                                     <div className="product-box-left-info">
//                                                         <h2 className="product-box-left-info-title">{el?.title}</h2>
//                                                         <div className="product-box-left-info-item">
//                                                             {
//                                                                 el?.specifications?.map((el, index) => (
//                                                                     <span className='product-box-left-info-item-desc' key={index}>{el},</span>
//                                                                 ))
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <NavLink to={`/singleProduct/${el?.id}`}><button className='product-box-btn'>Подробнее<MdArrowOutward /></button></NavLink>
//                                             </div>
//                                         ))
//                                     }
//                                     {displayData?.length === 0 && !loading && (
//                                         <div className="no-products">
//                                             <p>По выбранным фильтрам продукты не найдены</p>
//                                         </div>
//                                     )}
//                                 </div>
//                         }
//                     </>
//             }
//         </div>
//     )
// }

// export default Product

import React, { useState, useEffect } from 'react'
import "./product.scss"
import { MdArrowOutward } from 'react-icons/md'
import filter from "../../assets/icons/filter.svg"
import img1 from "../../assets/icons/col-icn.svg"
import img2 from "../../assets/icons/row-icn.svg"
import { FiPlus } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Loading from '../loading/Loading'
import LoadingRow from '../loadingRow/LoadingRow'
import { ClosedCaption } from 'lucide-react'
import { IoMdClose } from "react-icons/io";

const ImageWithLoading = ({ src, alt, className, linkTo }) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const imageContent = (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {imageLoading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                }}>
                    <div style={{
                        width: '30px',
                        height: '30px',
                        border: '3px solid #f3f3f3',
                        borderTop: '3px solid #3498db',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                </div>
            )}
            {src && src.length > 0 ? (
                <img
                    className={className}
                    src={src}
                    alt={alt}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                        opacity: imageLoading ? 0.3 : 1,
                        transition: 'opacity 0.3s ease'
                    }}
                />
            ) : (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f8f9fa',
                    color: '#6c757d',
                    fontSize: '14px'
                }}>
                    Rasm mavjud emas
                </div>
            )}
        </div>
    );

    return linkTo ? (
        <NavLink to={linkTo}>
            {imageContent}
        </NavLink>
    ) : imageContent;
};

const Product = ({ data, loading, title }) => {
    const [hide, setHide] = useState(false)
    const [filterHide, setFilterHide] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState({
        lineType: [],
        viscosity: []
    })
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!data) {
            setFilteredData([])
            return
        }
        let filtered = [...data]

        if (selectedFilters.viscosity.length > 0) {
            filtered = filtered.filter(item => {
                const itemViscosity = item.sae?.[0] || ''
                return selectedFilters.viscosity.includes(itemViscosity)
            })
        }

        if (selectedFilters.lineType.length > 0) {
            filtered = filtered.filter(item => {
                const title = item.title || ''
                return selectedFilters.lineType.some(lineType =>
                    title.toLowerCase().includes(lineType.toLowerCase())
                )
            })
        }

        setFilteredData(filtered)
    }, [data, selectedFilters])

    const handleFilterSelect = (filterType, value) => {
        setSelectedFilters(prev => {
            const updatedFilters = { ...prev }

            if (updatedFilters[filterType].includes(value)) {
                updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value)
            } else {
                updatedFilters[filterType] = [...updatedFilters[filterType], value]
            }

            return updatedFilters
        })
    }

    const isFilterSelected = (filterType, value) => {
        return selectedFilters[filterType].includes(value)
    }

    const getFilterButtonClass = (filterType, value) => {
        return `product-filter-result-left-btn ${isFilterSelected(filterType, value) ? 'selected' : ''}`
    }

    const clearAllFilters = () => {
        setSelectedFilters({
            lineType: [],
            viscosity: []
        })
    }

    const displayData = filteredData

    return (
        <div className='product container'>
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>

            <h2 className="product-title">{title}</h2>

            <div className="product-top">
                <p className='product-top-text'>Для оптимального подбора продукта Valesco, соответствующего вашему автомобилю, пожалуйста, воспользуйтесь нашим модулем подбора масла.</p>
                <button className='product-top-btn'> Подобрать масло<MdArrowOutward /></button>
            </div>

            <div className="product-filter">
                <button onClick={() => setFilterHide(p => !p)} className='product-filter-left'>
                    <img src={filter} alt="filterImg" />
                    {filterHide ? 'Показать фильтр' : 'Скрыть фильтр'}
                </button>
                <div className="product-filter-right">
                    {!isMobile && (
                        <button
                            onClick={() => setHide(false)}
                            className={`product-filter-right-info ${!hide ? 'active' : ''}`}
                        >
                            <img src={img2} alt="product-col-img" />
                        </button>
                    )}
                    <button
                        onClick={() => setHide(true)}
                        className={`product-filter-right-info ${hide ? 'active' : ''}`}
                    >
                        <img src={img1} alt="product-row-img" />
                    </button>
                </div>
            </div>
            {
                title === "Моторные масла для легковой и легкой коммерческой техники" || title === "Motor oils for passenger cars and light commercial vehicles"
                    ?
                    <>
                        <div className={`product-filter-container ${filterHide ? 'show' : 'hide'}`}>
                            <div className="product-filter-result">
                                <div className="product-filter-result-left animate-item" style={{ '--delay': '0.2s' }}>
                                    <p className="product-filter-result-left-text">Вязкость</p>
                                    <div className="product-filter-result-left-btns">
                                        <button
                                            className={getFilterButtonClass('viscosity', '0W-20')}
                                            onClick={() => handleFilterSelect('viscosity', '0W-20')}
                                        >
                                            0W - 20<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '0W-30')}
                                            onClick={() => handleFilterSelect('viscosity', '0W-30')}
                                        >
                                            0W - 30<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '0W-40')}
                                            onClick={() => handleFilterSelect('viscosity', '0W-40')}
                                        >
                                            0W - 40<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '5W-30')}
                                            onClick={() => handleFilterSelect('viscosity', '5W-30')}
                                        >
                                            5W - 30<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '5W-40')}
                                            onClick={() => handleFilterSelect('viscosity', '5W-40')}
                                        >
                                            5W - 40<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '20W-50')}
                                            onClick={() => handleFilterSelect('viscosity', '20W-50')}
                                        >
                                            20W - 50<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '10W-40')}
                                            onClick={() => handleFilterSelect('viscosity', '10W-40')}
                                        >
                                            10W - 40<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '15W-40')}
                                            onClick={() => handleFilterSelect('viscosity', '15W-40')}
                                        >
                                            15W - 40<FiPlus />
                                        </button>
                                        <button
                                            className={getFilterButtonClass('viscosity', '15W-50')}
                                            onClick={() => handleFilterSelect('viscosity', '15W-50')}
                                        >
                                            15W - 50<FiPlus />
                                        </button>
                                    </div>

                                </div>
                            </div>

                            {(selectedFilters.lineType.length > 0 || selectedFilters.viscosity.length > 0) && (
                                <div className="product-filter-clear">
                                    <button onClick={clearAllFilters} className="product-filter-clear-btn">
                                        <IoMdClose />
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                    :
                    <></>
            }

            {
                hide || isMobile
                    ?
                    <>
                        {
                            loading
                                ?
                                <Loading />
                                :
                                <div className="product-cards fade-in">
                                    {
                                        displayData?.map((el, index) => (
                                            <div key={el?.id} className="product-card animate-card" style={{ '--delay': `${index * 0.1}s` }}>
                                                <div className="product-card-img">
                                                    <ImageWithLoading
                                                        src={el?.image?.[0]}
                                                        alt="product-img"
                                                        className="product-card-img-link"
                                                        linkTo={`/singleProduct/${el?.id}`}
                                                    />
                                                </div>
                                                <div className="product-card-info">
                                                    <h2 className="product-card-info-title">{el?.title}</h2>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {displayData?.length === 0 && !loading && (
                                        <div className="no-products">
                                            <p>По выбранным фильтрам продукты не найдены</p>
                                        </div>
                                    )}
                                </div>
                        }
                    </>
                    :
                    <>
                        {
                            loading
                                ?
                                <LoadingRow />
                                :
                                <div className="product-boxs fade-in">
                                    {
                                        displayData?.map((el, index) => (
                                            <div key={el?.id} className="product-box animate-box" style={{ '--delay': `${index * 0.1}s` }}>
                                                <div className="product-box-left">
                                                    <div className="product-box-left-img">
                                                        <ImageWithLoading
                                                            src={el?.image?.[0]}
                                                            alt="product-img"
                                                            linkTo={`/singleProduct/${el?.id}`}
                                                        />
                                                    </div>
                                                    <div className="product-box-left-info">
                                                        <h2 className="product-box-left-info-title">{el?.title}</h2>
                                                        <div className="product-box-left-info-item">
                                                            {
                                                                el?.specifications?.map((el, index) => (
                                                                    <span className='product-box-left-info-item-desc' key={index}>{el},</span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavLink to={`/singleProduct/${el?.id}`}><button className='product-box-btn'>Подробнее<MdArrowOutward /></button></NavLink>
                                            </div>
                                        ))
                                    }
                                    {displayData?.length === 0 && !loading && (
                                        <div className="no-products">
                                            <p>По выбранным фильтрам продукты не найдены</p>
                                        </div>
                                    )}
                                </div>
                        }
                    </>
            }
        </div>
    )
}

export default Product