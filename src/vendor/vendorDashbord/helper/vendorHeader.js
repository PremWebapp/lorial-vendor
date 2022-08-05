import React from 'react'
import style from './vendor.module.css'

function VendorHeader() {
  return (
    <nav className={`navbar navbar-light bg-dark fixed-top ${style.vendorHeader}`}>
    <div className={`d-flex container ${style.vendorHeaderdiv}`}>
      <a className="navbar-brand text-white fw-bold">Vendor</a>
      <form className="d-flex">
        <span className='me-4 m-auto text-white'>Account status</span>
        <button className={`btn  border-white text-white px-4 ${style.buttonHeader}`} type="submit">Joining</button>
      </form>
    </div>
  </nav>
  )
}

export default VendorHeader