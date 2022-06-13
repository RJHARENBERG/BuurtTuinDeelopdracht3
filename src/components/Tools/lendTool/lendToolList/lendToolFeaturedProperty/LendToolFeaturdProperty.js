import React from 'react';
import style from "./LendToolFeaturedProperty.module.css"

function LendToolFeaturedProperty(props) {
    return (
        <div className={style.lendToolFeaturedProperty}>
            <div className={style.lendToolFeaturedPropertyItem}>
                <img src="https://media.istockphoto.com/photos/lawn-mower-in-the-park-mowing-the-grass-lawn-care-picture-id1388347499?b=1&k=20&m=1388347499&s=170667a&w=0&h=4zayDlezDjZVJKojm8_Ond1Nri3RKLDoJZCfJNoGzhs="
                     alt="" className={style.LendToolFeaturedPropertyImg}/>
                <span className={style.LendToolFeaturedPropertyTool}>Grasmaaier</span>
                <span className={style.LendToolFeaturedPropertyOwner}>Henk</span>
            </div>
            <div className={style.lendToolFeaturedPropertyItem}>
                <img src="https://images.unsplash.com/photo-1567507145544-da3fe1b4f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                     alt="" className={style.LendToolFeaturedPropertyImg}/>
                <span className={style.LendToolFeaturedPropertyTool}>Boor</span>
                <span className={style.LendToolFeaturedPropertyOwner}>Henk</span>
            </div>
            <div className={style.lendToolFeaturedPropertyItem}>
                <img src="https://media.istockphoto.com/photos/bath-in-the-yard-picture-id157187501?b=1&k=20&m=157187501&s=170667a&w=0&h=pO5_5_kDgN0eOl3S6Zf8PuCP9tryLD20IegYINTtSLw="
                     alt="" className={style.LendToolFeaturedPropertyImg}/>
                <span className={style.LendToolFeaturedPropertyTool}>Sproeier</span>
                <span className={style.LendToolFeaturedPropertyOwner}>Sophietje</span>
            </div>
        </div>
    );
}

export default LendToolFeaturedProperty;