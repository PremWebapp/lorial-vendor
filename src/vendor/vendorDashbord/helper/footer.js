import React from 'react'
import style from './vendor.module.css'

function VendorFooter() {
    return (
            <div className='position-absolute bottom-0 w-100 bg-black'>
           <p className={`${style.footerLable} py-2 text-center`}>© 2020 Copyright: Pyde Ya</p>
        </div>
    )
}

export default VendorFooter

