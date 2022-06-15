import React from 'react';
import style from "./homePageLogin.module.css"
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";

function HomePageLogin(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className={style.HomePageLoginContainer}>
                <div className={style.HomePageLoginWrapper}>
                    <div className={style.HomePageLoginFormInputFeld}>
                        <h1 className={style.HomePageLoginTitle}>Login</h1>
                        <div className={style.HomePageLoginItem}>
                            <label className={style.HomePageLoginLabel}>
                                Gebruikersnaam
                            </label>
                            {errors.username &&
                                <p className={style.MyToolsAddFormError}>{errors.username.message}</p>}
                            <input
                                className={style.HomePageLoginInput}
                                {...register("username", {
                                    required: "Type gereedschap is verplicht"
                                })}
                            />
                            <label className={style.HomePageLoginLabel}>
                                Wachtwoord
                            </label>
                            {errors.paswoord &&
                                <p className={style.MyToolsAddFormError}>{errors.paswoord.message}</p>}
                            <input
                                className={style.HomePageLoginInput}
                                {...register("paswoord", {
                                    required: "Type gereedschap is verplicht"
                                })}
                            />

                            <button className={style.HomePageLoginSubmitButton}><AiOutlineLogin/></button>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default HomePageLogin;