import React from 'react'
import "./productRange.scss"
import { MdArrowOutward } from 'react-icons/md'
import { CATEGORY } from '../../static'
import { NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../context/api/categoryApi'

const ProductRange = () => {

    const { data } = useGetCategoriesQuery()
    console.log(data);


    return (
        <div className='productRange container'>
            <div className="productRange__container">
                <div className="productRange__info">
                    <h1 className="productRange__info-title">Широкая линейка продуктов</h1>
                    <h3 className="productRange__info-text">В России много разных машин. А у нас много разных масел, в том числе с допусками и спецификациями европейских и американских автопроизводителей.</h3>
                    <p className="productRange__info-desc">Воспользуйтесь нашим подборщиком, чтобы определить, какое масло подходит для вашей машины.</p>
                    <NavLink to={"/oil"} className="productRange__info-btn">
                        Подбери свой Valesco <MdArrowOutward />
                    </NavLink>
                </div>
                <div className="productRange__category">
                    {
                        data?.map(el => (
                            <NavLink key={el?.id} to={`/categories/${el?.id}`}>
                                <div className="productRange__card">
                                    <h2 className="productRange__card-title">{el?.title?.ru}</h2>
                                    <div className='productRange__card-bottom'><p className='productRange__card-bottom-text'>Узнать больше</p><span><MdArrowOutward /></span> </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductRange


// import React from 'react';
// import { MdArrowOutward } from 'react-icons/md';
// import './ProductRange.scss';

// const ProductRange = () => {
//   // Sample category data
//   const categories = [
//     { 
//       id: 1, 
//       title: 'МОТОРНОЕ МАСЛО ДЛЯ МОТОЦИКЛА И СКУТЕРА',
//       image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400'
//     },
//     { 
//       id: 2, 
//       title: 'МОТОРНОЕ МАСЛО ДЛЯ АВТОМОБИЛЯ',
//       image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400'
//     },
//     { 
//       id: 3, 
//       title: 'ЛОДОЧНОЕ МАСЛО',
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400'
//     },
//     { 
//       id: 4, 
//       title: 'МОТОРНОЕ МАСЛО ДЛЯ КВАДРОЦИКЛА И СНЕГОХОДА',
//       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
//     },
//     { 
//       id: 5, 
//       title: 'ВИЛОЧНОЕ МАСЛО',
//       image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400'
//     },
//     { 
//       id: 6, 
//       title: 'СМАЗКИ ДЛЯ ЦЕПИ',
//       image: 'https://images.unsplash.com/photo-1544191696-15ec24c05be4?w=400'
//     },
//     { 
//       id: 7, 
//       title: 'ТРАНСМИССИОННОЕ МАСЛО',
//       image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400'
//     },
//     { 
//       id: 8, 
//       title: 'ФИЛЬТРЫ',
//       image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400'
//     }
//   ];

//   return (
//     <div className='productRange container'>
//       <div className="productRange__container">
//         <div className="productRange__info">
//           <h1 className="productRange__info-title">Широкая линейка продуктов</h1>
//           <h3 className="productRange__info-text">
//             В России много разных машин. А у нас много разных масел, в том числе с допусками и спецификациями европейских и американских автопроизводителей.
//           </h3>
//           <p className="productRange__info-desc">
//             Воспользуйтесь нашим подборщиком, чтобы определить, какое масло подходит для вашей машины.
//           </p>
//           <button className="productRange__info-btn">
//             Подбери свой Valesco <MdArrowOutward />
//           </button>
//         </div>
        
//         <div className="productRange__category">
//           {categories.map(category => (
//             <div 
//               key={category.id} 
//               className="productRange__card"
//               style={{
//                 backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${category.image})`
//               }}
//             >
//               <div className="productRange__card-overlay"></div>
//               <div className="productRange__card-content">
//                 <div className="productRange__card-bottom">
//                   <h2 className="productRange__card-title">{category.title}</h2>
//                   <div className="productRange__card-icon">
//                     <MdArrowOutward />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // SASS Styles


// // Inject styles
// export default ProductRange;