import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HeroTop from './components/heroTop/HeroTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Impact from './pages/impact/Impact'
import Culture from './pages/culture/Culture'
import News from './pages/news/News'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/impact' element={<Impact/>}/>
          <Route path='/culture' element={<Culture/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App