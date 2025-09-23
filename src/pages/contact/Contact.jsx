import React, { useEffect } from 'react'
import "./contact.scss"
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t, i18n } = useTranslation()
  console.log(i18n?.languages[0]);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='contact container'>
      <div className="contact-top">
        <h2 className="contact-top-title">{t("Контакты")}</h2>
        <p className="contact-top-text">{t("какие-либо")}</p>
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-left">
          <div className="contact-bottom-left-addres">
            <p className="contact-bottom-left-addres-title">{t("Адрес")}</p>
            <p className="contact-bottom-left-addres-text">{t("addressValesco")}</p>
          </div>
          <div className="contact-bottom-left-sv">
            <p className="contact-bottom-left-sv-title">{t("для связи")}</p>
            <div className="contact-bottom-left-sv-info">
              <div className="contact-bottom-left-sv-info-phone">
                <span>{t("телефона")}</span>
                <p className="contact-bottom-left-sv-info-phone-text">
                  <a href="tel:+998 71 281 49 30">+998 71 281 49 30</a>
                  <a href="tel:+998 71 203 20 31">+998 71 203 20 31</a>
                </p>
              </div>
              <div className="contact-bottom-left-sv-info-pochta">
                <span>{t("E-mail")}</span>
                <a href='mailTo: info@gpggroup.uz' className="contact-bottom-left-sv-info-pochta-text">info@gpggroup.uz</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-bottom-right">
          <div style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>Ташкент</a><a href="https://yandex.uz/maps/105813/tashkent-province/house/YkAYdwFnSkAAQFprfX5zdHxrZA==/?ll=69.167357%2C41.225081&utm_medium=mapframe&utm_source=maps&z=16.89" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Gulbozor ko`chasi, 22 — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.167357%2C41.225081&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo2NDY2Njc5MjUyEltPyrt6YmVraXN0b24sIFRvc2hrZW50IHZpbG95YXRpLCBaYW5naW90YSB0dW1hbmksIEVya2luIHNoYWhhcmNoYXNpLCBHdWxib3pvciBrb8q7Y2hhc2ksIDIyIgoNsFWKQhV75iRC&z=16.89" style={{width:"100%", height:"450px", frameborder:"1", allowfullscreen:"true",border: "none", position:"relative"}}></iframe></div>
          {/* <div style={{ overflow: "hidden", position: "relative" }}><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Ташкент</a><a href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAFgTUEGQFprfX55d3VlYg==/?ll=69.260441%2C41.286966&utm_medium=mapframe&utm_source=maps&z=16.89" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Глинки, 14 — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.260441%2C41.286966&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyNDkzMjg1ODAyEixPyrt6YmVraXN0b24sIFRvc2hrZW50LCBHbGlua2Ega2_Ku2NoYXNpLCAxNCIKDViFikIV2yUlQg%2C%2C&z=16.89" style={{ width: "100%", height: "500px", border: "none", position: "relative" }}></iframe></div> */}
        </div>
      </div>
    </div>
  )
}

export default Contact