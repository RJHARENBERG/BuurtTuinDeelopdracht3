import React from 'react';
import style from "./HomePageWelkom.module.css"
import HomePageLogin from "../homePageLogin/homePageLogin";

function HomePageWelkom(props) {
    return (
        <>
            <div className={style.HomePageWelkomContainer}>
                <div className={style.HomePageWelkomWrapper}>
                    <h1>Welkom Buur!</h1>
                    <article className={style.HomePageWelkomPreface}>
                        introductie text
                    </article>
                </div>
            </div>
        </>


    );
}

export default HomePageWelkom;