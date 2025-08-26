import React, { useEffect } from 'react'
import "./productItem.scss"
import Product from '../../components/product/Product'
import { useParams } from 'react-router-dom'
import { useGetCategoriesByIdQuery } from '../../context/api/categoryApi'

const ProductItem = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetCategoriesByIdQuery(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <Product data={data?.products} loading={isLoading} />
        </>
    )
}

export default ProductItem