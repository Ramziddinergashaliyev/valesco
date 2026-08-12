import React from 'react';
import './newsCard.scss';
import { newsData, newsDataEn } from '../../static';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const NewsCard = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const productData = i18n?.languages[0] === "ru" ? newsData : newsDataEn;

    const handleCardClick = (newsId) => {
        navigate(`/news-single/${newsId}`);
    };

    const formatDate = (dateString) => {
        const date = dateString ? new Date(dateString) : new Date();
        const locale = i18n?.languages[0] === "ru" ? "ru-RU" : "en-US";
        const day = date.getDate();
        const month = date.toLocaleDateString(locale, { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <section className="news-section container">
            <div className="news-card-container">

                <div className="news-header">
                    <h2 className="news-heading">
                        {t("Latest")} <span className="accent">{t("Новости")}</span>
                    </h2>

                    <NavLink to={"/news"} className="news-actions-btn">
                        {t("Все новости")} <MdArrowOutward />
                    </NavLink>
                </div>

                <div className="news-grid">
                    {productData?.slice(0, 3)?.map((item, index) => {
                        return (
                            <article
                                key={item.id}
                                className="news-card"
                                style={{ '--animation-order': index }}
                                onClick={() => handleCardClick(item.id)}
                            >

                                <div className="news-card__image-wrapper">
                                    <img
                                        src={item?.img}
                                        alt={item?.title}
                                        className="news-card__image"
                                    />
                                    <span className="news-card__badge">{t("Новости")}</span>
                                </div>

                                <div className="news-card__body">
                                    <div className="news-card__date">
                                        {item?.date} <span className="dot">•</span>
                                    </div>
                                    <h3 className="news-card__title">{item?.title}</h3>
                                    <div className="news-card__footer">
                                        <span className="news-card__read">{t("Читать далее")}</span>
                                        <span className="news-card__arrow">
                                            <MdArrowOutward />
                                        </span>
                                    </div>
                                </div>

                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NewsCard;