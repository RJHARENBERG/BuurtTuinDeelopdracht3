import React, {useContext, useEffect, useState} from 'react';
import style from "./MyEnrolledProjectsItems.module.css"
import {RiDeleteBin2Line} from "react-icons/ri";

import {AuthContext} from "../../../../context/AuthContext";
import axios from "axios";

function MyEnrolledProjectsItems(props) {

    const [enrolls, setEnrolls] = useState([]);
    const {user : {username}}= useContext(AuthContext)


    useEffect(() => {
        async function fetchMyToolsItem() {
            const token = localStorage.getItem('token');
            console.log(username)
            try {
                const response = await axios.get(`http://localhost:8080/projects/projects/${username}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setEnrolls(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchMyToolsItem();
    }, []);


    const onDelete = data => {
        const token = localStorage.getItem('token');
        console.log(data)
        console.log(token)
        axios
            .delete(
                `http://localhost:8080/enrolls/deleteEnrollById/${data}`,
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
            )
            .then(response => {
                // history.push("/allProjects")
                window.location.reload();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    return (
        <>
        {enrolls.map((enrolls)=>{
            return (
        <div className={style.MyEnrolledProjectsItems} key={enrolls.id}>
            <div className={style.MyEnrolledProjectsInfo}>
                <h1>{enrolls.project.name}</h1>
                <span>datum: {enrolls.project.date}</span>
                <span>locatie: {enrolls.project.location}</span>
            </div>
            <button
                onClick={() => onDelete(enrolls.id)}
            ><RiDeleteBin2Line/></button>
        </div>
        )})}
        </>
    );
}

export default MyEnrolledProjectsItems;