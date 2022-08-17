import React, { useState, useEffect } from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginFun, otpValidateFun } from '../../redux/reducers/loginReducer'
import { message } from 'antd'

function Login() {
    const [mobile, setMobile] = useState('')
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (mobile.length === 10) {
            dispatch(loginFun({ mobile: mobile }))
            setMobile('')
        } else message.error('Mobile must be at least 10 characters long for login!')
    }
    const handleOTPSubmit = (e) => {
        e.preventDefault()
        let values = Object.values(otp);
        if (Object.values(otp).length === 4) {
            dispatch(otpValidateFun({ otp: `${values[0]}${values[1]}${values[2]}${values[3]}` }))
        } else message.error('OTP at least 4 characters long for login!')
    }

    const hadleGetOTP = (e) => {
        const { name, value } = e.target
        setOtp({ ...otp, [name]: value })
    }
    return (
        <>
            <div className="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div className="modal-content  border-0 ">
                    <div className="modal-body  p-0">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="">
                                    <form className="row justify-content-center ">
                                        <div className="col-sm-8 col ">
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Mobile Number</p>
                                                <input onChange={(e) => setMobile(e.target.value)} value={mobile} className={`${style.formcontrol} form-control `} type="number" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                                            </div>

                                            <div className="row align-items-center mt-4 mb-5">
                                                <div className="col text-left">
                                                    <div className="custom-control custom-checkbox">
                                                        <input id="my-input" className="custom-control-input mt-2" type="checkbox" name="" value="true" />
                                                        <label for="my-input" className="custom-control-label px-2">
                                                            <span className={`${style.termCOndition}`}>I Accept all the Terms and Conditions</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex  justify-content-center">
                                                    <button onClick={handleSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} data-bs-toggle="modal" data-bs-target="#registerModel">
                                                        Login
                                                    </button>
                                                    {/* <div className='col d-flex justify-content-end'>
                                                        <Link to='/category' className={`${style.authsubmitted} btn btn-primary  btn-block`}>
                                                            Category
                                                        </Link>
                                                        <Link to='/password-reset' className='text-danger mky-auto'>Forgate Password?</Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${style.modalContant} modal fade`} id="registerModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <form className="modal-content">
                        <div className="modal-header ">
                            <h4 className="modal-title" id="exampleModalLabel">Enter OTP</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pb-4">
                            <p className={`fs-6 ${style.modelLable}`}>Enter 4 digit code sent on your mobile number</p>
                            <div id="otp" className=" mx-5 inputs d-flex flex-row justify-content-center mt-2">
                                <input onChange={hadleGetOTP} className="m-2 text-center form-control rounded" type="text" min='0' name="first" maxlength="1" required />
                                <input onChange={hadleGetOTP} className="m-2 text-center form-control rounded" type="text" min='0' name="second" maxlength="1" required />
                                <input onChange={hadleGetOTP} className="m-2 text-center form-control rounded" type="text" min='0' name="third" maxlength="1" required />
                                <input onChange={hadleGetOTP} className="m-2 text-center form-control rounded" type="text" min='0' name="fourth" maxlength="1" required />
                            </div>
                            {/* <div className="row mx-5">
                                <div className="col d-flex">
                                    <span className='fw-bold text-danger mky-auto'>29 sec</span>
                                    <div className='col  d-flex justify-content-end'>
                                        <span className='fw-bold text-danger mky-auto'>Resend OTP?</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className='d-flex justify-content-center'>
                                <button type="submit" onClick={handleOTPSubmit} data-bs-dismiss="modal" aria-label="Close" className={`${style.authsubmitted} btn btn-primary  btn-block text-center mt-4`}>
                                    Submit
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Login