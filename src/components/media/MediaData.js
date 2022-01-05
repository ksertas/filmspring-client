import React from 'react'
import styles from './MediaData.module.scss';
import Subheader from './Subheader'

export default function MediaData({ children, text }) {
    return (
        <div>
            <Subheader text={text} className={styles.subheader} />
            <p className={styles.text}>{children}</p>
        </div>
    )
}
