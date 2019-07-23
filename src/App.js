import React from 'react';
import logo from './trustedtoken.svg';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero'



function App() {
  return (
    <div className="App">
      <Header />
      <Hero logo={logo} />
    </div>
  );
}

export default App;
