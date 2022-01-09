import React from 'react'
import styles from './FooterLoggedIn.module.scss';
import SearchInput from '../input/search/SearchInput.js';
import { ReactComponent as Github } from '../../assets/icon/footer/github.svg';
import { ReactComponent as Novi } from '../../assets/icon/footer/novi.svg';

export default function FooterLoggedIn() {
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
                            <li>Profile</li>
                            <li>Watched films</li>
                            <li>Watched series</li>
                            <li>Account settings</li>
                            <li>Log out</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.list__heading}>Policy</h4>
                        <ul>
                            <li>Terms & conditions</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logo__container}>
                    <ul>
                        <li className={styles.logo}><Novi /></li>
                        <li className={styles.logo}><Github /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
