import React from 'react'
import { ReactComponent as Logo } from '../../assets/icon/nav/logo.svg';
import styles from './NavBar.module.scss';
import SearchInput from '../input/search/SearchInput';

export default function NavBar() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__left}>
                    <Logo className={styles.logo} />
                </div>
                <div className={styles.nav__right}>
                    <ul>
                        <li><SearchInput /></li>
                        <li><button className={styles.btn_login}>Log in</button></li>
                        <li><button className={styles.btn_signup}>Sign up</button></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
