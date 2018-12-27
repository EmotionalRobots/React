import React, { Component } from 'react';
import './App.css'
import './Person/Person.css'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Tara', age: 22 },
      { id: '2', name: 'Chris', age: 24 },
      { id: '3', name: 'Kayla', age: 25 }],
    otherState: 'some other value',
    showPersons: false

  }



  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Chris', age: 24 },
        { name: event.target.value, age: 22 },
        { name: 'Kayla', age: 27 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHanlder = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
               />
          )})}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>CHRIS!!Test</h1>
        <button style={style} onClick={this.togglePersonsHanlder}>Switch Name</button>
        {persons}
        <br />
      </div>
    );
  }
}

export default App;
