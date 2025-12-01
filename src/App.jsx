import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Impact = lazy(() => import('./pages/impact/Impact'))
const Culture = lazy(() => import('./pages/culture/Culture'))
const News = lazy(() => import('./pages/news/News'))
const Unical = lazy(() => import('./pages/unical/Unical'))
const Benafits = lazy(() => import('./pages/benafits/Benafits'))
const Oil = lazy(() => import('./pages/oil/Oil'))
const Distrbut = lazy(() => import('./pages/distrbut/Distrbut'))
const Publications = lazy(() => import('./pages/publications/Publications'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const ChinaAuto = lazy(() => import('./pages/chinaAuto/ChinaAuto'))
const ProductItem = lazy(() => import('./pages/productItem/ProductItem'))
const SingleProduct = lazy(() => import('./pages/singleProduct/SingleProduct'))
const Outlets = lazy(() => import('./pages/outlets/Outlets'))
const CatalogProduct = lazy(() => import('./pages/catologProduct/CatalogProduct'))
// import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Impact from './pages/impact/Impact'
// import Culture from './pages/culture/Culture'
// import News from './pages/news/News'
// import Unical from './pages/unical/Unical'
// import Benafits from './pages/benafits/Benafits'
// import Oil from './pages/oil/Oil'
// import Distrbut from './pages/distrbut/Distrbut'
// import Publications from './pages/publications/Publications'
// import Contact from './pages/contact/Contact'
// import ChinaAuto from './pages/chinaAuto/ChinaAuto'
// import ProductItem from './pages/productItem/ProductItem'
// import SingleProduct from './pages/singleProduct/SingleProduct'
// import Outlets from './pages/outlets/Outlets'
// import CatalogProduct from './pages/catologProduct/CatalogProduct'
import { ToastContainer } from 'react-toastify'
import Market from './pages/market/Market'

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
          <Route path='/market-pleace' element={<Market/>}/>
        </Route>
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App