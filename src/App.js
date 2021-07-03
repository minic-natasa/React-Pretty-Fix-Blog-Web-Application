import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header'; //heder da bude na svim stranicama
import Hero from './components/Hero';

function App() { //Početna stranica
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
