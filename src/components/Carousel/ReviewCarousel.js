import React from 'react'
import styles from './ReviewCarousel.module.scss';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ReviewCard from '../../components/review/ReviewCard';
import nico from '../../assets/img/nico.png';
import jake from '../../assets/img/jake.png';
import lisa from '../../assets/img/lisa.png';
import john from '../../assets/img/john.png';
import alice from '../../assets/img/alice.png';

export default function ReviewCarousel() {
    return (
        <Carousel className={styles.carousel}
            plugins={[
                'infinite',
                'autoplay',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2
                    }
                },
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 200,
                    }
                }
            ]}
            animationSpeed={200000}
            draggable={false}
        >
            <ReviewCard name="Nico Flamelamb" img={nico}>
                Filmspring is an amazing service which lets you keep track of all your favorite films and series, join groups, rate media and much more. I'm glad I registered!
            </ReviewCard>
            <ReviewCard name="Jake Strong" img={jake}>
                Really cool website, I'm glad I registered!
            </ReviewCard>
            <ReviewCard name="Alice Dinglebanger" img={alice}>
                Very useful service, I'm gonna tell all my friends about it so we can watch movies together!
            </ReviewCard>
            <ReviewCard name="John Doe" img={john}>
                The user interface is very well designed, and the features are amazing.
            </ReviewCard>
            <ReviewCard name="Lisa Smith" img={lisa}>
                One word: excellent.
            </ReviewCard>
        </Carousel>
    )
}
