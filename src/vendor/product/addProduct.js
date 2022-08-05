import React, { useState } from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

function AddProduct() {
    const [fileList, setFileList] = useState([

    ]);
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

    return (
        <>
            <div className={`${style.completedboxCard}`}>
                <div className={`${style.completedbox} mx-5 `}>
                    <div className={`${style.completedboxBorder}`}>
                        <div className='row mx-2 pt-3'>
                            <div className={`${style.completedboxlable} col fw-bold`}>
                                Add Product for sell
                            </div>

                            <div className="border border-secondary  mt-3"></div>

                        </div>
                        <div className="card-group p-3 gap-4">
                            <div className='container'>
                                <div className='row py-4 '>
                                    <div className='col-md-6 py-1' >
                                        <p className={`${style.vendorCardLable}`}>Product Name</p>
                                        <div class="col-sm-10">
                                            <input type="password" class=" form-control bg-light" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Product Category</p>
                                        <div class="col-sm-10">
                                            <input type="password" class=" form-control bg-light" id="inputPassword" />
                                        </div>
                                    </div>

                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Additional Description</p>
                                        <div class="col-sm-10">
                                            <input type="password" class=" form-control bg-light" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Product Price</p>
                                        <div class="col-sm-10">
                                            <input type="password" class=" form-control bg-light" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 py-1'>
                                        <p className={`${style.vendorCardLable}`}>Add Product Image (multiple)</p>
                                        <div class="col-sm-10">
                                            <ImgCrop rotate>
                                                <Upload
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    listType="picture-card"
                                                    fileList={fileList}
                                                    onChange={onChange}
                                                    onPreview={onPreview}
                                                >
                                                    {fileList.length < 5 && '+ Upload'}
                                                </Upload>
                                            </ImgCrop>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <button type="submit" class={`${style.authsubmitted} btn btn-primary  btn-block mb-4 `}>
                                Submit
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default AddProduct