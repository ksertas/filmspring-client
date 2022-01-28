import React, { useContext } from 'react';
import { AiOutlineClockCircle, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ax } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import MediaData from './MediaData';
import styles from './Sidebar.module.scss';

export default function Sidebar({ data, poster, type, id, status }) {

    const { user } = useContext(UserContext);

    const addToWatched = async () => {
        try {
            let res = await ax.put(`/users/${user.username}/${type}/watched/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    const removeFromWatched = async () => {
        try {
            let res = await ax.delete(`/users/${user.username}/${type}/watched/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    const addToPlanned = async () => {
        try {
            let res = await ax.put(`/users/${user.username}/${type}/planned/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    const removeFromPlanned = async () => {
        try {
            let res = await ax.delete(`/users/${user.username}/${type}/planned/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    const addToFavorites = async () => {
        try {
            let res = await ax.put(`/users/${user.username}/${type}/favorites/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    const removeFromFavorites = async () => {
        try {
            let res = await ax.delete(`/users/${user.username}/${type}/favorites/${id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.sidebar__container}>
            {poster ? <img src={poster} alt="Media poster" className={styles.poster} /> : <Skeleton height={540} width={340} />}
            <div className={styles.sidebar__buttons}>
                {status === "watched" ?
                    <>
                        <button onClick={removeFromWatched} className={styles.button_remove_watched}><AiOutlineMinus />Remove from watched</button>
                        <button onClick={addToFavorites} className={styles.button_add_favorited}><AiOutlineStar />Add to favorites</button>
                    </>
                    :
                    status === "planned" ?
                        <>
                            <button onClick={addToWatched} className={styles.button_add_watched}><AiOutlinePlus />Add to watched</button>
                            <button onClick={removeFromPlanned} className={styles.button_remove_planned}><AiOutlineClockCircle />Remove from planned</button>
                        </>
                        :
                        status === "favorited" ?
                            <>
                                <button onClick={removeFromWatched} className={styles.button_remove_watched}><AiOutlineMinus />Remove from watched</button>
                                <button onClick={removeFromFavorites} className={styles.button_remove_favorited}><AiOutlineStar />Remove from favorited</button>
                            </>
                            :
                            <>
                                <button onClick={addToWatched} className={styles.button_add_watched}><AiOutlinePlus />Add to watched</button>
                                <button onClick={addToPlanned} className={styles.button_add_planned}><AiOutlineClockCircle />Add to planned</button>
                            </>}
            </div>
            <MediaData text="Genre">
                {data ? data.genre : <Skeleton />}
            </MediaData>
            <MediaData text="Director">
                {data ? data.director : <Skeleton />}
            </MediaData>
            <MediaData text="Runtime">
                {data ? `${data.runtime} minutes` : <Skeleton />}
            </MediaData>
            <MediaData text="Released">
                {data ? data.yearReleased : <Skeleton />}
            </MediaData>
        </div>
    )
}
