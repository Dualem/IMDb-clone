//use functional components and Hooks for this one
import React from 'react';

const result = (props) =>{
    return(
        <div className="Movie">
            <img src={props.path}></img>
            <p >{props.title}</p>
        </div>
    )
}
export default result;