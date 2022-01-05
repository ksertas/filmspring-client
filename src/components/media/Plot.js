import React from 'react'
import styles from './Plot.module.scss';

export default function Plot({ children }) {
    return (
        <div className={styles.plot_container}>
            <p>{children}</p>
        </div>
    )
}
