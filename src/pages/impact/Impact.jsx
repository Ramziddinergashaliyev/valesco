import React, { useEffect } from 'react'
import "./impact.scss"
import img from "../../assets/images/impact.jpg"
import img1 from "../../assets/images/impgroup.jpg"
import img2 from "../../assets/images/acsio.jpg"
import img3 from "../../assets/images/doct.jpg"
import img4 from "../../assets/images/prinsp.jpg"
import { IMPACT } from '../../static'

const Impact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='impact container'>
      <div className="impact-top">
        <h1 className="impact-top-title">
          социальная ответственность</h1>
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

      <div className="impact-acsio">
        <h2 className="impact-acsio-title">Удовлетворенность акционеров</h2>
        <div className="impact-acsio-info">
          <p className="impact-acsio-info-title"><span>Корпорация заботится об удовлетворенности своих акционеров.</span> Мы верим, что в долгосрочной перспективе рост удовлетворенности акционеров положительно сказывается на всех остальных участниках бизнеса.</p>
          <img src={img2} alt="" className="impact-acsio-info-img" />
        </div>
      </div>

      <div className="impact-doct">
        <h2 className="impact-doct-title">Культура достижения максимума</h2>
        <div className="impact-doct-right">
          <img src={img3} alt="impact-img" />
          <div className="impact-doct-right-info">
            <p className="impact-doct-right-info-title">В быстро меняющихся условиях корпорация использует подход SUPEX*, чтобы повышать уровень удовлетворенности акционеров и постоянно добиваться наилучших результатов. Все участники работают добровольно, охотно и с умом, чтобы продемонстрировать высочайшую продуктивность в достижении результатов.</p>
            <p className="impact-doct-right-info-text">* Термин для обозначения наивысшего уровня, который может быть достигнут человеческими способностями.</p>
          </div>
        </div>
      </div>

      <div className="impact-prinsp">
        <h2 className="impact-prinsp-title">принцип реализации</h2>
        <div className="impact-prinsp-right">
          <img src={img4} alt="impact-img" className="impact-prinsp-right-img" />
          <div className="impact-prinsp-right-info">
            <div className="impact-prinsp-right-info-top">
              <h2 className="impact-prinsp-right-info-top-title">Реализация стратегии SUPEX</h2>
              <p className="impact-prinsp-right-info-top-text">Чтобы постоянно оправдывать ожидания акционеров, SK устанавливает SUPEX, то есть максимальный уровень, который может быть достигнут человеческими способностями в качестве цели. Такая задача часто сложно достижима на практике, поэтому SK будет ставить ее повторно до тех пор, пока не выйдет на следующий уровень SUPEX.</p>
            </div>
            <div className="impact-prinsp-right-info-bottom">
              <h2 className="impact-prinsp-right-info-bottom-title">Продвижение подхода SUPEX</h2>
              <p className="impact-prinsp-right-info-bottom-text">Чтобы достигать целей по SUPEX, все участники должны работать добровольно, охотно и с умом. Поэтому мы заботимся о том, чтобы все участники понимали эти принципы и прониклись духом SUPEX.</p>
            </div>
          </div>
        </div>
      </div>  

    </div>
  )
}

export default Impact