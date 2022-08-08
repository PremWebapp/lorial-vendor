import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'antd/dist/antd.css';
import Vendorauth from './vendor/auth/auth';
import VendorPasswordReset from './vendor/auth/resetPassword';
import VendorHeader from './vendor/vendorDashbord/helper/vendorHeader';
import style from './vendor/vendorDashbord/helper/vendor.module.css'
import VendorFooter from './vendor/vendorDashbord/helper/footer';
import VendorRoute from './route/vendorRoute';

function App() {
  return (
    <>
      <VendorHeader />
      <div className={`${style.vendorboxarea}`}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Vendorauth />} />
            <Route exact path="/password-reset" element={<VendorPasswordReset />} />
            <Route exact path="/dashbord/*" element={<VendorRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
      <VendorFooter />
    </>
  );
}

export default App;