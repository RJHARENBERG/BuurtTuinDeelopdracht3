import React, {useContext, useEffect, useState} from 'react';
import style from "./ToolReservationItem.module.css"
import axios from "axios";
import {AuthContext} from "../../../../context/AuthContext";

function ToolReservationItem(props) {

    const [userData, setUserData] = useState({});
    const {user : {username}}= useContext(AuthContext)

    console.log(userData.firstName)

    useEffect(() => {
        async function fetchToolReservationItem() {
            const token = localStorage.getItem('token');

            console.log(username)
            try {
                const response = await axios.get(`http://localhost:8080/users/findUserByUsername/${username}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUserData(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchToolReservationItem();
    }, []);

    return (
        <>
            {userData && userData.map((user) => {
                return  <div className={style.ToolReservationItem}>
                    <img
                        className={style.ToolReservationItemImg}
                        src="https://images.unsplash.com/photo-1611288870280-4a322b8ec7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"            alt=""
                    />
                    <h1>{}</h1>
                </div>
            })}

        </>
    );
}

export default ToolReservationItem;