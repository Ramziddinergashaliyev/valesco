import React from 'react'
import "./characterist.scss"

const Characterist = ({ data }) => {
    console.log(data);

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
                        <tbody className='characterist-info-tbody'>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Класс вязкости SAE</td>
                                {
                                    data[0]?.title?.map(el => (
                                       <>
                                           <td className='characterist-info-tbody-td'>{el}</td>
                                           {/* <td className='characterist-info-tbody-td'>{data[0]?.title}</td> */}
                                       </>
                                    ))
                                }
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Плотность при 15°С, г/см3</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title2}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title3}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title4}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title5}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title6}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title7}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Индекс вязкости</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title2}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Температура вспышки в открытом тигле °С	</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title3}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Температура затвердевания, °С</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                            </tr>
                            <tr className='characterist-info-tbody-tr'>
                                <td className='characterist-info-tbody-td'>Щелочное число, мг КОН/г</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                                <td className='characterist-info-tbody-td'>{data[0]?.title1}</td>
                            </tr>
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default Characterist