import React from 'react';
import style from "./AddMessage.module.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {BiMailSend} from "react-icons/bi";

function AddMessage(props) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = data => {
        console.log(data)
        axios
            .post(
                'http://localhost:8080/generalMessages/addGeneralMessages',
                data,
                {headers: {'Content-Type': 'application/json'}}
            )
            .then(response => {
                window.location.reload();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    console.log('ERRORS', errors)

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className={style.AddMessage}>
                    <div className={style.AddMessageContainer}>
                        <div className={style.AddMessageWrapper}>
                            <div className={style.AddMessageInputFeld}>
                            <input className={style.AddMessageTitle}
                                   type="text"
                                   placeholder="Onderwerp:"
                                   {...register("title", {
                                       required: "Onderwerp is verplicht"
                                   })}
                            />
                            <textarea className={style.AddMessageText}
                                      placeholder="Bericht:"
                                      {...register("message", {
                                          required: "message is verplicht",
                                          maxLength: {
                                              value: 150,
                                              message: "Sorry te veel text max 150 karakters"
                                          }
                                      })}
                                      rows="2"
                                      cols="100"
                            />
                            </div>
                            <button className={style.AddMessageButton}><BiMailSend/></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddMessage;