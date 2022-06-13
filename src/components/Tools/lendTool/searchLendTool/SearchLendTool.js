import React from 'react';
import styles from "./SearchLendTool.module.css";

function SearchLendTool(props) {
    return (
        <>
        <div className={styles.lendToolList}>
            <div className={styles.lendToolListContainer}>
                <div className={styles.lendToolListWrapper}>
                    <div className={styles.lendToolListSearch}>
                        <h1 className={styles.lendToolListTitle}>Search</h1>

                        <div className={styles.lendToolListItem}>
                            <label>gereedschap</label>
                            <input type="text"/>
                        </div>
                        <div className={styles.lendToolListItem}>
                            <label>reservering datum</label>
                            <input type="text"/>
                        </div>


                    </div>
                    <div className={styles.lendToolListResult}></div>
                </div>
            </div>
        </div>


        </>
    );
}

export default SearchLendTool
;