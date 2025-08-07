import React from 'react'
import "./callTo.scss"
import { CALLTO } from '../../static'
import { MdArrowOutward } from 'react-icons/md'

const CallTo = () => {
    return (
        <div className='callTo container'>
            <div className="callTo__left">
                <h1 className="callTo__left-title">Хочешь узнать больше?</h1>
                <p className="callTo__left-text">Мы дорожим доверием клиентов, поэтому мы предоставляем товары исключительного качества и меняемся в соответствии с потребностями рынка. Мы защищаем данные о клиентах в соответствии с законом и регламентом компании.</p>
            </div>
            <div className="callTo__right">
                {
                    CALLTO?.map(el => (
                        <div key={el?.id} className="callTo__card">
                            <h2 className="callTo__card-title">{el?.title}</h2>
                            <p className="callTo__card-text">Узнать больше<MdArrowOutward /></p>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default CallTo