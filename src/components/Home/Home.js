import React, {Component} from 'react'

import Result from '../Results/Result';
import Popular from './Popular';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import classes from './Home.module.css'

class Home extends Component{
  //load most popular movies etc
  state = {
    trending: null,
    popular: null,
    topRated: null,
    index: 1
  }
  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
          this.setState({trending:data.results})
      console.log(data.results)});

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
          this.setState({popular:data.results.slice(0,5)})
      console.log(data.results.slice(0,5))});

      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
          this.setState({topRated:data.results})
      console.log(data.results.slice(0,5))});
  }
  handleBack = (event) =>{
    if(this.state.index !== 0){
      this.setState({index: this.state.index - 1})
    }
  }
  handleNext = (event) =>{
    if(this.state.index !== 4 ){
      this.setState({index: this.state.index + 1})
    }
  }
  
  render(){
    let style = { 
      "display":"block"
    }
    let trendingResult = null;
    let popularResult = null;
    let topRated = null;
    if (this.state.trending != null){
      trendingResult = (
        <Result results={this.state.trending}/>
        
      )
    }
    if (this.state.popular != null){
      popularResult = (
        <Popular results={this.state.popular}/>
      )
    }
    if (this.state.topRated != null){
      topRated = (
        <Result results={this.state.topRated}/>
      )
    }
      return (
        <div className={classes.Home}>
          <div className={classes.slider} >
            <div className={classes.container} style={{
            'transform':`translateX(-${this.state.index * 1140}px)`
            }}>
            {popularResult}
            </div>
            <button onClick={this.handleBack} className={classes.back} style={style}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={this.handleNext} className={classes.next} >
              <FontAwesomeIcon icon={faChevronRight}/>
            </button> 
          </div>
          <h2>Trending</h2>
          <div className={classes.trending}>
            {trendingResult}
            
          </div>
          <h2>Top rated</h2>
          <div className={classes.trending}>
            {topRated}
          </div>
        </div>
      )
  }
}

export default Home;