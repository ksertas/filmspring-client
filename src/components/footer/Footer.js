import React from 'react'
import styles from './Footer.module.scss';
import SearchInputCta from '../input/cta/SearchInputCta'
import { ReactComponent as Github } from '../../assets/icon/github.svg';
import { ReactComponent as Novi } from '../../assets/icon/novi.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.header}>What will you be watching next?</h2>
            <SearchInputCta />
            <div>
                <ul>
                    <li className={styles.logo}><Novi /></li>
                    <li className={styles.logo}><Github /></li>
                </ul>
            </div>
        </footer>
    )
}
