import React from "react";
import './Navbar.css';


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Search Pet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/home">home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/report">report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/adopt">adopt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}