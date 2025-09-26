import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HeroTop from './components/heroTop/HeroTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Impact from './pages/impact/Impact'
import Culture from './pages/culture/Culture'
import News from './pages/news/News'
import Unical from './pages/unical/Unical'
import Benafits from './pages/benafits/Benafits'
import Oil from './pages/oil/Oil'
import Distrbut from './pages/distrbut/Distrbut'
import Publications from './pages/publications/Publications'
import Contact from './pages/contact/Contact'
import ChinaAuto from './pages/chinaAuto/ChinaAuto'
import ProductItem from './pages/productItem/ProductItem'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Outlets from './pages/outlets/Outlets'
import CatalogProduct from './pages/catologProduct/CatalogProduct'

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
          <Route path='/unical' element={<Unical />} />
          <Route path='/benafits' element={<Benafits />} />
          <Route path='/oil' element={<Oil />} />
          <Route path='/distrbut' element={<Distrbut />} />
          <Route path='/public' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chinaAuto' element={<ChinaAuto />} />
          <Route path='/categories/:id' element={<ProductItem />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
          <Route path='/outlets' element={<Outlets />} />
          <Route path='/catalogProduct' element={<CatalogProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App