import React from 'react'
import styles from './UserListTile.module.scss';
import John from '../../../assets/img/home/john.png'
import { TiDelete } from 'react-icons/ti'

export default function UserListTile() {
    return (
        <div className={styles.tile__container}>
            <div className={styles.tile__user}>
                <img src={John} alt="" />
                <p className={styles.user__info}>John smith <span className={styles.user_role}>Group owner</span></p>
            </div>
            <div className={styles.tile__actions}>
                <button className={styles.user__action_btn}><TiDelete /> Remove from group</button>
            </div>
        </div>
    )
}
