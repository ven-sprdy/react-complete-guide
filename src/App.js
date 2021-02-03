import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Prasad", age: 34 },
      { name: "Ramya", age: 29 },
      { name: "Prayan", age: 4 }
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: "Prasad", age: 35 },
        { name: "Ramya", age: 29 },
        { name: "Prayan", age: 4 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {this.state.persons.map(
          (person, index) => <Person key={index} name={person.name} age={person.age} />
        )}
      </div>
    );
  }
}

export default App;
