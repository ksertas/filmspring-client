import React from 'react'
import styles from './ContentCarousel.module.scss';
import Subheader from '../media/Subheader.js';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Pidgeon from '../../assets/img/Media/pidgeon.png';
import Discover from '../../assets/img/Media/discover.png';
import Mountain from '../../assets/img/Media/mountain.png';
import Tiger from '../../assets/img/Media/tiger.png';
import MediaTile from './tiles/MediaTile';
import { FaBeer } from 'react-icons/fa';


export default function ContentCarousel() {
    return (
        <div className={styles.carousel__container}>
            <div className={styles.title}>
                <Subheader text="Title of tiles" />
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
                <MediaTile img={Pidgeon} title="The scary pidgeon" />
                <MediaTile img={Discover} title="Discover" />
                <MediaTile img={Mountain} title="Big tall mountains in the middle of nowhere" />
                <MediaTile img={Tiger} title="Nature" />
                <div className={styles.invisible}></div>
                <div className={styles.invisible}></div>
            </Carousel>
        </div>
    )
}
