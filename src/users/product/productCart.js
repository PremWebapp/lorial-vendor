import React from 'react'
import { useSelector } from 'react-redux'

import { Empty } from 'antd';
import { Link } from 'react-router-dom';
import ProductCartCard from './helper/productCartCard';
import ProductCartTotalPrice from './helper/productCartTotalPrice';

function ProductCart() {
    const selectedCartItem = useSelector(state => state.cart?.cartItems)
    
    return (
        <div>
          {selectedCartItem.length === 0? <Empty />:
            <section className="h-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100 py-2">
                    <div className="row d-flex align-items-start">
                        <div className="col-8">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                                        className="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>
                            {selectedCartItem.map((item, index) =><ProductCartCard item={item} index={index}/> )}
                            <div className="card">
                                <div className="card-body">
                                   <Link to='/payment'>
                                   <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                   </Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-4 sticky-top ">
                            <ProductCartTotalPrice/>
                        </div>
                    </div>
                </div>
            </section>}
        </div>
    )
}

export default ProductCart