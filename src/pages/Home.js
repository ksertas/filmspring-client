import React from 'react'
import SearchInputCta from '../components/input/cta/SearchInputCta';
import styles from './Home.module.scss';
import ReviewCarousel from '../components/Carousel/ReviewCarousel';

export default function Home() {
    return (
        <>
            <header className={styles.hero}>
                <h1 className={styles.header_text}>Plan your next movie night with friends</h1>
                <h3 className={styles.subheader_text}>Filmspring helps you keep track of your favorite films and series, so you
                    can spend more time having fun.
                </h3>
                <SearchInputCta />
            </header>
            <section className={styles.reviews}>
                <ReviewCarousel />
            </section>
        </>
    )
}
