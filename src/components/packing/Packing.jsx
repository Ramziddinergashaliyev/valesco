import React from 'react'
import "./packing.scss"
import img1 from "../../assets/icons/1.svg"
import img2 from "../../assets/icons/4.svg"

const Packing = ({ data }) => {
    // const PAC = [img1, img2];

    return (
        <div id='packing' className='packing container'>
            <h2 className="packing-title">фасовка и артикул</h2>
            <div className="packing-cards">
                {data?.map((el, index) => (
                    <div key={index} className="packing-table">
                        <div className="packing-table-left">
                            {/* <img src={PAC[index]} alt={`packing-img ${el?.title}`} /> */}
                            <p className="packing-table-left-text">{el?.volume}</p>
                        </div>
                        <p className='packing-table-text'>{el?.article}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Packing
