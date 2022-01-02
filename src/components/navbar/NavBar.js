import React from 'react'
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import styles from './NavBar.module.scss';
import SearchInput from '../input/search/SearchInput';
import Button from '../button/button';

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
                        <li><Button neutral>Sign in</Button></li>
                        <li><Button primary>Sign up</Button></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
