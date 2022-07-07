import React, {useState} from 'react';
import style from "./LendToolHeader.module.css"

import {FaTools, FaRegCalendarAlt, FaSearch} from "react-icons/fa";
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import {useHistory} from "react-router-dom";


function LendToolHeader(props) {
    const [tool, setTool] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    let history = useHistory();
    const handleSearch = () => {
        history.push("/searchLendTool", {tool: tool, date: date})
    }

    return (
        <>
            <div className={style.lenderToolHeader}>
                <div className={style.lenderToolHeaderContainer}>
                    <div className={style.lenderToolHeaderSearch}>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <FaTools className={style.lenderToolSearchIcon}/>
                            <input
                                type="text"
                                placeholder="Wat voor gereedschap?"
                                className={style.lenderToolHeaderSearchInput}
                                onChange={e => setTool(e.target.value)}
                            />
                        </div>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <FaRegCalendarAlt className={style.lenderToolSearchIcon}/>
                            <span onClick={() => setOpenDate(!openDate)}
                                  className={style.lenderToolSearchText}>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} 
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={style.lenderToolDate}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className={style.lenderToolHeaderSearchItem}>
                            <button className={style.lenderToolHeaderSearchButton} onClick={handleSearch}><FaSearch/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LendToolHeader;
