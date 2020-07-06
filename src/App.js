import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  
  const [personState, setPersonState] = useState({
    persons:[
      {name: 'Abhilash', weight: 2700},
      {name: 'Adii', weight: 279000},
      {name: 'Ritika', weight: 27}
    ]
  });

  
  const [otherState, setOtherState] = useState({
    other: 'Initial other val'
  });

  // const [showPerson]

  
  const personHandler = (newName, newWeight) => {
    console.log(`newName is ${newName}, newWeight is ${newWeight}`);
    setPersonState({
      persons:[
        {name: newName, weight: newWeight},
        {name: 'po', weight: 279000},
        {name: 'popo', weight: 27}
      ]
    });
  }

  const personNameHandler = (event) => {
    setPersonState({
      persons:[
        {name: 'Abhilash', weight: 679},
        {name: event.target.value, weight: 279000},
        {name: event.target.value, weight: 27}
      ]
    });
  }
  
  const otherStateHandler = (newOtherState) => {
    // console.log('Hello');
    setOtherState({
      other: (newOtherState === otherState.other) ? 'some other Val' : newOtherState
    });
  }
  
  console.log(personState, otherState);
  // render() {
  return (
    <div className="App">
      <h1>HI, I'm a react Application</h1>
      <Person 
        name='Raghul' 
        weight='3000'
        clickAction={personHandler.bind(this, 'Maxi', 400)}
        onChangeAction={personNameHandler}></Person>
      <br />
      <button onClick = {otherStateHandler.bind(this, 'changed state in return()')}>Button1</button>
      
      <Person 
        name={personState.persons[0].name} 
        weight={personState.persons[0].weight}
        clickAction={personHandler.bind(this, 'Maxi', 400)}
        onChangeAction={personNameHandler}>
      </Person>
      
      <Person 
        name={personState.persons[1].name} 
        weight={personState.persons[1].weight}
        clickAction={personHandler.bind(this, 'Taxi', 289)}
        onChangeAction={personNameHandler}>
      </Person>
      
      <Person 
        name={personState.persons[2].name} 
        weight={personState.persons[2].weight}
        clickAction={personHandler.bind(this, 'Paxi', 289)}
        onChangeAction={personNameHandler}>
      </Person>

    </div>
  );
  // }
}

export default app;



