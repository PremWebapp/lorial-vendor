import React from 'react'
import style from './vendor.module.css'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import {  decrementStaper } from '../../../redux/reducers/registerReducer';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

function RegisterPickuplocation() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const dispatch = useDispatch()

    useEffect(()=>{
        if (data.length > 5) {
            const jsonFormData = JSON.parse(data);
            if (Object.keys(jsonFormData).length === 4 && jsonFormData?.pickup_pincode?.length ===6 ) {
            } else {
                message.error('Pincode must be 6 digit!');
            }
        }
    },[data])

    const handelBackSubmit = (e) => {
        e.preventDefault()
        dispatch(decrementStaper())
    }
    return (
        <div>
            <div class="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div class="modal-content  border-0 ">
                    <div class="modal-body  p-0">
                        <div class="row justify-content-center">
                            <div class="col">
                                <div class="card-body pt-0">
                                    <div class="row justify-content-center ">
                                        <form class="col-sm-8 col px-sm-0 px-4" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Address</p>
                                                <input {...register('address')} class={`${style.formcontrol} form-control`} type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>State</p>
                                                <input {...register('pickup_state')} class={`${style.formcontrol} form-control`} type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>City</p>
                                                <input {...register('pickup_city')} class={`${style.formcontrol} form-control`} type="text" required />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Pincode</p>
                                                <input {...register('pickup_pincode')} class={`${style.formcontrol} form-control`} type="text" required />
                                            </div>

                                            <div className="col d-flex  mt-4">
                                                <button onClick={handelBackSubmit} className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                    <i class="fa-solid fa-arrow-left-long pe-2"></i>Back
                                                </button>
                                                <div className='col d-flex justify-content-end'>
                                                    <button type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                        Submit
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

export default RegisterPickuplocation