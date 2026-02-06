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

    console.log(i18n.languages);

    const fullData = i18n?.language === "ru" ? newsData : newsDataEn

    useEffect(() => {
        window.scrollTo(0, 0)

        const foundNews = fullData.find(item => item.id === parseInt(id))

        if (foundNews) {
            setNews(foundNews)
        } else {
            navigate('/news')
        }
    }, [id, navigate, fullData])

    const renderLocationSections = () => {
        if (!news.locationData) {
            return news.fullContent?.map((text, index) => (
                <p key={index} className="article-text">{text}</p>
            ))
        }

        return news.locationData.map((location, index) => {
            if (location.position === 'right') {
                return (
                    <div key={location.id} className="location-section">
                        <div className="location-content-wrapper layout-right">
                            <div className="location-images-block">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="image-item">
                                            <img src={img} alt={`${location.title} ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="location-text-block">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={location.id} className="location-section">
                        <div className="location-content-wrapper layout-left">
                            <div className="location-text-block">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>
                            <div className="location-images-block">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="image-item">
                                            <img src={img} alt={`${location.title} ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

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
                    <span className="breadcrumb-current">{news?.category}</span>
                </div>

                <article className="news-article">

                    <div className="article-header">
                        <h1 className="article-title">{news.title}</h1>
                    </div>

                    <div className="article-content-top">
                        {
                            news.description?.map((el, index) => (
                                <p key={index} className="article-lead">
                                    {el}
                                </p>
                            ))
                        }
                    </div>

                    <div className="news-article-bottom">
                        <div className="article-image">
                            <>
                                {
                                    news.image?.map((el, index) => (
                                        <img key={index} src={el} alt={news.title} />
                                    ))
                                }
                            </>
                        </div>

                        <div className="article-image-name">
                            {
                                news.world?.map((el, index) => (
                                    <p key={index} className="article-image-name-title">{el}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="article-content">
                        <div className="article-content-info">
                            {renderLocationSections()}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default NewsSingle