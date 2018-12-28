import React from 'react'

import styles from './Cockpit.module.css'

const Cockpit = (props) => {
 
    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    let btnClass = '';
    if(props.showPersons){
    btnClass = styles.red;
    }


    return (
        <div>
            <h1>CHRIS!!Test</h1>
            <p className={assignedClasses.join(' ')}>Testing dynamic classes</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    );
}

export default Cockpit;