import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import AuthContant from './helper/authContant'

function VendorPasswordReset() {
    return (
        <div className="container py-2">
            <div className="row">
               <AuthContant/>
                <div className='mt-2 col-md-6 col-xl-6 col-sm-6 col-12'>
                    <div className="mt-5 d-flex  d-flex justify-content-center ">
                        <div className={`${style.vendorauthcard} pt-4`}>
                            <div className="modal-content  border-0 ">
                                <div className="modal-body  p-0">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="card-body pt-0">
                                                <div className="row justify-content-center pb-sm-5 pb-3">
                                                    <div className="col-sm-8 col px-sm-0 px-4">
                                                        <h4 className="pt-4 pb-3">Reset Password</h4>
                                                        <div> <p className={`${style.vendorCardLable}`}>Enter New Password</p>
                                                            <input className={`${style.formcontrol} form-control`} type="number" name="password" placeholder="Enter Password" />
                                                        </div>

                                                        <div>
                                                            <p className={`${style.vendorCardLable}`}>Confirm New Password</p>
                                                            <input className={`${style.formcontrol} form-control`} type="password" name="password" placeholder="Enter Password" />
                                                        </div>

                                                        <div className="row mt-5"> <div className="col d-flex justify-content-center">
                                                            <button type="button" className={`${style.authsubmitted} btn btn-primary  btn-block`}>
                                                                Change Password
                                                            </button>
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
                </div>
            </div>
        </div>
    )
}

export default VendorPasswordReset