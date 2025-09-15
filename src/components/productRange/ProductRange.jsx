// import React from 'react'
// import "./productRange.scss"
// import { MdArrowOutward } from 'react-icons/md'
// import { CATEGORY } from '../../static'
// import { NavLink } from 'react-router-dom'
// import { useGetCategoriesQuery } from '../../context/api/categoryApi'
// import { useTranslation } from 'react-i18next'

// const ProductRange = () => {
//   const { t, i18n } = useTranslation()
//   const { data } = useGetCategoriesQuery()

//   const currentLanguage = i18n.language || 'ru'

//   return (
//     <div className='productRange container'>
//       <div className="productRange__container">
//         <div className="productRange__info">
//           <h1 className="productRange__info-title">{t('wideProductRange')}</h1>
//           <h3 className="productRange__info-text">{t('productRangeDescription')}</h3>
//           <p className="productRange__info-desc">{t('useOurSelector')}</p>
//           <NavLink to={"/categories/10"} className="productRange__info-btn">
//             {t('chooseYourValesco')} <MdArrowOutward />
//           </NavLink>
//         </div>
//         <div className="productRange__category">
//           {
//             data?.map(category => (
//               <NavLink key={category?.id} to={`/categories/${category?.id}`}>
//                 <div className="productRange__card">
//                   <h2 className="productRange__card-title">
//                     {currentLanguage === 'ru' ? category?.title?.ru : category?.title?.en}
//                   </h2>
//                   <div className='productRange__card-bottom'>
//                     <p className='productRange__card-bottom-text'>{t('Узнать больше')}</p>
//                     <span><MdArrowOutward /></span>
//                   </div>
//                 </div>
//               </NavLink>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductRange







// import React, { useEffect, useRef } from "react";
// import "./productRange.scss";
// import { NavLink } from "react-router-dom";
// import { MdArrowOutward } from 'react-icons/md'
// import img from "../../assets/images/user.png"
// import img1 from "../../assets/images/1.png"
// import img2 from "../../assets/images/2.png"
// import { useGetCategoriesQuery } from "../../context/api/categoryApi";


// const CATEGORY = [
//   {
//     id: 1,
//     title: "Моторные масла для легковой и легкой коммерческой техники",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 2,
//     title: "Моторные масла для дизельных двигателей",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 3,
//     title: "Тормозная жидкость",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 4,
//     title: "Гидравлические масла",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 5,
//     title: "Фильтры",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 6,
//     title: "Антифриз",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   },
//   {
//     id: 7,
//     title: "Антифриз",
//     description: "Надежные масла для коробок передач и трансмиссий",
//     image: img1,
//     bgImage: img2,
//   }
// ];

// const ProductRange = () => {
//   const cardRefs = useRef([]);
//   const imgRefs = useRef([]);
//   const bgRefs = useRef([]);
//   const { data } = useGetCategoriesQuery()
//   console.log(data);

//   useEffect(() => {
//     const RANGE = 20;

//     const handleMouseMove = (event, card, img, bg) => {
//       const rect = card.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const y = event.clientY - rect.top;

//       const xValue = ((x / rect.width) * RANGE - RANGE / 2).toFixed(1);
//       const yValue = ((y / rect.height) * RANGE - RANGE / 2).toFixed(1);

//       card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

//       if (img) {
//         img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
//       }
//       if (bg) {
//         bg.style.backgroundPosition = `${xValue * 1.5}px ${-yValue * 1.5}px`;
//       }
//     };

//     const handleMouseLeave = (card, img, bg) => {
//       card.style.transform = `rotateX(0deg) rotateY(0deg)`;
//       if (img) img.style.transform = `translateX(0) translateY(0)`;
//       if (bg) bg.style.backgroundPosition = `center`;
//     };

//     const listeners = [];

//     cardRefs.current.forEach((card, index) => {
//       const img = imgRefs.current[index];
//       const bg = bgRefs.current[index];
//       if (!card) return;

//       const moveHandler = (e) => handleMouseMove(e, card, img, bg);
//       const leaveHandler = () => handleMouseLeave(card, img, bg);

//       card.addEventListener("mousemove", moveHandler);
//       card.addEventListener("mouseleave", leaveHandler);

//       listeners.push({ card, moveHandler, leaveHandler });
//     });

//     return () => {
//       listeners.forEach(({ card, moveHandler, leaveHandler }) => {
//         if (card) {
//           card.removeEventListener("mousemove", moveHandler);
//           card.removeEventListener("mouseleave", leaveHandler);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="productRange container">
//       <div className="productRange__container">
//         <div className="productRange__info">
//           <h1 className="productRange__info-title">Широкая линейка продуктов</h1>
//           <h3 className="productRange__info-text">В России много разных машин. А у нас много разных масел, в том числе с допусками и спецификациями европейских и американских автопроизводителей.</h3>
//           <p className="productRange__info-desc">Воспользуйтесь нашим подборщиком, чтобы определить, какое масло подходит для вашей машины.</p>
//           <NavLink to={"/oil"} className="productRange__info-btn">
//             Подбери свой Valesco <MdArrowOutward />
//           </NavLink>
//         </div>
//         <div className="productRange-card-list">
//           {CATEGORY.map((category, index) => (
//             <div
//               key={category.id}
//               className="productRange-card"
//               ref={(el) => (cardRefs.current[index] = el)}
//             >
//               <div
//                 className="productRange-card-bg"
//                 ref={(el) => (bgRefs.current[index] = el)}
//                 style={{ backgroundImage: `url(${category.bgImage})` }}
//               />
//               <div className="overlay" />
//               <div
//                 className="productRange-card-img"
//                 ref={(el) => (imgRefs.current[index] = el)}
//               >
//                 <img src={category.image} alt={category.title} />
//               </div>
//               <div className="productRange-card-content">
//                 <h4>{category.title}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductRange;



import React, { useEffect, useRef } from "react";
import "./productRange.scss";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";

const CATEGORY = [
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
  {
    image: img1,
    bgImage: img2,
  },
];

const ProductRange = () => {
  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const bgRefs = useRef([]);

  const { data } = useGetCategoriesQuery();
  console.log("API data:", data);

  // useEffect(() => {
  //   const RANGE = 20;

  //   const handleMouseMove = (event, card, img, bg) => {
  //     const rect = card.getBoundingClientRect();
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;

  //     const xValue = ((x / rect.width) * RANGE - RANGE / 2).toFixed(1);
  //     const yValue = ((y / rect.height) * RANGE - RANGE / 2).toFixed(1);

  //     card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

  //     if (img) {
  //       img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
  //     }
  //     if (bg) {
  //       bg.style.backgroundPosition = `${xValue * 1.5}px ${-yValue * 1.5}px`;
  //     }
  //   };

  //   const handleMouseLeave = (card, img, bg) => {
  //     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //     if (img) img.style.transform = `translateX(0) translateY(0)`;
  //     if (bg) bg.style.backgroundPosition = `center`;
  //   };

  //   const listeners = [];

  //   cardRefs.current.forEach((card, index) => {
  //     const img = imgRefs.current[index];
  //     const bg = bgRefs.current[index];
  //     if (!card) return;

  //     const moveHandler = (e) => handleMouseMove(e, card, img, bg);
  //     const leaveHandler = () => handleMouseLeave(card, img, bg);

  //     card.addEventListener("mousemove", moveHandler);
  //     card.addEventListener("mouseleave", leaveHandler);

  //     listeners.push({ card, moveHandler, leaveHandler });
  //   });

  //   return () => {
  //     listeners.forEach(({ card, moveHandler, leaveHandler }) => {
  //       if (card) {
  //         card.removeEventListener("mousemove", moveHandler);
  //         card.removeEventListener("mouseleave", leaveHandler);
  //       }
  //     });
  //   };
  // }, []);


  useEffect(() => {
    if (!data) return; // data yo'q bo'lsa chiqib ketadi
    const RANGE = 20;

    const handleMouseMove = (event, card, img, bg) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const xValue = ((x / rect.width) * RANGE - RANGE / 2).toFixed(1);
      const yValue = ((y / rect.height) * RANGE - RANGE / 2).toFixed(1);

      card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

      if (img) {
        img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      }
      if (bg) {
        bg.style.backgroundPosition = `${xValue * 1.5}px ${-yValue * 1.5}px`;
      }
    };

    const handleMouseLeave = (card, img, bg) => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      if (img) img.style.transform = `translateX(0) translateY(0)`;
      if (bg) bg.style.backgroundPosition = `center`;
    };

    const listeners = [];

    cardRefs.current.forEach((card, index) => {
      const img = imgRefs.current[index];
      const bg = bgRefs.current[index];
      if (!card) return;

      const moveHandler = (e) => handleMouseMove(e, card, img, bg);
      const leaveHandler = () => handleMouseLeave(card, img, bg);

      card.addEventListener("mousemove", moveHandler);
      card.addEventListener("mouseleave", leaveHandler);

      listeners.push({ card, moveHandler, leaveHandler });
    });

    return () => {
      listeners.forEach(({ card, moveHandler, leaveHandler }) => {
        if (card) {
          card.removeEventListener("mousemove", moveHandler);
          card.removeEventListener("mouseleave", leaveHandler);
        }
      });
    };
  }, [data]); // 🔑 endi data kelganda qaytadan ishlaydi


  return (
    <div className="productRange container">
      <div className="productRange__container">
        <div className="productRange__info">
          <h1 className="productRange__info-title">Широкая линейка продуктов</h1>
          <h3 className="productRange__info-text">
            В России много разных машин. А у нас много разных масел, в том числе с
            допусками и спецификациями европейских и американских автопроизводителей.
          </h3>
          <p className="productRange__info-desc">
            Воспользуйтесь нашим подборщиком, чтобы определить, какое масло подходит
            для вашей машины.
          </p>
          <NavLink to={"/oil"} className="productRange__info-btn">
            Подбери свой Valesco <MdArrowOutward />
          </NavLink>
        </div>

        <div className="productRange-card-list">
          {data?.map((item, index) => {
            const category = CATEGORY[index];

            return (
              <div key={item.id} className="productRange-card" ref={(el) => (cardRefs.current[index] = el)}>
                <NavLink to={`/categories/${item?.id}`}>
                  <div className="productRange-card-bg" ref={(el) => (bgRefs.current[index] = el)} style={{ backgroundImage: `url(${category?.bgImage})` }} />
                  <div className="overlay" />
                  <div className="productRange-card-img" ref={(el) => (imgRefs.current[index] = el)}>
                    <img src={category?.image} alt={item.title} />
                  </div>
                  <div className="productRange-card-content">
                    <h4>{item.title?.ru}</h4>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductRange;