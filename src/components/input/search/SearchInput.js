import React, { useState } from 'react';
import styles from './SearchInput.module.scss';
import { ReactComponent as Search } from '../../../assets/icon/nav/ant-design_search-outlined.svg';

export default function SearchInput() {

    const [dimmed, setDimmed] = useState(false);

    return (
        <>
            <form action="" className={styles.search__form} onClick={() => setDimmed(true)}>
                <input type="search" name="search" id="site-search" placeholder="Search" className={styles.search} />
                <Search />
            </form>
            <div className={[`${styles.dimmer} ${dimmed ? styles.dimmer_active : ""}`]} onClick={() => setDimmed(false)}></div>
        </>
    )
}
