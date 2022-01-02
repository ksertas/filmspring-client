import React from 'react'
import styles from './ReviewCarousel.module.scss';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ReviewCard from '../../components/review/ReviewCard';
import nico from '../../assets/img/nico.png';

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
            <ReviewCard name="Nico Flamelamb" img={nico} blue>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </ReviewCard>
            <ReviewCard name="Jake Strong" img={nico} blue>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </ReviewCard>
            <ReviewCard name="Alice Dinglebanger" img={nico} blue>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </ReviewCard>
            <ReviewCard name="John Doe" img={nico} blue>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </ReviewCard>
            <ReviewCard name="Lisa Smith" img={nico} blue>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </ReviewCard>
        </Carousel>
    )
}
