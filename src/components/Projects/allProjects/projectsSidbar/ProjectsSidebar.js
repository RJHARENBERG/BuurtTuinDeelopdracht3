import React from 'react';
import style from "./ProjectsSidebar.module.css"

function ProjectsSidebar(props) {
    return (
        <div className={style.ProjectsSidebar}>
            <div className={style.ProjectsSidebarItem}>
                <span className={style.ProjectsSidebarTitle}>Over de buurttuin</span>
                <img
                    src="https://media.istockphoto.com/photos/he-always-help-his-father-in-home-jobs-picture-id1326171065?k=20&m=1326171065&s=612x612&w=0&h=Qp9lgK8ekcZEllsrl_VJJRhpDiZvLPElXdA_g9m75Fg="
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <div className={style.ProjectsSidebarItem}>
                    <span className={style.ProjectsSidebarTitle}>Soort projecten</span>
                    <ul className={style.ProjectsSidebarList}>
                        <li className={style.ProjectsSidebarListItem}>Boomgaard</li>
                        <li className={style.ProjectsSidebarListItem}>Kruidentuin</li>
                        <li className={style.ProjectsSidebarListItem}>Pfeiffer</li>
                        <li className={style.ProjectsSidebarListItem}>Grasvelden</li>
                        <li className={style.ProjectsSidebarListItem}>Klussen</li>
                        <li className={style.ProjectsSidebarListItem}>Senioren helpen</li>
                    </ul>
                </div>
                <div className={style.ProjectsSidebarItem}>
                    <span className={style.ProjectsSidebarTitle}>Volgons</span>
                    <div className={style.ProjectsSidebarSosial}>
                        <i className={style.ProjectsSidebarIcon}></i>
                        <i className={style.ProjectsSidebarIcon}></i>
                        <i className={style.ProjectsSidebarIcon}></i>
                        <i className={style.ProjectsSidebarIcon}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSidebar;