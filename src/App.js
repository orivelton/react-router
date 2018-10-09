import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          </header>
          <Link to='/sobre'>Sobre</Link>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
