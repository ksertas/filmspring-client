import React from 'react';
import styles from './Button.module.scss';

export default function button({ children, primary, secondary, filled }) {
    const primaryStyle = primary ? styles.primary : '';
    const secondaryStyle = secondary ? styles.secondary : '';
    const filledStyle = filled ? styles.filled : styles.transparent;

    return (
        <>
            <button className={`${styles.base} 
            ${primaryStyle} 
            ${secondaryStyle}
             ${filledStyle}`}>{children}</button>
        </>
    )
}
