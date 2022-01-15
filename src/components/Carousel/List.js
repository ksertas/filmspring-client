import React from 'react'
import styles from './List.module.scss';
import Subheader from '../media/Subheader.js';
import { AiOutlinePlus } from 'react-icons/ai';

export default function List({ children, button_type, title }) {

    let icon;
    let button;
    switch (button_type) {
        case "add users":
            icon = <AiOutlinePlus />
            button = <button className={styles.carousel__button}>{icon}Add users</button>
            break;

        default:
            icon = '';
            button = '';
            break;
    }

    return (
        <div className={styles.list__container}>
            <div className={styles.title}>
                <Subheader text={title} />
                {button}
            </div>
            {children}
        </div>
    )
}
