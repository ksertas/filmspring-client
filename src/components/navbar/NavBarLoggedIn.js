import React, { useContext, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon/nav/logo.svg';
import { UserContext } from '../../context/UserContext';
import SearchInput from '../input/search/SearchInput';
import styles from './NavBarLoggedIn.module.scss';

export default function NavBarLoggedIn() {

    const [menuHidden, setMenuHidden] = useState(true);
    const { user, logout } = useContext(UserContext);

    function logUserOut() {
        logout();
        window.scrollTo(0, 0);
    }

    function handleProfileMenu() {
        setMenuHidden(!menuHidden);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__left}>
                    <Link to="/profile"><Logo className={styles.logo} /></Link>
                </div>
                <div className={styles.nav__right}>
                    <ul>
                        <li><SearchInput /></li>
                        <li className={styles.profile__item}>
                            <button className={styles.profile__button} onClick={handleProfileMenu}>
                                <img src={user.avatarSrc} alt="avatar" className={styles.profile__img} /><AiFillCaretDown className={styles.caret} />
                            </button>
                            {menuHidden ? '' :
                                <div className={styles.profile_menu}>
                                    <ul className={styles.menu__list}>
                                        <li onClick={handleProfileMenu}><Link to="/profile">Profile</Link></li>
                                        <li onClick={handleProfileMenu}><Link to="">Watched films</Link></li>
                                        <li onClick={handleProfileMenu}><Link to="">Watched series</Link></li>
                                        <li onClick={handleProfileMenu}><Link to="">Favorites</Link></li>
                                        <li onClick={handleProfileMenu}><Link to="/settings">Account settings</Link></li>
                                        <li onClick={logUserOut} className={styles.list__logout}><Link to="/">Log out</Link></li>
                                    </ul>
                                </div>}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
