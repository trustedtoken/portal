import React from 'react';
import logo from './trustedtoken.svg';
import './App.css';

function Hero(props) {
  return (
    <section className="Hero" style={{backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="Container">
        <div className="Hero-content">
          <img className="Hero-logo" src={props.logo} />
          <h1>TrustedToken</h1>
          <p className="Hero-description">Advanced tokenization for sensitive data. TrustedToken's platform creates a unique identifier for your digital assets, in a secure way.</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Hero logo={logo} />
    </div>
  );
}

export default App;
