import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon/nav/logo.svg';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__left}>
                    <Link to="/"><Logo className={styles.logo} /></Link>
                </div>
                <div className={styles.nav__right}>
                    <ul>
                        <li><Link to={"/login"}><button className={styles.btn_login}>Log in</button></Link></li>
                        <li><Link to={"/register"}><button className={styles.btn_signup}>Sign up</button></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
