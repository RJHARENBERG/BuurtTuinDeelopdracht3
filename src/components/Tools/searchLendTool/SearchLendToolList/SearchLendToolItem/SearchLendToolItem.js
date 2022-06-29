import React, {useEffect, useState, useContext} from 'react';
import style from "./SearchLendToolItem.module.css"
import {FaPlus} from "react-icons/fa";

import axios from "axios";
import {AuthContext} from "../../../../../context/AuthContext";
import {DateContext} from "../SearchLendToolList";

function SearchLendToolItem(props) {
    const [users, setUsers] = useState([]);
    const {user : {username}}= useContext(AuthContext)
    const {startDate, endDate}= useContext(DateContext)

    useEffect(() => {
        async function fetchToolItem() {
            try {
                const response = await axios.get('http://localhost:8080/users/allUsers');
                setUsers(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchToolItem();
    }, []);

    const onLendTool = data => {
        const token = localStorage.getItem('token');
        axios
            .post(
                `http://localhost:8080/reservations/addReservation/${data}`,{
                    borrowerId : username,
                    startDate: startDate,
                    endDate: endDate,
                },
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
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
            {users.map((user) => {
                return (
                    <div className={style.SearchLendToolOwnerItem} key={user.id}>
                        <div className={style.SearchLendToolOwnerInfo}>
                        <span className={style.SearchLendToolOwner}>
                            Eigenaar: {user.firstName}
                        </span>
                        <span className={style.SearchLendToolOwnerAdres}>
                            Adres: {user.streetName} {user.houseNumber}
                        </span>
                        </div>
                            {user.tools.map((tool) => {
                                return (
                                    <div key={tool.id}>
                                        <button className={style.SearchLendToolLendAddButton}
                                                onClick={() => onLendTool(tool.id)}>
                                            <FaPlus/>
                                        </button>
                                        <div className={style.SearchLendToolItem}>
                                            <img
                                                src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id520135246?b=1&k=20&m=520135246&s=170667a&w=0&h=EufTkvHkDsL_VVHTLCuN5AkrYMOlFb6H3c_rVF1P9k4="
                                                alt=""
                                                className={style.SearchLendToolImg}/>
                                            <div className={style.SearchLendToolDescription}>
                                                <h1 className={style.SearchLendToolName}>
                                                    {tool.toolName}
                                                </h1>
                                                <span className={style.SearchLendToolType}>
                                                    Type: {tool.type}
                                                </span>
                                            </div>
                                            <div className={style.SearchLendToolAboud}>
                                                <h2 className={style.SearchLendToolAboudTitle}>omschrijving:</h2>
                                                <span className={style.SearchLendToolAboudText}>
                                                    {tool.description}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                    </div>
                )
            })}
        </>
    );
}

export default SearchLendToolItem;