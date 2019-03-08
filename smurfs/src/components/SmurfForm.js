import React from 'react';

const SmurfForm = props => {
    return (
        <form>
            <h1>Add a Smurf to the Village</h1>
            <input type="number" placeholder="ID" />
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Age" />
            <input type="text" placeholder="Height" />
            <button onClick={(e) => {e.preventDefault();
                props.addSmurf(e.target.value); e.target.reset() }}>
                Add Smurf</button>
        </form>
    )
}

export default SmurfForm