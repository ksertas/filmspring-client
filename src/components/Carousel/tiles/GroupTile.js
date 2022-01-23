import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import ConvertDataToImg from '../../../utils/ConvertDataToImg';
import styles from './GroupTile.module.scss';

export default function GroupTile({ data }) {

    const [isReady, setReady] = useState(data);
    let memberCount = 0;

    if (isReady) {
        for (let i = 0; i < data.usersInGroup.length; i++) {
            memberCount++;
        }
    }

    return (
        <div className={styles.grouptile__container}>
            {isReady ? <Link to={`/group/${data.id}`}> <img src={ConvertDataToImg(data.avatar).src} alt="Group result" className={styles.grouptile__img} /></Link> : <Skeleton height={200} width={150} />}
            {isReady ? <Link to={`/group/${data.id}`}> <p className={styles.grouptile__name}>{data.groupName}</p></Link> : <Skeleton height={20} width={100} />}
            {isReady ? <p className={styles.grouptile__members}>{memberCount} members</p> : <Skeleton height={10} width={50} />}
        </div>
    )
}
