import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import { FiMenu } from "react-icons/fi";

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
                    <li className={styles.items} href="/">Home</li>
                    <li className={styles.items} href="/dashboard">Dashboard</li>
                    <li className={styles.items} href="/tools">Tools</li>
                    <li className={styles.items} href="/messages">Messages</li>
                    <li className={styles.items} href="/projects">Projects</li>
                    <li className={styles.items} href="/inlog">Inlog</li>
                </ul>
            )}
                <FiMenu onClick={toggleNav} className={styles.btn}/>
        </nav>
    );
}

export default Navbar;