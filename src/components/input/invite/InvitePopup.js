import React, { useState } from 'react';
import { ax } from '../../../api/api';
import styles from './InvitePopup.module.scss';

export default function InvitePopup() {

    const [foundUsers, setFoundUsers] = useState();

    const fetchUsers = async (value) => {
        try {
            let res = await ax.get(`/users?search=${value}`);
            setFoundUsers(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e) => {
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
                    {foundUsers.map((user, i) => {
                        return <li key={`u ${i}`}>{user.username}</li>
                    })}
                </ul>
                :
                ''}
        </div>
    );
}
