import React from 'react'
import "./media.scss"
import { IoLogoYoutube } from 'react-icons/io'
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import img1 from "../../assets/images/new1.jpg"
import img2 from "../../assets/images/new2.jpg"
import img3 from "../../assets/images/new3.jpg"

const Media = () => {
    return (
        <div className='media container'>
            <div className="media-left">
                <h2 className="media-left-title">Follow us on <span>Social Media</span></h2>
                <span className="media-left-text">Let's stay connected</span>
            </div>
            <div className="media-right">
                <div className="media-right-card">
                    <div className="media-right-card-logo"><IoLogoYoutube /></div>
                    <div className="media-right-card-img">
                        <img src={img1} alt="media-img-one" />
                    </div>
                    <button className="media-right-card-btns">Follow Us</button>
                </div>
                <div className="media-right-card">
                    <div className="media-right-card-logo"><AiFillInstagram /></div>
                    <div className="media-right-card-img">
                        <img src={img2} alt="media-img-two" />
                    </div>
                    <button className="media-right-card-btns">Follow Us</button>
                </div>
                <div className="media-right-card">
                    <div className="media-right-card-logo"><FaFacebookF /></div>
                    <div className="media-right-card-img">
                        <img src={img3} alt="media-img-three" />
                    </div>
                    <button className="media-right-card-btns">Follow Us</button>
                </div>
            </div>
        </div>
    )
}

export default Media
