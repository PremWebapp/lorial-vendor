import style from './vendor.module.css'
import { useState, useEffect } from "react";
import { incrementStaper, decrementStaper, addBankDetails } from '../../../redux/reducers/registerReducer';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

function RegisterbankDetails() {
    const {bank_details}= useSelector(state => state.register)

    const [bankData, setbankData] = useState({});
    const dispatch = useDispatch()

    const HandleSubmit = (e) => {
        e.preventDefault()
        if ( bankData?.acc_number?.length <= 9) {
            message.error('Account number must be greater than 9 digit!');
        } else {
            dispatch(addBankDetails(bankData))
            dispatch(incrementStaper())
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setbankData({ ...bankData, [name]: value })
    }

    const handelBackSubmit = (e) => {
        e.preventDefault()
        dispatch(decrementStaper())
    }
    useEffect(()=>{
        if(bank_details)  setbankData(bank_details)
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        if(bank_details)  setbankData(bank_details)
    },[bank_details])

    return (
        <div>  <div className="modal-dialog  modal-dialog-centered justify-content-center " role="document">
            <div className="modal-content  border-0 ">
                <div className="modal-body  p-0">
                    <div className="row justify-content-center">
                        <div className="col">
                                <div className="row justify-content-center ">
                                    <form className="col-sm-8 col px-sm-0 px-4" >
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Account Holder Name</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.acc_holder_name}  className={`${style.formcontrol} form-control`} type="text" name="acc_holder_name" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Account Number</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.acc_number}  className={`${style.formcontrol} form-control`} type="number" name="acc_number" required />
                                        </div>
                                        <div> <p className={`${style.vendorCardLable}`}>IFSC Code</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.IFSC_code}  className={`${style.formcontrol} form-control`} type="text" name="IFSC_code" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>State</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.bank_state}  className={`${style.formcontrol} form-control`} type="text" name="bank_state" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>City</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.bank_city} className={`${style.formcontrol} form-control`} type="text" name="bank_city" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Pincode</p>
                                            <input onChange={handleChange} defaultValue={bank_details?.bank_pincode}   className={`${style.formcontrol} form-control`} type="text" name="bank_pincode" required />
                                        </div>

                                        <div className="col d-flex  mt-4">
                                            <button onClick={handelBackSubmit}  className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                <i className="fa-solid fa-arrow-left-long pe-2"></i>Back
                                            </button>
                                            <div className='col d-flex justify-content-end'>
                                                <button onClick={HandleSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
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
        </div></div>
    )
}

export default RegisterbankDetails