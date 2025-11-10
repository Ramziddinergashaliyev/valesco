// import React, { useState, useEffect } from "react";
// import "./imgs.scss";

// import img1 from "../../assets/anime/anime-1.webp";
// import img2 from "../../assets/anime/anime-2.webp";
// import img3 from "../../assets/anime/anime-3.webp";
// import img4 from "../../assets/anime/anime-4.webp";
// import img5 from "../../assets/anime/anime-5.webp";
// import img6 from "../../assets/anime/anime-6.webp";
// import img7 from "../../assets/anime/anime-1.webp";
// import img8 from "../../assets/anime/anime-2.webp";

// const Imgs = () => {
//   const PRODUCTS = [
//     { id: 1, img: img1, stackPos: 50, expandPos: 8, height: 260, zIndex: 8 },
//     { id: 2, img: img2, stackPos: 50, expandPos: 18, height: 300, zIndex: 7 },
//     { id: 3, img: img3, stackPos: 50, expandPos: 30, height: 340, zIndex: 6 },
//     { id: 4, img: img4, stackPos: 50, expandPos: 45, height: 360, zIndex: 5 },
//     { id: 5, img: img5, stackPos: 50, expandPos: 60, height: 280, zIndex: 4 },
//     { id: 6, img: img6, stackPos: 50, expandPos: 70, height: 320, zIndex: 3 },
//     { id: 7, img: img7, stackPos: 50, expandPos: 82, height: 340, zIndex: 2 },
//     { id: 8, img: img8, stackPos: 50, expandPos: 92, height: 300, zIndex: 1 },
//   ];

//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.querySelector(".product-animation");
//       if (!element) return;

//       const rect = element.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Animatsiya ekran markazida boshlansin
//       const startPoint = windowHeight * 0.5;
//       const endPoint = windowHeight * 0.1;
//       const totalDistance = startPoint - endPoint;

//       let progress = (startPoint - rect.top) / totalDistance;
//       progress = Math.max(0, Math.min(1, progress));

//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="product-animation">
//       <div className="product-container">
//         {PRODUCTS.map((product) => {
//           // Stackdan expand holatga o'tish
//           const currentLeft =
//             product.stackPos +
//             (product.expandPos - product.stackPos) * scrollProgress;

//           // Sekin yoyilish uchun o'lcham va tiniqlik
//           const scale = 0.7 + 0.3 * scrollProgress;
//           const opacity = 0.4 + 0.6 * scrollProgress;

//           return (
//             <img
//               key={product.id}
//               src={product.img}
//               alt={`product-${product.id}`}
//               className="product"
//               style={{
//                 left: `${currentLeft}%`,
//                 transform: `translateX(-50%) scale(${scale})`,
//                 height: `${product.height}px`,
//                 zIndex: product.zIndex,
//                 opacity,
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Imgs;

import React, { useState, useEffect, useCallback } from "react";
import "./imgs.scss";

import img1 from "../../assets/anime/anime-1.webp";
import img2 from "../../assets/anime/anime-2.webp";
import img3 from "../../assets/anime/anime-3.webp";
import img4 from "../../assets/anime/anime-4.webp";
import img5 from "../../assets/anime/anime-5.webp";
import img6 from "../../assets/anime/anime-6.webp";
import img7 from "../../assets/anime/anime-1.webp";
import img8 from "../../assets/anime/anime-2.webp";

const Imgs = () => {
  const PRODUCTS = [
    { id: 1, img: img1, stackPos: 50, expandPos: 8, height: 260, zIndex: 8 },
    { id: 2, img: img2, stackPos: 50, expandPos: 18, height: 300, zIndex: 7 },
    { id: 3, img: img3, stackPos: 50, expandPos: 30, height: 340, zIndex: 6 },
    { id: 4, img: img4, stackPos: 50, expandPos: 45, height: 360, zIndex: 5 },
    { id: 5, img: img5, stackPos: 50, expandPos: 60, height: 280, zIndex: 4 },
    { id: 6, img: img6, stackPos: 50, expandPos: 70, height: 320, zIndex: 3 },
    { id: 7, img: img7, stackPos: 50, expandPos: 82, height: 340, zIndex: 2 },
    { id: 8, img: img8, stackPos: 50, expandPos: 92, height: 300, zIndex: 1 },
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
    <div className="imgs-animation">
      <div className="imgs-container">
        {PRODUCTS.map((product) => {
          const currentLeft =
            product.stackPos +
            (product.expandPos - product.stackPos) * scrollProgress;

          const scale = 0.7 + 0.3 * scrollProgress;
          const opacity = 0.4 + 0.6 * scrollProgress;

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
  );
};

export default Imgs;