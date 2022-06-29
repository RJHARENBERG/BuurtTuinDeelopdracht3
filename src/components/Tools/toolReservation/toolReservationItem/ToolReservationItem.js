import React, {useContext, useEffect, useState} from 'react';
import style from "./ToolReservationItem.module.css"
import axios from "axios";
import {AuthContext} from "../../../../context/AuthContext";
import {FaRegTrashAlt} from "react-icons/fa";

function ToolReservationItem(props) {

    const [userData, setUserData] = useState([]);
    const {user: {username}} = useContext(AuthContext)
    const {tools} = userData

    useEffect(() => {
        async function fetchToolReservationItem() {
            const token = localStorage.getItem('token');
            console.log(username)
            try {
                const response = await axios.get(`http://localhost:8080/users/findUserByUsername/${username}`, {
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

    const onDelete = data => {
        const token = localStorage.getItem('token');
        console.log(data)
        console.log(token)
        axios
            .delete(
                `http://localhost:8080/reservations/deleteReservationById/${data}`,
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}},
                {}
            )
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    return (
        <>
            <div className={style.ToolReservationItemContainer}>
                <div className={style.ToolReservationItemWrapper}>

                    {tools && tools.map((tools) => {
                        return (
                            <div className={style.ToolReservationIteView} key={tools.id}>
                                <div className={style.ToolReservationItem} >
                                    <div className={style.ToolReservationItemTool}>
                                        <img
                                            className={style.ToolReservationItemImg}
                                            src="https://images.unsplash.com/photo-1611288870280-4a322b8ec7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
                                            alt=""
                                        />
                                        <h1>{tools.toolName}</h1>
                                    </div>
                                    <div className={style.ToolReservationItemLendData}>
                                        {tools.reservations.map((reservations) => {
                                            return (
                                                <div className={style.ToolReservationItemDate} key={reservations.id}>
                                                    <h1>{reservations.borrowerId}</h1>
                                                    <span>{reservations.startDate}</span>
                                                    <span>{reservations.endDateDate}</span>
                                                    <button  className={style.ToolReservationItemDelete} onClick={()=>onDelete(reservations.id)}><FaRegTrashAlt/></button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ToolReservationItem;