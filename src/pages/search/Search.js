import React from 'react'
import styles from './Search.module.scss';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Search() {

    document.body.classList.add(styles.background);

    return (
        <div className={styles.search__container}>
            <header className={styles.search__header}>
                <h4>Results for {"search_term"}</h4>
            </header>
            <main className={styles.results__container}>
                <div className={styles.result_wrapper}>
                    <header>
                        <h4>Film results</h4>
                    </header>
                    <div>
                        <Carousel
                            plugins={[
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 4
                                    }
                                }
                            ]} draggable={true}
                            animationSpeed={250}>
                            <div></div>
                            <div></div>
                        </Carousel>
                    </div>
                </div>

                <div className={styles.result_wrapper}>
                    <header>
                        <h4>Series results</h4>
                    </header>
                    <div>
                        <Carousel
                            plugins={[
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 4
                                    }
                                }
                            ]} draggable={true}
                            animationSpeed={250}>
                            <div></div>
                            <div></div>
                        </Carousel>
                    </div>
                </div>

                <div className={styles.result_wrapper}>
                    <header>
                        <h4>User results</h4>
                    </header>
                    <div>
                        <Carousel
                            plugins={[
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 4
                                    }
                                }
                            ]} draggable={true}
                            animationSpeed={250}>
                            <div></div>
                            <div></div>
                        </Carousel>
                    </div>
                </div>
            </main>
        </div>
    )
}
