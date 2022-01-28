import React, { useContext } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { ax } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import styles from './ProfileHeaderGroups.module.scss';

export default function ProfileHeaderGroups({ data, isGroupOwner }) {

    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    const deleteGroupHandler = async () => {
        try {
            let res = await ax.delete(`/groups/${data.id}`);
            navigate(`/profile/${user.username}`);
        } catch (e) {
            console.log(e);
        }
    }

    const leaveHandler = async () => {
        try {
            let res = ax.delete(`/groups/${data.id}/users/${user.username}/leave`);
            navigate(`/profile/${user.username}`);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.header__container}>
            <div className={styles.header__options}>
                {data ?
                    isGroupOwner ? <>
                        {/* <button><BsFillPencilFill />Edit group profile</button> */}
                        <button onClick={deleteGroupHandler} className={styles.delete_group}>Delete group</button>
                    </> : <button onClick={leaveHandler} className={styles.leave_group}>Leave group</button>
                    : ''}
            </div>
            <div className={styles.header__group}>
                {data ? <img src={ConvertDataToImg(data.avatar).src} alt="group avatar" className={styles.group__img} /> : <Skeleton circle width={150} height={150} />}
                {data ? <h3 className={styles.group__name}>{data.groupName}</h3> : <Skeleton height={50} width={200} />}
            </div>
            <div className={styles.group__media}>
                <div>
                    {data ? <span>{data.plannedFilms.length}</span> : <Skeleton width={30} height={20} />}
                    <p>Planned films</p>
                </div>
                <div>
                    {data ? <span>{data.plannedSeries.length}</span> : <Skeleton width={30} height={20} />}
                    <p>Planned series</p>
                </div>
            </div>
            <div className={styles.group__nav}>
                <ul>
                    <li className={styles.selected}>Overview</li>
                </ul>
            </div>
        </div>
    )
}
