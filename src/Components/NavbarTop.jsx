import React from 'react';
import logo from "../navbarlogo.webp";
import './Dropdown.css'; 
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (
    <div className='navbar-top'>
        <div className="container-fluid topnav">
            <Link className="navbar-brand navbar-logo" to="/home">
                <img className='logo' src={logo} alt="" />
            </Link>
            <h4>
                  M. A. Rangoonwala College of Dental Sciences & Research Centre, Pune
            </h4>
        </div>
    </div>
  )
}

export default NavbarTop
