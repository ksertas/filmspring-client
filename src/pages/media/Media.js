import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import Cast from '../../components/media/Cast';
import Header from '../../components/media/Header';
import Plot from '../../components/media/Plot';
import Sidebar from '../../components/media/Sidebar';
import Subheader from '../../components/media/Subheader';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import styles from './Media.module.scss';

export default function Media({ type }) {

    const { id } = useParams();
    const [mediaData, setMediaData] = useState();
    const [posterSrc, setPosterSrc] = useState();

    useEffect(() => {
        async function fetchMedia() {
            try {
                let results = await ax.get(`/${type}/${id}`);
                setMediaData(results.data);
                console.log(results.data);
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

        fetchMedia();
        fetchPoster();
    }, []);


    return (
        <div className={styles.media_container}>
            <Header data={mediaData} type={type} />
            <div className={styles.row}>
                <div className={styles.sidebar}>
                    <Sidebar data={mediaData} poster={posterSrc} />
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
