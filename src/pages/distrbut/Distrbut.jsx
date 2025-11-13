import React, { useEffect } from 'react'
import "./distrbut.scss"
import MapChart from '../../components/mapChart/MapChart'
import Distr from '../../components/distr/Distr'
import { Navigate, NavLink } from 'react-router-dom'

const Distrbut = () => {

  useEffect(() => {
    scrollTo(0,0)
  }, [])

  return (
    <div className='distrbut'>
      <div className="distrbut-top">
        <div className="distrbut-top-info container">
          <h2 className='distrbut-top-info-title'>VALESCO GLOBAL DISTRIBUTOR</h2>
          <p className='distrbut-top-info-text'>Advanced Lubrication Technology | Global Logistics</p>
        </div>
      </div>

      <div className="distrbut-catalog container">
        <h2 className='distrbut-catalog-title'>Download our catalogue</h2>
        <p className='distrbut-catalog-text'>Get to know all the details of our products and download the complete catalogs</p>
        <button className='distrbut-catalog-btn'><NavLink to={"/catalogProduct"}>Download catalogs</NavLink></button>
      </div>
      <div className="distrbut-map container">
        <MapChart />
      </div>
      <Distr/>

    </div>
  )
}

export default Distrbut