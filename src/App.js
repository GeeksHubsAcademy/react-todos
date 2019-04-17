import React, { Component } from 'react';
import Todos from './todos/todos.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Todos/>
        </header>
      </div>
    );
  }
}

export default App;
