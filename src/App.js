import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import Vendorauth from './vendor/auth/auth';
import VendorPasswordReset from './vendor/auth/resetPassword';
import VendorHeader from './vendor/vendorDashbord/helper/vendorHeader';
import style from './vendor/vendorDashbord/helper/vendor.module.css'
import VendorFooter from './vendor/vendorDashbord/helper/footer';
import VendorRoute from './route/vendorRoute';
import PrivateRoute from './helper/privateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { categoryFunById } from './redux/reducers/categeoryReducer';

function App() {
  const vendorData = useSelector(state => state.login)
  const {verndorCategory} = useSelector(state => state.category)

  let navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (vendorData?.token) navigate("/dashbord");
  }, [])

  useEffect(() => {
    if (vendorData?.token) navigate("/dashbord");
  }, [vendorData?.token])

  useEffect(() => {
    if (verndorCategory?.length === 0) dispatch(categoryFunById({data:vendorData?.user?.vendor_id, token:vendorData?.token}))
  }, [])

  return (
    <>
      <VendorHeader />
      <div className={`${style.vendorboxarea}`}>
        <Routes>
          <Route exact path="/" element={<Vendorauth />} />
          <Route exact path="/password-reset" element={<VendorPasswordReset />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/dashbord/*" element={<VendorRoute />} />
          </Route>
        </Routes>
      </div>
      <VendorFooter />
    </>
  );
}

export default App;