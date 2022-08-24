import React from "react";
import './Navbar.css';
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'
import Headroom from "react-headroom";
import Avatar from '@mui/material/Avatar'



export default function Navbar() {
    return (
        <>
        <Headroom>
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/home"><img src={logo} alt="logo" width="200px"/></a>

                    <div className="">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item align-items-center">
                                <NavLink to="/home" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/search" className="nav-link" >Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/report" className="nav-link" >Report</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/adopt" className="nav-link">Adopt</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link">
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                    sx={{ width: 50, height: 50 }}
                                />
                                </NavLink>
                               

                            </li>
                        </ul>
                    </div>
                    
                        
                    </div>
                </div>


               
            </nav>
        </Headroom>
        </>
    )
}