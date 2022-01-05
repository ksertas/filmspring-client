import React from 'react';
import styles from './Sidebar.module.scss';
import Poster from '../../assets/img/Media/squid_game.png';
import Subheader from './Subheader';
import Button from '../button/button.js'
import { ReactComponent as Clock } from '../../assets/icon/media/clock.svg';
import { ReactComponent as Plus } from '../../assets/icon/media/plus.svg';
import MediaData from './MediaData';

export default function Sidebar() {
    return (
        <div className={styles.sidebar__container}>
            <img src={Poster} alt="Media poster" className={styles.poster} />
            <div className={styles.sidebar__buttons}>
                <Button primary filled><Plus className={styles.icon} />Add to watched</Button>
                <Button neutral><Clock className={styles.icon} />Add to watch later</Button>
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
