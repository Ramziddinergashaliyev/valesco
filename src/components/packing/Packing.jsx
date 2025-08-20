import React from 'react'
import "./packing.scss"
import img1 from "../../assets/icons/1.svg"
import img2 from "../../assets/icons/4.svg"

const Packing = () => {

    const PAC = [
        {
            id: 1,
            title: "1 литр",
            img: img1,
            number: "132045"
        },
        {
            id: 2,
            title: "4 литра",
            img: img2,
            number: "162045"
        }
    ]

    return (
        <div id='packing' className='packing container'>
            <h2 className="packing-title">фасовка и артикул</h2>
            <div className="packing-cards">
                {
                    PAC?.map(el => (
                        <div key={el?.id} className="packing-table">
                            <div className="packing-table-left">
                                <img src={el?.img} alt={`acking-imgs ${el?.title}`} />
                                <p className="packing-table-left-text">{el?.title}</p>
                            </div>
                            <p className='packing-table-text'>{el?.number}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Packing