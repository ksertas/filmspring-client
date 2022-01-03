import React from 'react'
import styles from './FeatureSection.module.scss';
import Feature from './Feature'
import movieposters from '../../assets/img/home/movieposters.jpg';
import devices from '../../assets/img/home/devices.jpg';
import socialmedia from '../../assets/img/home/socialmedia.jpg';

export default function FeatureSection() {
    return (
        <div className={styles.section_container}>
            <Feature header="Feature that does something beneficial" img={movieposters}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque optio impedit ut, aspernatur pariatur nesciunt expedita nostrum, illo facilis quidem! Maxime nemo deserunt odio iusto quam quidem est, rem cum! Ipsa natus, eum eaque delectus omnis modi consectetur quam!</Feature>
            <Feature header="Share your favorite movies and series" img={devices}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolores quis vero nobis quod consequuntur id delectus recusandae aperiam illo! Temporibus doloribus atque dignissimos impedit laudantium qui quisquam, sapiente maiores!</Feature>
            <Feature header="Keep track of your favorites" img={socialmedia}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, autem exercitationem! Ipsa id odio dolor! Eius, natus? Incidunt dolore</Feature>
        </div>
    )
}
