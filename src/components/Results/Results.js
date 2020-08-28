
import React, {useState} from 'react'

import Result from './Result';
const Results = ({movie, click}) =>{
    const [results, setResults] = useState(renderMovies(movie));
    console.log(movie)
    
    const searchMovies = (callback) =>{
        if(movie.length > 1){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`)
              .then(response => response.json())
              .then(data => {setResults({results: data.results})
              console.log(data.results.slice(0,5))});
              callback()
          }else {setResults({results:null})
        }
    }
    
    console.log(results)
    let result = null;
    const showMovies = () =>{
       
        if (results != null){
            result = (
            <div>  
                {results.results.map((value, index) => {
                return (
                    <Result
                    key={index}
                    path={"http://image.tmdb.org/t/p/w185/"+results.results[index].poster_path}
                    title={results.results[index].title}/>
                )
                })} 
            </div>
            )
        }
    }
    
    return (
        <div>
            {{movie} ? searchMovies(showMovies) : null} 
            <h1>hi: {movie}</h1>
            {result}
        </div>
    )
}

export default Results;