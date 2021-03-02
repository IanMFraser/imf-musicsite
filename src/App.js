import React, { useEffect } from 'react';
import { HashRouter, BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Music from './components/Music.js';
import Footer from './components/Footer.js'
import './App.css';

const App = () => {

  useEffect(() => {
    document.title="IMF"
  }, [])

  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/music/albums">
            <Music/>
          </Route>
          <Route path="/music/contact">
            <Contact/>  
          </Route>
          <Route path="/music">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/music"/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
