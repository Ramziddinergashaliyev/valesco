import React, { useEffect } from 'react'
import HeroTop from '../../components/heroTop/HeroTop'
import Hero from '../../components/hero/Hero'
import HeroBrand from '../../components/heroBrand/HeroBrand'
import ProductRange from '../../components/productRange/ProductRange'
import Banner from '../../components/banner/Banner'
import PrideArea from '../../components/prideArea/PrideArea'
import Differents from '../../components/differents/Differents'
import Leazy from '../../components/leazy/Leazy'
import Mission from '../../components/mission/Mission'
import CallTo from '../../components/callTo/CallTo'
import Imgs from '../../components/imgs/Imgs'
import Media from '../../components/media/Media'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      {/* <HeroTop /> */}
      <Hero />
      {/* <HeroBrand /> */}
      <ProductRange />
      <Banner />
      <PrideArea />
      <Differents />
      <Media/>
      <Imgs/>
      {/* <Mission /> */}
      {/* <CallTo />  */}
    </>
  )
}

export default Home