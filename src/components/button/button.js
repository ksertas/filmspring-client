import React from 'react';
import styles from './Button.module.scss';

export default function button({ children, primary, secondary, neutral, filled }) {
    const primaryStyle = primary ? styles.primary : '';
    const secondaryStyle = secondary ? styles.secondary : '';
    const neutralStyle = neutral ? styles.neutral : '';
    const filledStyle = filled ? (primaryStyle ? styles.filled_primary : styles.filled_secondary) : styles.transparent;

    return (
        <>
            <button className={`${styles.base} 
            ${primaryStyle} 
            ${secondaryStyle}
            ${neutralStyle}
             ${filledStyle}`}>{children}</button>
        </>
    )
}
