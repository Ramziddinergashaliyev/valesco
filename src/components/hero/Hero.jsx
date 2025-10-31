import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import imgDesktop1 from "../../assets/banner/herobg1.webp"
import imgDesktop2 from "../../assets/banner/herobg2.webp"
import imgDesktop3 from "../../assets/banner/herobg3.webp"
import imgDesktop4 from "../../assets/banner/herobg4.webp"
import "./hero.scss"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [imgDesktop1, imgDesktop2, imgDesktop3, imgDesktop4]

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
        <SwiperSlide>
          <img src={imgDesktop3} alt="Hero 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgDesktop4} alt="Hero 4" />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination container">
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