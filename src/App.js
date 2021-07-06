import React from 'react';
import './App.css';
import Home from './containers/Home';
import Topbar from './components/Topbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact';
import About from './containers/About';
import Register from './containers/Register';
import Login from './containers/Login';
import Settings from './containers/Settings';
import Write from './containers/Write';
import Post from './containers/Post';


//Route se koristi u Router-u
//exact component da se ne bi Home prikazivao na /contact ruti

function App() { //Početna stranica

  const user = false;

  return (
    <Router>
    <div className="App">

      <Topbar/>
      
        <Route path="/" exact component = {Home}/>
        <Route path="/register" exact component = {Register}/>
        <Route path="/login" exact component = {Login}/>
        <Route path="/settings" exact component = {Settings}/>
        <Route path="/about" exact component = {About}/>
        <Route path="/contact" exact component = {Contact}/>
        <Route path="/write" exact component = {Write}/>
        <Route path="/post/:slug" exact component = {Post}/>
        
    



      
    </div>
    </Router>
  );
}

export default App;
