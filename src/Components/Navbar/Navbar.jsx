import React from "react";
import './Navbar.css';
import { FaSearch, FaHome, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return(
        <div className="navbar">
            <FaHome className="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact Us</li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <FaSearch className="search-logo"/>
            </div>
            <FaUser className="profile"/>
        </div>
    );
};

export default Navbar;