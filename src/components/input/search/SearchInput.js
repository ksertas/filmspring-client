import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from '../../../assets/icon/nav/ant-design_search-outlined.svg';
import styles from './SearchInput.module.scss';

export default function SearchInput() {

    const [dimmed, setDimmed] = useState(false);
    let navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search");
    }

    return (
        <>
            <form onSubmit={handleSearch} className={styles.search__form} onClick={() => setDimmed(true)}>
                <input type="text" name="search" id="site-search" placeholder="Search" className={styles.search} />
                <Search />
            </form>
            <div className={[`${styles.dimmer} ${dimmed ? styles.dimmer_active : ""}`]} onClick={() => setDimmed(false)}></div>
        </>
    )
}
