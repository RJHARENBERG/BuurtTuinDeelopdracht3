import React from 'react';
import style from "./LendToolPropertyList.module.css"

function LendToolPropertyList(props) {
    return (
        <div className={style.lendToolPropertyList}>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Boormachines</h1>
                    <h2>123 stuks</h2>
                </div>
            </div>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id520135246?b=1&k=20&m=520135246&s=170667a&w=0&h=EufTkvHkDsL_VVHTLCuN5AkrYMOlFb6H3c_rVF1P9k4="
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Grasmaaiers</h1>
                    <h2>456 stuks</h2>
                </div>
            </div>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://media.istockphoto.com/photos/garden-hose-reel-on-green-lawn-in-backyard-copy-space-picture-id1164934020?k=20&m=1164934020&s=612x612&w=0&h=OtNEOfGi6kDUJjrONBjrU2HR-X1dyYV8dqDD2pZgAsE="
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Tuinsproeiers</h1>
                    <h2>789 stuks</h2>
                </div>
            </div>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://media.istockphoto.com/photos/various-gardening-tools-in-the-garden-picture-id1128479561?k=20&m=1128479561&s=612x612&w=0&h=_Myw11iKts-uDyjAozhvsHR7DjG3MNuOqKGvh3nebIo="
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Tuingereedschap</h1>
                    <h2>452 stuks</h2>
                </div>
            </div>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://media.istockphoto.com/photos/antique-work-tools-in-a-toolbox-picture-id1210446226?k=20&m=1210446226&s=612x612&w=0&h=a2wxlizQjnr_x-KICpgMG_SVl9q-KWiYL5hKX8hvM7Y="
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Klusgereedschap</h1>
                    <h2>861 stuks</h2>
                </div>
            </div>
            <div className={style.LendToolPropertyListItem}>
                <img src="https://media.istockphoto.com/photos/trailer-full-of-dead-leaves-picture-id1175316909?k=20&m=1175316909&s=612x612&w=0&h=xPU6WgcFJZwnJo9aMNC7YuoYaJHiccY0w8WuU684Xwc="
                     alt="" className={style.LendToolPropertyImg}/>
                <div className={style.LendToolPropertyTitles}>
                    <h1>Aanhanger</h1>
                    <h2>156 stuks</h2>
                </div>
            </div>

        </div>
    );
}

export default LendToolPropertyList;