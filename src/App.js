import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Prasad" age="34"/>  
      </div>
    );
  }
}

export default App;
