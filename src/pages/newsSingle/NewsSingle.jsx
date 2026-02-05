// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import './newsSingle.scss'
// import { newsData } from '../../static'

// const NewsSingle = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const [news, setNews] = useState(null)

//   useEffect(() => {
//     window.scrollTo(0, 0)

//     const foundNews = newsData.find(item => item.id === parseInt(id))

//     if (foundNews) {
//       setNews(foundNews)
//     } else {
//       navigate('/news')
//     }
//   }, [id, navigate])

//   if (!news) {
//     return <div className="loading">Yuklanmoqda...</div>
//   }

//   return (
//     <div className="news-single-container container">
//       <button className="back-button" onClick={() => navigate('/news')}>
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//           <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         Orqaga
//       </button>

//       <article className="news-single">
//         <div className="news-header">
//           <div className="category-badge">{news.category}</div>
//           <div className="news-date">{news.date}</div>
//         </div>

//         <h1 className="news-title">{news.title}</h1>

//         <div className="news-image">
//           <img src={news.image} alt={news.title} />
//         </div>

//         <div className="news-content">
//           <p className="news-description">{news.description}</p>
//           <p className="news-full-content">{news.fullContent}</p>
//         </div>
//       </article>
//     </div>
//   )
// }

// export default NewsSingle


import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './newsSingle.scss'
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'

const NewsSingle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const { t, i18n } = useTranslation()

    const fullData = i18n?.languages === "ru" ? newsData : newsDataEn

    useEffect(() => {
        window.scrollTo(0, 0)

        const foundNews = fullData.find(item => item.id === parseInt(id))

        if (foundNews) {
            setNews(foundNews)
        } else {
            navigate('/news')
        }
    }, [id, navigate])

    if (!news) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        )
    }

    return (
        <div className="news-single-page">
            <div className="news-single-container container">
                <div className="breadcrumb">
                    <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span className="breadcrumb-current">{news.category}</span>
                </div>

                <article className="news-article">
                    <div className="article-header">
                        <div className="article-meta">
                            <span className="category">{news.category}</span>
                            <span className="date">{news.date}</span>
                        </div>

                        <h1 className="article-title">{news.title}</h1>
                    </div>

                    <div className="article-image">
                        <>
                            {
                                news.image?.map(el => (
                                    <img src={el} alt={news.title} />
                                ))
                            }
                        </>
                    </div>

                    <div className="article-content">
                        <div className="article-lead">
                            {news.description}
                        </div>

                        <div className="article-content-info">
                            {
                                news.fullContent?.map(el => (
                                    <p className="article-text">
                                        {el}
                                    </p>
                                ))
                            }
                        </div>

                        <div className="article-footer">
                            <div className="share-section">
                                <span className="share-label">{t("Совместное использование:")}</span>
                                <div className="social-links">
                                    <a href="#" className="social-link telegram" title="Telegram">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                            <path d="M16.2 2.4L2.16 8.1c-.96.36-.96.87-.18 1.095l3.6.99 8.73-5.505c.405-.252.78-.117.475.162l-7.065 6.39-.27 3.96c.36 0 .522-.162.72-.36l1.728-1.674 3.6 2.655c.66.363 1.14.171 1.305-.603L16.92 3.24c.234-1.053-.378-1.53-.99-1.26l.27.42z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-link facebook" title="Facebook">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                            <path d="M18 9c0-4.97-4.03-9-9-9S0 4.03 0 9c0 4.49 3.29 8.21 7.59 8.89v-6.29H5.31V9h2.28V7.02c0-2.25 1.34-3.49 3.39-3.49.98 0 2.01.17 2.01.17v2.21h-1.13c-1.11 0-1.46.69-1.46 1.4V9h2.48l-.4 2.6h-2.08v6.29C14.71 17.21 18 13.49 18 9z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-link twitter" title="Twitter">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                            <path d="M14.18 2.06h1.66l-3.63 4.14L17 15.94h-3.34l-2.62-3.42-3 3.42H6.39l3.88-4.43L5.82 2.06h3.43l2.37 3.13 2.76-3.13zM13.87 14.46h.92L8.14 3h-.99l6.72 11.46z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="related-news">
                    <h2 className="related-title">{t("O'xshash")}</h2>
                    <div className="related-grid">
                        {newsData
                            .filter(item => item.id !== news.id && item.category === news.category)
                            .slice(0, 3)
                            .map(item => (
                                <div
                                    key={item.id}
                                    className="related-item"
                                    onClick={() => navigate(`/news/${item.id}`)}
                                >
                                    <div className="related-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="related-content">
                                        <span className="related-category">{item.category}</span>
                                        <h3 className="related-item-title">{item.title}</h3>
                                        <span className="related-date">{item.date}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSingle