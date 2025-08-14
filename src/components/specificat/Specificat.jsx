import React from 'react'
import "./specificat.scss"

const Specificat = () => {
  return (
    <div id='specy' className='specificat container'>
        <h2 className='specificat-title'>спецификации</h2>
        <ul className="specificat-item">
            <li className="specificat-list">API SP</li>
            <li className="specificat-list">ACEA C6 /C5</li>
            <li className="specificat-list">ILSAC GF-6A</li>
            <li className="specificat-list">Mercedes-Benz MB 229.72 / 229.71</li>
            <li className="specificat-list">Volvo RBS0-2AE</li>
            <li className="specificat-list">Jaguar-Land Rover STJLR 03-5006-16</li>
            <li className="specificat-list">Ford WSS-M2C947-B1 / WSS-M2C962-A1</li>
            <li className="specificat-list">FIAT 9.55535-GSX</li>
            <li className="specificat-list">Chrysler MS-12145</li>
        </ul>
    </div>
  )
}

export default Specificat