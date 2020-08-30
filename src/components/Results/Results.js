
import React, {useState, useEffect, useRef} from 'react'

import Result from './Result';
const Results = (props) =>{
    const movie = props.match.params.movie;
    const [results, setResults ] = useState(null)
    
    const fetchMovies = (movieName) => {
        if(movieName.length > 1){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
              .then(response => response.json())
              .then(data => {
                  setResults(data.results)
              console.log(data.results)});
          }
    }
    
    let result = null;
    if (results != null){
    result = (
        <div>  
            {results.map((value, index) => {
            return (
                <Result
                key={index}
                path={"http://image.tmdb.org/t/p/w185/"+results[index].poster_path}
                title={results[index].title}/>
            )
            })} 
        </div>
    )}

    const prevMovieRef = useRef();
    useEffect(() =>{
        prevMovieRef.current = movie
        if (movie != prevMovie){
            fetchMovies(movie)
        }
    })
    const prevMovie = prevMovieRef.current
    return (
        <div>
            <h1>{result}</h1>
            
        </div>
    )
}

export default Results;