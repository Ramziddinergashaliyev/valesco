import React from 'react'
import { IoMdDownload } from "react-icons/io";
import './document.scss'
import { useTranslation } from 'react-i18next';

const Document = () => {
  const { t, i18n } = useTranslation()
  return (
    <div id='document' className='document container'>
        <h2 className='document-title'>{t("Документация")}</h2>
        <button className='document-title-btn'>{t("скачать")} <IoMdDownload /></button>
    </div>
  )
}

export default Document