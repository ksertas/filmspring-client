import React from 'react';
import styles from './SearchInput.module.scss';

export default function SearchInput() {
    return (
        <>
            <label htmlFor="site-search" className={styles.label}>
                <input type="search" name="search" id="site-search" placeholder="Search" className={styles.search} />
            </label>
        </>
    )
}
