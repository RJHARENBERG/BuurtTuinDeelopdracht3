import React from 'react';
import style from "./myToolsAddForm.module.css"
import {useForm} from "react-hook-form";
import {RiPlayListAddFill} from "react-icons/ri";

function MyToolsAddForm(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className={style.MyToolsAddForm}>
                <div className={style.MyToolsAddFormContainer}>
                    <div className={style.MyToolsAddFormWrapper}>
                        <div className={style.MyToolsAddFormInputFeld}>
                            <h1 className={style.MyToolsAddFormTitle}>Uitlenen</h1>
                            <div className={style.MyToolsAddFormItem}>
                                <label className={style.MyToolsAddItemLabel}>
                                    Type gereedschap
                                </label>
                                    <input className={style.MyToolsAddFormItemInput}
                                           type="text"
                                           placeholder="Wat voor soort gereedschap?"
                                           {...register("toolType", {
                                               required: true,
                                           })}
                                    />

                                <label className={style.MyToolsAddItemLabel}>
                                    Naam gereedschap
                                </label>
                                    <input className={style.MyToolsAddFormItemInput}
                                           type="text"
                                           placeholder="Wat is de naam van het product?"
                                           {...register("toolName", {
                                               required: true,
                                           })}
                                    />

                                <label className={style.MyToolsAddItemLabel}>
                                    Omschrijving
                                </label>
                                    <textarea className={style.MyToolsAddFormItemTextarea}
                                              placeholder="Wat is de naam van het product?"
                                              {...register("description", {
                                                  required: true,
                                                  maxLength: 150,
                                              })}
                                              rows="4"
                                              cols="100"
                                    />
                                <button className={style.MyToolsAddFormButton}><RiPlayListAddFill/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default MyToolsAddForm;