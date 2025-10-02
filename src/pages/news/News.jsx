import React, { useEffect } from 'react'
import { NEW } from '../../static'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/icons/logo.png"

import "./news.scss"

const News = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='news container'>
      <div className="news-top">
        <div className="news-top-img">
          <img src={logo} alt="news-top-logo" />
        </div>
        <h1 className='news-top-title'>valescooil_uz</h1>
      </div>
      <div className='news__cards'>
        {
          NEW?.map(el => (
            <NavLink className="news__card">
              <div className="news__card-img">
                <img className='news__card-img-image' src={el?.img} alt="News-card-img" />
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default News