import React from 'react';

import classes from "./Home.module.css";
const popular = ({results}) => results.map((value, index) => {
    return(
        <div key={index} className={classes.wrapper}>
                <img className={classes.poster} src={"http://image.tmdb.org/t/p/w300/"+results[index].poster_path}></img>
                <img className={classes.backdrop} src={"http://image.tmdb.org/t/p/w500/"+results[index].backdrop_path}></img>
                {/* <p >{results[index].title}</p> */}
        </div>
    )
})
export default popular;