import React, {useEffect, useState} from 'react';
import style from "./MyProfile.module.css"
import {FaRegUserCircle} from "react-icons/fa";
import {RiPlayListAddFill} from "react-icons/ri";
import ProjectsSidebar from "../Projects/allProjects/projectsSidbar/ProjectsSidebar";
import axios from "axios";

function MyProfile(props) {

    const [user, setUser] = useState([])

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get('http://localhost:8080/findUserByUsername/user');
                // Plaats alle studenten in de state zodat we het op de pagina kunnen gebruiken
                setUser(response.data);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchUser();
    }, []);

    return (
        <div className={style.MyProfile}>
            <div className={style.MyProfileWrapper}>

                <div className={style.MyProfileTitle}>
                    <span className={style.MyProfileUpdateTitle}>Update je profiel</span>
                    <span className={style.MyProfileDeleteTitle}>Verwijder je profiel</span>
                </div>

                <form className={style.MyProfileForm}>
                    <label>Profiel Foto</label>
                    <div className={style.MyProfileImg}>
                        <img
                            src="https://ninjatune.net/images/artists/mr-oizo-main.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className={style.MyProfileImgIcon}><FaRegUserCircle/></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Gebruikersnaam</label>
                    <input type="text" placeholder="Knakworst"/>
                    <label>Paswoord</label>
                    <input type="password" placeholder="9jd35#%(Jjg"/>
                    <label>Voornaam</label>
                    <input type="text" placeholder="Erick"/>
                    <label>Achternaam</label>
                    <input type="text" placeholder="Oizo"/>
                    <label>Postcode</label>
                    <input type="text" placeholder="5555AA"/>
                    <label>Straatnaam</label>
                    <input type="text" placeholder="KruidenTuin"/>
                    <label>Huisnummer</label>
                    <input type="text" placeholder="53"/>
                    <label>Email</label>
                    <input type="text" placeholder="mr.oizo@gmail.com"/>
                    <button className={style.MyProfileSubmitButton}>
                        <RiPlayListAddFill/>
                    </button>
                </form>
            </div>
            <ProjectsSidebar/>
        </div>
    );
}

export default MyProfile;