import React from 'react';
import style from "./MessageDashboard.module.css"
import AddMessage from "../addMessage/AddMessage";
import DisplayMessage from "../displayMessage/DisplayMessage";


function MessagesDashboard(props) {
    return (
        <>
            <div className={style.MessagesDashboard}>
            <div className={style.Message}>
                <DisplayMessage/>
            </div>
            <div className={style.AddMessage}>
                <AddMessage/>
            </div>
            </div>
        </>


    );
}

export default MessagesDashboard;