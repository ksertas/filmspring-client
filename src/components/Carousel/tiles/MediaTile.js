import React, { useEffect, useState } from 'react'
import { ax } from '../../../api/api';
import ConvertDataToImg from '../../../utils/ConvertDataToImg';
import styles from './MediaTile.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

export default function MediaTile({ media, type }) {

    const [isReady, setReady] = useState(media);
    const [posterSrc, setPosterSrc] = useState();

    useEffect(() => {
        async function getPoster() {
            try {
                let res = await ax.get(`/posters/${type}/${media.id}`);
                setPosterSrc(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        if (isReady) {
            getPoster();
        }
    }, [isReady]);



    return (<>
        {(media && posterSrc) ?
            <div className={styles.mediatile__container}>
                {isReady ? <Link to={`/${type}/${media.id}`}><img src={ConvertDataToImg(posterSrc).src} alt="Media result" className={styles.mediatile__img} /></Link> : <Skeleton width={150} height={200} />}
                {isReady ? <Link to={`/${type}/${media.id}`}><p className={styles.mediatile__title}>{media.title}</p></Link> : <Skeleton width={120} height={30} />}
            </div>
            :
            <Skeleton height={250} width={160} />
        }
    </>
    )
}
