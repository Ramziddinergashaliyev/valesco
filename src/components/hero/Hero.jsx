// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './hero.scss';

// import img from "../../assets/images/newbg.webp"

// const Hero = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     if (progressCircle.current && progressContent.current) {
//       progressCircle.current.style.setProperty('--progress', 1 - progress);
//       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   };

//   const slides = [
//     { id: 1, image: img }
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
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="slide"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "contain"
//               }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;



import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './hero.scss';

import imgDesktop from "../../assets/images/newbg.webp";
import imgMobile from "../../assets/images/heroPhone.webp";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');

    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
    } else {
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const slides = [
    { id: 1, image: imgDesktop, mobileImage: imgMobile }
  ];

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        speed={1000}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slides.map((slide) => {
          const bg = isMobile ? slide.mobileImage : slide.image;
          return (
            <SwiperSlide key={slide.id}>
              <div
                className="slide"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain"
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
