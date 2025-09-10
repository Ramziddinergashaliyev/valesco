// import React from 'react'
// import "./characterist.scss"

// const Characterist = ({ data }) => {

//     return (
//         <div id='characterist' className='container characterist'>
//             <h2 className='characterist-title'>Характеристики</h2>
//             <div className="characterist-info">
//                 <table className='characterist-info-table'>
//                     <thead className='characterist-info-table-thead'>
//                         <tr className='characterist-info-table-thead-tr'>
//                             <th className='characterist-info-table-thead-th'>Название индикатора</th>
//                             <th className='characterist-info-table-thead-th'>Значение</th>
//                             <th className='characterist-info-table-thead-th'>Метод испытания</th>
//                         </tr>
//                     </thead>
//                     {
//                         <tbody className='characterist-info-tbody'>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Класс вязкости SAE</td>
//                                 {
//                                     data?.sae?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Плотность при 15°С, г/см3</td>
//                                 {
//                                     data?.density?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
//                                 {
//                                     data?.kinematic_one?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
//                                 {
//                                     data?.kinematic_two?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Индекс вязкости</td>
//                                 {
//                                     data?.viscosity?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Температура вспышки в открытом тигле °С	</td>
//                                 {
//                                     data?.flash?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Температура затвердевания, °С</td>
//                                 {
//                                     data?.temperature?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                             <tr className='characterist-info-tbody-tr'>
//                                 <td className='characterist-info-tbody-td'>Щелочное число, мг КОН/г</td>
//                                 {
//                                     data?.base?.map((el, index) => (
//                                         <td key={index} className='characterist-info-tbody-td'>{el}</td>
//                                     ))
//                                 }
//                             </tr>
//                         </tbody>
//                     }
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Characterist



import React from 'react'
import "./characterist.scss"

const rows = [
  { label: "Класс вязкости SAE", key: "sae" },
  { label: "Плотность при 15°С, г/см3", key: "density" },
  { label: "Кинематическая вязкость при 40 °С, мм2/с", key: "kinematic_one" },
  { label: "Кинематическая вязкость при 100 °С, мм2/с", key: "kinematic_two" },
  { label: "Индекс вязкости", key: "viscosity" },
  { label: "Температура вспышки в открытом тигле °С", key: "flash" },
  { label: "Температура затвердевания, °С", key: "temperature" },
  { label: "Щелочное число, мг КОН/г", key: "base" }
];

const trnassmission = [
  // { label: "Класс вязкости SAE", key: "sae" },
  { label: "Плотность при 15°С, г/см3", key: "density" },
  { label: "Кинематическая вязкость при 40 °С, мм2/с", key: "kinematic_one" },
  { label: "Кинематическая вязкость при 100 °С, мм2/с", key: "kinematic_two" },
  { label: "Индекс вязкости", key: "viscosity" },
  { label: "Температура вспышки в открытом тигле °С", key: "flash" },
  { label: "Температура затвердевания, °С", key: "temperature" },
  // { label: "Щелочное число, мг КОН/г", key: "base" }
];

const Characterist = ({ data }) => {

  return (
    <div id='characterist' className='container characterist'>
      <h2 className='characterist-title'>Характеристики</h2>
      <div className="characterist-info">
        <table className='characterist-info-table'>
          <thead className='characterist-info-table-thead'>
            <tr className='characterist-info-table-thead-tr'>
              <th className='characterist-info-table-thead-th'>Название индикатора</th>
              <th className='characterist-info-table-thead-th'>Значение</th>
              <th className='characterist-info-table-thead-th'>Метод испытания</th>
            </tr>
          </thead>
          {
            data?.category?.title?.ru === "Трансмиссионные масла" || data?.category?.title?.en === "Transmission oils"
              ?
              <tbody className='characterist-info-tbody'>
                {trnassmission.map((row, i) => (
                  <tr key={i} className='characterist-info-tbody-tr'>
                    <td className='characterist-info-tbody-td'>{row.label}</td>
                    {data?.[row.key]?.map((el, index) => (
                      <td key={index} className='characterist-info-tbody-td'>{el}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
              :
              <tbody className='characterist-info-tbody'>
                {rows.map((row, i) => (
                  <tr key={i} className='characterist-info-tbody-tr'>
                    <td className='characterist-info-tbody-td'>{row.label}</td>
                    {data?.[row.key]?.map((el, index) => (
                      <td key={index} className='characterist-info-tbody-td'>{el}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
          }
        </table>
      </div>
    </div>
  )
}

export default Characterist
