// import React, { useEffect } from 'react'
// import "./contact.scss"
// import { useTranslation } from 'react-i18next'

// const Contact = () => {
//   const { t, i18n } = useTranslation()
//   console.log(i18n?.languages[0]);

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <div className='contact container'>
//       <div className="contact-top">
//         <h2 className="contact-top-title">{t("Контакты")}</h2>
//         <p className="contact-top-text">{t("какие-либо")}</p>
//       </div>
//       <div className="contact-bottom">
//         <div className="contact-bottom-left">
//           <div className="contact-bottom-left-addres">
//             <p className="contact-bottom-left-addres-title">{t("Адрес")}</p>
//             <p className="contact-bottom-left-addres-text">{t("addressValesco")}</p>
//           </div>
//           <div className="contact-bottom-left-sv">
//             <p className="contact-bottom-left-sv-title">{t("для связи")}</p>
//             <div className="contact-bottom-left-sv-info">
//               <div className="contact-bottom-left-sv-info-phone">
//                 <span>{t("телефона")}</span>
//                 <p className="contact-bottom-left-sv-info-phone-text">
//                   <a href="tel:+998 71 281 49 30">+998 71 281 49 30</a>
//                   <a href="tel:+998 71 203 20 31">+998 71 203 20 31</a>
//                 </p>
//               </div>
//               <div className="contact-bottom-left-sv-info-pochta">
//                 <span>{t("E-mail")}</span>
//                 <a href='mailTo: info@gpggroup.uz' className="contact-bottom-left-sv-info-pochta-text">info@gpggroup.uz</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="contact-bottom-right">

//           {/* <div style={{ position: "relative", overflow: "hidden" }}>

//             <a
//               href="https://yandex.uz/maps/105813/tashkent-province/category/auto_accessories/184105286/?utm_medium=mapframe&utm_source=maps"
//               style={{
//                 color: "#eee",
//                 fontSize: "12px",
//                 position: "absolute",
//                 top: "14px",
//               }}
//             >
//               Автоаксессуары в Ташкентской области
//             </a>
//             <iframe
//               src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.129905%2C41.199023&mode=search&oid=26921342218&ol=biz&z=14.78"
//               style={{
//                 width: "100%",
//                 height: "500px",
//                 position: "relative",
//                 border: "none", // 🟢 Chegarani olib tashlaydi
//               }}
//               allowFullScreen
//             ></iframe>
//           </div> */}

//           <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Яндекс Карты</a><a href="https://yandex.uz/maps/190807/quyoshli/stops/3463299265/?from=mapframe&ll=69.135753%2C41.201178&tab=overview&utm_medium=mapframe&utm_source=maps&z=17.8" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Поликлиника — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.135753%2C41.201178&masstransit%5BstopId%5D=3463299265&mode=masstransit&tab=overview&z=17.8" style={{ width: "100%", height: "400px", position: "relative", border: "none" }} frameborder="1" allowfullscreen="true"></iframe></div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Contact

import React, { useEffect } from 'react'
import "./contact.scss"
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail } from 'react-icons/md';
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {

  useEffect(() => {
    scrollTo(0,0)
  }, [])

  return (
    <div className='contact'>
      <div className="contact-top">
      </div>
      <div className="contact-form container">
        <div className="contact-form-left">
          <div className="contact-form-left-info">
            <h3 className="contact-form-left-info-title">Contact Details</h3>
            <p className="contact-form-left-info-text">Get in touch with us for any questions about our products.</p>
          </div>
          <div className="contact-form-left-box">
            <IoLocationOutline />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">Address</h3>
              <p className="contact-form-left-box-info-text">Республика Узбекистан, Ташкентская область, Зангиатинский район, Эркинский сельский сход граждан, улица Зафаробод, дом 28</p>
            </div>
          </div>
          <div className="contact-form-left-box">
            <MdOutlineMail />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">E-mail</h3>
              <p className="contact-form-left-box-info-text">info@gpggroup.uz</p>
            </div>
          </div>
          <div className="contact-form-left-box">
            <LuPhone />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">Call support</h3>
              <p className="contact-form-left-box-info-text"><a href="tel: +998 71 281 49 30"> +998 71 281 49 30</a></p>
              <p className="contact-form-left-box-info-text"><a href="tel: +998 71 203 20 31">+998 71 203 20 31</a></p>
            </div>
          </div>
        </div>

        <form action="" className="contact-form-right">
        <h3 className='container contact-top-title'>Contact Us</h3>
          <div className="contact-form-right-top">
            <label htmlFor="">
              <input placeholder='Name' type="text" />
            </label>
            <label htmlFor="">
              <input placeholder='Phone' type="text" />
            </label>
            <label htmlFor="">
              <input placeholder='Email' type="text" />
            </label>
            <label htmlFor="">
              <input placeholder='Country' type="text" />
            </label>
          </div>
          <div className="contact-form-right-bottom">
            <label htmlFor="">
              <input placeholder='Company' type="text" />
            </label>
            <label htmlFor="">
              <textarea name="" placeholder='Message' id=""></textarea>
            </label>
            <button className="contact-form-right-bottom-btn">Send Now</button>
          </div>
        </form>
      </div>

      <div className="contact-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3248.230692956812!2d69.136341!3d41.200520000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzAxLjkiTiA2OcKwMDgnMTAuOCJF!5e1!3m2!1sen!2s!4v1762319654663!5m2!1sen!2s" style={{ width: "100%", height: "450px", border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact