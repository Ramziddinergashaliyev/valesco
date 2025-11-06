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
    <div>About</div>
  )
}

export default About