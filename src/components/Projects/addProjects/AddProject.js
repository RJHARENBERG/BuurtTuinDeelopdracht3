import React, {useState} from 'react';
import style from "./AddProject.module.css"
import {BiImageAdd} from "react-icons/bi";
import {RiPlayListAddFill} from "react-icons/ri";
import {useForm} from "react-hook-form";
import axios from "axios";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function AddProject(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = data => {
        console.log(data)
        axios
            .post(
                'http://localhost:8080/projects/addProject',
                data,
                {headers: {'Content-Type': 'application/json'}}
            )
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    console.log('ERRORS', errors)


    return (
        <div className={style.AddProject}>
            <img
                className={style.AddProjectImg}
                src="https://media.istockphoto.com/photos/lemon-orchard-picture-id155908976?b=1&k=20&m=155908976&s=170667a&w=0&h=aqcYnu25MRPQQblX8h_rQyt5M5GpuQpb3gPWybM9Pbs="
                alt=""
            />
            <form onSubmit={handleSubmit(onFormSubmit)} className={style.AddProjectForm}>
                {errors.file && <p className={style.MyToolsAddFormError}>{errors.file.message}</p>}
                {errors.name && <p className={style.MyToolsAddFormError}>{errors.name.message}</p>}
                {errors.date && <p className={style.MyToolsAddFormError}>{errors.date.message}</p>}
                {errors.location && <p className={style.MyToolsAddFormError}>{errors.location.message}</p>}
                {errors.description && <p className={style.MyToolsAddFormError}>{errors.description.message}</p>}
                <div className={style.AddProjectGroup}>
                    <label htmlFor="imgInput">
                        <i className={style.AddProjectIcon}><BiImageAdd/></i>
                    </label>
                    <input type="file"
                           id="imgInput"
                           style={{display: "none"}}
                           {...register("file", {
                               required: "Project foto is verplicht"
                           })}
                    />
                    <input type="text"
                           placeholder="Title"
                           className={style.AddProjectInput}
                           autoFocus={true}
                           {...register("name", {
                               required: "Sorry maar er mist nog een project title"
                           })}
                    />
                    <div>
                        <input
                            className={style.AddProjectDate}
                            type="date"
                            {...register("date")}
                        />
                    </div>
                    <input type="text"
                           placeholder="locatie..."
                           className={style.AddProjectInput}
                           autoFocus={true}
                           {...register("location", {
                               required: "Sorry maar er mist nog een locatie"
                           })}
                    />
                </div>
                <div className={style.AddProjectWriteGroup}
                     className={style.AddProjectGroup}>
                    <textarea
                        placeholder="Omschrijf het project..."
                        type={"text"}
                        className={style.AddProjectWriteTextGroup}
                        {...register("description", {
                            required: "Sorry maar er mist nog een omschrijving"
                        })}
                    >
                    </textarea>
                </div>
                <button className={style.AddProjectSubmit}><RiPlayListAddFill/></button>
            </form>
        </div>
    );
}

export default AddProject;