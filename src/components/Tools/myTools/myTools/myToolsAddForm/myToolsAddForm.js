import React from 'react';
import style from "./myToolsAddForm.module.css"
import {useForm} from "react-hook-form";
import {RiPlayListAddFill} from "react-icons/ri";
import {BiImageAdd} from "react-icons/bi";

function MyToolsAddForm(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }

    console.log('ERRORS', errors)

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
                                {errors.toolType &&
                                    <p className={style.MyToolsAddFormError}>{errors.toolType.message}</p>}
                                <input className={style.MyToolsAddFormItemInput}
                                       type="text"
                                       placeholder="Wat voor soort gereedschap?"
                                       {...register("toolType", {
                                           required: "Type gereedschap is verplicht"
                                       })}
                                />
                                <label className={style.MyToolsAddItemLabel}>
                                    Naam gereedschap
                                </label>
                                {errors.toolName &&
                                    <p className={style.MyToolsAddFormError}>{errors.toolName.message}</p>}
                                <input className={style.MyToolsAddFormItemInput}
                                       type="text"
                                       placeholder="Wat is de naam van het product?"
                                       {...register("toolName", {
                                           required: "Naam gereedschap is verplicht"
                                       })}
                                />
                                <label className={style.MyToolsAddItemLabel}>
                                    Omschrijving
                                </label>
                                {errors.description &&
                                    <p className={style.MyToolsAddFormError}>{errors.description.message}</p>}
                                <textarea className={style.MyToolsAddFormItemTextarea}
                                          placeholder="Wat is de naam van het product?"
                                          {...register("description", {
                                              required: "Omschrijving gereedschap is verplicht",
                                              maxLength: {
                                                  value: 150,
                                                  message: "Sorry te veel text max 150 karakters"
                                              }
                                          })}
                                          rows="4"
                                          cols="100"
                                />

                                <label className={style.MyToolsAddItemLabel}>
                                    Foto van gereedschap
                                </label>
                                {errors.picture &&
                                    <p className={style.MyToolsAddFormError}>{errors.picture.message}</p>}
                                <label htmlFor="imgInput">
                                    <i className={style.MyToolsAddItemUploadButton}><BiImageAdd/></i>
                                </label>
                                <input type='file' id="imgInput" style={{display: "none"}}
                                       {...register("picture",{
                                           required: "foto gereedschap is verplicht"
                                       })}
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