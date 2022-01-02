import React from 'react';
import styles from './SearchInput.module.scss';
import '../../App.scss';

export default function SearchInput() {
    return (
        <>
            <label htmlFor="site-search">
                <input type="search" name="search" id="site-search" placeholder="Search" className={styles.search} />
            </label>
        </>
    )
}
