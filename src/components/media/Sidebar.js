import React from 'react';
import { AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MediaData from './MediaData';
import styles from './Sidebar.module.scss';

export default function Sidebar({ data, poster }) {
    return (
        <div className={styles.sidebar__container}>
            {poster ? <img src={poster} alt="Media poster" className={styles.poster} /> : <Skeleton height={540} width={340} />}
            <div className={styles.sidebar__buttons}>
                <button className={styles.button_watch}><AiOutlinePlus />Add to watched</button>
                <button className={styles.button_plan}><AiOutlineClockCircle />Add to planned</button>
            </div>
            <MediaData text="Genre">
                {data ? data.genre : <Skeleton />}
            </MediaData>
            <MediaData text="Director">
                {data ? data.director : <Skeleton />}
            </MediaData>
            <MediaData text="Runtime">
                {data ? `${data.runtime} minutes` : <Skeleton />}
            </MediaData>
            <MediaData text="Released">
                {data ? data.yearReleased : <Skeleton />}
            </MediaData>
        </div>
    )
}
