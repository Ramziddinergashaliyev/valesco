import React, { useState, useEffect, useRef } from 'react'
import "./about.scss"

import { FaCircleChevronRight } from "react-icons/fa6";

import logo from "../../assets/icons/about.svg"
import { MISSION } from '../../static';
import img from "../../assets/images/hero-2.jpg"
import { NavLink } from 'react-router-dom';

const About = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  return (
    <div className='about'>
      <div className="about-top">
        <div className="about-top-box container">
          <div className="about-top-info container">
            <h2 className="about-top-title">About Company</h2>
            <p className='about-top-text about-top-desc'>Our company is a manufacturer of motor oil, brake fluids, coolants and auto chemicals</p>
            <p className='about-top-text'>In 2019, the company began producing motor oils under the VALESCO brand, which meet international standards.
              The company was founded in 2011 as an Uzbek-Korean joint venture, GLOBAL PETROCHEMICAL GROUP, in Tashkent.</p>
            <p className='about-top-text'>All stages of production (including packaging production) are carried out using our own technological equipment.
              Thorough quality control is performed at every stage of production.</p>
            <p className='about-top-text'>GPG's products fully comply with all necessary standards, have successfully passed tests in accredited laboratories and have test protocols, as well as certification from the Agency for Standardization, Metrology and Certification
              "UzStandard",
              and have been approved for production and use in vehicles in accordance with TU 64-23424406-01:2012.</p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="about-middle container">
        <div className="about-middle-top">
          <div className="about-middle-top-box" ref={counterRef}>
            <img src={logo} alt="" />
            <div className="about-middle-top-box-info">
              <p className="about-middle-top-box-info-text">{count}%</p>
              <h2 className="about-middle-top-box-info-title">Guarantee</h2>
            </div>
          </div>
          <div className="about-middle-top-info">
            <h2 className="about-middle-top-info-title">100% Performance Guarantee</h2>
            <p className="about-middle-top-info-text">Valesco oil guarantees engine protection and maximum performance. Formulated to endure the toughest conditions, so you can drive with confidence.</p>
          </div>
          <div className="about-middle-top-right">
            <p className="about-middle-top-right-title"><FaCircleChevronRight />Long-lasting engine protection</p>
            <p className="about-middle-top-right-title"><FaCircleChevronRight />Reduced friction, maximum efficiency</p>
            <p className="about-middle-top-right-title"><FaCircleChevronRight />Advanced technology formulas</p>
          </div>
        </div>
      </div>

      <div className="about-cards container">
        {
          MISSION?.map(el => (
            <div className='about-card'>
              <h3 className="about-card-title">{el?.price}</h3>
              <p className="about-card-text">{el?.title}</p>
            </div>
          ))
        }
      </div>

      <div className="about-imgs container">
        <div className="about-imgs-left">
          <img src={img} alt="" />
        </div>
        <div className="about-imgs-right">
          <h3 className='about-imgs-right-text'> - About Us</h3>
          <h1 className='about-imgs-right-title'>About Valesco Oil</h1>
          <p className='about-imgs-right-desc'>Shindo Oil is more than just engine oil—it's the symbol of modern engineering and pure performance. Our innovative formulas power the heart of your vehicle.</p>
          <button className='about-imgs-right-btn'>
            <NavLink>Contact Us</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About