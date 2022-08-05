import React from 'react'
import ProductFilter from './helper/productFilter'
import ProductHome from './productHome'

function ProductFilterSidebar() {
    return (
        <>
            <div className='p-1'>
                <div className='row g-2'>
                    <div className='col-lg-2 col-md-2 col-sm-12 bg-white'>
                        <ProductFilter />
                    </div>
                    <div className='ccol-lg-10 col-md-10  col-sm-12 '>
                        <ProductHome />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFilterSidebar