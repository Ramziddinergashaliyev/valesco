import React, { useEffect } from 'react'
import "./productItem.scss"
import { useParams } from 'react-router-dom'
import { useGetCategoriesByIdQuery } from '../../context/api/categoryApi'
import Product from '../../components/product/Product'

const ProductItem = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetCategoriesByIdQuery(id)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <Product data={data?.products} loading={isLoading} title={data?.title?.ru || data?.title?.en} />
        </>
    )
}

export default ProductItem