import React, { useEffect, useState } from "react";

export default function CampusCards(props) {
    return (
        <div id="campus_card">
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p>Students...</p>
        </div>
    )
}