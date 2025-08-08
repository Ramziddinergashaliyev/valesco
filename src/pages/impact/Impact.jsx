import React from 'react'
import "./impact.scss"
import img from "../../assets/images/impact.jpg"
import img1 from "../../assets/images/impgroup.jpg"
import { IMPACT } from '../../static'

const Impact = () => {
  return (
    <div className='impact container'>
      <div className="impact-top">
        <h1 className="impact-top-title">социальная
          ответственность</h1>
        <div className="impact-top-imgs">
          <img src={img} alt="impact-top-img" />
        </div>
      </div>

      <div className="impact-nashi">
        <h2 className="impact-nashi-title">наша философия</h2>
        <div className="impact-nashi-info">
          <div className="impact-nashi-info-top">
            <h3 className="impact-nashi-info-top-title">
              В основе успеха бизнеса Valesco лежат удовлетворенность акционеров, достижение максимума SUPEX и победный дух «Pae-gi»</h3>
            <p className="impact-nashi-info-top-desc">SKMS (система управления SK) систематически излагает корпоративную культуру и бизнес-идеологию, а также методы управления SK Group. Это эксклюзивная философия управления SK, которую разделяют и с которой согласны все филиалы SK.</p>
          </div>
          <div className="impact-nashi-info-bottom">
            {

            }
            <div className="impact-nashi-info-bottom-boxs">
              {
                IMPACT?.map(el => (
                  <div key={el?.id} className="impact-nashi-info-bottom-box">
                    <h3 className="impact-nashi-info-bottom-box-title">{el?.title}</h3>
                    <p className="impact-nashi-info-bottom-box-desc">{el?.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="impact-group">
        <h2 className="impact-group-title">SK Group и его
          участники</h2>

        <div className="impact-group-box">
          <img src={img1} alt="impact-img" />
          <div className="impact-group-info">
            <p className="impact-group-info-text">Каждая компания SK Group осуществляет автономное и ответственное управление при совете директоров, и при этом каждая компания имеет собственный комитет управления в соответствии с соглашением о добровольном участии.</p>
            <p className="impact-group-info-text"><span>Это уникальный подход к управлению SK Group по принципу «Независимы, но едины».</span> Все члены SK Group разделяют философию управления SK и добровольно и активно реализуют ее.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Impact