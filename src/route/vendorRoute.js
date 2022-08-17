import React from 'react'
import { Routes, Route, } from "react-router-dom";
import '../admin/adminDashbord/helper/admin.css'
import ProfileCompletedDetails from '../vendor/pages/profileCompletedDetails';
import SellingCategory from '../vendor/pages/sellingCategory';
import Product from '../vendor/product/product';
import VendorDashbord from '../vendor/vendorDashbord/dashbord';
import SideBar from '../vendor/vendorDashbord/helper/sidebar';

function VendorRoute() {
    return (
        <>
            <SideBar />
            <div style={{ marginLeft: '15.5vw' }}>
                <Routes>
                    <Route exact path="/" element={<VendorDashbord />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/category" element={<SellingCategory />} />
                    <Route exact path="/profile-completed-details" element={<ProfileCompletedDetails />} />
                </Routes>
            </div>
        </>
    )
}

export default VendorRoute