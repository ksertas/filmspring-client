import React from 'react'
import styles from './ContentCarousel.module.scss';
import Subheader from '../media/Subheader.js';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Pidgeon from '../../assets/img/Media/pidgeon.png';
import Discover from '../../assets/img/Media/discover.png';
import Mountain from '../../assets/img/Media/mountain.png';
import Tiger from '../../assets/img/Media/tiger.png';
import MediaTile from './tiles/MediaTile';
import Colleagues from '../../assets/img/Media/colleagues.png';
import Collegefriends from '../../assets/img/Media/collegefriends.png';
import Filmsquad from '../../assets/img/Media/filmsquad.png';
import UserTile from './tiles/UserTile';
import GroupTile from './tiles/GroupTile';
import { AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';

export default function ContentCarousel({ button_type, title }) {

    let icon;
    let button;
    switch (button_type) {
        case "create group":
            icon = <AiOutlinePlus />
            button = <button className={styles.carousel__button}>Create group {icon}</button>
            break;
        case "add user":
            icon = <AiOutlinePlus />
            button = <button className={styles.carousel__button}>Add user {icon}</button>
            break;
        case "see all":
            icon = <AiOutlineArrowRight />
            button = <button className={styles.carousel__button}>See all {icon}</button>
            break;

        default:
            icon = '';
            button = '';
            break;
    }

    return (
        <div className={styles.carousel__container}>
            <div className={styles.title}>
                <Subheader text={title} />
                {button}
            </div>
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
                {/* empty divs needed to avoid maximum update depth error */}
                {/* <MediaTile img={Pidgeon} title="The scary pidgeon" />
                <MediaTile img={Discover} title="Discover" /> */}
                <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                <MediaTile img={Tiger} title="Nature" />
                <GroupTile img={Colleagues} name="Group 1" count={2} />
                <GroupTile img={Collegefriends} name="College friends" count={4} />
                <UserTile img={Filmsquad} name="Drake Strong" />
                <UserTile img={Colleagues} name="Alice Tall" />
                <div className={styles.invisible}></div>
                <div className={styles.invisible}></div>
            </Carousel>
        </div>
    )
}
