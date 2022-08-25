import React from 'react'
import style from './vendor.module.css'
import { useState, useEffect } from "react";
import {  addPickupLocation, decrementStaper, registrationFun } from '../../../redux/reducers/registerReducer';
import { useDispatch , useSelector} from 'react-redux';
import { message, Spin  } from 'antd';

function RegisterPickuplocation() {
    const {pickup_location}= useSelector(state => state.register)
    const totalData =useSelector(state => state.register)

    const [pickupDetails, setPickupDetails] = useState({});
    const dispatch = useDispatch()

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(pickupDetails).length === 4 && pickupDetails?.pickup_pincode?.length ===6 ) {
            dispatch(addPickupLocation(pickupDetails))
            dispatch(registrationFun(totalData))
        } else {
            message.error('Pincode must be 6 digit!');
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setPickupDetails({ ...pickupDetails, [name]: value })
    }
    const handelBackSubmit = (e) => {
        e.preventDefault()
        dispatch(decrementStaper())
    }
    useEffect(()=>{
        if(pickup_location)  setPickupDetails(pickup_location)
        // eslint-disable-next-line
    },[])
    return (
        <div>
            <div className="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div className="modal-content  border-0 ">
                    <div className="modal-body  p-0">
                        <div className="row justify-content-center">
                            <div className="col">
                                    <div className="row justify-content-center ">
                                        <form className="col-sm-8 col px-sm-0 px-4">
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Address</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.address}  className={`${style.formcontrol} form-control`} name='address' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>State</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_state}  className={`${style.formcontrol} form-control`} name='pickup_state' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>City</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_city}  className={`${style.formcontrol} form-control`} name='pickup_city' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Pincode</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_pincode}  className={`${style.formcontrol} form-control`} name='pickup_pincode' type="text" required />
                                            </div>

                                            <div className="col d-flex  mt-4">
                                                <button onClick={handelBackSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                    <i className="fa-solid fa-arrow-left-long pe-2"></i>Back
                                                </button>
                                                <div className='col d-flex justify-content-end'>
                                                    <button onClick={HandleSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                      {totalData.loading ? <Spin /> :  'Submit'}
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
    )
}

export default RegisterPickuplocation