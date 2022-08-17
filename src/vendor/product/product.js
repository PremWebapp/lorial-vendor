import React, { useState } from 'react'
import { Button } from 'antd';
import AddProduct from './addProduct'
import ProductList from './list';
function Product() {
    const [buttonToggle, setButtonToggle] = useState('list')

    return (
        <div className=" ">
            <div className='d-flex justify-content-center py-3'>
                <div>
                    <Button onClick={() => setButtonToggle('list')} size='large'>Product List</Button>
                </div>
                <div className="px-2">
                    <Button size='large' onClick={() => setButtonToggle('add')} >Add Product</Button>
                </div>
            </div>
            <div className="pb-4">
                {buttonToggle == 'add' ? <AddProduct /> : <ProductList />}

            </div>
        </div>
    )
}

export default Product