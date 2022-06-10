import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import {FiMenu, IoIosCamera} from "react-icons/fi";
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className={styles.list}>
                    <li className={styles.items}>
                        <Link exact to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.items}>
                        <Link to="/user-dashboard" activeClassName="active-link">
                            Dashboard
                        </Link>
                    </li>
                    <li className={styles.items}>
                        <Link  to="/tools" activeClassName="active-link">
                            Tools
                            </Link>
                        </li>
                    <li className={styles.items}>
                        <Link  to="/messages" activeClassName="active-link">
                            Messages
                        </Link>
                    </li>
                    <li className={styles.items}>
                        <Link  to="/projects" activeClassName="active-link">
                            Projects
                        </Link>
                    </li>
                    <li className={styles.items}>
                        <Link  to="/inlog" activeClassName="active-link">
                            Inlog
                        </Link>
                    </li>
                </ul>
            )}

            <FiMenu onClick={toggleNav} className={styles.btn}/>

        </nav>
    );
}

export default Navbar;