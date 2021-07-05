import React from 'react';
import './App.css';
import Home from './containers/Home';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';
import About from './containers/About';

//Route se koristi u Router-u
//exact component da se ne bi Home prikazivao na /contact ruti

function App() { //Početna stranica
  return (
    <Router>
    <div className="App">

      <Topbar/>
      <Hero/>

      <Route path="/" exact component = {Home} /> 
      <Route path="/contact" component = {Contact} /> 
      <Route path="/post/:slug" component = {Post} /> 
      <Route path="/about" component = {About} />



      
    </div>
    </Router>
  );
}

export default App;
