import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HeroTop from './components/heroTop/HeroTop'
import Home from './pages/home/Home'
import About from './pages/about/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App