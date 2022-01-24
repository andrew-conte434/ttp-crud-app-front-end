import React from "react";
import Navbar from "./NavBar";

export default function CampusSingle(props) {
    return (
        <div>
            <h1>Show Campus</h1>
            <Navbar />
            <div id="campus_card">
                <img src={props.image}></img>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div id="campus_address">{props.address}</div>
            <button id="edit_btn">edit</button>
            <button id="delete_btn">delete</button>
        </div>
    )
}