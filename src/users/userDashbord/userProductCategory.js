import React, { useState } from 'react'
import './userProductCard.css'
import Slider from "react-slick";
import UserProductcategorycard from './helper/userProductcategorycard';

function UserProductCategory() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: true,
        className: "slider variable-width",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    return (
        <div className='deals-cards'>
            <h5> Deals of the Day </h5>
            <div>
                <Slider {...settings}>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/image/150/150/ktop5e80/watch/f/q/e/1-lcs-4230-lois-caron-men-original-imag6zfy4nqjnxaf.jpeg?q=70'>Watchs</UserProductcategorycard>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/image/150/150/l2xmqvk0/shoe/o/9/9/6-blk-482-40-bruton-black-red-original-image5y4dphgcjp9.jpeg?q=70'>Shoes</UserProductcategorycard>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'>Mobiles</UserProductcategorycard>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/image/540/648/l31x2fk0/kids-t-shirt/d/j/d/11-12-years-fkt70-fs-rose-force-original-image96t4hbqpqfs.jpeg?q=50'>Clothes</UserProductcategorycard>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/image/540/648/kzd147k0/backpack/p/1/b/01-high-quality-laptop-backpack-school-college-bag-office-bag-original-imagbe9dukkzacfn.jpeg?q=50'>Bags</UserProductcategorycard>
                        <UserProductcategorycard image='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'>Games</UserProductcategorycard>
                </Slider>
            </div>
        </div>
    )
}

export default UserProductCategory