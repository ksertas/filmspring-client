import React from 'react';
import styles from './ProfileHeader.module.scss';
import { BsFillPencilFill } from 'react-icons/bs';
import ConvertDataToImg from '../../utils/ConvertDataToImg';

export default function ProfileHeader({ headerData, isCurrent }) {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__options}>
                {isCurrent ? <button className={styles.header__edit_profile}><BsFillPencilFill />Edit profile</button> : ''}
            </div>
            <div className={styles.header__person}>
                <img src={ConvertDataToImg(headerData.avatar).src} alt={headerData.username} className={styles.person__img} />
                <h3 className={styles.person__full_name}>{headerData.firstName} {headerData.lastName} </h3>
                <h4 className={styles.person__username}>@{headerData.username}</h4>
                <p className={styles.person__bio}>{headerData.bio}</p>
            </div>
            {headerData.mediaHidden ?
                <p className={styles.person__media_private}>{headerData.username}'s films and series lists are private.</p>
                :
                <div className={styles.person__media}>
                    <div>
                        <span>{headerData.watchedSeries.length}</span>
                        <p>Watched series</p>
                    </div>
                    <div>
                        <span>{headerData.watchedFilms.length}</span>
                        <p>Watched films</p>
                    </div>
                    <div>
                        <span>{headerData.favoriteSeries.length + headerData.favoriteFilms.length}</span>
                        <p>Favorites</p>
                    </div>
                    <div>
                        <span>{headerData.plannedSeries.length + headerData.plannedFilms.length}</span>
                        <p>Plan to watch</p>
                    </div>
                </div>}
            <div className={styles.profile__nav}>
                {isCurrent ?
                    <ul>
                        <li>Overview</li>
                        <li>Watched Films</li>
                        <li>Watched Series</li>
                        <li>Planned Films</li>
                        <li>Planned Series</li>
                        <li>Favorites</li>
                        <li>Groups</li>
                    </ul>
                    : headerData.mediaHidden ?
                        <ul>
                            <li>Overview</li>
                        </ul>
                        :
                        <ul>
                            <li>Overview</li>
                            <li>Watched Films</li>
                            <li>Watched Series</li>
                            <li>Planned Films</li>
                            <li>Planned Series</li>
                            <li>Favorites</li>
                        </ul>}
            </div>
        </div>
    )
}
