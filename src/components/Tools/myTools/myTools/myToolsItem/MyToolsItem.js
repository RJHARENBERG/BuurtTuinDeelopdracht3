import React from 'react';
import style from "./MyToolsItem.module.css"
import {FaMinus, FaPlus} from "react-icons/fa";

function MyToolsItem(props) {
    return (
        <div className={style.MyToolsItem}>
            <img
                src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id520135246?b=1&k=20&m=520135246&s=170667a&w=0&h=EufTkvHkDsL_VVHTLCuN5AkrYMOlFb6H3c_rVF1P9k4="
                alt="" className={style.MyToolsItemImg}/>
            <div className={style.MyToolsItemDescription}>
                <h1 className={style.MyToolsItemName}>
                    grasmaaier 300
                </h1>
                <span className={style.MyToolsItemType}>
                    Type: grasmaaier
                </span>
                <span className={style.MyToolsItemOwner}>
                    Owner: Karel
                </span>
                <span className={style.MyToolsItemOwnerAdres}>
                    Adres: Kruidendreef 34
                </span>
                <button className={style.MyToolsItemAddButton}><FaPlus/></button>
                <button className={style.MyToolsItemDeleteButton}><FaMinus/></button>
            </div>
            <div className={style.MyToolsItemAboud}>
                <h2 className={style.MyToolsItemTitle}>omschrijving:</h2>
                <span className={style.MyToolsItemAboudText}>
                    Deze grasmaaier maait super strak! Door zijn snelle motor, scherpen messen en precies handeling,
                    maait hij al het gras voor je voeten weg!
                </span>
            </div>
        </div>
    );
}

export default MyToolsItem;