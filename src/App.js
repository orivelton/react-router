import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          </header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/sobre'>Sobre</Link>
              </li>
              <li>
                <Link to='/contato'>Contato</Link>
              </li>
            </ul>
          </nav>

          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
        </div>
      </BrowserRouter>
    );
  }
}

const Sobre = () => (
  <h1>Sobre</h1>
)

const Contato = () => (
  <h1>Contato</h1>
)

export default App;
