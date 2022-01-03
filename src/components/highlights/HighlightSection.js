import React from 'react'
import styles from './HighlightSection.module.scss';
import { ReactComponent as Eye } from '../../assets/icon/highlights/eye.svg';
import { ReactComponent as Heart } from '../../assets/icon/highlights/heart.svg';
import { ReactComponent as Lens } from '../../assets/icon/highlights/lens.svg';

export default function HighlightSection() {
    return (
        <div className={styles.highlight_container}>
            <div className={styles.discover}>
                <Lens className={styles.icon} />
                <h3>Discover</h3>
                <h4>Search through a constantly expanding list of media</h4>
            </div>
            <div className={styles.like}>
                <Heart className={styles.icon} />
                <h3>Like</h3>
                <h4>Favorite the media you like most</h4>
            </div>
            <div className={styles.save}>
                <Eye className={styles.icon} />
                <h3>Save</h3>
                <h4>Add the media you've watched to your list</h4>
            </div>
        </div>
    )
}
