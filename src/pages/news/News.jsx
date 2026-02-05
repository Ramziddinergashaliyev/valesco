// import React, { useEffect, useState } from 'react'
// import "./news.scss"

// const News = () => {
//   const [activeCategory, setActiveCategory] = useState('Barchasi')

//   useEffect((prev) => {
//     window.scrollTo(0,0)
//   },[])
  
//   const [newsData] = useState([
//     {
//       id: 1,
//       category: "Yangiliklar",
//       title: "Yangi o'quv yili uchun ro'yxatdan o'tish boshlandi",
//       description: "2026-2027 o'quv yili uchun onlayn ro'yxatdan o'tish jarayoni boshlandi. Ota-onalar rasmiy saytimiz orqali ariza topshirishlari mumkin.",
//       date: "5 Fevral, 2026",
//       image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
//     },
//     {
//       id: 2,
//       category: "Tadbirlar",
//       title: "Xalqaro fan olimpiadasi o'tkaziladi",
//       description: "Fevral oyining 15-kunida maktabimizda Xalqaro fan olimpiadasi bo'lib o'tadi. Barcha qiziquvchilar ishtirok etishlari mumkin.",
//       date: "3 Fevral, 2026",
//       image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
//     },
//     {
//       id: 5,
//       category: "Tadbirlar",
//       title: "Ochiq eshiklar kuni e'lon qilinadi",
//       description: "Fevral oyining 20-kunida ota-onalar uchun Ochiq eshiklar kuni tashkil etiladi. Maktab bilan tanishish imkoniyati.",
//       date: "28 Yanvar, 2026",
//       image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
//     },
//     {
//       id: 6,
//       category: "Yangiliklar",
//       title: "Raqamli ta'lim platformasi joriy etildi",
//       description: "Barcha o'quvchilar uchun onlayn ta'lim platformasi ishga tushirildi. Darslar va topshiriqlar elektron shaklda.",
//       date: "25 Yanvar, 2026",
//       image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
//     },
//     {
//       id: 8,
//       category: "Maktab hayoti",
//       title: "Yangi kutubxona to'plami keldi",
//       description: "Maktab kutubxonasiga 500 dan ortiq yangi kitoblar qo'shildi. O'quvchilar uchun turli xil adabiyotlar mavjud.",
//       date: "20 Yanvar, 2026",
//       image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
//     },
//     {
//       id: 9,
//       category: "Tadbirlar",
//       title: "Bahor festivali tashkil etiladi",
//       description: "Mart oyida an'anaviy Bahor festivali o'tkaziladi. Konsert dasturi, ko'rgazmalar va sport musobaqalari.",
//       date: "18 Yanvar, 2026",
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
//     }
//   ])

//   const filteredNews = activeCategory === 'Barchasi' 
//     ? newsData 
//     : newsData.filter(news => news.category === activeCategory)

//   return (
//     <div className="news-container container">
//       <div className="categories-wrapper">
//       </div>

//       <div className="news-grid">
//         {filteredNews.map((news) => (
//           <article key={news.id} className="news-card">
//             <div className="card-image">
//               <img src={news.image} alt={news.title} />
//               <div className="category-badge">{news.category}</div>
//             </div>
//             <div className="card-content">
//               <div className="card-date">{news.date}</div>
//               <h3 className="card-title">{news.title}</h3>
//               <p className="card-description">{news.description}</p>
//               <button className="read-more">
//                 Batafsil
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default News


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./news.scss"
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'

const News = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Barchasi')
  const { t, i18n } = useTranslation()
  

  const allData = i18n?.language === "ru" ? newsData : newsDataEn

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  // const filteredNews = activeCategory === 'Barchasi' 
  //   ? newsData
  //   : newsData.filter(news => news.category === activeCategory)

  const handleNewsClick = (id) => {
    navigate(`/news-single/${id}`)
  }


  return (
    <div className="news-container container">
      <div className="categories-wrapper">
      </div>

      <div className="news-grid">
        {allData?.map((news) => (
          <article 
            key={news.id} 
            className="news-card"
            onClick={() => handleNewsClick(news.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-image">
              <img src={news.img} alt={news.title} />
              {/* <div className="category-badge">{news.category}</div> */}
            </div>
            <div className="card-content">
              <div className="card-date">{news.date}</div>
              <h3 className="card-title">{news.title}</h3>
              <p className="card-description">{news.description}</p>
              <button className="read-more">
                {t("Более")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News