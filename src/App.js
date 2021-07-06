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
import SinglePost from './containers/SinglePost';


//Route se koristi u Router-u
//exact component da se ne bi Home prikazivao na /contact ruti

function App() { //Početna stranica

  const user = false;

  return (
    <Router>
    <div className="App">

      <Topbar/>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>

        <Route path="/login">
        {user ? <Home/> : <Login/>}
        </Route>

        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route path="/write">
          {user ? <Write/> : <Register/>}
        </Route>

        <Route path="/post/:postId">
          <SinglePost/>
        </Route>


      
      </Switch>
     
      



      
    </div>
    </Router>
  );
}

export default App;
