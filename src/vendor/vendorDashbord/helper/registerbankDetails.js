import style from './vendor.module.css'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { incrementStaper, decrementStaper } from '../../../redux/reducers/registerReducer';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

function RegisterbankDetails() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const dispatch = useDispatch()

    useEffect(()=>{
        if (data.length > 5) {
            const jsonFormData = JSON.parse(data);
            if (Object.keys(jsonFormData).length === 6 && jsonFormData?.acc_number?.length >= 9) {
                dispatch(incrementStaper())
            } else {
                message.error('Account number must be greater than 9 digit!');
            }
        }
    },[data])

    const handelBackSubmit = (e) => {
        e.preventDefault()
        dispatch(decrementStaper())
    }

    return (
        <div>  <div class="modal-dialog  modal-dialog-centered justify-content-center " role="document">
            <div class="modal-content  border-0 ">
                <div class="modal-body  p-0">
                    <div class="row justify-content-center">
                        <div class="col">
                            <div class="card-body pt-0">
                                <div class="row justify-content-center ">
                                    <form class="col-sm-8 col px-sm-0 px-4" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Account Holder Name</p>
                                            <input {...register("acc_holder_name")}  class={`${style.formcontrol} form-control`} type="text" name="acc_holder_name" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Account Number</p>
                                            <input {...register('acc_number')} class={`${style.formcontrol} form-control`} type="number" name="acc_number" required />
                                        </div>
                                        <div> <p className={`${style.vendorCardLable}`}>IFSC Code</p>
                                            <input {...register('IFSC_code')} class={`${style.formcontrol} form-control`} type="text" name="IFSC_code" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>State</p>
                                            <input {...register('bank_state')}   class={`${style.formcontrol} form-control`} type="text" name="bank_state" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>City</p>
                                            <input {...register('bank_city')}  class={`${style.formcontrol} form-control`} type="text" name="bank_city" required />
                                        </div>
                                        <div>
                                            <p className={`${style.vendorCardLable}`}>Pincode</p>
                                            <input {...register('bank_pincode')}  class={`${style.formcontrol} form-control`} type="text" name="bank_pincode" required />
                                        </div>

                                        <div className="col d-flex  mt-4">
                                            <button onClick={handelBackSubmit}  className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                <i class="fa-solid fa-arrow-left-long pe-2"></i>Back
                                            </button>
                                            <div className='col d-flex justify-content-end'>
                                                <button type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block`} >
                                                    Next<i class="fa-solid fa-arrow-right-long ps-2"></i>
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
        </div></div>
    )
}

export default RegisterbankDetails