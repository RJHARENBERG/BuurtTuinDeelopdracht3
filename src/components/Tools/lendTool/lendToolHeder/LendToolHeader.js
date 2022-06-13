import React, {useState} from 'react';
import style from "./LendToolHeader.module.css"

import {FaTools, FaRegCalendarAlt,FaSearch} from "react-icons/fa";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";


function LendToolHeader(props) {
    const [openDate, setOpenDate] =useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <>
            <div className={style.lenderToolHeader}>
                <div className={style.lenderToolHeaderContainer}>
                    <div className={style.lenderToolHeaderList}>
                        <div className={style.lenderToolHeaderListItem}>
                            {/*<FaTools/>*/}
                        </div>
                    </div>
                    <h1 className={style.lenderToolHeaderTitle}>Zoek en reserveer het gereedschap van je
                        buren <FaTools/></h1>
                    <p className={style.lenderToolHeaderDescription}>Wil jij iets moois bouwen of een van de tuinen
                        onderhouden en heb je
                        niet het juiste gereedschap? Kijk dan of je het van een van je buren mag lenen!</p>
                    <div className={style.lenderToolHeaderSearch}>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <FaTools className={style.lenderToolSearchIcon}/>
                            <input
                                type="text"
                                placeholder="Wat voor gereedschap?"
                                className={style.lenderToolHeaderSearchInput}
                            />
                        </div>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <FaRegCalendarAlt className={style.lenderToolSearchIcon}/>
                            <span onClick={()=> setOpenDate(!openDate)} className={style.lenderToolSearchText}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={style.lenderToolDate}
                            />}
                        </div>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <button className={style.lenderToolHeaderSearchButton}><FaSearch/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LendToolHeader;
