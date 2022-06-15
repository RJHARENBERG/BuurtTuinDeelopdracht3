import React from 'react';
import style from "./ProjectsHeader.module.css"

function ProjectsHeader(props) {
    return (
        <div className={style.ProjectsHeader}>
            <div className={style.ProjectsHeaderTitles}>

                <span className={style.ProjectsHeaderTitleSmal}>De Buurttuin</span>
                <span className={style.ProjectsHeaderTitleLarge}>Projects</span>
                <img className={style.ProjectsHeaderImg}
                     src="https://media.istockphoto.com/photos/autumn-harvest-picture-id1097842636?k=20&m=1097842636&s=612x612&w=0&h=lKiBCqJtVJnAuILIs8y3-cZlAzYCdb_W0gAQON5PO74="
                     alt=""/>


            </div>
        </div>
    );
}

export default ProjectsHeader;