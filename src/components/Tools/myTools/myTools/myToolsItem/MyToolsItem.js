import React, {useEffect, useState} from 'react';
import style from "./MyToolsItem.module.css"
import {FaMinus, FaPlus} from "react-icons/fa";

import axios from "axios";

function MyToolsItem(props) {

    const [user, setUser] = useState([]);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get('http://localhost:8080/findUserByUsername/user');
                setUser(response.data);
                console.log(response.data);
                setTools(response.data.tools)
                console.log(response.data.tools)
            } catch (e) {
                console.error(e);
            }
        }

        fetchStudents();
    }, []);

    return (
        <>
            {tools.map((tool) => {
                return (
                    <div className={style.MyToolsItem} key={tool.id}>
                        <img
                            src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id520135246?b=1&k=20&m=520135246&s=170667a&w=0&h=EufTkvHkDsL_VVHTLCuN5AkrYMOlFb6H3c_rVF1P9k4="
                            alt=""
                            className={style.MyToolsItemImg}/>
                            <div className={style.MyToolsItemDescription}>
                                <h1 className={style.MyToolsItemName} >
                                    {tool.toolName}
                                </h1>
                                <span className={style.MyToolsItemType}>
                                     {tool.type}
                                </span>
                                <span className={style.MyToolsItemOwner}>
                                   Owner: {user.firstName}
                                </span>
                                <span className={style.MyToolsItemOwnerAdres}>
                                   Adres: {user.streetName} {user.houseNumber}
                                </span>
                                <button className={style.MyToolsItemAddButton}><FaPlus/></button>
                                <button className={style.MyToolsItemDeleteButton}><FaMinus/></button>
                        </div>
                        <div className={style.MyToolsItemAboud}>
                            <h2 className={style.MyToolsItemTitle}>omschrijving:</h2>
                            <span className={style.MyToolsItemAboudText}>
                                {tool.description}
                            </span>
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default MyToolsItem;