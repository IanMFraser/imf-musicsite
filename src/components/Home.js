import React from 'react';
import News from './News.js'
import OldNews from './OldNews.js'
import styles from './Home.module.css';

const Home = () => {
    return(
        <main className={styles.home}>
            <News />
            <OldNews />
        </main>
    )
}

export default Home