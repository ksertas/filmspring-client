import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GroupProfile.module.scss';
import MediaTile from '../../components/Carousel/tiles/MediaTile';
import { ax } from '../../api/api';
import ProfileHeaderGroups from '../../components/profile_header/ProfileHeaderGroups';
import { UserContext } from '../../context/UserContext';
import Skeleton from 'react-loading-skeleton';
import TileContainer from '../../components/Carousel/TileContainer';

export default function GroupProfile() {

    document.body.classList.add(styles.background);

    const { user } = useContext(UserContext);
    const [isGroupOwner, setGroupOwner] = useState();
    const { id } = useParams();
    const [groupDetails, setGroupDetails] = useState();
    const navigate = useNavigate();
    let plannedFilms = [];
    let plannedSeries = [];

    useEffect(() => {

        window.scrollTo(0, 0);

        async function fetchGroup() {
            try {
                let groupInfo = await ax.get(`/groups/${id}`);
                setGroupDetails(groupInfo.data);
            } catch (error) {
                if (error.response.status === 403) {
                    // alternative: replace with custom "not allowed to view" error page.
                    navigate(`/profile/${user.username}`);
                }
            }
        }
        fetchGroup();
    }, []);

    if (groupDetails) {
        console.log(groupDetails);
        if (groupDetails.plannedFilms) {
            for (let i = 0; i < groupDetails.plannedFilms.length; i++) {
                plannedFilms.push(groupDetails.plannedFilms[i]);
            }
        }
        if (groupDetails.plannedSeries) {
            for (let i = 0; i < groupDetails.plannedSeries.length; i++) {
                plannedSeries.push(groupDetails.plannedSeries[i]);
            }
        }
    }

    return (
        <div className={styles.group_profile__container}>
            {groupDetails ? <ProfileHeaderGroups data={groupDetails} isGroupOwner={true} /> : <Skeleton height={500} />}
            {groupDetails ?
                <div>
                    <TileContainer title="Planned Films" linkTo="#" key="pf">
                        {plannedFilms.map((film, i) => {
                            return <li key={`pf ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Series" linkTo="#" key="ps">
                        {plannedSeries.map((series, i) => {
                            return <li key={`ps ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>
                </div>
                :
                <Skeleton height={200} />}
        </div>
    )
}
