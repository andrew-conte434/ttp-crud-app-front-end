import React from "react";
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css';
import'./NavBar.css'

export default function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Listings</a>
                <div class="collapse navbar-collapse" id="navbar--Content">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/campuses">Campuses</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/students">Students</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

