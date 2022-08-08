import React from 'react'
import { Link } from 'react-router-dom'
import './authCss/userauth.css'

function UserSignin() {
    return (
        <div id="my-modal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered justify-content-center  " role="document">
                <div className="modal-content  border-0 mx-3">
                    <div className="modal-body  p-0">
                        <div className="row justify-content-center ">
                            <div className="col">
                                <div className="card-signin">
                                    <div className="card-header bg-white border-0">
                                        <div className="row align-items-center p-1">
                                            {/* <div className="flex-col-auto"></div> */}
                                            <div className="col-auto text-right"><button type="button" className="border-0 bg-white close" data-bs-dismiss="modal" aria-label="Close"> <span className="cross" aria-hidden="true">&times;</span> </button></div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row justify-content-center ">
                                            <div className="col-sm-8 col px-sm-0 justify-content-center">
                                                <img className='mx-auto user-signup-img1 d-flex justify-content-center card-title mt-sm-5 mt-3 mb-sm-5 mb-3 text-center' src='https://webapp.world/assets/images/logo.png' />
                                                <div className="row">
                                                    <div className="col">
                                                        <input className='input-signin' type="email" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="row mt-2"><div className="col"><input className='input-signin' type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" /></div></div>
                                                <div className="row align-items-center mt-4 mb-5"> <div className="col text-left">
                                                    <div className="custom-control custom-checkbox d-flex">
                                                        <input id="my-input" className="custom-control-input w-25 " type="checkbox" name="" value="true" />
                                                        <p >Remember me</p>
                                                    </div>
                                                </div>
                                                    <div className="col-auto text-right"> <span className="pass">
                                                        <p>Forgot password</p>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className="row"> <div className="col"><button type="button" style={{ width: 'inherit' }} className="btn btn-primary  btn-block"><b>SIGNUP</b></button></div></div>
                                                <div className="row mb-4 px-3">
                                                    <span data-bs-toggle="modal" data-bs-target="#my-modal" className="fw-bold d-flex">I have an account? <a className="text-danger "><Link className='nav-link'  to='/signup'>Signin</Link></a></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignin