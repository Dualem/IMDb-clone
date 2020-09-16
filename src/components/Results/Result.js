//use functional components and Hooks for this one
import React from 'react';
import './Result.css'
const result = ({results}) => results.map((value, index) => {
    return(
        <div key={index} className="Movie">
            <img className="image" src={"http://image.tmdb.org/t/p/w185/"+results[index].poster_path}></img>
            <p className="title">{results[index].title}</p>
        </div>
    )
})
export default result;