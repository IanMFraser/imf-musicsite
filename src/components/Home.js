import React from 'react';
import News from './News.js'
import OldNews from './OldNews.js'
import './Home.css';

const Home = () => {
    return(
        <main className="home">
            <News />
            <OldNews />
        </main>
    )
}

export default Home