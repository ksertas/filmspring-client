import React from 'react';
import styles from './Sidebar.module.scss';
import Poster from '../../assets/img/Media/squid_game.png';
import { AiOutlinePlus, AiOutlineClockCircle } from 'react-icons/ai';
import MediaData from './MediaData';

export default function Sidebar() {
    return (
        <div className={styles.sidebar__container}>
            <img src={Poster} alt="Media poster" className={styles.poster} />
            <div className={styles.sidebar__buttons}>
                {/* <Button primary filled><Plus className={styles.icon} />Add to watched</Button>
                <Button neutral><Clock className={styles.icon} />Add to watch later</Button> */}
                <button className={styles.button_watch}><AiOutlinePlus />Add to watched</button>
                <button className={styles.button_plan}><AiOutlineClockCircle />Add to planned</button>
            </div>
            <MediaData text="Genre">
                Survival, Thriller, Horror, Drama
            </MediaData>
            <MediaData text="Created by">
                Hwang Dong-hyuk
            </MediaData>
            <MediaData text="Directed by">
                Hwang Dong-hyuk
            </MediaData>
            <MediaData text="Episodes">
                9 (season 1)
            </MediaData>
        </div>
    )
}
