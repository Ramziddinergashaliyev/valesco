import React from 'react'
import "./heroTop.scss"

const HeroTop = () => {
    return (
        <div className='heroTop'>
            <div className="heroTop__container container">
            <h2 className="heroTop__title">Добро пожаловать <br />
                в мир Valesco</h2>
            <p className="heroTop__text">Мир моторных масел</p>
            </div>
        </div>
    )
}

export default HeroTop