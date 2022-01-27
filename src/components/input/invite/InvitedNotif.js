import React, { useContext, useEffect, useState } from 'react';
import { ax } from '../../../api/api';
import { UserContext } from '../../../context/UserContext';
import styles from './InvitedNotif.module.scss';

export default function InvitedNotif({ inviteArr }) {

    const { user } = useContext(UserContext);
    const [inviteArrState, setInviteArrState] = useState();
    const [resData, setResData] = useState();

    useEffect(() => {
        if (inviteArr) {
            setInviteArrState(inviteArr);
        }
    }, []);

    const handleAccept = async () => {
        try {
            let res = await ax.put(`/groups/${inviteArrState[0]}/invite/${user.username}/accept`);
            setResData(res.data);
            setInviteArrState(inviteArrState.shift());
            setInviteArrState(inviteArrState);
            window.location.reload();
        } catch (e) {
            console.log(e.response);
        }
    }

    const handleReject = async () => {
        try {
            let res = await ax.delete(`/groups/${inviteArrState[0]}/invite/${user.username}/reject`);
            setResData(res.data);
            setInviteArrState(inviteArrState.shift());
            setInviteArrState(inviteArrState);
        } catch (e) {
            console.log(e.response);
        }
    }

    return (
        <>
            {inviteArrState && inviteArrState[0] ?
                <div className={styles.container}>
                    <p className={styles.message}>You have been invited to group #{inviteArrState[0]}!</p>
                    <div className={styles.button__container}>
                        <button onClick={handleAccept} className={styles.accept_btn}>Accept</button>
                        <button onClick={handleReject} className={styles.reject_btn}>Reject</button>
                    </div>
                </div>
                :
                ''}
        </>
    );
}
