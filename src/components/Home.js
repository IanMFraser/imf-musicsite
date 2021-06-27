import React from 'react';
import News from './News.js'
import OldNews from './OldNews.js'
import Container from 'react-bootstrap/Container'

const Home = () => {
    return(
        <main>
            <Container >
                <News />
                <OldNews />
            </Container>
        </main>
    )
}

export default Home