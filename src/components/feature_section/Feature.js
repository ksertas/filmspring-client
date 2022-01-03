import React from 'react'
import styles from './Feature.module.scss';

export default function Feature({ header, children, img }) {
    return (
        <div className={styles.feature_container}>
            <div className={styles.text_content}>
                <h3 className={styles.title}>{header}</h3>
                <h4 className={styles.description}>{children}</h4>
            </div>
            <div className={styles.img_content}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
