import '@brainhubeu/react-carousel/lib/style.css';
import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import CreateGroup from '../../components/Carousel/CreateGroup';
import GroupUserList from '../../components/Carousel/GroupUserList';
import TileContainer from '../../components/Carousel/TileContainer';
import MediaTile from '../../components/Carousel/tiles/MediaTile';
import YourGroups from '../../components/Carousel/YourGroups';
import ProfileHeader from '../../components/profile_header/ProfileHeader';
import { UserContext } from '../../context/UserContext';
import styles from './Profile.module.scss';

export default function Profile() {

    document.body.classList.add(styles.background);

    const { user } = useContext(UserContext);
    const { username } = useParams();
    const [isCurrentUser, setIsCurrentUser] = useState(user.username === username);
    const [profileDetails, setProfileDetails] = useState();
    let watchedFilms = [];
    let watchedSeries = [];
    let plannedFilms = [];
    let plannedSeries = [];
    let favorites = [];

    useEffect(() => {
        async function fetchUser() {
            try {
                let userInfo = await ax.get(`/users/${username}`);
                setProfileDetails(userInfo.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, []);


    if (profileDetails) {
        if (profileDetails.watchedFilms) {
            for (let i = 0; i < profileDetails.watchedFilms.length; i++) {
                watchedFilms.push(profileDetails.watchedFilms[i]);
            }
        }

        if (profileDetails.watchedSeries) {
            for (let i = 0; i < profileDetails.watchedSeries.length; i++) {
                watchedSeries.push(profileDetails.watchedSeries[i]);
            }
        }

        if (profileDetails.plannedFilms) {
            for (let i = 0; i < profileDetails.plannedFilms.length; i++) {
                plannedFilms.push(profileDetails.plannedFilms[i]);
            }
        }

        if (profileDetails.plannedSeries) {
            for (let i = 0; i < profileDetails.plannedSeries.length; i++) {
                plannedSeries.push(profileDetails.plannedSeries[i]);
            }
        }

        if (profileDetails.favorites) {
            for (let i = 0; i < profileDetails.favorites.length; i++) {
                favorites.push(profileDetails.favorites[i]);
            }
        }
    }

    return (
        <div className={styles.profile__container}>
            {profileDetails ? <ProfileHeader headerData={profileDetails} isCurrent={isCurrentUser} /> : <Skeleton height={500} />}
            {profileDetails ?
                <div>
                    <TileContainer title="Watched Films" linkTo="#" key="wf">
                        {watchedFilms.map((film, i) => {
                            return <li key={`wf ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Watched Series" linkTo="#" key="ws">
                        {watchedSeries.map((series, i) => {
                            return <li key={`ws ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Films" linkTo="#" key="pf">
                        {plannedFilms.map((film, i) => {
                            return <li key={`pf ${i}`}><MediaTile data={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Series" linkTo="#" key="ps">
                        {plannedSeries.map((series, i) => {
                            return <li key={`ws ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Favorite Films and Series" linkTo="#" key="ffas">
                        {favorites.map((favorites, i) => {
                            console.log(`ffas ${i}`);
                            return <li key={`ffas ${i}`}><MediaTile data={favorites} type="" /></li>
                        })}
                    </TileContainer>
                </div>
                :
                <Skeleton height={200} />}
            <YourGroups />
            <GroupUserList />
            <CreateGroup />
        </div>
    )
}