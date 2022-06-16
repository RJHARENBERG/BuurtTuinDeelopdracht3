import React from 'react';
import style from "./ProjectViewPost.module.css"
import ProjectsSidebar from "../allProjects/projectsSidbar/ProjectsSidebar";
import ProjectSingelPost from "./projectSingelPost/projectSingelPost";

function ProjectViewPost(props) {
    return (
        <div className={style.ProjectViewPost}>
            <ProjectSingelPost/>
            <ProjectsSidebar/>
        </div>
    );
}

export default ProjectViewPost;