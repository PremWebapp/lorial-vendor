import React from 'react'
import { Slider, Checkbox } from 'antd';
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { filterProductByPrice, filterProductByRating } from '../../../redux/reducers/productReducer';

function ProductFilter() {
  const options = [
    {
      label: <p>4<FaStar />& above</p>,
      value: '4',
    },
    {
      label: <p>3<FaStar />& above</p>,
      value: '3',
    },
    {
      label: <p>2<FaStar />& above</p>,
      value: '2',
    },
    {
      label: <p>1<FaStar />& above</p>,
      value: '1',
    },
  ];



  const dispatch = useDispatch()
  return (
    <div className="">
      <div className="filter-type-seprator">
        <p className='fw-bolder'>PRICE</p>
        <Slider range onChange={(value) => dispatch(filterProductByPrice(value))} defaultValue={[0, 100]} />
      </div>
      <div className="border-top border-bottom filter-type-seprator">
        <p className='fw-bolder'>CUSTOMER RATING</p>
        <Checkbox.Group options={options} onChange={(e)=>dispatch(filterProductByRating(e) )} />
        <br />
      </div>
    </div>
  )
}

export default ProductFilter