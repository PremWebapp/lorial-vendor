import React from 'react'
import { FaSearch, FaBell, FaChartLine, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserSignin from '../../authPages/usersignin';
import './helper/userHeader.css'

export default function UserHeaderSearchBar() {
    const selectedViewItem = useSelector(state => state.cart?.cartItems)
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg search-header fixed-top">
                <div className="container ">
                    <Link to='/'>
                    <span className="navbar-brand text-white fw-bold" href="#">WebAppFashion</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex">
                            <div className="input-group">
                                <input type="text" className="search-input form-control rounded-0 border-0 " aria-label="Dollar amount (with dot and two decimal places)" />
                                <span className="input-group-text bg-white rounded-0 border-0 text-primary" ><FaSearch /></span>
                            </div>
                            <button className="btn btn-light bg-white fw-bold rounded-0 text-primary mx-3 login-btn" data-bs-toggle="modal" data-bs-target="#my-modal">Login</button>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <span className="user-header-label nav-link active text-white fw-bold" aria-current="page" href="#">Beacome a Seller</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="user-header-label fw-bold text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </span>
                                <ul className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#"><span className='text-primary px-2'><FaBell /></span>Notification</a></li>
                                    <li><a className="dropdown-item" href="#"><span className='text-primary px-2'><FaChartLine /></span> 24/7 Care</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item d-flex ">
                                <button className="btn btn-light text-white fw-bold search-header border-0 p-0 relative">
                                    <Link to='/product/cart' className='nav-link text-white'>
                                        <span className='mx-1'>
                                            <FaShoppingCart />
                                        </span>
                                        Cart <span className='bg-danger border border-white rounded px-1'>{selectedViewItem.length}</span>
                                    </Link>
                                </button>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
        <UserSignin/>
        </>
    )
}
