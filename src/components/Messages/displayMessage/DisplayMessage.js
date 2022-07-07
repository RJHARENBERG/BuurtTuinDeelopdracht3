import React, {useContext, useEffect, useState} from 'react';
import style from "./DisplayMessage.module.css"

import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import {BiMailSend} from "react-icons/bi";
import {useForm} from "react-hook-form";

function DisplayMessage(props) {

    const [message, setMessage] = useState([]);
    const {user : {username}}= useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [submitId, setSubmitId]= useState('')

    useEffect(() => {
        async function fetchMyToolsItem() {
            const token = localStorage.getItem('token');
            console.log(username)
            try {
                const response = await axios.get(`http://localhost:8080/generalMessages/allGeneralMessages`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setMessage(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchMyToolsItem();
    }, []);


    const onFormSubmit = data => {
        console.log(data)
        if(data){
            axios
                .post(
                    `http://localhost:8080/responses/addResponse/${submitId}`, data,
                    {headers: {'Content-Type': 'application/json'}}
                )
                .then(response => {
                    window.location.reload();
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.data)
                });
        }
    };

    console.log('ERRORS', errors)


    return (
        <>
            {message.map((message)=> {return(
                <div className={style.DisplayMessage} key={message.id}>
                    <div className={style.DisplayMessageContainer}>
                        <div className={style.DisplayMessageWrapper}>
                            <div className={style.DisplayMessagePost}>
                            <div className={style.DisplayMessagePostTitle}>
                                <h1>{message.title}</h1>
                                <p>{message.message}</p>
                            </div>
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                    {errors.message && <p className={style.DisplayMessageError}>{errors.message.message}</p>}
                                     <textarea className={style.DisplayMessagePostText}
                                               placeholder="Bericht:"
                                               {...register("message", {
                                                   required: "message is verplicht",
                                                   maxLength: {
                                                       value: 150,
                                                       message: "Sorry te veel text max 150 karakters"
                                                   }
                                               })}
                                               rows="1"
                                               cols="100"
                                     />
                                    <button type="submit" onClick={()=>setSubmitId(message.id)}><BiMailSend/></button>
                                </form>

                            </div>
                            <div className={style.DisplayMessageResponse}>
                                {message.responses.map((responses,index)=> { return(
                                    <div key={index}>
                                        <p>{responses.message}</p>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            )})}
        </>

    );
}

export default DisplayMessage;