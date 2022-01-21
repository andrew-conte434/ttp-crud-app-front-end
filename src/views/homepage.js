import react from "react";
import campus_cards from "../components/Campus_cards";


export default function HomePage() {
    return (
        <div>
            <h1 id="Home_header">Campus Listing</h1>
            <div id="sub_header">
                <h2 id="home_sub_header">All Campuses</h2>
                <button id="add_campus_btn">Add Campus</button>
            </div>
        </div>
    )
} 