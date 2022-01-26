import React, { useState } from 'react';
import styles from './TileContainer.module.scss';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function TileContainer({ children, title }) {

    const [arrowType, setArrowType] = useState("show");
    const [arrowIcon, setArrowIcon] = useState(<AiOutlineArrowDown />);

    const handleExpand = (e) => {
        if (arrowType === "show") {
            setArrowType("hide");
            setArrowIcon(<AiOutlineArrowUp />);
        } else {
            setArrowType("show");
            setArrowIcon(<AiOutlineArrowDown />);
        }
    }

    return (
        <div className={styles.tile__container}>
            <header>
                <h4>{title}</h4>
                <div>
                    <button onClick={handleExpand}>{arrowIcon}{arrowType === "show" ? "Show more" : "Show less"}</button>
                </div>
            </header>
            <div id='test' className={arrowType === "show" ? styles.tile__wrapper : styles.expanded}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}
