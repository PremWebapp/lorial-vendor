import React from 'react'

function ProductCartTotalPrice() {
    return (
        <div className="">
            <div className="dd-flex ">
                    <div className="card px-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex flex-row align-items-center"> <i className='fa fa-apple fs-1'></i> <span className="fw-bold ms-1 fs-5">Apple</span> </div>
                                <h1 className="fs-1 ms-1 mt-3">Watch Series 4</h1>
                                <div className="ms-1"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> </div>
                                {/* <div className="mt-5 radio-buttons"> <label className="radio"> <input type="radio" name="code" value="grey" checked/> <span></span> </label> <label className="radio"> <input type="radio" name="code" value="pink"/> <span></span> </label> <label className="radio"> <input type="radio" name="code" value="black"/> <span></span> </label> </div> */}
                                <div> <button className="button"> <span>Order Now</span> <i className="ms-2 fa fa-long-arrow-right"></i> </button> </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCartTotalPrice