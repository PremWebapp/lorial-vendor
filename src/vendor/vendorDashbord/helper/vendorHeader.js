import React, { useState } from 'react'
import style from './vendor.module.css'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFun } from '../../../redux/reducers/loginReducer';
import {Link} from 'react-router-dom'

function VendorHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch()
  const vendorData = useSelector(state => state.login)

  const showModal = (e) => {
    e.preventDefault()
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(logoutFun({ mobile: vendorData?.user?.mobile }))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 

  return (
    <nav className={`navbar navbar-light bg-dark fixed-top ${style.vendorHeader}`}>
      <div className={`d-flex container ${style.vendorHeaderdiv}`}>
        <span href='' className="navbar-brand text-white fw-bold">Vendor Admin</span>
        <div className="d-flex">
          <span className='me-4 m-auto text-white'>Account status</span>{vendorData?.user?.mobile ?
            <button onClick={showModal} className={`btn  border-white text-white px-4 ${style.buttonHeader}`} >Logout</button> :
            <Link to='/' className={`btn  border-white text-white px-4 ${style.buttonHeader}`} >Login </Link>
          }
        </div>
      </div>
      <Modal okText={'Logout'} title="Are you sure about logout!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </nav>
  )
}

export default VendorHeader