import {
    FaRegBell, FaCaretDown, FaTools, FaCaretRight, FaBackward,
    FaRegCalendarAlt, FaHandHolding, FaIdCard, FaRegCalendarPlus,
    FaRegCalendarTimes
} from 'react-icons/fa';
import {AiOutlineMessage} from "react-icons/ai";

import style from './NavbarBody.module.css';

import React, {useState, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Link} from "react-router-dom";

function TopNavbar(props) {

    return (

        <Navbar>

            <Link to="/notifications" >
                <NavItem icon={<FaRegBell/>}/>
            </Link>
            <Link to="/messagesDashboard">
                <NavItem icon={<AiOutlineMessage/>}/>
            </Link>

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
                    <Link to="myProfile">
                        <DropdownItem leftIcon={<FaIdCard/>}>Mijn Profiel</DropdownItem>
                    </Link>
                    <DropdownItem
                        leftIcon={<FaTools/>}
                        rightIcon={<FaCaretRight/>}
                        goToMenu="tools">
                        Tools
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<FaRegCalendarAlt/>}
                        rightIcon={<FaCaretRight/>}
                        goToMenu="projects">
                        Projecten
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'tools'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className={style.menu}>
                    <DropdownItem goToMenu="main" leftIcon={<FaBackward/>}>
                        <h2>Gereedschap delen</h2>
                    </DropdownItem>
                    <Link to="/myTools">
                        <DropdownItem leftIcon={<FaTools/>}>Mijn gereedschap</DropdownItem>
                    </Link>
                    <Link to="/lendTool">
                        <DropdownItem leftIcon={<FaHandHolding/>}>Gereedschap lenen</DropdownItem>
                    </Link>
                    <Link to="toolReservation">
                        <DropdownItem leftIcon={<FaRegCalendarAlt/>}>Reserveringen</DropdownItem>
                    </Link>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'projects'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className={style.menu}>
                    <DropdownItem goToMenu="main" leftIcon={<FaBackward/>}>
                        <h2>Buurt projecten</h2>
                    </DropdownItem>
                    <Link to="/allProjects">
                        <DropdownItem leftIcon={<FaRegCalendarAlt/>}>Alle projecten</DropdownItem>
                    </Link>
                    <Link to="/myEnrolledProjects">
                        <DropdownItem leftIcon={<FaRegCalendarPlus/>}>Mijn aangemelde projecten</DropdownItem>
                    </Link>
                    <Link to="/myOldProjects">
                        <DropdownItem leftIcon={<FaRegCalendarTimes/>}>Mijn oude projecten</DropdownItem>
                    </Link><Link to="/addProjects">
                        <DropdownItem leftIcon={<FaRegCalendarTimes/>}>maak een project</DropdownItem>
                    </Link>
                </div>
            </CSSTransition>
        </div>
    );
}

export default TopNavbar;