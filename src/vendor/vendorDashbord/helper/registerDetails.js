import style from './vendor.module.css'
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form"
import { incrementStaper } from '../../../redux/reducers/registerReducer';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

function RegisterDetails() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const dispatch = useDispatch()

    useEffect(()=>{
        if (data.length > 5) {
            const jsonFormData = JSON.parse(data);
            if (Object.keys(jsonFormData)?.length === 5 && jsonFormData?.mobile?.length === 10) {
                dispatch(incrementStaper())
            } else {
                message.error('Mobile number must be 10 digit!');
            }
        }
    },[data])
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
                                                <p className={`${style.vendorCardLable}`}>First Name</p>
                                                <input {...register("first_name")} class={`${style.formcontrol} form-control`} type="text"  required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Last Name</p>
                                                <input {...register("last_name")} class={`${style.formcontrol} form-control`} type="text"  required />
                                            </div>
                                            <div> <p className={`${style.vendorCardLable}`}>Mobile Number</p>
                                                <input {...register("mobile")} class={`${style.formcontrol} form-control`} type="text"  required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Email</p>
                                                <input {...register("email")} class={`${style.formcontrol} form-control`} type="email" required />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Password</p>
                                                <input {...register("password")} class={`${style.formcontrol} form-control`} type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                                            </div>

                                            <div class="row  mt-4 ">
                                                <div class="col d-flex justify-content-center">
                                                    <button type="submit" class={`${style.authsubmitted} btn btn-primary  btn-block`}>
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
            </div>

        </div>
    )
}

export default RegisterDetails