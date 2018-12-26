import React, { Component } from 'react';
import './App.css'
import './Person/Person.css'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {name: 'Chris', age: 24},
      {name: 'Tara', age: 22},
      {name: 'Kayla', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('test')

    this.setState({persons: [
      {name: newName, age: 24},
      {name: 'Tara', age: 22},
      {name: 'Kayla', age: 27 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Chris', age: 24},
      {name: event.target.value, age: 22},
      {name: 'Kayla', age: 27 }
    ]})
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>CHRIS!!Test</h1>
        <button style={style} onClick={() => this.switchNameHandler('hehehe')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'test')}
        changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        
      </div>
    );
  }
}

export default App;
