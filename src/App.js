import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Music from './components/Music.js';
import Footer from './components/Footer.js'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/music">
            <Music/>
          </Route>
          <Route path="/contact">
            <Contact/>  
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
