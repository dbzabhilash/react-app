import React from 'react';
import './Person.css';


const person = (var1) => {
    return (
        <div className = "Person">
            <p onClick={var1.clickAction}>This is {var1.name} with {var1.weight} kg weight</p>
            <input type="text" onChange={var1.onChangeAction} value={var1.name}></input>
        </div>
    )
}

export default person;