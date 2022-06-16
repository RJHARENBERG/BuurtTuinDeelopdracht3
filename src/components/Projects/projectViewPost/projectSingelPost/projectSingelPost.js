import React from 'react';
import style from "./projectSingelPost.module.css"
import {BiMessageAdd} from "react-icons/bi";
import {RiDeleteBin2Line} from "react-icons/ri";

function ProjectSingelPost(props) {
    return (
    <div className={style.ProjectSingelPost}>
         <div className={style.ProjectSingelPostWrapper}>
             <img
             className={style.ProjectSingelPostImg}
             src="https://media.istockphoto.com/photos/planting-with-my-friend-picture-id1340726264?b=1&k=20&m=1340726264&s=170667a&w=0&h=BlurOk7yz_TTBXI85xB6UaoxwA9FqCvvehXJ3V1pBis="
             alt=""
             />
             <h1 className={style.ProjectSingelPostTitle}>
                 Lorem ipsum dolor sit amet, consectetur
                 <div className={style.ProjectSingelPostEdit}>
                     <i className={style.ProjectSingelPostIcon}><RiDeleteBin2Line/></i>
                     <i className={style.ProjectSingelPostIcon}><BiMessageAdd/></i>

                 </div>
             </h1>
             <div className={style.ProjectSingelPostInfo}>
                 <span className={style.ProjectSingelPostAuthor}>Organisator: Freek Fonk</span>
                 <span className={style.ProjectSingelPostDate}>01/02/2022</span>
             </div>
             <article className={style.ProjectSingelPostArticle}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </article>
         </div>
    </div>
    );
}

export default ProjectSingelPost;