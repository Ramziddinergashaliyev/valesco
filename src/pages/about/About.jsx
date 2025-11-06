// import React, { useEffect } from 'react'
// import img from "../../assets/images/about.png"
// import "./about.scss"
// import { MISSION } from '../../static'
// import img1 from "../../assets/images/hero-2.jpg"
// import { useTranslation } from 'react-i18next'

// const About = () => {
//   const { t, i18n } = useTranslation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <div className='about'>
//       <div className="">
//         <div className="about__top-bg">
//           <div className="container">
//             <h2 className='about__top-bg-title'><i>ABOUT COMPANY</i></h2>
//           </div>
//         </div>

//         <div className="about__middle">
//           <div className="container about__take">
//             <h2 className="about__take-title"></h2>
//             <div className="about__take-info">
//               <h2 className="about__take-info-title">{t("Наша компания")}</h2>
//               <p className="about__take-info-text">{t("начало")}</p>

//               <div className="about-info">
//                 <p className="about-info-text">{t("производства")}</p>
//                 <p className="about-info-text">{t("Продукция компании")}</p>
//               </div>

//               {/* <div className="about-imgs">
//                 <div className="about-imgs-info">
//                   <p className="about-info-text">{t("Так как")}</p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         <div className="about__take-info-cards container">
//           {
//             MISSION?.map(el => (
//               <div key={el.id} className="about__take-info-card">
//                 <h2 className="about__take-info-card-title">{el?.price}</h2>
//                 <p className="about__take-info-card-text">{el?.title}</p>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className='about'>
      <div className="about-top">
        <div className="about-top-box container">
          <div className="about-top-info container">
            <h2 className="about-top-title">About Company</h2>
            <p className='about-top-text'>Our company is a manufacturer of motor oil, brake fluids, coolants and auto chemicals</p>
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
    </div>
  )
}

export default About