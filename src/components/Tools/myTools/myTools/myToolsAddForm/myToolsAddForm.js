import React from 'react';
import style from "./myToolsAddForm.module.css"
import { useForm } from "react-hook-form";

function MyToolsAddForm(props) {
    const { register, handleSubmit, formState:{errors} } = useForm()

    function onFormSubmit (data){
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label>
                Type gereedschap
            <input
                type="text"
                {...register("toolType", {
                    required: true,

                })}
            />
            </label>

            <label>
                Naam gereedschap
                <input
                    type="text"
                    {...register("toolName", {
                        required: true,
                    })}
                />
            </label>
            <label>
                Omschrijving
                <textarea
                    {...register("description", {
                        required: true,
                        maxLength: 150,
                    })}
                    rows="4"
                    cols="23"
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default MyToolsAddForm;