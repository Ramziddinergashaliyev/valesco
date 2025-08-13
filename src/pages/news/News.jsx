// import React from 'react'
// import { MdArrowOutward } from "react-icons/md";
// import "./news.scss"
// import { NEWS } from '../../static';

// const News = () => {
//   return (
//     <div className='news container'>
//       <h2 className="news-title">новости</h2>
//       <div className="news-cards">
//         {
//           NEWS?.map(el => (
//             <div className="news-card">
//               <p className='news-card-text'>{el?.years}</p>
//               <div className="news-card-info">
//                 <img src={el?.img} alt="news-img" />
//                 <div className="news-card-info-middle">
//                   <p className="news-card-info-middle-text">{el?.month}</p>
//                   <h2 className="news-card-info-middle-title">{el?.title}</h2>
//                   <p className="news-card-info-middle-desc">{el?.desc}</p>
//                 </div>
//                 <button className='news-card-info-btn'>Подробнее<MdArrowOutward /></button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default News

import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import "./news.scss";
import { NEWS } from '../../static';

const News = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Dastlab 4 ta ko‘rsatamiz

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4); // Har bosganda yana 4 ta qo‘shamiz
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='news container'>
      <h2 className="news-title">новости</h2>
      <div className="news-cards">
        {
          NEWS.slice(0, visibleCount)?.map((el, i) => (
            <div key={i} className="news-card">
              <p className='news-card-text'>{el?.years}</p>
              <div className="news-card-info">
                <img src={el?.img} alt="news-img" />
                <div className="news-card-info-middle">
                  <p className="news-card-info-middle-text">{el?.month}</p>
                  <h2 className="news-card-info-middle-title">{el?.title}</h2>
                  <p className="news-card-info-middle-desc">{el?.desc}</p>
                </div>
                <button className='news-card-info-btn'>Подробнее<MdArrowOutward /></button>
              </div>
            </div>
          ))
        }
      </div>

      {/* Agar hammasi chiqmagan bo‘lsa, tugmani ko‘rsatamiz */}
      {visibleCount < NEWS.length && (
        <button
          className="load-more-btn"
          onClick={handleLoadMore}
        >
          Загрузить еще
        </button>
      )}
    </div>
  );
}

export default News;
