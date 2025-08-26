import React from 'react'
import "./advantages.scss"

const items = [
  "Гарантирует надежный пуск двигателя и его защиту в условиях низких температур.",
  "Продлевает срок службы двигателя, гарантируя его защиту даже в условиях повышенных нагрузок.",
  "Обеспечивает дополнительную защиту комплексных систем очистки отработавших газов (DPF, CPF, CAT и др.).",
  "Способствует уменьшению расхода топлива."
];

const Advantages = () => {
  return (
    <div id='advantages' className='advantages container'>
      <h2 className="advantages-title">Преимущества</h2>
      <div className="advantages__info">
        <p className="advantages-info-title">
          Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла YUBASE PLUS в сочетании с современным низкозольным пакетом присадок.
        </p>
        <ul className="advantages-info-item">
          {items.map((text, index) => (
            <li key={index} className="advantages-info-item-list">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Advantages
