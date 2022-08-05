import React, { useEffect } from 'react'
import ProductCard from './helper/productCard'
import './helper/pruductHomeCss/productHome.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductItems } from '../../redux/reducers/productReducer'
import { Space, Spin } from 'antd';
import { selectedProduct } from '../../redux/reducers/cartReducer'

function ProductHome() {
    const { filteredItems,items, isLoading } = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        if(items.length===0)dispatch(fetchProductItems())
        // eslint-disable-next-line
    }, [])

    return (
        <div className=" overflow-hidden ">
            {isLoading ? <div className='home-product-loader p-5'>
                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </div> :
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-4   g-1 m-1">
                    {filteredItems.map(item => {
                        return <div className='bg-white col d-flex justify-content-center cursor-pointer-card ' onClick={()=>dispatch(selectedProduct(item))}> <ProductCard rating={item.rating.rate} count={item.rating.count} price={item.price} image={item.image} description={item.description}>{item.title}</ProductCard></div>
                    })}
                </div>}
        </div>
    )
}
export default ProductHome