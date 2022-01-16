import React from 'react'
import styles from './Profile.module.scss';
import ContentCarousel from '../../components/Carousel/ContentCarousel'
import ProfileHeader from '../../components/profile_header/ProfileHeader'
import UserListTile from '../../components/Carousel/tiles/UserListTile';
import List from '../../components/Carousel/List.js';
import ProfileHeaderGroups from '../../components/profile_header/ProfileHeaderGroups';
import CreateGroup from '../../components/Carousel/CreateGroup';

export default function Profile() {

    document.body.classList.add(styles.background);

    return (
        <div className={styles.profile__container}>
            <ProfileHeader />
            {/* <ProfileHeaderGroups /> */}
            <ContentCarousel button_type="see all" title="Recently watched" />
            <ContentCarousel button_type="see all" title="Favorites" />
            <ContentCarousel button_type="create group" title="Your Groups" />
            <List button_type="add users" title="Members in this group">
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
                <UserListTile />
            </List>
            <CreateGroup />
        </div>
    )
}
