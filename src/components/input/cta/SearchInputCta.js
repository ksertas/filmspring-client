import React from 'react'
import styles from './SearchInputCta.module.scss';

export default function SearchInputCta() {
    return (
        <form action="">
            <label htmlFor="email-input">
                <input type="text" name="cta-email" id="email-input" placeholder="Email address" className={styles.input} />
            </label>
            <button type="submit" className={styles.submit}>Get started</button>
        </form>
    )
}
