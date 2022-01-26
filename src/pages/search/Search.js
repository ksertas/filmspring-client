import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ax } from '../../api/api';
import TileContainer from '../../components/Carousel/TileContainer';
import MediaTile from '../../components/Carousel/tiles/MediaTile';
import UserTile from '../../components/Carousel/tiles/UserTile';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import styles from './Search.module.scss';

export default function Search() {

    document.body.classList.add(styles.background);

    const [searchParam, setSearchParam] = useSearchParams();
    const [isReady, setReady] = useState(false);
    const [filmResults, setFilmResults] = useState();
    const [seriesResults, setSeriesResults] = useState();
    const [userResults, setUserResults] = useState();
    let filmResultsArr = [];
    let seriesResultsArr = [];
    let userResultsArr = [];

    useEffect(() => {
        async function fetchResults(query) {
            try {
                let filmRes = await ax.get(`/films?search=${query}`);
                setFilmResults(filmRes.data);

                let seriesRes = await ax.get(`/series?search=${query}`);
                setSeriesResults(seriesRes.data);

                let userRes = await ax.get(`/users?search=${query}`);
                setUserResults(userRes.data);

                setReady(true);
            } catch (e) {
                console.log(e);
            }
        }
        if (searchParam.get("search")) {
            fetchResults(searchParam.get("search"));
        }
    }, []);

    if (isReady) {
        if (filmResults) {
            for (let i = 0; i < filmResults.length; i++) {
                filmResultsArr.push(filmResults[i]);
            }
        }
        if (seriesResults) {
            for (let i = 0; i < seriesResults.length; i++) {
                seriesResultsArr.push(seriesResults[i]);
            }
        }
        if (userResults) {
            for (let i = 0; i < userResults.length; i++) {
                userResultsArr.push(userResults[i]);
            }
        }
    }

    return (
        <div className={styles.search__container}>
            <header className={styles.search__header}>
                {searchParam.get("search") ? <h4>Results for "{searchParam.get("search")}"</h4> : <h4>No search query given.</h4>}
            </header>
            <main className={styles.results__container}>
                <TileContainer title="Film results" key={`fr`}>
                    {filmResultsArr.map((film, i) => {
                        return <li key={`f ${i}`}><MediaTile type="films" media={film} /></li>
                    })}
                </TileContainer>
                <TileContainer title="Series results" key={`sr`}>
                    {seriesResultsArr.map((series, i) => {
                        return <li key={`s ${i}`}><MediaTile type="series" media={series} /></li>
                    })}
                </TileContainer>
                <TileContainer title="User results" key={`ur`}>
                    {userResultsArr.map((user, i) => {
                        return <li key={`u ${i}`}><UserTile img={ConvertDataToImg(user.avatar).src} name={user.username} /></li>
                    })}
                </TileContainer>
            </main>
        </div>
    )
}
