import React from 'react'
import { IoMdDownload } from "react-icons/io";
import './document.scss'

const Document = () => {
  return (
    <div id='document' className='document container'>
        <h2 className='document-title'>Документация</h2>
        <button className='document-title-btn'>скачать <IoMdDownload /></button>
    </div>
  )
}

export default Document