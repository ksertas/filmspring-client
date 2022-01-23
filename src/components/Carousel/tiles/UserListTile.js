import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
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
                    <img src={ConvertDataToImg(userData.avatar).src} alt="Group member avatar" className={styles.avatar} />
                    <p className={styles.user__info}>{userData.firstName} {userData.lastName}<span className={styles.user_role}>{groupData.groupOwnerName === userData.username ? "Group owner" : "Member"}</span></p>
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
