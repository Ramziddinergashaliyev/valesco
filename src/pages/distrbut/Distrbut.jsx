import React, { useEffect } from 'react'
import "./distrbut.scss"
import MapChart from '../../components/mapChart/MapChart'
import Distr from '../../components/distr/Distr'
import { Navigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdArrowOutward } from 'react-icons/md'
import pdf from "../../assets/pdf/v-catalog.pdf"

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
        <div className="distrbut-catalog-btns">
            <a download className='distrbut-catalog-btn' href={pdf}>{t("DownloadEn")}<MdArrowOutward /></a>
            <a download target='_blank' className='distrbut-catalog-btn' href="https://backend.valescooil.com/uploads/files/1764574907305-685895377.pdf">{t("Download")}<MdArrowOutward /></a>
        </div>
      </div>

      <div className="distrbut-bg">
        <div className="container distrbut-bg-container">
          <div className="distrbut-bg-left">
            <h3 className="distrbut-bg-left-title">{t("distributor partners")}</h3>
            <p className="distrbut-bg-left-text">{t("We are constantly seeking opportunities to expand your business to new countries and markets.")}</p>
          </div>
          <div className="distrbut-bg-right">
            <NavLink to={'/contact'} className="distrbut-bg-right-btn">{t("Become Our Partner")}<MdArrowOutward /></NavLink>
          </div>
        </div>
      </div>

      <div className="distrbut-map">
        <MapChart />
      </div>

      <Distr />
    </div>
  )
}

export default Distrbut