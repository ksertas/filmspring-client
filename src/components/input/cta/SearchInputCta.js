import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SearchInputCta.module.scss';

export default function SearchInputCta() {

    const [value, setValue] = useState();
    let navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("emailCta", value);
        navigate("/register");
    }

    return (
        <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email-input">
                <input onChange={(e) => setValue(e.target.value)} type="text" id="email-input" placeholder="Email address" className={styles.input} />
            </label>
            <button className={styles.submit}>Get started</button>
        </form>
    )
}
