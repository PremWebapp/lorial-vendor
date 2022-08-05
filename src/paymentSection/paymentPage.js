import React from 'react'
import './paymentCss.css'
import { FaCcVisa } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useCallback } from "react";

function PaymentPage() {
    const cartItem = useSelector(state => state.cart?.cartItems)
    const subTotalPrice = useCallback(() => {
        let initialValue = 0
        let sum = cartItem.reduce(function (accumulator, curValue) {
            return accumulator + curValue.price
        }, initialValue)
        return sum
    }, [cartItem])

    return (
        <div className="payment-container d-lg-flex">
            <div className="box-1 bg-light user">
                {/* <div className="d-flex align-items-center mb-2">
                    <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        className="pic rounded-circle" alt="" />
                    <p className="ps-2 name">Oliur</p>
                </div> */}
                <div className="box-inner-1 pb-3 mb-2 ">
                    <div className="d-flex justify-content-between mb-2 userdetails">
                        <p className="fw-bold pay-p">Product List</p>
                        <p className="fw-lighter pay-p"><span className="fas fa-dollar-sign"></span>33.00+</p>
                    </div>
                    <div id="my" className="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                        data-bs-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#my" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {cartItem.map(item =>
                                <div key={item.id} className="carousel-item active">
                                    <img src={item.image}
                                        className="d-block w-100" />
                                </div>

                            )}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                            <div className="icon">
                                <span className="fas fa-arrow-left"></span>
                            </div>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                            <div className="icon">
                                <span className="fas fa-arrow-right"></span>
                            </div>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p className="dis info my-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                        sed officiis odio
                    </p>
                    <div className="radiobtn">
                        {cartItem.map(item => <input key={item.id} type="radio" name="box" id={JSON.stringify(item.id)} />)}

                        {cartItem.map(item =>
                            <label key={item.id} for={JSON.stringify(item.id)} className="box py-2 btn">
                                <div className="d-flex align-items-start">
                                    <span className="circle"></span>
                                    <div className="course">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="fw-bold">
                                                {item.title}
                                            </span>
                                            <span className="fas fa-dollar-sign">${item.price}</span>
                                        </div>
                                        <span className="d-flex align-items-start">Selected Count: {item.quantity}</span>
                                    </div>
                                </div>
                            </label>
                        )}

                    </div>
                </div>
            </div>
            <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold pay-p">Payment Details</p>
                        <p className="dis mb-2 pay-p">Complete your purchase by providing your payment details</p>
                    </div>
                    <form >
                        <div className="mb-2">
                            <p className="dis fw-bold mb-2 pay-p  ">Email address</p>
                            <input className="form-control" type="email" placeholder="luke@skywalker.com" />
                        </div>
                        <div>
                            <p className="dis fw-bold mb-2 pay-p ">Card details</p>
                            <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                <div className="fas fa-cc-visa ps-3"><FaCcVisa size='30' /></div>
                                <input type="text" name='cartnumber' className="form-control" placeholder="Card Details" />
                                <div className="d-flex w-50">
                                    <input type="text" name='expiredate' className="form-control px-0" placeholder="MM/YY" />
                                    <input type="password" name='cvv' maxlength={3} className="form-control px-0" placeholder="CVV" />
                                </div>
                            </div>
                            <div className="my-3 cardname">
                                <p className="dis fw-bold mb-2 pay-p ">Cardholder name</p>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="address">
                                <p className="dis fw-bold mb-2 pay-p ">Billing address</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">India</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="ZIP" />
                                    <input className="form-control state" type="text" placeholder="State" />
                                </div>
                                <div className=" my-3">
                                    <p className="dis fw-bold mb-2 pay-p ">VAT Number</p>
                                    <div className="inputWithcheck">
                                        <input className="form-control" type="text" value="GB012345B9" />
                                        <span className="fas fa-check"></span>

                                    </div>
                                </div>
                                <div className="d-flex flex-column dis">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>Subtotal</p>
                                        <p><span className="fas fa-dollar-sign">{subTotalPrice()}</span>{

                                        }</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>VAT<span>(20%)</span></p>
                                        <p><span className="fas fa-dollar-sign"></span>2.80</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p className="fw-bold">Total</p>
                                        <p className="fw-bold"><span className="fas fa-dollar-sign"></span>{subTotalPrice()}</p>
                                    </div>
                                    <div className="btn btn-primary mt-2">Pay<span className="fas fa-dollar-sign px-1"></span>{subTotalPrice()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage