import React from 'react'
import { Routes, Route, } from "react-router-dom";
import '../admin/adminDashbord/helper/admin.css'
import AddProduct from '../vendor/product/addProduct';
import VendorDashbord from '../vendor/vendorDashbord/dashbord';

function VendorRoute() {
    return (
        <Routes>
            <Route exact path="/" element={<VendorDashbord />} />
            <Route exact path="/add-product" element={<AddProduct />} />
        </Routes>
    )
}

export default VendorRoute