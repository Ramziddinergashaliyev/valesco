// import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Navigation } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import imgDesktop1 from "../../assets/banner/herobg1.webp"
// import imgDesktop2 from "../../assets/banner/herobg2.webp"
// import imgDesktop3 from "../../assets/banner/herobg3.webp"
// import imgDesktop4 from "../../assets/banner/herobg4.webp"
// import imgDesktopRu1 from "../../assets/banner/herobgru1.webp"
// import imgDesktopRu2 from "../../assets/banner/herobgru2.webp"
// import imgDesktopRu3 from "../../assets/banner/herobgru3.webp"
// import imgDesktopRu4 from "../../assets/banner/herobgru4.webp"
// import "./hero.scss"
// import { useTranslation } from 'react-i18next'

// const Hero = () => {
//   const { t, i18n } = useTranslation()
//   console.log(i18n?.languages?.[0]);

//   const [activeIndex, setActiveIndex] = useState(0)
//   const slides = [imgDesktop1, imgDesktop2, imgDesktop3, imgDesktop4]
//   const slidesRu = [imgDesktopRu1, imgDesktopRu2, imgDesktopRu3, imgDesktopRu4]

//   const langHero = i18n?.languages?.[0] === "ru" ? slidesRu : slides

//   return (
//     <div className='hero'>
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         speed={1500}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="hero-swiper"
//       >
//         {
//           langHero?.map((el, index) => (
//             <SwiperSlide key={index}>
//               <img src={el} alt="Hero 1" />
//             </SwiperSlide>
//           ))
//         }
//       </Swiper>

//       <div className="custom-pagination container">
//         {langHero.map((_, index) => (
//           <div
//             key={index}
//             className={`pagination-line ${activeIndex === index ? 'active' : ''}`}
//           >
//             <div className="line-wrapper">
//               <div className="line-progress"></div>
//             </div>
//             <div className="line-number">
//               {String(index + 1).padStart(2, '0')}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Hero


import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import imgDesktop1 from "../../assets/banner/herobg1.webp"
import imgDesktop2 from "../../assets/banner/herobg2.webp"
import imgDesktop3 from "../../assets/banner/herobg3.webp"
import imgDesktop4 from "../../assets/banner/herobg4.webp"
import imgDesktopRu1 from "../../assets/banner/herobgru1.webp"
import imgDesktopRu2 from "../../assets/banner/herobgru2.webp"
import imgDesktopRu3 from "../../assets/banner/herobgru3.webp"
import imgDesktopRu4 from "../../assets/banner/herobgru4.webp"
import "./hero.scss"
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  console.log(i18n?.languages?.[0]);

  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [imgDesktop1, imgDesktop2, imgDesktop3, imgDesktop4]
  const slidesRu = [imgDesktopRu1, imgDesktopRu2, imgDesktopRu3, imgDesktopRu4]

  const langHero = i18n?.languages?.[0] === "ru" ? slidesRu : slides

  return (
    <div className='hero'>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {
          langHero?.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <img src={el} alt={`Hero ${index + 1}`} />
                <div className="slide-overlay"></div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="custom-pagination container">
        {langHero.map((_, index) => (
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