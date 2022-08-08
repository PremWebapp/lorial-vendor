import style from '../vendorDashbord/helper/vendor.module.css'
import { message, Upload, Button } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';

function SellingCategory() {


    return (
        <div className="container">
            <div class="card text-center shadow py-5 ">
                <div class="card-body ">
                    <h5 class="card-title ">Select your Primary Selling Category</h5>
                    <div className='d-flex justify-content-center mt-2'>
                        <div style={{ width: '200px' }}>
                            <p className={`${style.vendorCardLable}`}>Category</p>
                            <select className={`${style.formcontrol} form-control bg-light shadow-none`} >
                                <option value="">Select Provider type</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div  >
                            <p className={`${style.vendorCardLable}`}>Additional Description</p>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                maxCount={1}
                            >
                                <Button size='large' icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                            </Upload>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center pt-5" >
                        <button type="submit" class={`${style.authsubmitted} btn btn-primary  btn-block mb-4 `}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellingCategory