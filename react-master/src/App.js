import React, { Component } from 'react';
import './App.css'
import './Person/Person.css'
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Tara', age: 22 },
      { id: '2', name: 'Chris', age: 24 },
      { id: '3', name: 'Kayla', age: 25 }],
    otherState: 'some other value',
    showPersons: false

  }



  nameChangedHandler = (event, personId) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // mainRoot
    return (
      <StyleRoot>
      <div className="App">
        <h1>CHRIS!!Test</h1>
        <p className={classes.join(' ')}>Testing dynamic classes</p>
        <button style={style} onClick={this.togglePersonsHanlder}>Switch Name</button>
        {persons}
        <br />
      </div></StyleRoot>
    );
  }
}

export default Radium(App);
