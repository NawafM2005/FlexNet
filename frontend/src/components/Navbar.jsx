import React from 'react';
import flexnetLogo from '../Images/logo.png';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div className="landing-page-navbar">
            <a href='/'><img src={flexnetLogo} alt="FlexNet Logo" className="logo-img" /></a>
        </div>
    );
};

export default Navbar;