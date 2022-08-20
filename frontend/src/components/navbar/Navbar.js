import React from "react";
import './Navbar.css';
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home"><img src={logo} alt="logo" width="150px"/></a>

                    <form className="d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link active">Home
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search</a>
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
                        </ul>
                    </div>
                    
                        
                    </form>
                </div>


               
            </nav>
        </>
    )
}