import React from "react";
import CampusCards from "./CampusCards";
import Navbar from "./NavBar";



export default function AllCampuses() {
    return (
        <div className="campus_page">
            <Navbar />
            <div className="home_text">
                <h2> University of Cambridge</h2>
                
            </div>
            <h1 id="campus_header">Campus Listings</h1>
            <div id="sub_header">
                <h2 id="campus_sub_header">All Campuses</h2>
                <button id="add_campus_btn">Add Campus</button>
            </div>
            <CampusCards />
        </div>
    )
} 