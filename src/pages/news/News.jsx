import React, { useEffect } from 'react'
import { NEW } from '../../static'
import { NavLink } from 'react-router-dom'
import "./news.scss"

const News = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='news container'>
      <div className="news__cards">
        {
          NEW?.map(el => (
            <NavLink key={el?.id} to={el?.link} className="news__card">
              <div className="news__card-img">
                <img src={el?.img} alt="" />
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default News