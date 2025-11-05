import React, { useEffect, useRef } from "react";
import "./productRange.scss";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/catalog/2.webp";
import img4 from "../../assets/catalog/3.webp";
import img5 from "../../assets/catalog/4.webp";
import img6 from "../../assets/catalog/5.webp";
import img7 from "../../assets/catalog/6.webp";
import img8 from "../../assets/catalog/7.webp";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import { useTranslation } from "react-i18next";
import CatalogLoading from "../catalogLoading/CatalogLoading";

import rs1 from "../../assets/icon/v1.png"
import rs2 from "../../assets/icon/v1-1.png"
import rs3 from "../../assets/icon/v2.png"
import rs4 from "../../assets/icon/v2-1.png"
import rs5 from "../../assets/icon/v3.png"
import rs6 from "../../assets/icon/v3-1.png"
import rs7 from "../../assets/icon/v4.png"
import rs8 from "../../assets/icon/v4-1.png"
import rs9 from "../../assets/icon/v5.png"
import rs10 from "../../assets/icon/v5-1.png"
import rs11 from "../../assets/icon/v6.png"
import rs12 from "../../assets/icon/v6-1.png"

const CATEGORY = [
  {
    image: img1,
    bgImage: img2,
  },
  // {
  //   image: img3,
  //   bgImage: img2,
  // },
  {
    image: rs1,
    bgImage: rs2,
  },
  {
    image: rs3,
    bgImage: rs4,
  },
  {
    image: rs5,
    bgImage: rs6,
  },
  {
    image: rs7,
    bgImage: rs8,
  },
  {
    image: rs9,
    bgImage: rs10,
  },
  {
    image: rs11,
    bgImage: rs12,
  },
  // {
  //   image: img4,
  //   bgImage: img2,
  // },
  // {
  //   image: img5,
  //   bgImage: img2,
  // },
  // {
  //   image: img6,
  //   bgImage: img2,
  // },
  // {
  //   image: img7,
  //   bgImage: img2,
  // },
  // {
  //   image: img8,
  //   bgImage: img2,
  // }
];

const ProductRange = ({ hide }) => {
  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const bgRefs = useRef([]);
  const { t, i18n } = useTranslation()

  const { data, isLoading } = useGetCategoriesQuery();

  useEffect(() => {
    if (!data) return;
    const RANGE = 20;

    const handleMouseMove = (event, card, img, bg) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const xValue = ((x / rect.width) * RANGE - RANGE / 2).toFixed(1);
      const yValue = ((y / rect.height) * RANGE - RANGE / 2).toFixed(1);

      card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

      if (img) {
        img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      }
      if (bg) {
        bg.style.backgroundPosition = `${xValue * 1.5}px ${-yValue * 1.5}px`;
      }
    };

    const handleMouseLeave = (card, img, bg) => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      if (img) img.style.transform = `translateX(0) translateY(0)`;
      if (bg) bg.style.backgroundPosition = `center`;
    };

    const listeners = [];

    cardRefs.current.forEach((card, index) => {
      const img = imgRefs.current[index];
      const bg = bgRefs.current[index];
      if (!card) return;

      const moveHandler = (e) => handleMouseMove(e, card, img, bg);
      const leaveHandler = () => handleMouseLeave(card, img, bg);

      card.addEventListener("mousemove", moveHandler);
      card.addEventListener("mouseleave", leaveHandler);

      listeners.push({ card, moveHandler, leaveHandler });
    });

    return () => {
      listeners.forEach(({ card, moveHandler, leaveHandler }) => {
        if (card) {
          card.removeEventListener("mousemove", moveHandler);
          card.removeEventListener("mouseleave", leaveHandler);
        }
      });
    };
  }, [data]);

  return (
    <div className="productRange container">
      <div className={`productRange__container ${hide === true ? "productRange__container-hide" : ""}`}>
        {!hide && (
          <div className="productRange__info">
            <h1 className="productRange__info-title">{t("линейка")}</h1>
            <h3 className="productRange__info-text">
              {t("России много")}
            </h3>
            <p className="productRange__info-desc">
              {t("Воспользуйтесь нашим")}
            </p>
            <NavLink to={"/categories/10"} className="productRange__info-btn">
              {t("Все")} <MdArrowOutward />
            </NavLink>
          </div>
        )}

        {isLoading ? (
          <CatalogLoading />
        ) : (
          <div className="productRange-card-list">
            {data?.map((item, index) => {
              const category = CATEGORY[index];
              return (
                <div key={item.id} className="productRange-card" ref={(el) => (cardRefs.current[index] = el)}>
                  <NavLink to={`/categories/${item?.id}`}>
                    <div className="productRange-card-bg" ref={(el) => (bgRefs.current[index] = el)} style={{ backgroundImage: `url(${category?.bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }} />
                    <div className="overlay" />
                    <div className="productRange-card-img" ref={(el) => (imgRefs.current[index] = el)}>
                      <img src={category?.image} alt={item.title} />
                    </div>
                    <div className="productRange-card-content">
                      {
                        i18n?.languages[0] === "ru"
                          ?
                          <h4>{item.title?.ru}</h4>
                          :
                          <h4>{item.title?.en}</h4>
                      }
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductRange;