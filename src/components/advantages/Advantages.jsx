import React from 'react'
import "./advantages.scss"

const Advantages = () => {
  return (
    <div id='addvantages' className='addvantages container'>
      <h2 className="addvantages-title">преимущества</h2>
      <div className="addvantages__info">
        <p className="addvantages-info-title">
          Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла YUBASE PLUS в сочетании с современным низкозольным пакетом присадок.</p>
        <ul className="addvantages-info-item">
          <li className="addvantages-info-item-list">
            <span>01</span>
            <span>
              Гарантирует надежный пуск двигателя и его защиту в условиях низких температур.</span>
          </li>
          <li className="addvantages-info-item-list">
            <span>02</span>
            <span>
              Продлевает срок службы двигателя, гарантируя его защиту даже в условиях повышенных нагрузок.</span>
          </li>
          <li className="addvantages-info-item-list">
            <span>03</span>
            <span>Обеспечивает дополнительную защиту комплексных систем очистки отработавших газов (DPF, CPF, CAT и др.).</span>
          </li>
          <li className="addvantages-info-item-list">
            <span>04</span>
            <span>Способствует уменьшению расхода топлива.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Advantages