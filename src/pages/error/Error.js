import React from 'react'
import styles from './Error.module.scss';

export default function Error() {
    return (
        <div className={styles.error__container}>
            <h1>404</h1>
            <h2>The page you were looking for cannot be found.</h2>
        </div>
    )
}
