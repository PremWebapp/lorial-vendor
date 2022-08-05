import React from 'react'
import { Link } from 'react-router-dom'

function UserProductcategorycard({ children, image, }) {
    return (
        <Link to='/product' className="nav-link d-flex justify-centent-center align-items-center  flex-column border-0 bg-white  ">
            <img className='zoom' style={{ width: '7rem',height: '10rem' }} src={image} alt="..." />
            <p >{children}</p>
        </Link>
    )
}
export default UserProductcategorycard