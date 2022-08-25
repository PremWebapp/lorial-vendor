import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'
import Vendorauth from './vendor/auth/auth';
import VendorPasswordReset from './vendor/auth/resetPassword';
import VendorHeader from './vendor/vendorDashbord/helper/vendorHeader';
import style from './vendor/vendorDashbord/helper/vendor.module.css'
// import VendorFooter from './vendor/vendorDashbord/helper/footer';
import VendorRoute from './route/vendorRoute';
import PrivateRoute from './helper/privateRoute';
import { useSelector } from 'react-redux';

function App() {
  const vendorData = useSelector(state => state.login)

  let navigate = useNavigate();

  useEffect(() => {
    if (vendorData?.token) navigate("/dashbord");
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (vendorData?.token) navigate("/dashbord");
  }, [vendorData?.token])

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
      {/* <VendorFooter /> */}
    </>
  );
}

export default App;