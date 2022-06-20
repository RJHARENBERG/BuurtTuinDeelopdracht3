import React, {useState} from 'react';
import style from "./homePageAddProfile.module.css"
import {useForm} from "react-hook-form";
import {AiOutlineUserAdd} from "react-icons/ai";
import axios from "axios";

function HomePageAddProfile(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [addSucces, toggleAddSuccess] = useState(false);
    const onFormSubmit = data => {
        console.log(data)
        axios
            .post(
                'http://localhost:8080/addUser',
                data,
                { headers: { 'Content-Type': 'application/json' }}
            )
            .then(response => {console.log(response.data)})
            .catch(error => {console.log(error.data)});
        toggleAddSuccess(true);
    };

    return (
        <div className={style.HomePageAdd}>
            <img
                className={style.HomePageAddProfileImg}
                src="https://images.unsplash.com/photo-1559749284-7a6971fd798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
            />
            <div className={style.HomePageAddProfile}>
                <div className={style.HomePageAddProfileContainer}>
                    <form className={style.HomePageAddProfileForm} onSubmit={handleSubmit(onFormSubmit)}>
                        <div className={style.HomePageAddProfileWrapper}>
                            <div className={style.HomePageAddProfileInputFeld}>
                                <h1 className={style.HomePageAddProfileTitle}>Maak een profiel</h1>
                                {addSucces === true && <p>Je bent toegevoegd!</p>}
                                <div className={style.HomePageAddProfileItem}>

                                    <label className={style.HomePageAddProfileLabel}>
                                        Gebruikersnaam
                                    </label>
                                    {errors.username &&
                                        <p className={style.MyToolsAddFormError}>{errors.username.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="text"
                                        {...register("username", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Wachtwoord
                                    </label>
                                    {errors.password &&
                                        <p className={style.MyToolsAddFormError}>{errors.password.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="password"
                                        {...register("password", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Voornaam
                                    </label>
                                    {errors.firstName &&
                                        <p className={style.MyToolsAddFormError}>{errors.firstName.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="text"
                                        {...register("firstName", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Achternaam
                                    </label>
                                    {errors.lastName &&
                                        <p className={style.MyToolsAddFormError}>{errors.lastName.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="text"
                                        {...register("lastName", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Postcode
                                    </label>
                                    {errors.zipcode &&
                                        <p className={style.MyToolsAddFormError}>{errors.zipcode.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="text"
                                        {...register("zipcode", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Straatnaam
                                    </label>
                                    {errors.streetName &&
                                        <p className={style.MyToolsAddFormError}>{errors.streetName.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="text"
                                        {...register("streetName", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <label className={style.HomePageAddProfileLabel}>
                                        Huisnummer
                                    </label>
                                    {errors.houseNumber &&
                                        <p className={style.MyToolsAddFormError}>{errors.houseNumber.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="number"
                                        {...register("houseNumber", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />

                                    <label className={style.HomePageAddProfileLabel}>
                                        Email
                                    </label>
                                    {errors.email &&
                                        <p className={style.MyToolsAddFormError}>{errors.email.message}</p>}
                                    <input
                                        className={style.HomePageAddProfileInput}
                                        type="email"
                                        {...register("email", {
                                            required: "Type gereedschap is verplicht"
                                        })}
                                    />
                                    <button className={style.HomePageAddProfileSubmitButton}>
                                        <AiOutlineUserAdd/>
                                    </button>


                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomePageAddProfile;