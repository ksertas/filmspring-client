import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { ax } from '../../api/api';
import Mountain from '../../assets/img/Media/mountain.png';
import Tiger from '../../assets/img/Media/tiger.png';
import CreateGroup from '../../components/Carousel/CreateGroup';
import GroupUserList from '../../components/Carousel/GroupUserList';
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

    useEffect(() => {
        async function fetchUser() {
            try {
                let userInfo = await ax.get(`/users/${username}`);
                setProfileDetails(userInfo.data);
                console.log(profileDetails);
            } catch (error) {
                console.log(error);
            }
        }

        fetchUser();
    }, []);

    return (profileDetails ?
        <div className={styles.profile__container}>
            {profileDetails ? <ProfileHeader headerData={profileDetails} isCurrent={isCurrentUser} /> : ''}
            <div className={styles.profile__carousel}>
                <header>
                    <h4>Recently watched</h4>
                    <div>
                        <button onClick={() => console.log("see all")}><AiOutlineArrowRight />See all</button>
                    </div>
                </header>
                <div>
                    <Carousel
                        plugins={[
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4
                                }
                            }
                        ]} draggable={true}
                        animationSpeed={250}>
                        <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                        <MediaTile img={Tiger} title="Nature" />
                        <MediaTile img={Tiger} title="Nature" />
                        <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                        <MediaTile img={Tiger} title="Nature" />
                        <div></div>
                        <div></div>
                    </Carousel>

                </div>
            </div>

            <div className={styles.profile__carousel}>
                <header>
                    <h4>Favorites</h4>
                    <div>
                        <button onClick={() => console.log("favorites")}><AiOutlineArrowRight />See all</button>
                    </div>
                </header>
                <div>
                    <Carousel
                        plugins={[
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4
                                }
                            }
                        ]} draggable={true}
                        animationSpeed={250}>
                        <MediaTile img={Tiger} title="Nature" />
                        <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                        <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                        <MediaTile img={Tiger} title="Nature" />
                        <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                        <div></div>
                        <div></div>
                    </Carousel>

                </div>
            </div>
            <YourGroups />
            <GroupUserList />
            <CreateGroup />
        </div> : <h1>Loading...</h1>
    )
}