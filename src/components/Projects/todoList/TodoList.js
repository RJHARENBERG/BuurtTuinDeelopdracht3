import React from 'react';
import style from "./TodoList.module.css"

function TodoList(props) {
    return (
        <div className={style.TodoList}>
            <h2>Taken</h2>
            <div className={style.TodoListItems}>

            </div>
        </div>
    );
}

export default TodoList;