import style from '../vendorDashbord/helper/vendor.module.css'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryFun, categoryFunById } from '../../redux/reducers/categeoryReducer';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

function SellingCategory() {
    const dispatch = useDispatch()
    const vendorData = useSelector(state => state.login)
    const [categoryimage, setCategoryimage] = useState()
    const [categoryname, setCategoryname] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const imageData = new FormData();
            imageData.append("category_img", categoryimage)
            imageData.append("category_name", categoryname)
            imageData.append("vendor_id", vendorData?.user?.vendor_id)
            dispatch(categoryFun({ data: imageData, token: vendorData?.token }))
        }
        catch (err) {
            console.log('error.............')
         }
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') setCategoryimage(info.file?.originFileObj)
        },
    };

    useEffect(() => {
        dispatch(categoryFunById({ data: vendorData?.user?.vendor_id, token: vendorData?.token }))
    }, [])

    return (
        <div className="px-4 pt-3">
            <div className="card text-center shadow py-5 ">
                <form className="card-body " onSubmit={handleSubmit}>
                    <h5 className="card-title ">Select your Primary Selling Category</h5>
                    <div className='d-flex justify-content-center mt-2'>
                        <div style={{ width: '180px' }}>
                            <p className={`${style.vendorCardLable}`}>Category</p>
                            <select onChange={(e) => setCategoryname(e.target.value)} name='category_name' className={`${style.divcontrol} form-control  shadow-none`} required >
                                <option value="">Select Provider type</option>
                                <option value="Ecommerce">Ecommerce</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Pharmacy">Pharmacy</option>
                            </select>
                        </div>
                        <div className=" ps-2" >
                            <p className={`${style.vendorCardLable}`}>Category Image</p>
                            <Upload maxCount={1} {...props} >
                                <Button className='px-3' size='large' icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            {/* <input onChange={(e) => setCategoryimage(e.target.files[0])} type='file' name='category_img' accept="image/png, image/jpeg" className='border w-75 pb-2 pt-1' required /> */}
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center pt-5" >
                        <button type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block mb-4 `}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SellingCategory