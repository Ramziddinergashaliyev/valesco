// import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './hero.scss';

// // import imgDesktop from "../../assets/images/newbg.webp";
// import imgDesktop from "../../assets/banner/herobg1.jpg";
// import imgMobile from "../../assets/images/heroPhone.webp";

// const Hero = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia('(max-width: 767px)');

//     const handler = (e) => setIsMobile(e.matches);
//     setIsMobile(mq.matches);
//     if (mq.addEventListener) {
//       mq.addEventListener('change', handler);
//     } else {
//       mq.addListener(handler);
//     }
//     return () => {
//       if (mq.removeEventListener) {
//         mq.removeEventListener('change', handler);
//       } else {
//         mq.removeListener(handler);
//       }
//     };
//   }, []);

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     if (progressCircle.current && progressContent.current) {
//       progressCircle.current.style.setProperty('--progress', 1 - progress);
//       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   };

//   const slides = [
//     { id: 1, image: imgDesktop, mobileImage: imgMobile }
//   ];

//   return (
//     <div className="slider-container">
//       <Swiper
//         spaceBetween={30}
//         speed={1000}
//         centeredSlides={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
//         modules={[Autoplay, Pagination]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         {slides.map((slide) => {
//           const bg = isMobile ? slide.mobileImage : slide.image;
//           return (
//             <SwiperSlide key={slide.id}>
//               <div
//                 className="slide"
//                 style={{
//                   backgroundImage: `url(${bg})`,
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "contain"
//                 }}
//               />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;


//Variant - 2

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import imgDesktop1 from "../../assets/banner/herobg1.jpg"
// import imgDesktop2 from "../../assets/banner/herobg2.jpg"
// import "./hero.scss"

// const Hero = () => {
//   return (
//     <div className='hero'>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         speed={1500}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         loop={true}
//         className="hero-swiper"
//       >
//         <SwiperSlide>
//           <img src={imgDesktop1} alt="Hero 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={imgDesktop2} alt="Hero 2" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default Hero



// Hero.jsx
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import imgDesktop1 from "../../assets/banner/herobg1.jpg"
import imgDesktop2 from "../../assets/banner/herobg2.jpg"
import "./hero.scss"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [imgDesktop1, imgDesktop2]

  return (
    <div className='hero'>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src={imgDesktop1} alt="Hero 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgDesktop2} alt="Hero 2" />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`pagination-line ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="line-wrapper">
              <div className="line-progress"></div>
            </div>
            <div className="line-number">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero

/* hero.scss */
