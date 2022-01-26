import '@brainhubeu/react-carousel/lib/style.css';
import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import CreateGroup from '../../components/Carousel/CreateGroup';
import TileContainer from '../../components/Carousel/TileContainer';
import GroupTile from '../../components/Carousel/tiles/GroupTile';
import MediaTile from '../../components/Carousel/tiles/MediaTile';
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
    let favoriteFilms = [];
    let favoriteSeries = [];
    let groupsUserIsIn = [];

    useEffect(() => {
        async function fetchUser() {
            try {
                let userInfo = await ax.get(`/users/${username}`);
                setProfileDetails(userInfo.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (localStorage.getItem("token")) {
            fetchUser();
        }
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

        if (profileDetails.favoriteFilms) {
            for (let i = 0; i < profileDetails.favoriteFilms.length; i++) {
                favoriteFilms.push(profileDetails.favoriteFilms[i]);
            }
        }
        if (profileDetails.favoriteSeries) {
            for (let i = 0; i < profileDetails.favoriteSeries.length; i++) {
                favoriteSeries.push(profileDetails.favoriteSeries[i]);
            }
        }

        if (profileDetails.groupsUserIsIn) {
            for (let i = 0; i < profileDetails.groupsUserIsIn.length; i++) {
                groupsUserIsIn.push(profileDetails.groupsUserIsIn[i]);
            }
        }
    }

    return (
        <div className={styles.profile__container}>
            {profileDetails ? <ProfileHeader headerData={profileDetails} isCurrent={isCurrentUser} /> : <Skeleton height={500} />}
            {profileDetails ?
                <div>
                    <TileContainer title="Watched Films" key="wf">
                        {watchedFilms.map((film, i) => {
                            return <li key={`wf ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Watched Series" key="ws">
                        {watchedSeries.map((series, i) => {
                            return <li key={`ws ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Films" key="pf">
                        {plannedFilms.map((film, i) => {
                            return <li key={`pf ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Series" key="ps">
                        {plannedSeries.map((series, i) => {
                            return <li key={`ws ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Favorite Films" key="ff">
                        {favoriteFilms.map((film, i) => {
                            return <li key={`ff ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Favorite Series" key="ffs">
                        {favoriteSeries.map((series, i) => {
                            return <li key={`fs ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                </div>
                :
                <Skeleton height={200} />}

            {profileDetails && isCurrentUser ?
                <div>
                    {profileDetails.groupsUserIsIn && profileDetails.groupsUserIsIn.length > 0 ?
                        <>
                            <TileContainer title="Your Groups">
                                {groupsUserIsIn.map((group, i) => {
                                    return <li key={`g ${i}`}><GroupTile data={group} /></li>
                                })}
                            </TileContainer>
                            <CreateGroup containerTitle="Create group" ctaTitle="Create another group" />
                        </>
                        :
                        <CreateGroup containerTitle="No groups yet" ctaTitle="Create your first group!" />}
                </div> : ''}
        </div>
    )
}
