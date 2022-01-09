import React from 'react'
import styles from './ProfileHeaderGroups.module.scss';
import Button from '../button/button.js';
import { BsFillPencilFill } from 'react-icons/bs';
import Jake from '../../assets/img/home/jake.png';

export default function ProfileHeaderGroups() {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__options}>
                <Button primary filled><BsFillPencilFill />Edit group profile</Button>
            </div>
            <div className={styles.header__group}>
                <img src={Jake} alt="" className={styles.group__img} />
                <h3 className={styles.group__name}>Colleagues</h3>
            </div>
            <div className={styles.group__media}>
                <div>
                    <span>12</span>
                    <p>Planned films</p>
                </div>
                <div>
                    <span>32</span>
                    <p>Planned series</p>
                </div>
            </div>
            <div className={styles.group__nav}>
                <ul>
                    <li>Overview</li>
                    <li>Planned Films</li>
                    <li>Planned Series</li>
                    <li>Members</li>
                </ul>
            </div>
        </div>
    )
}
