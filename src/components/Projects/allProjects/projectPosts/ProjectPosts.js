import React from 'react';
import style from "./ProjectPosts.module.css"
import ProjectPostItem from "./projectPostItum/ProjectPostItem";



function ProjectPosts(props) {
    return (
        <div className={style.ProjectPosts}>
            <ProjectPostItem/>
        </div>
    );
}

export default ProjectPosts;