import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Tabs } from 'antd';
import Login from './login';
import Register from './register';
import AuthContant from './helper/authContant';

function Vendorauth() {
    const { TabPane } = Tabs;

    return (
        <div className="container py-2">
            <div className="row">
                <AuthContant />
                <div className=' col-md-6 col-xl-6 col-sm-6 col-12'>
                    <div className="mt-5 d-flex  d-flex justify-content-center ">
                        <div className={`${style.vendorauthcard} pt-4`}>
                            <Tabs defaultActiveKey="1" centered >
                                <TabPane tab="Login" key="1">
                                  <Login />
                                </TabPane>
                                <TabPane tab="Register" key="2">
                                   <Register/>
                                </TabPane>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendorauth