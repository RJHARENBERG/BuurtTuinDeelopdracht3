import React from 'react';
import style from "./ProjectsSidebar.module.css"
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa";

function ProjectsSidebar(props) {
    return (

            <div className={style.ProjectsSidebar}>
                <div className={style.ProjectsSidebarSticky}>
                    <div className={style.ProjectsSidebarItem}>

                    <span className={style.ProjectsSidebarTitle}>Over de buurttuin</span>
                    <img className
                         className={style.ProjectsSidebarImg}
                         src="https://media.istockphoto.com/photos/he-always-help-his-father-in-home-jobs-picture-id1326171065?k=20&m=1326171065&s=612x612&w=0&h=Qp9lgK8ekcZEllsrl_VJJRhpDiZvLPElXdA_g9m75Fg="
                         alt=""
                    />
                    <p className={style.ProjectsSidebarPText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className={style.ProjectsSidebarItem}>
                        <span className={style.ProjectsSidebarTitle}>Soort projecten</span>
                        <ul className={style.ProjectsSidebarList}>
                            <li className={style.ProjectsSidebarListItem}>Boomgaard</li>
                            <li className={style.ProjectsSidebarListItem}>Kruidentuin</li>
                            <li className={style.ProjectsSidebarListItem}>Vijver</li>
                            <li className={style.ProjectsSidebarListItem}>Grasvelden</li>
                            <li className={style.ProjectsSidebarListItem}>Klussen</li>
                            <li className={style.ProjectsSidebarListItem}>Schilderen</li>
                        </ul>
                    </div>
                    <div className={style.ProjectsSidebarItem}>
                        <span className={style.ProjectsSidebarTitle}>Volg ons</span>
                        <div className={style.ProjectsSidebarSociaal}>
                            <i className={style.ProjectsSidebarIcon}><AiFillFacebook/></i>
                            <i className={style.ProjectsSidebarIcon}><AiOutlineTwitter/></i>
                            <i className={style.ProjectsSidebarIcon}><FaPinterest/></i>
                            <i className={style.ProjectsSidebarIcon}><AiFillInstagram/></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSidebar;