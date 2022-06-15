import React from 'react';
import style from "./Homepage.module.css"
import HomePageWelkom from "./homePageWelkom/HomePageWelkom";
import HomePageLogin from "./homePageLogin/homePageLogin";
import HomePageAddProfile from "./homePageAddProfile/homePageAddProfile";

function Homepage(props) {
    return (
        <>
            <HomePageWelkom/>
            <div className={style.HomepageAccessContainer}>
                <div className={style.HomepageAccessWrapper}>
                    <HomePageLogin/>
                    <HomePageAddProfile/>
                </div>
            </div>

        </>

    );
}

export default Homepage;