import React from 'react';
import style from "./LendToolList.module.css"

import LendToolPropertyList from "./lendToolPropertyList/LendToolPropertyList";
import LendToolFeaturedProperty from "./lendToolFeaturedProperty/LendToolFeaturdProperty";
import LendToolFeatured from "./lendToolFeatured/LendToolFeatured";

function LendToolList(props) {
    return (
        <div className={style.lendToolListContainer}>
            <LendToolFeatured/>
            <h1 className={style.lendToolListTitle}>Zoek op type gereedschap</h1>
            <LendToolPropertyList/>
            <h1 className={style.lendToolListTitle}>Populair</h1>
            <LendToolFeaturedProperty/>
        </div>
    );
}

export default LendToolList;