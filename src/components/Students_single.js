import react from "react";
import Navbar from "./NavBar";

export default function CampusSingle(props) {
    return (
        <div>
            <NavBar />
            <div id="campus_card">
                <img src={props.name}></img>
                <h3>{props.campus}</h3>
                <p>{props.description}</p>
            </div>
            <div id="campus_address">{props.address}</div>
            <button id="edit_btn">edit</button>
            <button id="delete_btn">delete</button>
        </div>
    )
}