import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styles from './UserTile.module.scss';
import { Link } from 'react-router-dom';

export default function UserTile({ img, name }) {
    return (
        <div className={styles.usertile__container}>
            {img ? <Link to={`/profile/${name}`}><img src={img} alt="User result" className={styles.usertile__img} /></Link> : <Skeleton width={200} height={200} circle />}
            {name ? <Link to={`/profile/${name}`}><p className={styles.usertile__name}>@{name}</p></Link> : <Skeleton width={150} height={30} />}
        </div>
    )
}
