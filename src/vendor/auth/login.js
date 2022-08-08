import React,{useState} from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginFun } from '../../redux/reducers/loginReducer'
import { message } from 'antd'

function Login() {
    const [mobile, setLogin] = useState('')
    const dispatch =useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(mobile.length==10)dispatch(loginFun({mobile:mobile}))
        else message.error('Mobile must be at least 10 characters long for login!')
        
    }
    const handleOTPSubmit=()=>{}
    
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
                                                <input onChange={(e)=>setLogin(e.target.value)} className={`${style.formcontrol} form-control `} type="number" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
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
                                                <div className="col d-flex  d-flex">
                                                    <button onClick={handleSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} data-bs-toggle="modal" data-bs-target="#registerModel">
                                                        Login
                                                    </button>
                                                    <div className='col d-flex justify-content-end'>

                                                        <Link to='/vendor/password-reset' className='text-danger mky-auto'>Forgate Password?</Link>
                                                    </div>
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
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h4 className="modal-title" id="exampleModalLabel">Enter OTP</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pb-4">
                            <p className={`fs-6 ${style.modelLable}`}>Enter 4 digit code sent on your mobile number</p>
                            <div id="otp" class=" mx-5 inputs d-flex flex-row justify-content-center mt-2">
                                <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
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
                                <button type="button" class={`${style.authsubmitted} btn btn-primary  btn-block text-center mt-4`}>
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login