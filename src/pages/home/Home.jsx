import React from 'react'
import HeroTop from '../../components/heroTop/HeroTop'
import Hero from '../../components/hero/Hero'
import HeroBrand from '../../components/heroBrand/HeroBrand'
import ProductRange from '../../components/productRange/ProductRange'
import Banner from '../../components/banner/Banner'
import PrideArea from '../../components/prideArea/PrideArea'

const Home = () => {
  return (
    <>
      <HeroTop/>
      <Hero/>
      <HeroBrand/>
      <ProductRange/>
      <Banner/>
      <PrideArea/>
    </>
  )
}

export default Home