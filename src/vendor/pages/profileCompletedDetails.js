import React from "react";
import style from '../vendorDashbord/helper/vendor.module.css'
import Customer from './helper/vendorProfileCompletedCard'

function ProfileCompletedDetails() {
    const details = [
        {color: '#1B6BCC', lable: 'Business Details', subLable: 'Provide your Tin, Tax details' },
        {color: '#EBAA13', lable: 'Bank Details', subLable: 'Provide your Bank Details to Verify Account' },
        {color: '#BC61B0', lable: 'Store Details', subLable: 'Update your display Name & Business info' },
        {color: '#51D3DC', lable: 'Listings', subLable: 'Enter Minimum of 1 listing to activate you account' },

    ]
    return (
        <div className={`${style.completedboxCard} `}>
            <div className={`${style.completedbox} mx-5 `}>
                <div className={`${style.completedboxBorder}`}>
                    <div className='row mx-2 pt-3'>
                        <div className={`${style.completedboxlable} col fw-bold`}>
                            Complete your profile to start selling on Pyde Ya
                        </div>
                        <div className={`${style.completedboxlableProgress} col fw-bold col `}>
                            <div className='d-flex justify-content-end'>
                                <span className='px-3'> Profile Completed</span>
                                <div className="progress w-25 mt-1">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-secondary  mt-3"></div>

                    </div>
                    <div className="card-group p-3 gap-4">
                            {details.map(item=><Customer item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCompletedDetails