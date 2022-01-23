import React, { useContext } from 'react'
import styles from './FooterLoggedIn.module.scss';
import SearchInput from '../input/search/SearchInput.js';
import { ReactComponent as Github } from '../../assets/icon/footer/github.svg';
import { ReactComponent as Novi } from '../../assets/icon/footer/novi.svg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function FooterLoggedIn() {

    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    function logUserOut() {
        logout();
        window.scrollTo(0, 0);
        navigate("/");
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__search}>
                <h2 className={styles.header}>Quick search</h2>
                <SearchInput />
            </div>
            <div className={styles.list__container}>
                <div className={styles.list__groups}>
                    <div>
                        <h4 className={styles.list__heading}>Account</h4>
                        <ul>
                            <li onClick={() => window.scrollTo(0, 0)}><Link to={`/profile/${user.username}`}>Profile</Link></li>
                            <li onClick={() => window.scrollTo(0, 0)}><Link to="/settings">Account settings</Link></li>
                            <li onClick={logUserOut}><Link to="/">Log out</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logo__container}>
                    <ul>
                        <li className={styles.logo}><a href="https://novi.nl" target="_blank" rel="noopener noreferrer"><Novi /></a></li>
                        <li className={styles.logo}><a href="https://github.com/ksertas" target="_blank" rel="noopener noreferrer"><Github /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
