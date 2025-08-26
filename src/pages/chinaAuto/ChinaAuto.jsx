import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import "./chinaAuto.scss"
import { BOXS } from '../../static';

const ChinaAuto = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='chinaAuto container'>
      <div className="chinaAuto-top">
        <h2 className="chinaAuto-top-title">продукты, рекомендуемые для
          китайских автомобилей</h2>
      </div>

      <div className="chinaAuto-bottom">
        {
          BOXS?.map(el => (
            <div key={el?.id} className="chinaAuto-bottom-boxs">
              <p className="chinaAuto-bottom-boxs-text">{el?.sky}</p>
              <div className="chinaAuto-bottom-boxs-middle">
                <img src={el?.img} alt="chinaAuto-img" />
                <div className="chinaAuto-bottom-boxs-middle-info">
                  <h2 className="chinaAuto-bottom-boxs-middle-info-title">{el?.title}</h2>
                  <p className="chinaAuto-bottom-boxs-middle-info-text">{el?.text}</p>
                </div>
              </div>
              <button className='chinaAuto-bottom-boxs-btn'>Подробнее <MdArrowOutward /></button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChinaAuto