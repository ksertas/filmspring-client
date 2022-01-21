import React from 'react'
import styles from './Header.module.scss';
import Subheader from './Subheader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Header({ data, type }) {
    return (
        <div className={styles.header_container}>
            <Subheader text={type} />
            {data ? <h2 className={styles.title}>{data.title} <span className={styles.year}>{data.yearReleased}</span></h2> : <Skeleton height={60} />}
            {data ? <h3 className={styles.alt_title}>{data.alt_titles}</h3> : <Skeleton />}
        </div>
    )
}
