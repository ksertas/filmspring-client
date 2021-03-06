import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import TileContainer from '../../components/Carousel/TileContainer';
import MediaTile from '../../components/Carousel/tiles/MediaTile';
import UserListTile from '../../components/Carousel/tiles/UserListTile';
import InvitePopup from '../../components/input/invite/InvitePopup';
import ProfileHeaderGroups from '../../components/profile_header/ProfileHeaderGroups';
import { UserContext } from '../../context/UserContext';
import styles from './GroupProfile.module.scss';

export default function GroupProfile() {

    document.body.classList.add(styles.background);

    const { user } = useContext(UserContext);
    const { id } = useParams();
    const [groupDetails, setGroupDetails] = useState();
    const [showInvitePopup, setShowInvitePopup] = useState(false);
    const navigate = useNavigate();
    let isGroupOwner = false;
    let plannedFilms = [];
    let plannedSeries = [];
    let usersInGroup = [];

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
        if (user.username === groupDetails.groupOwnerName) {
            isGroupOwner = true;
        }

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

        for (let i = 0; i < groupDetails.usersInGroup.length; i++) {
            usersInGroup.push(groupDetails.usersInGroup[i]);
        }
    }

    return (
        <div className={styles.group_profile__container}>
            {groupDetails ? <ProfileHeaderGroups data={groupDetails} isGroupOwner={isGroupOwner} /> : <Skeleton height={500} />}
            {groupDetails ?
                <div>
                    <TileContainer title="Planned Films" key="pf">
                        {plannedFilms.map((film, i) => {
                            return <li key={`pf ${i}`}><MediaTile media={film} type="films" /></li>
                        })}
                    </TileContainer>
                    <TileContainer title="Planned Series" key="ps">
                        {plannedSeries.map((series, i) => {
                            return <li key={`ps ${i}`}><MediaTile media={series} type="series" /></li>
                        })}
                    </TileContainer>

                    <div className={styles.user_list__container}>
                        <header className={styles.invite_btn}>
                            <h4>Group Members</h4>
                            <div>
                                <button onClick={() => { setShowInvitePopup(!showInvitePopup) }}><AiOutlinePlus />Invite user to group</button>
                                {showInvitePopup && <InvitePopup />}
                            </div>
                        </header>
                        <div>
                            {usersInGroup.map((user, i) => {
                                usersInGroup.sort();
                                return <li key={`u ${i}`}><UserListTile groupData={groupDetails} userData={user} isGroupOwner={isGroupOwner} /></li>
                            })}
                        </div>
                    </div>
                </div>
                :
                <Skeleton height={200} />}

        </div>
    )
}
