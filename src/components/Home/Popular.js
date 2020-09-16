import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import classes from "./Home.module.css";
const popular = ({results}) => results.map((value, index) => {
    return(
        <div key={index} className={classes.wrapper}>
                <img className={classes.poster} src={"http://image.tmdb.org/t/p/w300/"+results[index].poster_path}></img>
                <div className={classes.slideshow_wrapper}>
                    <img className={classes.backdrop} src={"http://image.tmdb.org/t/p/w500/"+results[index].backdrop_path}></img>
                    <div className={classes.title}>
                    <p>'{results[index].title}'</p>
                    <FontAwesomeIcon className={classes.star} icon={faStar}/>
                    {results[index].vote_average}
                    </div>
                </div>
        </div>
    )
})
export default popular;