import React from 'react'
import { useSelector } from 'react-redux'
import RegisterbankDetails from '../vendorDashbord/helper/registerbankDetails'
import RegisterDetails from '../vendorDashbord/helper/registerDetails'
import RegisterPickuplocation from '../vendorDashbord/helper/registerPickuplocation'

function Register() {
    const { staper } = useSelector(state => state.register)
    return (
        <>
            {staper === 1 && <RegisterDetails />}
            {staper === 2 && <RegisterbankDetails />}
            {staper === 3 && <RegisterPickuplocation />}
        </>
    )
}

export default Register