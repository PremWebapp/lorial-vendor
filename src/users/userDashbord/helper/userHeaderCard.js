import React from 'react'
import { Link } from 'react-router-dom'

function UserHeaderCard({children, img, altTitle}) {
  return (
    <Link to='/product' className='border-0 bg-white nav-link'>
        <img src={img} className=" img-thumbnail border-0" alt={altTitle} />
        <p className='fw-bold fs-6 header-children'>{children}</p>
    </Link>
  )
}

export default UserHeaderCard