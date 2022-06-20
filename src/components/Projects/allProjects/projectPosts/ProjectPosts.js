import React from 'react';
import style from "./ProjectPosts.module.css"
import ProjectPostsItem from "./projectPostsItem/ProjectPostsItem";

function ProjectPosts(props) {
    return (
        <div className={style.ProjectPosts}>
            <ProjectPostsItem/>
        </div>
    );
}

export default ProjectPosts;