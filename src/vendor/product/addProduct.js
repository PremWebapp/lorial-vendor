import React, { useState, useEffect, useRef } from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Upload, message, Spin } from 'antd';
// import ImgCrop from 'antd-img-crop';
import { useSelector, useDispatch } from 'react-redux';
import { addProductFun } from '../../redux/reducers/productReducer';
import { categoryFunById } from '../../redux/reducers/categeoryReducer';
import JoditEditer from 'jodit-react'

function AddProduct() {
    const editer = useRef(null)
    const [fileList, setFileList] = useState([]);
    const [registerData, setRegisterData] = useState([]);
    const [isRecomended, setisRecomended] = useState(true);
    const [ description, setDescription] = useState('')

    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.product)
    const { verndorCategory } = useSelector(state => state.category)
    const vendorData = useSelector(state => state.login)

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log('first',name, value )
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (fileList.length !== 0 && description?.length !==0) {
            const formData = new FormData();

            formData.append('vendor_id', vendorData?.user?.vendor_id)
            for (let [key, value] of Object.entries(registerData)) {
                console.log(`${key}: ${value}`);
                formData.append(key, value)
            }

            for (let j = 0; j < fileList.length; j++) {
                formData.append('images', fileList[j].originFileObj)
            }
            formData.append('is_recomended', isRecomended)
            formData.append('description', description)

            dispatch(addProductFun({ data: formData, token: vendorData?.token }))
            for (var key of formData.keys()) {
                formData.delete(key)
            }
        } else message.error('Please select product image Or Description!')
    }
    useEffect(() => {
        dispatch(categoryFunById({ data: vendorData?.user?.vendor_id, token: vendorData?.token }))
   // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className={`${style.completedboxCard}`}>
                <div className={`me-3 `}>
                    <form className={`${style.completedboxBorder}`} onSubmit={handleSubmit}>
                        <div className='row mx-2 pt-3'>
                            <div className={`${style.completedboxlable} col fw-bold`}>
                                Product Form
                            </div>
                            <div className="border border-secondary  mt-3"></div>
                        </div>
                        <div className="card-group p-3 gap-4">
                            <div className='container'>
                                <div className='row ' >
                                    <div className='col-md-6 py-1' >
                                        <p className={`${style.vendorCardLable}`}>Product Name</p>
                                        <div className="col-sm-10">
                                            <input onChange={handleInputChange} name='title' type="text" className=" form-control bg-light" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Product Category</p>
                                        <div className="col-sm-10">
                                            <select onChange={handleInputChange} name='category_id' className={`${style.divcontrol} form-control  shadow-none`}  required >
                                                <option value="">Select Provider type</option>
                                                {verndorCategory?.map(item => {
                                                    return <option value={item?.id} key={item?.id}>{item?.category_name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>


                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Product Price</p>
                                        <div className="col-sm-10">
                                            <input onChange={handleInputChange} name='price' type="number" min='0' className=" form-control bg-light" required />
                                        </div>
                                    </div>

                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Recommended</p>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => setisRecomended(!isRecomended)} name='is_recomended' defaultChecked defaultValue={true} type="checkbox" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Add Product Image (multiple)</p>
                                        <div className="col-sm-10">
                                            {/* <ImgCrop rotate> */}
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onChange={onChange}
                                                onPreview={onPreview}
                                            >
                                                {fileList.length < 10 && '+ Upload'}
                                            </Upload>
                                            {/* </ImgCrop> */}
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Additional Description</p>
                                        <div className="col-sm-10">
                                            <JoditEditer name="description" ref={editer} onChange={(contant)=>setDescription(contant)} />
                                            {/* <input onChange={handleInputChange} name='description' type="text" className=" form-control bg-light" required /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            {/* {isLoading ? <Spin size="large" /> : <button type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block mb-4 `}>
                                Submit
                            </button>} */}
                            <button type="submit" className={`${style.authsubmitted} btn btn-primary  btn-block mb-4 `}>
                            {isLoading ? <Spin /> :  'Submit'}
                            </button>
                        </div>
                    </form>

                </div>

            </div>


        </>
    )
}

export default AddProduct