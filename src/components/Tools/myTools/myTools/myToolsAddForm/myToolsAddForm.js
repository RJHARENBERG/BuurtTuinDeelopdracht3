import React from 'react';
import style from "./myToolsAddForm.module.css"
import {useForm} from "react-hook-form";
import {RiPlayListAddFill} from "react-icons/ri";
import {BiImageAdd} from "react-icons/bi";
import axios from "axios";

function MyToolsAddForm(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = data => {
        console.log(data)
        axios
            .post(
                'http://localhost:8080/tools/addTool/user',
                data,
                { headers: { 'Content-Type': 'application/json' }}
            )
            .then(response => {console.log(response.data)})
            .catch(error => {console.log(error.data)});
    };

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
                                {errors.type &&
                                    <p className={style.MyToolsAddFormError}>{errors.type.message}</p>}
                                <input className={style.MyToolsAddFormItemInput}
                                       type="text"
                                       placeholder="Wat voor soort gereedschap?"
                                       {...register("type", {
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