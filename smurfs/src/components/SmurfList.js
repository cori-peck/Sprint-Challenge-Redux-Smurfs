import React from 'react';


const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map((smurf) => 
                <div>
                    <h4 key={smurf.id}>{smurf.name}</h4>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
                )}
        </div>
    )
}


export default SmurfList