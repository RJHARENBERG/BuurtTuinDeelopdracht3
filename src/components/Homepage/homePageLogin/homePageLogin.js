import React from 'react';
import style from "./homePageLogin.module.css"
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";
import {FaRegAddressCard} from "react-icons/fa";
import {useHistory} from "react-router-dom";

function HomePageLogin(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }

    let history = useHistory();

    const handleAddNewProfile = () => {
        history.push("/addProfile")
    }

    return (
        <div className={style.HomePageLogin}>
            <div className={style.HomePageLoginContainer}>
                <form className={style.HomePageLoginForm} onSubmit={handleSubmit(onFormSubmit)}>
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
                                    type="text"
                                    placeholder="vul hier je gebruikers naam in..."
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
                                    type="password"
                                    placeholder="vul hier je password in..."
                                    className={style.HomePageLoginInput}
                                    {...register("paswoord", {
                                        required: "Type gereedschap is verplicht"
                                    })}
                                />

                                <button className={style.HomePageLoginSubmitButton}><AiOutlineLogin/></button>

                            </div>
                        </div>
                    </div>
                </form>
                <button className={style.HomePageLoginRegisterButton} onClick={handleAddNewProfile}>
                    <FaRegAddressCard/>
                </button>
            </div>
        </div>
    );
}

export default HomePageLogin;