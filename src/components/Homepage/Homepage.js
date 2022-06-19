import React from 'react';
import style from "./Homepage.module.css"
import HomePageWelkom from "./homePageWelkom/HomePageWelkom";
import HomePageLogin from "./homePageLogin/homePageLogin";

function Homepage(props) {
    return (
        <>
            <HomePageWelkom/>
            <div className={style.HomepageAccessContainer}>
                <img
                    className={style.HomepageAccessImg}
                    src="https://images.unsplash.com/photo-1559749284-7a6971fd798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                />
                <div className={style.HomepageAccessWrapper}>
                    <div className={style.HomepageAccessInlog}>
                        <HomePageLogin/>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Homepage;