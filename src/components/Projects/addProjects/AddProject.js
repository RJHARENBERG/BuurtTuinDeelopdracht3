import React from 'react';
import style from "./AddProject.module.css"
import {BiImageAdd} from "react-icons/bi";
import {RiPlayListAddFill} from "react-icons/ri";

function AddProject(props) {
    return (
        <div className={style.AddProject}>
            <img
                className={style.AddProjectImg}
                src="https://media.istockphoto.com/photos/lemon-orchard-picture-id155908976?b=1&k=20&m=155908976&s=170667a&w=0&h=aqcYnu25MRPQQblX8h_rQyt5M5GpuQpb3gPWybM9Pbs="
                alt=""
            />
            <form className={style.AddProjectForm}>
                <div className={style.AddProjectGroup}>
                    <label htmlFor="imgInput">
                        <i className={style.AddProjectIcon}><BiImageAdd/></i>
                    </label>
                    <input type="file" id="imgInput" style={{display: "none"}}/>
                    <input type="text"
                           placeholder="Title"
                           className={style.AddProjectInput}
                           autoFocus={true}
                    />
                </div>
                <div className={style.AddProjectWriteGroup}
                     className={style.AddProjectGroup}>
                    <textarea
                        placeholder="Omschrijf het project..."
                        type={"text"}
                        className={style.AddProjectWriteTextGroup}
                    >

                    </textarea>
                </div>
                <button className={style.AddProjectSubmit}><RiPlayListAddFill/></button>
            </form>

        </div>
    );
}

export default AddProject;