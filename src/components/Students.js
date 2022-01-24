import react from "react";
import campus_cards from "./CampusCards";


export default function AllStudents() {
    return (
        <div>
            <h1 id="Home_header">Students</h1>
            <div id="sub_header">
                <h2 id="home_sub_header">All Students</h2>
                <button id="add_campus_btn">Add Student</button>
            </div>
            <student_cards />
        </div>
    )
} 