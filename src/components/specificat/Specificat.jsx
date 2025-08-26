import React from 'react'
import "./specificat.scss"

const Specificat = ({data}) => {
  
  return (
    <div id='specy' className='specificat container'>
        <h2 className='specificat-title'>спецификации</h2>
        <ul className="specificat-item">
          {
            data?.map((el, index) => (
              <li key={index} className="specificat-list">{el}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default Specificat