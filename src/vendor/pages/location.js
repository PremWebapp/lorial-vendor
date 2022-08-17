import React from 'react'
import AuthContant from '../auth/helper/authContant'
import style from '../vendorDashbord/helper/vendor.module.css'
import mapImage from '../media/map.PNG'
import { BiCurrentLocation } from "react-icons/bi";


function VendorLocation() {
    return (
        <div className="container py-2">
            <div className="row ">
                <AuthContant />
                <div className=' col-md-6 col-xl-6 col-sm-6 col-12'>
                    <div className="mt-5 d-flex  d-flex justify-content-center ">
                        <div className={`${style.vendorauthcard} pt-4`}>
                            <div className="modal-content  border-0 ">
                                <div className="modal-body  p-0">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="card-body pt-0">
                                                <div className="row justify-content-center pb-sm-5 pb-3">
                                                    <div className="col-sm-8 col px-sm-0 px-4">
                                                        <div className="col d-flex ">
                                                            <h3 className="pt-4 pb-3">Pickup Location</h3>
                                                            <div className='col d-flex justify-content-end'>
                                                                <h6 className="pt-4 " style={{ color: '#9B9B9B' }}>Skip</h6>
                                                            </div>
                                                        </div>
                                                        <div> <p className={`${style.vendorCardLable}`}>Address</p>
                                                            <input className={`${style.formcontrol} form-control`} type="text" name="password" placeholder="Enter Password" />
                                                        </div>

                                                        <div className="row">
                                                            <div className="col">
                                                                <p className={`${style.vendorCardLable}`}>City</p>
                                                                <select className={`${style.formcontrol} form-control bg-light`} placeholder='dsdv' >
                                                                    <option value="" disabled selected hidden>Choose a drink</option>
                                                                    <option value="coffee">Coffee</option>
                                                                    <option value="tea">Tea</option>
                                                                    <option value="milk">Milk</option>
                                                                </select>
                                                            </div>
                                                            <div className="col">
                                                                <p className={`${style.vendorCardLable}`}>State</p>
                                                                <select className={`${style.formcontrol} form-control bg-light`} >
                                                                    <option value="" disabled selected hidden>Choose a drink</option>
                                                                    <option value="coffee">Coffee</option>
                                                                    <option value="tea">Tea</option>
                                                                    <option value="milk">Milk</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p className={`${style.vendorCardLable}`}>Pincode</p>
                                                            <input className={`${style.formcontrol} form-control`} type="number" name="password" placeholder="Enter pincode" />
                                                        </div>
                                                        <div className="row mt-4">
                                                            <div className="col d-flex  mt-2">
                                                                <div>
                                                                    <button type="button" className={`${style.authsubmitted} btn btn-primary  btn-block`} data-bs-toggle="modal" data-bs-target="#loginModel">
                                                                        <BiCurrentLocation />  Use My Location
                                                                    </button>
                                                                </div>
                                                                <div className='col d-flex justify-content-end'>
                                                                    <img width='105px' src={mapImage} alt='dfgf' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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

export default VendorLocation