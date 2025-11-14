import React, { useEffect } from 'react'
import "./distrbut.scss"
import MapChart from '../../components/mapChart/MapChart'
import Distr from '../../components/distr/Distr'
import { Navigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Distrbut = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    scrollTo(0,0)
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
        <button className='distrbut-catalog-btn'><NavLink to={"/catalogProduct"}>{t("Download")}</NavLink></button>
      </div>
      <div className="distrbut-map container">
        <MapChart />
      </div>
      <Distr/>

    </div>
  )
}

export default Distrbut