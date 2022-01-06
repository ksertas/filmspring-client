import React from 'react'
import styles from './MediaTile.module.scss';

export default function MediaTile({ img, title }) {
    return (
        <div className={styles.mediatile__container}>
            <img src={img} alt="Media result" className={styles.mediatile__img} />
            <p className={styles.mediatile__title}>{title}</p>
        </div>
    )
}
