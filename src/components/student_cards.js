import React, { useEffect, useState } from "react";

export default function StudentCards(props) {
    return (
        <div id="student_card">
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p>Students...</p>
        </div>
    )
}