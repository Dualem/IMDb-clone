//use functional components and Hooks for this one
import React from 'react';

const result = ({results}) => results.map((value, index) => {
    return(
        <div key={index} className="Movie">
            <img src={"http://image.tmdb.org/t/p/w185/"+results[index].poster_path}></img>
            <p >{results[index].title}</p>
            <p></p>
        </div>
    )
})
export default result;