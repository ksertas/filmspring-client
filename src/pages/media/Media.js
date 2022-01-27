import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import Cast from '../../components/media/Cast';
import Header from '../../components/media/Header';
import Plot from '../../components/media/Plot';
import Sidebar from '../../components/media/Sidebar';
import Subheader from '../../components/media/Subheader';
import { UserContext } from '../../context/UserContext';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import styles from './Media.module.scss';

export default function Media({ type }) {

    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [mediaData, setMediaData] = useState();
    const [userData, setUserData] = useState();
    const [posterSrc, setPosterSrc] = useState();
    let status;

    useEffect(() => {
        status = undefined;
        async function fetchMedia() {
            try {
                let results = await ax.get(`/${type}/${id}`);
                setMediaData(results.data);
            } catch (e) {
                console.log(e);
            }
        }

        async function fetchPoster() {
            try {
                let results = await ax.get(`/posters/${type}/${id}`);
                setPosterSrc(ConvertDataToImg(results.data).src);
            } catch (e) {
                console.log(e);
            }
        }

        async function fetchUser() {
            try {
                let results = await ax.get(`/users/${user.username}`);
                setUserData(results.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchMedia();
        fetchPoster();
        fetchUser();
    }, []);

    if (userData) {
        console.log(userData);
        if (type === "films") {
            for (let i = 0; i < userData.watchedFilms.length; i++) {
                if (userData.watchedFilms[i].id == id) {
                    status = "watched";
                }
            }
            for (let i = 0; i < userData.plannedFilms.length; i++) {
                if (userData.plannedFilms[i].id == id) {
                    status = "planned";
                }
            }
            for (let i = 0; i < userData.favoriteFilms.length; i++) {
                if (userData.favoriteFilms[i].id == id) {
                    status = "favorited";
                }
            }
        }
        else if (type === "series") {
            for (let i = 0; i < userData.watchedSeries.length; i++) {
                if (userData.watchedSeries[i].id == id) {
                    status = "watched";
                }
            }
            for (let i = 0; i < userData.plannedSeries.length; i++) {
                if (userData.plannedSeries[i].id == id) {
                    status = "planned";
                }
            }
            for (let i = 0; i < userData.favoriteSeries.length; i++) {
                if (userData.favoriteSeries[i].id == id) {
                    status = "favorited";
                }
            }
        }
    }


    return (
        <div className={styles.media_container}>
            <Header data={mediaData} type={type} />
            <div className={styles.row}>
                <div className={styles.sidebar}>
                    <Sidebar data={mediaData} poster={posterSrc} type={type} id={id} status={status} />
                </div>
                <div className={styles.content}>
                    <div className={styles.content_container}>
                        <Subheader text="Plot" />
                        <Plot>
                            {mediaData ? mediaData.plot : <Skeleton count={8} />}
                        </Plot>
                    </div>
                    <div className={styles.content_container}>
                        <Subheader text="Cast" />
                        <Cast data={mediaData} />
                    </div>
                </div>
            </div>
        </div>)
}
