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

          {/* <div style={{ position: "relative", overflow: "hidden" }}>
            
            <a
              href="https://yandex.uz/maps/105813/tashkent-province/category/auto_accessories/184105286/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Автоаксессуары в Ташкентской области
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.129905%2C41.199023&mode=search&oid=26921342218&ol=biz&z=14.78"
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                border: "none", // 🟢 Chegarani olib tashlaydi
              }}
              allowFullScreen
            ></iframe>
          </div> */}

          <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Яндекс Карты</a><a href="https://yandex.uz/maps/190807/quyoshli/stops/3463299265/?from=mapframe&ll=69.135753%2C41.201178&tab=overview&utm_medium=mapframe&utm_source=maps&z=17.8" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Поликлиника — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.135753%2C41.201178&masstransit%5BstopId%5D=3463299265&mode=masstransit&tab=overview&z=17.8" style={{ width: "100%", height: "400px", position: "relative", border: "none" }} frameborder="1" allowfullscreen="true"></iframe></div>
        </div>

      </div>
    </div>
  )
}

export default Contact