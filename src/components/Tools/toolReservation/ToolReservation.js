import React from 'react';
import style from "./ToolReservation.module.css"
import ToolReservationItem from "./toolReservationItem/ToolReservationItem";



function ToolReservation(props) {
    return (
        <>
            <h1>gereedschap reserveren</h1>
            <ToolReservationItem/>
        </>

    );
}

export default ToolReservation;