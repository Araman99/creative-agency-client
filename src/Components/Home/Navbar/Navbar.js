import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo-min.png'
import './Navbar.css'
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <img src={logo} style={{width: '150px'}} alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto pt-3">
                        <li className="nav-item active">
                            <p className="nav-link mr-3">Home <span className="sr-only">(current)</span></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-3">Our Portfolio</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-3">Our Team</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-3" >Contact Us</p>
                        </li>
                    </ul>
                    <Link to="/dashboard/addService">
                        <button className="btn btn-style">Login</button>
                    </Link>
                </div>
            </nav>
    );
};

export default Navbar;