import React from 'react'
import styles from './Subheader.module.scss';

export default function Subheader({ text }) {
    return (
        <div className={styles.subheader_container}>
            <h4 className={styles.container_text}>{text}</h4>
        </div>
    )
}
