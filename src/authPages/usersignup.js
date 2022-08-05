import React from 'react'
import { Link } from 'react-router-dom'
import './authCss/userauth.css'

function UserSignup() {
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto bg-light ">
            <div className="card card0 border-0 ">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row">
                                <img src="https://webapp.world/assets/images/webapp-logo.png" className="logo" />
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2  border-0 px-4 py-5">
                            <div className="row px-3 mb-4 g-3 d-flex justify-content-center">
                                <img className='user-signup-img1' src='https://webapp.world/assets/images/logo.png' />
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Full Name</h6></label>
                                <input className="mb-4 input-signup" type="text" name="name" placeholder="Enter your full name" />
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                <input className="mb-4 input-signup" type="email" name="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                <input className="input-signup" type="password" name="password" placeholder="Enter password" />
                            </div>

                            <div className="row mb-3  pt-3 px-3">
                                <button type="submit" className="btn btn-blue text-center fw-bold text-white">Signup</button>
                            </div>
                            <div className="row mb-4 px-3">
                                {/* <span className="fw-bold d-flex">I have an account? <a className="text-danger "><Link className='nav-link' to='/user/signin'>Login</Link></a></span> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSignup