import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import "./chinaAuto.scss"

const ChinaAuto = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='chinaAuto container'>
      <div className="chinaAuto-top">
        <h2 className="chinaAuto-top-title">продукты, рекомендуемые для
          китайских автомобилей</h2>
        <div className="chinaAuto-top-filter">
          <span>Выбор бренда</span>
          <div className="chinaAuto-top-filter-boxs">
            <button>HAVAL1</button>
            <button>HAVAL2</button>
            <button>HAVAL3</button>
            <button>HAVAL4</button>
            <button>HAVAL5</button>
            <button>HAVAL6</button>
            <button>HAVAL7</button>
          </div>
        </div>
        <div className="chinaAuto-top-model">
          <span>Выбор модели автомобиля</span>
          <div className="chinaAuto-top-model-boxs">
            <button>Jolion1</button>
            <button>Jolion2</button>
            <button>Jolion3</button>
            <button>Jolion4</button>
            <button>Jolion5</button>
            <button>Jolion6</button>
            <button>Jolion7</button>
          </div>
        </div>
      </div>

      <div className="chinaAuto-bottom">
        <div className="chinaAuto-bottom-boxs">
          <p className="chinaAuto-bottom-boxs-text"></p>
          <div className="chinaAuto-bottom-boxs-middle">
            <img src="" alt="chinaAuto-img" />
            <div className="chinaAuto-bottom-box-middle-info">
              <h2 className="chinaAuto-bottom-box-middle-info-title"></h2>
              <p className="chinaAuto-bottom-box-middle-info-text"></p>
            </div>
            <button>Подробнее <MdArrowOutward /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChinaAuto