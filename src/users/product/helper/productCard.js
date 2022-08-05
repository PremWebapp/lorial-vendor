import React from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd';

function ProductCard({ children, price, image, description , count, rating}) {
    return (
        <Link to='/product/details' className='nav-link   d-flex justify-content-center'>
            <div className=' relative'>
                <div className='absolute'><Rate disabled allowHalf value={rating ?? 2.5} /></div>
                <img className='home-product-card-img' src={image} />
                <p className='product-card-title '>{children}</p>
                <p className='product-card-description'>{description}</p>
                <div className='d-flex'>
                <p className='product-card-price'>${price ?? 0}</p>
                <p className='product-card-count'>Avalable: {count ?? 0} </p>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard