import React from 'react';
import style from "./SearchLendToolItem.module.css"
import {FaHandHolding, FaPlus} from "react-icons/fa";

function SearchLendToolItem(props) {
    return (
        <div className={style.SearchLendToolItem}>
            <img
                src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id520135246?b=1&k=20&m=520135246&s=170667a&w=0&h=EufTkvHkDsL_VVHTLCuN5AkrYMOlFb6H3c_rVF1P9k4="
                alt="" className={style.SearchLendToolImg}/>
            <div className={style.SearchLendToolDescription}>
                <h1 className={style.SearchLendToolName}>
                    grasmaaier 300
                </h1>
                <span className={style.SearchLendToolType}>
                    Type: grasmaaier
                </span>
                <span className={style.SearchLendToolOwner}>
                    Owner: Karel
                </span>
                <span className={style.SearchLendToolOwnerAdres}>
                    Adres: Kruidendreef 34
                </span>
                <button className={style.SearchLendToolLendButton}><FaPlus/></button>
            </div>
            <div className={style.SearchLendToolAboud}>
                <h2 className={style.SearchLendToolAboudTitle}>omschrijving:</h2>
                <span className={style.SearchLendToolAboudText}>
                    Deze grasmaaier maait super strak! Door zijn snelle motor, scherpen messen en precies handeling,
                    maait hij al het gras voor je voeten weg!
                </span>
            </div>
        </div>
    );
}

export default SearchLendToolItem;