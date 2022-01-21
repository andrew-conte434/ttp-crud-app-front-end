import React, { useEffect, useState } from "react";

export default function CampusCards (){
    const [campusData, setCampusData] = useState([])

    useEffect(() => {
        (async() => {
            const res = await fetch(/*api request here*/)
            const data = await res.json();
            setCampusData(data)
        })();
    },[]);

    return(
        <div id="campus_card">
            <img src={campusData.image}></img>
            <p>{campusData.name}</p>
            <p>Students...</p>
        </div>
    )
}