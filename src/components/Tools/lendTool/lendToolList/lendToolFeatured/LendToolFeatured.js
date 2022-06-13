import React from 'react';
import style from "./LendToolFeatured.module.css";

function LendToolFeatured(props) {
    return (
        <div className={style.lendToolFeatured}>
            <div className={style.lendToolFeaturedItem}>
                <img
                    src="https://images.unsplash.com/photo-1554825959-e9a6670d4f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    alt="" className={style.lendToolFeaturedImg}/>
                <div className={style.lendToolFeaturedTitles}>
                    <h1>Gereedschap</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className={style.lendToolFeaturedItem}>
                <img
                    src="https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
                    alt="" className={style.lendToolFeaturedImg}/>
                <div className={style.lendToolFeaturedTitles}>
                    <h1>Gereedschap</h1>
                    <h2>456 properties</h2>
                </div>
            </div>

            <div className={style.lendToolFeaturedItem}>
                <img
                    src="https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="" className={style.lendToolFeaturedImg}/>
                <div className={style.lendToolFeaturedTitles}>
                    <h1>Gereedschap</h1>
                    <h2>789 properties</h2>
                </div>
            </div>
        </div>
    );
}

export default LendToolFeatured;