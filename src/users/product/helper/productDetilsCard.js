import React from 'react'
import { useSelector } from 'react-redux';
import { Rate } from 'antd';

function ProductDetilsCard() {
    const selectedViewItem = useSelector(state => state.cart?.seletedItem)

    return (
        <div>
            <div className='absolute'><Rate allowHalf defaultValue={selectedViewItem?.rating?.rate ?? 2.5} /></div>
            <p className='text-success'>Avalable: {selectedViewItem?.rating?.count}</p>
            <h3 className='text-uppercase'>{selectedViewItem?.category}</h3>
            <h4 className='text-secondary'>{selectedViewItem?.title}</h4>
            <h6>{selectedViewItem?.description}</h6>
            <h2>${selectedViewItem?.price}</h2>
        </div>
    )
}

export default ProductDetilsCard