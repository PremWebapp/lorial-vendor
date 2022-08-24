import React, { Component } from "react";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIDFun } from "../../redux/reducers/productReducer";
import htmlPerse from 'html-react-parser'

function ProductDetails() {
    const location = useLocation()
    const dispatch = useDispatch()
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const vendorData = useSelector(state => state.login)
    const { productLisByID } = useSelector(state => state.product)
    
    const { id } = location.state

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);

        dispatch(getProductByIDFun({ data: id, token: vendorData?.token }))
    }, []);

    return (
        <div >

            <div className='row mb-5 overflow-hidden '>

                <div className='col-md-6 col-sm-6 mt-3  ps-5'>
                    <Slider arrows={false} className="mainSlider" asNavFor={nav2} ref={slider1}>
                        {productLisByID?.imgPath?.map(img => {
                            return (
                                <div className='w-100 '>
                                    <img className='w-100 p-1' style={{ objectFit: 'cover', height: '27rem'  }} src={img?.vendor_product_img} />
                                </div>
                            )
                        })}

                    </Slider>

                    <Slider
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    // centerMode={true}
                    >
                        {productLisByID?.imgPath?.map(img => {
                            return (
                                <div>
                                    <img className='w-100 p-1 ' style={{ objectFit: 'cover', height: '9rem'  }} src={img?.vendor_product_img} />
                                </div>
                            )
                        })}

                    </Slider>
                </div>

                <div className='col-md-6 col-sm-6'>
                    <div className="d-flex justify-content-center">
                        <div className='mt-5'>
                            <h2 className="fw-bold">{productLisByID?.title}</h2>
                            <p className="fs-4">Price: {productLisByID?.price}</p>
                            <span>Description: {htmlPerse(productLisByID?.description??'')}</span> 
                        </div>
                    </div>
                </div>
            </div>


        </div >


    )
}

export default ProductDetails