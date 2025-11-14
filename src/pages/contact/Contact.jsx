import React, { useEffect } from 'react'
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail } from 'react-icons/md';
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

import "./contact.scss"
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t, i18n } = useTranslation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div className='contact'>
      <div className="contact-top">
      </div>

      <div className="contact-form container">
        <div className="contact-form-left">
          <div className="contact-form-left-info">
            <h3 className="contact-form-left-info-title">{t("Details")}</h3>
            <p className="contact-form-left-info-text">{t("questions")}</p>
          </div>

          <div className="contact-form-left-box">
            <IoLocationOutline />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">{t("Address")}</h3>
              <p className="contact-form-left-box-info-text">{t("Republic")}</p>
            </div>
          </div>

          <div className="contact-form-left-box">
            <MdOutlineMail />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">{t("E-mail")}</h3>
              <p className="contact-form-left-box-info-text">info@gpggroup.uz</p>
            </div>
          </div>

          <div className="contact-form-left-box">
            <LuPhone />
            <div className="contact-form-left-box-info">
              <h3 className="contact-form-left-box-info-title">{t("Call support")}</h3>
              <p className="contact-form-left-box-info-text"><a href="tel: +998 71 281 49 30">+998 71 281 49 30</a></p>
              <p className="contact-form-left-box-info-text"><a href="tel: +998 71 203 20 31">+998 71 203 20 31</a></p>
            </div>
          </div>
        </div>

        <form action="" className="contact-form-right">
          <h3 className='contact-top-title'>{t("Contact Us")}</h3>
          <div className="contact-form-right-top">
            <label htmlFor="">
              <input placeholder={t('Name')} type="text" />
            </label>
            <label htmlFor="">
              <input placeholder={t('Phone')} type="text" />
            </label>
            <label htmlFor="">
              <input placeholder={t('Email')} type="text" />
            </label>
            <label htmlFor="">
              <input placeholder={t('Country')} type="text" />
            </label>
          </div>
          <div className="contact-form-right-bottom">
            <label htmlFor="">
              <input placeholder={t('Company')} type="text" />
            </label>
            <label htmlFor="">
              <textarea name="" placeholder={t('Message')} id=""></textarea>
            </label>
            <button className="contact-form-right-bottom-btn">{t("Send Now")}</button>
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