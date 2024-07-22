import React, {useState} from "react";
import './Navbar.css';
import { FaSearch, FaHome, FaUser } from 'react-icons/fa';
import Home from "../Home/Home";


const Navbar = (props) => {


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
            <button onClick={props.onProfileClick} className="profile"><FaUser/></button>
        </div>
    );
};

export default Navbar;