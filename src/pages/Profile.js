import React from 'react'
import styles from './Profile.module.scss';
import ContentCarousel from '../components/Carousel/ContentCarousel'
import ProfileHeader from '../components/profile_header/ProfileHeader'

export default function Profile() {

    document.body.classList.add(styles.background);

    return (
        <div className={styles.profile__container}>
            <ProfileHeader />
            <ContentCarousel button_type="see all" title="Recently watched" />
            <ContentCarousel button_type="see all" title="Favorites" />
            <ContentCarousel button_type="create group" title="Your Groups" />
        </div>
    )
}
