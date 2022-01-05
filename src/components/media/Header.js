import React from 'react'
import styles from './Header.module.scss';
import Subheader from './Subheader';

export default function Header() {
    return (
        <div className={styles.header_container}>
            <Subheader text="Mini-series" />
            <h2 className={styles.title}>Squid Game <span className={styles.year}>2021</span></h2>
            <h3 className={styles.alt_title}>오징어 게임; Ojing-eo Geim</h3>
        </div>
    )
}
