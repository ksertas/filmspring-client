import React from 'react'
import Cast from '../components/media/Cast';
import Header from '../components/media/Header';
import Plot from '../components/media/Plot';
import Sidebar from '../components/media/Sidebar';
import Subheader from '../components/media/Subheader';
import styles from './Media.module.scss';

export default function Media() {
    return (
        <div className={styles.media_container}>
            <Header />
            <div className={styles.row}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    <div className={styles.content_container}>
                        <Subheader text="Plot" />
                        <Plot>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae quas voluptatibus possimus natus accusantium corporis doloribus, quaerat nihil adipisci ipsam quisquam, culpa amet unde id. Reprehenderit ex mollitia incidunt quod culpa quaerat quas sit omnis quasi recusandae similique nisi expedita, laboriosam rerum, temporibus quos corrupti beatae delectus odit! Voluptates itaque reprehenderit veritatis ullam a, voluptate delectus, nam recusandae corporis fuga sunt ratione rem iste earum temporibus soluta dignissimos vel ut esse nostrum aspernatur consectetur praesentium adipisci laboriosam! Corporis atque voluptatibus cupiditate nesciunt sunt? Repellat ipsam cumque id facilis, omnis provident natus in dolorem similique! Id est voluptatem officiis iusto maxime tenetur quod. Veritatis quisquam est necessitatibus dolorum, sit expedita minima aliquid eos quae, mollitia corrupti fuga temporibus, harum obcaecati.
                        </Plot>
                    </div>
                    <div className={styles.content_container}>
                        <Subheader text="Cast" />
                        <Cast />
                    </div>
                </div>
            </div>
        </div>
    )
}
