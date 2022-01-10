import React, { useState } from 'react'
import styles from './NavBarLoggedIn.module.scss';
import { ReactComponent as Logo } from '../../assets/icon/nav/logo.svg';
import SearchInput from '../input/search/SearchInput';
import Button from '../button/button';
import John from '../../assets/img/home/john.png';
import { AiFillCaretDown } from 'react-icons/ai';

export default function NavBarLoggedIn() {

    const [menuHidden, setMenuHidden] = useState(true);

    function handleProfileMenu() {
        setMenuHidden(!menuHidden);

    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__left}>
                    <Logo className={styles.logo} />
                </div>
                <div className={styles.nav__right}>
                    <ul>
                        <li><SearchInput /></li>
                        <li className={styles.profile__item}>
                            <button className={styles.profile__button} onClick={handleProfileMenu}>
                                <img src={John} alt="" className={styles.profile__img} /><AiFillCaretDown className={styles.caret} />
                            </button>
                            {menuHidden ? '' :
                                <div className={styles.profile_menu}>
                                    <ul className={styles.menu__list}>
                                        <li onClick={handleProfileMenu}>Profile</li>
                                        <li onClick={handleProfileMenu}>Watched films</li>
                                        <li onClick={handleProfileMenu}>Watched series</li>
                                        <li onClick={handleProfileMenu}>Favorites</li>
                                        <li onClick={handleProfileMenu}>Account settings</li>
                                        <li onClick={handleProfileMenu} className={styles.list__logout}>Log out</li>
                                    </ul>
                                </div>}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
