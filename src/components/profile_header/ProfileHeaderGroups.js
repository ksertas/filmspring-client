import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import styles from './ProfileHeaderGroups.module.scss';

export default function ProfileHeaderGroups({ data, isGroupOwner }) {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__options}>
                {data ?
                    isGroupOwner ? <button><BsFillPencilFill />Edit group profile</button> : ''
                    : ''}
            </div>
            <div className={styles.header__group}>
                {data ? <img src={ConvertDataToImg(data.avatar).src} alt="group avatar" className={styles.group__img} /> : <Skeleton circle width={150} height={150} />}
                {data ? <h3 className={styles.group__name}>{data.groupName}</h3> : <Skeleton height={50} width={200} />}
            </div>
            <div className={styles.group__media}>
                <div>
                    {data ? <span>{data.plannedFilms.length}</span> : <Skeleton width={30} height={20} />}
                    <p>Planned films</p>
                </div>
                <div>
                    {data ? <span>{data.plannedSeries.length}</span> : <Skeleton width={30} height={20} />}
                    <p>Planned series</p>
                </div>
            </div>
            <div className={styles.group__nav}>
                <ul>
                    <li className={styles.selected}>Overview</li>
                </ul>
            </div>
        </div>
    )
}
