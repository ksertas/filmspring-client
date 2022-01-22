import React from 'react';
import styles from './TileContainer.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function TileContainer({ children, title, linkTo }) {
    return (
        <div className={styles.tile__container}>
            <header>
                <h4>{title}</h4>
                <div>
                    <button onClick={() => console.log(linkTo)}><AiOutlineArrowRight />See all</button>
                </div>
            </header>
            <div className={styles.tile__wrapper}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}
