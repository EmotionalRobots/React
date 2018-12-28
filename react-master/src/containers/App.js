import React, { Component } from 'react'
import styles from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className={styles.Cockpit}>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler} />
        </div>
      );
    }

    // mainRoot
    return (
      <div className={styles.App}>
      <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHanlder} />
        {persons}
        <br />
      </div>
    );
  }
}

export default App;
