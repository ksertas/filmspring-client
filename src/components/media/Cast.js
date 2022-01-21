import React from 'react'
import styles from './Cast.module.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Cast({ data }) {
    return (
        <>
            {data ? <div className={styles.cast_container}>
                {data.actors.map((actor, i) => {
                    return <span className={styles.actor_tile} key={i}>{`${actor.firstName} ${actor.lastName}`}</span>
                })}
            </div> : <Skeleton count={3} />}
        </>
    )
}
