import React, {useState} from 'react';
import style from "./MyToolsList.module.css"
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import {FaSearch} from "react-icons/fa";
import MyToolsItem from "./myToolsItem/MyToolsItem";
import MyToolsAddForm from "./myToolsAddForm/myToolsAddForm";

function MyToolsList(props) {
    const [tool, setTool] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className={style.MyToolsList}>
            <div className={style.MyToolsListContainer}>
                <div className={style.MyToolsListWrapper}>
                    <div className={style.MyToolsListControl}>
                        <div className={style.MyToolsListSearch}>
                            <h1 className={style.MyToolsListSearchTitle}>Search</h1>
                            <div className={style.MyToolsListItem}>
                                <label>Type gereedschap</label>
                                <input type="text"
                                       placeholder="Wat voor gereedschap?"
                                       className={style.MyToolsListSearchInput}
                                       onChange={e => setTool(e.target.value)}
                                />
                                <div className={style.MyToolsListItem}>
                                    <label>Reservering datum</label>
                                    <span onClick={() => setOpenDate(!openDate)}
                                          className={style.MyToolsListSearchText}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")}
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className={style.MyToolsListDate}
                                        minDate={new Date()}
                                    />}
                                </div>
                                <button><FaSearch/></button>
                            </div>
                        </div>
                        <div className={style.MyToolsListAddTool}>
                            <h1 className={style.MyToolsListSearchAddToolTitle}>Uit lenen</h1>
                            <MyToolsAddForm/>
                        </div>

                    </div>

                    <div className={style.MyToolsListResult}>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                        <MyToolsItem/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyToolsList;