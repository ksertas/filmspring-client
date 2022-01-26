import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ax } from '../../../api/api';
import styles from './InvitePopup.module.scss';

export default function InvitePopup() {

    const { id } = useParams();
    const [foundUsers, setFoundUsers] = useState();
    const [inviteError, setInviteError] = useState(false);

    const fetchUsers = async (value) => {
        try {
            let res = await ax.get(`/users?search=${value}`);
            setFoundUsers(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    const sendInvite = async (username) => {
        try {
            let res = await ax.put(`/groups/${id}/invite/${username}`)
            console.log(res.data);
            setInviteError(false);
            setFoundUsers([]);
        } catch (e) {
            setInviteError(e.response.data);
            console.log(e);
        }
    }

    const handleChange = (e) => {
        setInviteError(false);
        if (e.target.value.length >= 3) {
            fetchUsers(e.target.value);
        }
        if (e.target.value.length <= 2) {
            setFoundUsers([]);
        }
    }

    return (
        <div className={styles.popup__container}>
            <input className={styles.search_input} type="text" placeholder="Search users..." onChange={(e) => handleChange(e)} />
            {foundUsers ?
                <ul className={styles.result__list}>
                    {inviteError && <p className={styles.invite_error}>User is already invited</p>}
                    {foundUsers.map((user, i) => {
                        return <li key={`u ${i}`} onClick={() => sendInvite(user.username)}>{user.username}</li>
                    })}
                </ul>
                :
                ''}
        </div>
    );
}
