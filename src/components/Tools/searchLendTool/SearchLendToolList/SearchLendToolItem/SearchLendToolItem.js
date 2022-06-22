import React, {useEffect, useState} from 'react';
import style from "./SearchLendToolItem.module.css"
import {FaHandHolding, FaPlus} from "react-icons/fa";

import axios from "axios";

function SearchLendToolItem(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get('http://localhost:8080/allUsers');
                setUsers(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchStudents();
    }, []);

    return (
        <>
            {users.map((user) => {
                return (

                    <div className={style.SearchLendToolOwnerItem} key={user.id}>
                        <span className={style.SearchLendToolOwner}>
                            Owner: {user.firstName}
                        </span>
                        <span className={style.SearchLendToolOwnerAdres}>
                            Adres: {user.streetName} {user.houseNumber}
                        </span>
                            {user.tools.map((tool) => {
                                return (
                                    <div
                                        key={tool.id}
                                    >
                                        <button className={style.SearchLendToolLendAddButton}><FaPlus/></button>
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