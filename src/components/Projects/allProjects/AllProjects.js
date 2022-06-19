import React from 'react';
import style from "./AllProjects.module.css"
import ProjectsHeader from "./projectsHeader/ProjectsHeader";
import ProjectPosts from "./projectPosts/ProjectPosts";
import ProjectsSidebar from "./projectsSidbar/ProjectsSidebar";

function AllProjects(props) {
    return (
        <>
            <ProjectsHeader/>
            <div className={style.AllProjectsBody}>
                <ProjectPosts/>
                <ProjectsSidebar/>
            </div>
        </>
    );
}

export default AllProjects;