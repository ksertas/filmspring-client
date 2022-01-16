import React from 'react'
import styles from './YourGroups.module.scss';
import GroupTile from './tiles/GroupTile';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Colleagues from '../../assets/img/Media/colleagues.png';
import Collegefriends from '../../assets/img/Media/collegefriends.png';

export default function YourGroups() {
    return (
        <div className={styles.group__container}>
            <header>
                <h4>Your groups</h4>
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
                    <GroupTile img={Colleagues} name="Group 1" count={2} />
                    <GroupTile img={Collegefriends} name="College friends" count={4} />
                    {/* This component will at least have one groupTile, so 1 instead of 2 invisible divs needed to prevent max update error */}
                    <div></div>
                </Carousel>
            </div>
        </div>
    )
}
