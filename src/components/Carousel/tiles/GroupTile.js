import React from 'react'
import styles from './GroupTile.module.scss';

export default function GroupTile({ img, name, count }) {
    return (
        <div className={styles.grouptile__container}>
            <img src={img} alt="User result" className={styles.grouptile__img} />
            <p className={styles.grouptile__name}>{name}</p>
            <p className={styles.grouptile__members}>{count} members</p>
        </div>
    )
}
