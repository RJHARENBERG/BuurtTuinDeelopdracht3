import React, {useState} from 'react';
import style from "./myEnrolledProjects.module.css";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import {FaSearch} from "react-icons/fa";
import MyEnrolledProjectsItems from "./myEnrolledProjectsItems/MyEnrolledProjectsItems";


function MyEnrolledProjects(props) {
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
        <div className={style.MyEnrolledProjects}>
            <div className={style.MyEnrolledProjectsContainer}>
                <div className={style.MyEnrolledProjectsWrapper}>
                    <div className={style.MyEnrolledProjectsSearch}>
                        <h1 className={style.MyEnrolledProjectsSTitle}>Zoeken</h1>
                        <label>Reservering datum</label>
                        <span onClick={() => setOpenDate(!openDate)}
                              className={style.MyEnrolledProjectsSearchText}
                        >
                            {`${format(date[0].startDate, "MM/dd/yyyy")}
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={style.MyEnrolledProjectsDate}
                            minDate={new Date()}
                        />}
                        <button className={style.MyEnrolledProjectsSearchButton}><FaSearch/></button>
                    </div>
                    <div className={style.MyEnrolledProjectsItems}>
                        <MyEnrolledProjectsItems/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyEnrolledProjects;