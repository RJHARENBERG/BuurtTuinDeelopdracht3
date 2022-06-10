// import './index.css';
import { FaPlus,FaRegBell,FaFacebookMessenger,FaCaretDown, FaTools ,FaCaretRight,FaBackward,FaRegCalendarAlt
,FaHandHolding, FaIdCard, FaRegCalendarPlus, FaRegCalendarTimes } from 'react-icons/fa';
import {AiOutlineLogin,AiOutlineLogout, AiOutlineMessage} from "react-icons/ai";
import style from './NavbarBody.module.css';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function NavbarBody(props) {
    return (

            <Navbar>
                <NavItem icon={<AiOutlineLogout/>} />
                <NavItem icon={<FaRegBell/>} />
                <NavItem icon={<AiOutlineMessage/>} />

                <NavItem icon={<FaCaretDown/>}>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </Navbar>

    );
}

function Navbar(props) {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbarNav}>{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={style.navItem}>
            <a href="#" className={style.iconButton} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className={style.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className={style.iconButton}>{props.leftIcon}</span>
                {props.children}
                <span className={style.iconRight}>{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className={style.dropdown}
             // style={{ height: menuHeight }}
             ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className={style.menu}>
                    <DropdownItem
                        leftIcon={<FaIdCard/>}
                    >My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<FaTools/>}
                        rightIcon={<FaCaretRight/>}
                        goToMenu="settings">
                        Tools
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<FaRegCalendarAlt/>}
                        rightIcon={<FaCaretRight/>}
                        goToMenu="animals">
                        Projecten
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className={style.menu}>
                    <DropdownItem goToMenu="main" leftIcon={<FaBackward/>}>
                        <h2>Gereedschap delen</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<FaTools/>}>Mijn gereedschap</DropdownItem>
                    <DropdownItem leftIcon={<FaHandHolding/>}>Gereedschap lenen</DropdownItem>
                    <DropdownItem leftIcon={<FaRegCalendarAlt/>}>Reserveringen</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className={style.menu}>
                    <DropdownItem goToMenu="main" leftIcon={<FaBackward/>}>
                        <h2>Buurt projecten</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<FaRegCalendarAlt/>}>Alle projecten</DropdownItem>
                    <DropdownItem leftIcon={<FaRegCalendarPlus/>}>Mijn aangemelde projecten</DropdownItem>
                    <DropdownItem leftIcon={<FaRegCalendarTimes/>}>Mijn oude projecten</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
export default NavbarBody;