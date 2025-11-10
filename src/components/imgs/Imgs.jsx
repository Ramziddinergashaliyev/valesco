import React, { useState, useEffect, useCallback } from "react";
import "./imgs.scss";

import img1 from "../../assets/anime/anime-1.webp";
import img2 from "../../assets/anime/anime-2.webp";
import img3 from "../../assets/anime/anime-3.webp";
import img4 from "../../assets/anime/anime-4.webp";
import img5 from "../../assets/anime/anime-5.webp";
import img6 from "../../assets/anime/anime-6.webp";
import img7 from "../../assets/anime/anime-7.webp";

const Imgs = () => {
  
  const PRODUCTS = [
    { id: 1, img: img1, stackPos: 60, expandPos: 70, height: 300, zIndex: 8 },
    { id: 2, img: img2, stackPos: 70, expandPos: 86, height: 220, zIndex: 9 },
    { id: 3, img: img3, stackPos: 50, expandPos: 50, height: 400, zIndex: 6 },
    { id: 4, img: img4, stackPos: 40, expandPos: 32, height: 300, zIndex: 5 },
    { id: 5, img: img5, stackPos: 75, expandPos: 95, height: 180, zIndex: 10 },
    { id: 6, img: img6, stackPos: 32, expandPos: 18, height: 260, zIndex: 3 },
    { id: 7, img: img7, stackPos: 26, expandPos: 6, height: 240, zIndex: 2 },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const element = document.querySelector(".imgs-animation");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const startPoint = windowHeight * 0.6;
    const endPoint = windowHeight * 0.1;
    const totalDistance = startPoint - endPoint;

    let progress = (startPoint - rect.top) / totalDistance;
    progress = Math.max(0, Math.min(1, progress));

    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let ticking = false;

    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  return (
    <div className="container">
      <div className="imgs-animation">
        <div className="imgs-container">
          {PRODUCTS.map((product) => {
            const currentLeft =
              product.stackPos +
              (product.expandPos - product.stackPos) * scrollProgress;

            const scale = 0.7 + 0.3 * scrollProgress;
            const opacity = 0.7 + 0.3 * scrollProgress;

            return (
              <img
                key={product.id}
                src={product.img}
                alt={`imgs-${product.id}`}
                className="imgs"
                loading="lazy"
                style={{
                  left: `${currentLeft}%`,
                  transform: `translateX(-50%) scale(${scale})`,
                  height: `${product.height}px`,
                  zIndex: product.zIndex,
                  opacity,
                  willChange: scrollProgress > 0 && scrollProgress < 1 ? 'transform, opacity' : 'auto',
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="imgs-info">
        <h3 className="imgs-info-title">VALESCO PRODUCTS – 100% MADE IN UZBEKISTAN</h3>
        <p className="imgs-info-text">VALESCO offers a full range of products with a high vertical production range, always manufactured in audited sustainable processes. In addition to many motor oils and winter chemicals for many various types of vehicles, we also offer lubricants for a wide variety of other utilisations and applications, for example in the industrial sector. VALESCO products are available in more than 15 countries worldwide today and impress more people every day with their outstanding properties.</p>
        <button className="imgs-info-btn">To our products</button>
      </div>
    </div>
  );
};

export default Imgs;