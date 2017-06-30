import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cones from './containers/Cones'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Icecream React project for testing practice</h2>
        </div>
        <p className="App-intro">
        </p>
        <Cones />
      </div>
    );
  }
}

export default App;
