import React, { useContext, useState } from 'react'
import styles from './NavBarLoggedIn.module.scss';
import { ReactComponent as Logo } from '../../assets/icon/nav/logo.svg';
import SearchInput from '../input/search/SearchInput';
import John from '../../assets/img/home/john.png';
import { AiFillCaretDown } from 'react-icons/ai';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function NavBarLoggedIn() {

    const [menuHidden, setMenuHidden] = useState(true);
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    function logUserOut() {
        logout();
        navigate("/");
    }

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
                                <img src={user.avatarSrc} alt="avatar" className={styles.profile__img} /><AiFillCaretDown className={styles.caret} />
                            </button>
                            {menuHidden ? '' :
                                <div className={styles.profile_menu}>
                                    <ul className={styles.menu__list}>
                                        <li onClick={handleProfileMenu}>Profile</li>
                                        <li onClick={handleProfileMenu}>Watched films</li>
                                        <li onClick={handleProfileMenu}>Watched series</li>
                                        <li onClick={handleProfileMenu}>Favorites</li>
                                        <li onClick={handleProfileMenu}>Account settings</li>
                                        <li onClick={logUserOut} className={styles.list__logout}>Log out</li>
                                    </ul>
                                </div>}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
