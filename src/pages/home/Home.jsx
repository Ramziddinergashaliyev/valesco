import React from 'react'
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

const Home = () => {
  return (
    <>
      <HeroTop/>
      <Hero/>
      <HeroBrand/>
      <ProductRange/>
      <Banner/>
      <PrideArea/>
      <Differents/>
      <Mission/>
      <CallTo/>
    </>
  )
}

export default Home