import React from 'react'
import styles from './Profile.module.scss';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ProfileHeader from '../../components/profile_header/ProfileHeader'
import { AiOutlineArrowRight } from 'react-icons/ai';
import ProfileHeaderGroups from '../../components/profile_header/ProfileHeaderGroups';
import CreateGroup from '../../components/Carousel/CreateGroup';
import YourGroups from '../../components/Carousel/YourGroups';
import GroupUserList from '../../components/Carousel/GroupUserList';
import Mountain from '../../assets/img/Media/mountain.png';
import Tiger from '../../assets/img/Media/tiger.png';
import MediaTile from '../../components/Carousel/tiles/MediaTile';

export default function Profile() {

    document.body.classList.add(styles.background);

    return (
        <div className={styles.profile__container}>
            <ProfileHeader />
            {/* <ProfileHeaderGroups /> */}

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
        </div>
    )
}
