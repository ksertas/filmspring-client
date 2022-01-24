import React from 'react'
import styles from './Footer.module.scss';
import SearchInputCta from '../input/cta/SearchInputCta'
import { ReactComponent as Github } from '../../assets/icon/footer/github.svg';
import { ReactComponent as Novi } from '../../assets/icon/footer/novi.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.header}>What will you be watching next?</h2>
            <SearchInputCta />
            <div>
                <ul>
                    <li className={styles.logo}><a href="https://novi.nl" target="_blank" rel="noopener noreferrer"><Novi /></a></li>
                    <li className={styles.logo}><a href="https://github.com/ksertas" target="_blank" rel="noopener noreferrer"><Github /></a></li>
                </ul>
            </div>
        </footer>
    )
}
