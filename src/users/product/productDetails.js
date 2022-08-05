import React from 'react'
import ProductDetailsImageCard from './helper/productDetailsImageCard'
import ProductDetilsCard from './helper/productDetilsCard'

function ProductDetails() {
    return (
        <div>
            <div className='container py-3'>
                <div className='row  '>
                    <div className='col-lg-5 col-md-5 col-sm-12 '>
                        <ProductDetailsImageCard/>
                    </div>
                    <div className='ccol-lg-7 col-md-7  col-sm-12'>
                       <ProductDetilsCard/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails