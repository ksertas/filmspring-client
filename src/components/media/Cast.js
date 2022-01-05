import React from 'react'
import styles from './Cast.module.scss';

export default function Cast({ actor }) {
    return (
        <div className={styles.cast_container}>
            <span className={styles.actor_tile}>Lee jung-jae</span>
            <span className={styles.actor_tile}>Park Hae-soo</span>
            <span className={styles.actor_tile}>Jung Ho-yeon</span>
            <span className={styles.actor_tile}>Oh Yeong-su</span>
            <span className={styles.actor_tile}>Heo Sung-tae</span>
            <span className={styles.actor_tile}>Anupam Tripathi</span>
            <span className={styles.actor_tile}>Kim Joo-ryoung</span>
        </div>
    )
}
