import React from 'react'
import styles from './GroupUserList.module.scss';
import Collegefriends from '../../assets/img/Media/collegefriends.png';
import Filmsquad from '../../assets/img/Media/filmsquad.png';
import UserTile from './tiles/UserTile';
import UserListTile from './tiles/UserListTile';

export default function GroupUserList() {
    return (
        <div className={styles.list__container}>
            <header>
                <h4>Group members</h4>
                <div>
                    <button>Invite users</button>
                </div>
            </header>
            <UserListTile />
            <UserListTile />
            <UserListTile />
            <UserListTile />
        </div>
    )
}
