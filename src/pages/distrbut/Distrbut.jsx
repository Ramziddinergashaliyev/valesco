import React, { useEffect } from 'react'
import "./distrbut.scss"
import MapChart from '../../components/mapChart/MapChart'
import Distr from '../../components/distr/Distr'
import { Navigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdArrowOutward } from 'react-icons/md'

const Distrbut = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  
  return (
    <div className='distrbut'>
      <div className="distrbut-top">
        <div className="distrbut-top-info container">
          <h2 className='distrbut-top-info-title'>{t("DISTRIBUTOR")}</h2>
          <p className='distrbut-top-info-text'>{t("Global Logistics")}</p>
        </div>
      </div>
    
      <div className="distrbut-catalog container">
        <h2 className='distrbut-catalog-title'>{t("catalogue")}</h2>
        <p className='distrbut-catalog-text'>{t("know all")}</p>
        <NavLink to={"/catalogProduct"} className='distrbut-catalog-btn'>{t("Download")}<MdArrowOutward /></NavLink>
      </div>

      <div className="distrbut-map">
        <MapChart />
      </div>

      <Distr />

      <div className="distrbut-bg">
        <div className="container distrbut-bg-container">
          <div className="distrbut-bg-left">
            <h3 className="distrbut-bg-left-title">{t("distributor partners")}</h3>
            <p className="distrbut-bg-left-text">{t("We are constantly seeking opportunities to expand your business to new countries and markets.")}</p>
          </div>
          <div className="distrbut-bg-right">
            <NavLink to={'/contact'} className="distrbut-bg-right-btn">{t("Become Our Partner")}</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Distrbut