import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HeroTop from './components/heroTop/HeroTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Impact from './pages/impact/Impact'
import Culture from './pages/culture/Culture'
import News from './pages/news/News'
import Oem from './pages/oem/Oem'
import Unical from './pages/unical/Unical'
import Benafits from './pages/benafits/Benafits'
import Oil from './pages/oil/Oil'
import Distrbut from './pages/distrbut/Distrbut'
import Faq from './pages/faq/Faq'
import Publications from './pages/publications/Publications'
import Contact from './pages/contact/Contact'
import ChinaAuto from './pages/chinaAuto/ChinaAuto'
import Otzive from './pages/otzive/Otzive'
import ProductItem from './pages/productItem/ProductItem'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/impact' element={<Impact />} />
          <Route path='/culture' element={<Culture />} />
          <Route path='/oem' element={<Oem />} />
          <Route path='/unical' element={<Unical />} />
          <Route path='/benafits' element={<Benafits />} />
          <Route path='/oil' element={<Oil />} />
          <Route path='/distrbut' element={<Distrbut />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/public' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chinaAuto' element={<ChinaAuto />} />
          <Route path='/otziv' element={<Otzive />} />
          <Route path='/item' element={<ProductItem />} />
        </Route>
      </Routes>
    </>
  )
}

export default App