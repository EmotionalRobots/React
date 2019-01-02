import React from 'react'

import styles from './Cockpit.module.css'
import Aux from '../../hoc/aux';

const Cockpit = (props) => {
 
    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    let btnClass = styles.Button;
    if(props.showPersons){
    btnClass = [styles.red, styles.Button].join(' ');
    }


    return (
        <Aux>
            <h1>CHRIS!!Test</h1>
            <p className={assignedClasses.join(' ')}>Testing dynamic classes</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </Aux>
    );
}

export default Cockpit;