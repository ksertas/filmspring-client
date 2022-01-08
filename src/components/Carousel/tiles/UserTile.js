import React from 'react'
import styles from './UserTile.module.scss';

export default function UserTile({ img, name }) {
    return (
        <div className={styles.usertile__container}>
            <img src={img} alt="User result" className={styles.usertile__img} />
            <p className={styles.usertile__name}>{name}</p>
        </div>
    )
}
