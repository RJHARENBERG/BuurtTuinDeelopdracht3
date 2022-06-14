import React, {useState} from 'react';
import styles from "./SearchLendToolList.module.css";
import {useLocation} from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import {FaSearch} from "react-icons/fa";
import SearchLendToolItem from "./SearchLendToolItem/SearchLendToolItem";


function SearchLendToolList(props) {

    let searchData = useLocation()
    const [tool, setTool] = useState(searchData.state.tool)
    const [date, setDate] = useState(searchData.state.date)
    const [openDate, setOpenDate] = useState(false)

    return (
        <div className={styles.lendToolList}>
            <div className={styles.lendToolListContainer}>
                <div className={styles.lendToolListWrapper}>
                    <div className={styles.lendToolListSearch}>
                        <h1 className={styles.lendToolListTitle}>Search</h1>

                        <div className={styles.lendToolListItem}>
                            <label>Type gereedschap</label>
                            <input placeholder={tool} type="text"/>
                        </div>
                        <div className={styles.lendToolListItem}>
                            <label>Reservering datum</label>
                            <span onClick={()=> setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")}
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            { openDate && (<DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <button><FaSearch/></button>
                    </div>
                    <div className={styles.lendToolListResult}>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>
                        <SearchLendToolItem/>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchLendToolList;