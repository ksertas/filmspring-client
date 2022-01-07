import React from 'react';
import styles from './ProfileHeader.module.scss';
import Button from '../button/button.js';
import { BsFillPencilFill } from 'react-icons/bs';
import Jake from '../../assets/img/home/jake.png';

export default function ProfileHeader() {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__options}>
                <Button primary filled><BsFillPencilFill />Edit profile</Button>
            </div>
            <div className={styles.header__person}>
                <img src={Jake} alt="" className={styles.person__img} />
                <h3 className={styles.person__full_name}>Jake Himmerman</h3>
                <h4 className={styles.person__username}>@jakeh</h4>
                <p className={styles.person__bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, laudantium tempore! Consequatur, fuga dolores deserunt, repellat odit esse libero voluptatibus quod iusto neque eveniet, enim fugiat. Magni sapiente culpa neque.</p>
            </div>
            <div className={styles.person__media}>
                <div>
                    <span>79</span>
                    <p>Watched series</p>
                </div>
                <div>
                    <span>56</span>
                    <p>Watched films</p>
                </div>
                <div>
                    <span>12</span>
                    <p>Favorites</p>
                </div>
                <div>
                    <span>32</span>
                    <p>Plan to watch</p>
                </div>
            </div>
            <div className={styles.profile__nav}>
                <ul>
                    <li>Overview</li>
                    <li>Watched Films</li>
                    <li>Watched Series</li>
                    <li>Favorites</li>
                </ul>
            </div>
        </div>
    )
}
