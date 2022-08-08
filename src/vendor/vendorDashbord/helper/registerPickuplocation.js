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
        if(pickup_location){
            setPickupDetails(pickup_location)
        }
    },[])
    return (
        <div>
            <div class="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div class="modal-content  border-0 ">
                    <div class="modal-body  p-0">
                        <div class="row justify-content-center">
                            <div class="col">
                                    <div class="row justify-content-center ">
                                        <form class="col-sm-8 col px-sm-0 px-4">
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Address</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.address}  class={`${style.formcontrol} form-control`} name='address' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>State</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_state}  class={`${style.formcontrol} form-control`} name='pickup_state' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>City</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_city}  class={`${style.formcontrol} form-control`} name='pickup_city' type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Pincode</p>
                                                <input onChange={handleChange} defaultValue={pickup_location?.pickup_pincode}  class={`${style.formcontrol} form-control`} name='pickup_pincode' type="text" required />
                                            </div>

                                            <div className="col d-flex  mt-4">
                                                <button onClick={handelBackSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                    <i class="fa-solid fa-arrow-left-long pe-2"></i>Back
                                                </button>
                                                <div className='col d-flex justify-content-end'>
                                                    <button onClick={HandleSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                      {totalData.isLoading ? <Spin /> :  'Submit'}
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