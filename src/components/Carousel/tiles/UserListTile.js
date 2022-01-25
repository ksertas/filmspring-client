import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { ax } from '../../../api/api';
import { UserContext } from '../../../context/UserContext';
import ConvertDataToImg from '../../../utils/ConvertDataToImg';
import styles from './UserListTile.module.scss';

export default function UserListTile({ groupData, userData, isGroupOwner }) {

    const { user } = useContext(UserContext);

    const [isRemoved, setRemoved] = useState(false);

    async function removeUserFromGroup() {
        try {
            let res = await ax.delete(`/groups/${groupData.id}/users/${userData.username}`)
            window.location.reload();

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.tile__container}>
            {groupData && userData ? <>
                <div className={styles.tile__user}>
                    {userData ? <Link to={`/profile/${userData.username}`} onClick={() => window.scrollTo(0, 0)}><img src={ConvertDataToImg(userData.avatar).src} alt="Group member avatar" className={styles.avatar} /></Link>
                        : <Skeleton width={100} height={100} />}
                    {userData ? <Link to={`/profile/${userData.username}`} onClick={() => window.scrollTo(0, 0)}><p className={styles.user__info}>{userData.firstName} {userData.lastName}<span className={styles.user_role}>{groupData.groupOwnerName === userData.username ? "Group owner" : "Member"}</span></p></Link> : <Skeleton width={250} height={40} />}
                </div>
                <div className={styles.tile__actions}>
                    {userData.username !== user.username && isGroupOwner ?
                        <button onClick={removeUserFromGroup} className={styles.user__action_btn}><TiDelete /> Remove from group</button> :
                        ''}
                </div>
            </>
                :
                ''}
        </div>
    )
}
