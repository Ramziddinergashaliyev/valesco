import React from 'react'
import "./mission.scss"
import { MdArrowOutward } from 'react-icons/md'
import { MISSION } from '../../static'

const Mission = () => {
    return (
        <div className='mission'>
            <div className="container mission-container">
                <div className="mission-top">
                    <h1 className="mission-top-title">SK Enmove</h1>
                    <div className="mission-top-info">
                        <h3 className="mission-top-info-title">
                            Глобальный холдинг SK – мировой лидер в ключевых отраслях,
                            определяющих образ будущего</h3>
                        <p className="mission-top-info-text">SK строит целые индустрии и инвестирует в бизнесы, которые меняют
                            правила игры для всех участников. Мы отдаем приоритет долгосрочному
                            успеху и благополучию в интересах будущих поколений.</p>
                    </div>
                </div>
                <div className="mission-cards">
                    {
                        MISSION?.map(el => (
                            <div key={el?.id} className="mission-card">
                                <h2 className="mission-card-title">{el?.price}</h2>
                                <div className="mission-card-info">
                                    <p className="mission-card-info-text">{el?.title}</p>
                                    <p className="mission-card-info-desc">Узнать больше<MdArrowOutward /></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Mission