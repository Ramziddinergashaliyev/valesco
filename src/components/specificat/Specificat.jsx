import React from 'react'
import "./specificat.scss"

const Specificat = () => {
  return (
    <div id='specy' className='specificat container'>
        <h2 className='specificat-title'>спецификации</h2>
        <ul className="specificat-item">
            <li className="specificat-list">API SN/CF</li>
            <li className="specificat-list">ACEA A3/B4</li>
            <li className="specificat-list">ILSAC GF-5</li>
            <li className="specificat-list">VW 502.00/505.00;</li>
            <li className="specificat-list">MB 226.5</li>
            <li className="specificat-list">GM dexos 2</li>
        </ul>
    </div>
  )
}

export default Specificat