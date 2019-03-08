import React from 'react';


const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map((smurf) => 
                <div key={smurf.name}>
                    <h4>{smurf.name}</h4>
                    <p>{smurf.age} smurf years old</p>
                    <p>{smurf.height}cm</p>
                </div>
                )}
        </div>
    )
}


export default SmurfList