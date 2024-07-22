import React, {useState} from "react";
import './Navbar.css';
import { FaSearch, FaHome, FaUser } from 'react-icons/fa';
import Home from "../Home/Home";


const Navbar = () => {

    let [profileClicked, setProfileClicked] = useState(false);

    function profileClick() {
        setProfileClicked(true);
    }

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
            <button onClick={profileClick} className="profile"><FaUser/></button>
            {profileClicked && <Home register={profileClicked} />}
        </div>
    );
};

export default Navbar;