import React from 'react'
import styles from './Search.module.scss';
import ContentCarousel from '../../components/Carousel/ContentCarousel.js';

export default function Search() {
    return (
        <div className={styles.search__container}>
            <header className={styles.search__header}>
                <h2>Results for {"search_term"}</h2>
            </header>
            <main className={styles.results__container}>
                <ContentCarousel title="Films">

                </ContentCarousel>
                <ContentCarousel title="Series">

                </ContentCarousel>
                <ContentCarousel title="Users">

                </ContentCarousel>
            </main>
        </div>
    )
}
