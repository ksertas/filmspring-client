import React from 'react'
import styles from './FeatureSection.module.scss';
import Feature from './Feature'
import movieposters from '../../assets/img/home/movieposters.jpg';
import devices from '../../assets/img/home/devices.jpg';
import socialmedia from '../../assets/img/home/socialmedia.jpg';
import Fade from 'react-reveal/Fade';

export default function FeatureSection() {
    return (
        <div className={styles.section_container}>
            <Fade bottom>
                <Feature header="New films and series added daily" img={movieposters}>Filmspring's movie and series database is growing rapidly with the new additions all the time.</Feature>
            </Fade>
            <Fade bottom>
                <Feature header="Access your lists from anywhere at anytime" img={devices}>Being a website, you can access Filmspring on any device with an internet connection abd browser, so you can effortlessly update your lists.</Feature>
            </Fade>
            <Fade bottom>
                <Feature header="Share with your friends" img={socialmedia}>Share links to your Filmspring profile to let your friends know what you're up to - or better yet, create a group so you can plan your next movie night with friends together.</Feature>
            </Fade>
        </div>
    )
}
