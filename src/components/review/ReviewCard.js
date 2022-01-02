import React from 'react'
import styles from './ReviewCard.module.scss';

export default function ReviewCard({ children, img, name }) {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__top}>
                    <p className={styles.quote}>
                        {children}
                    </p>
                </div>
                <div className={styles.card__bottom}>
                    <div className={styles.reviewer}>
                        <img src={img} alt={name} className={styles.img} />
                        <h4 className={styles.name}>{name}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
