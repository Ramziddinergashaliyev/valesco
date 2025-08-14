import React, { useEffect } from 'react'
import "./productItem.scss"
import Product from '../../components/product/Product'

const ProductItem = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <Product />
        </>
    )
}

export default ProductItem