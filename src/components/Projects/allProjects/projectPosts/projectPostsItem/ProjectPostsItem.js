import React, {useEffect, useState} from 'react';
import style from "./ProjectPostsItem.module.css"
import axios from "axios";
import {FaPencilAlt} from "react-icons/fa";

function ProjectPostsItem(props) {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function allProjects() {
            try {
                const response = await axios.get('http://localhost:8080/projects/allProjects');
                setProject(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        allProjects();
    }, []);


    return (
        <>
            {project.map((project) => {
                return (
                    <div className={style.ProjectPostsItem} key={project.id}>
                        <button className={style.ProjectPostsItemEnrollButton}><FaPencilAlt/></button>
                        <img
                            className={style.ProjectPostsItemImg}
                            src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            alt=""
                        />
                        <div className={style.ProjectPostsItemInfo}>
                            <span className={style.ProjectPostsItemTitle}>
                                {project.name}
                             </span>
                            <hr/>
                            <span className={style.ProjectPostsItemCat}>Locatie: {project.location}</span>
                            <span className={style.ProjectPostsItemDate}>Datum: {project.date}</span>
                        </div>
                        <p className={style.ProjectPostsItemDescription}>
                            {project.description}
                        </p>
                    </div>
                )
            })}

        </>
    );
}

export default ProjectPostsItem;