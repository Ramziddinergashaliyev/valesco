import React from 'react'
import "./packing.scss"
import img1 from "../../assets/icons/1.svg"
import img2 from "../../assets/icons/4.svg"

const Packing = ({ data }) => {
    console.log(data?.category);

    const PAC = [
        {
            id: 0,
            valume: "20L",
            article: "14351"
        },
        {
            id: 1,
            valume: "60L",
            article: "19351"
        }
    ];

    return (
        <div id='packing' className='packing container'>
            <h2 className="packing-title">фасовка и артикул</h2>
            {
                data?.category?.title?.ru === "Моторные масла для дизельных двигателей" || data?.category?.title?.ru === "Motor oils for diesel engines"
                    ?
                    <>
                        <div className="packing-cards">
                            {PAC?.map((el) => (
                                <div key={el?.id} className="packing-table">
                                    <div className="packing-table-left">
                                        <p className="packing-table-left-text">{el?.valume}</p>
                                    </div>
                                    <p className='packing-table-text'>{el?.article}</p>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <div className="packing-cards">
                        {data?.packing?.map((el, index) => (
                            <div key={index} className="packing-table">
                                <div className="packing-table-left">
                                    <p className="packing-table-left-text">{el?.volume}</p>
                                </div>
                                <p className='packing-table-text'>{el?.article}</p>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Packing
