import React from 'react';
import style from "./Footer.module.css"

function Footer(props) {
    return (
        <div className={style.footer}>
            <h3>Copyright © 2022  NOVI hogeschool full-stack bootcamp eindopdracht de Buurttuin</h3>
            <h3>Leerling Reinard Harenberg</h3>
        </div>
    );
}

export default Footer;