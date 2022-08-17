import style from './vendor.module.css'
import { useState , useEffect} from "react";
import { incrementStaper, registerDetails } from '../../../redux/reducers/registerReducer';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

function RegisterDetails() {
    const formData= useSelector(state => state.register)

    const [registerData, setRegisterData] = useState({});
    const dispatch = useDispatch()

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (registerData?.length !== 5 && registerData?.mobile?.length !== 10) {
            message.error('Mobile number must be 10 digit!');
        } else {
            dispatch(registerDetails(registerData))
            dispatch(incrementStaper())
        }
    }
    useEffect(()=>{
        if(formData.first_name && formData.last_name && formData.mobile && formData.email && formData.password){
            setRegisterData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile: formData.mobile,
                email: formData.email,
                password: formData.password
            })
        }
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterData({ ...registerData, [name]: value })
    }
    return (
        <div>
            <div className="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div className="modal-content  border-0 ">
                    <div className="modal-body  p-0">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="">
                                    <div className="row justify-content-center ">
                                        <form className="col-sm-8 col px-sm-0 px-4" >
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>First Name</p>
                                                <input onChange={handleChange} defaultValue={formData?.first_name} className={`${style.formcontrol} form-control`} name='first_name' type="text" required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Last Name</p>
                                                <input onChange={handleChange} defaultValue={formData?.last_name} className={`${style.formcontrol} form-control`} name='last_name' type="text" required />
                                            </div>
                                            <div> <p className={`${style.vendorCardLable}`}>Mobile Number</p>
                                                <input onChange={handleChange} defaultValue={formData?.mobile} className={`${style.formcontrol} form-control`} name='mobile' type="text" required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Email</p>
                                                <input onChange={handleChange} defaultValue={formData?.email} className={`${style.formcontrol} form-control`} name='email' type="text" required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Password</p>
                                                <input onChange={handleChange} defaultValue={formData?.password} className={`${style.formcontrol} form-control`} type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                                            </div>

                                            <div className="row  mt-4 ">
                                                <div className="col d-flex justify-content-center">
                                                    <button onClick={HandleSubmit} type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block`}>
                                                        Next<i className="fa-solid fa-arrow-right-long ps-2"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

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

export default RegisterDetails