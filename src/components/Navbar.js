import React, {Component} from 'react';

import {Route, NavLink, Switch, Link} from 'react-router-dom';

import Result from './Result';
import Home from '../components/Home';
import Results from '../containers/Results/Results';
//this is where the search will be
class Navbar extends Component{
  //take values passed on from App and put in state
  state ={
      movie:"",
      results: null,
  }
  handleChange = event =>{
    // probably need a timeout to wait for user to stop writing to not make uneccesary calls
    this.setState({movie:event.target.value});
    event.preventDefault();
    if(this.state.movie.length > 1){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.state.movie}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {this.setState({results: data})
        console.log(data.results.slice(0,5))});
    }else {this.setState({results:null})}
  }
  handleSubmit = (event) =>{
    event.preventDefault();
  }
  resultsNull = () =>{
    this.setState({results:null})
  }
  render(){
    //can also write styles here
    let result = null;
    if (this.state.results != null){
    result = (
        <div>  
            {this.state.results.results.map((value, index) => {
            return (
                <Result
                key={index}
                path={"http://image.tmdb.org/t/p/w185/"+this.state.results.results[index].poster_path}
                title={this.state.results.results[index].title}/>
            )
            })} 
        </div>
    )}
    return (
      <div>
        <ul>
          <li><NavLink to ='/'>Home</NavLink></li>
          <li><NavLink to='/account'>Account</NavLink></li>
        </ul>
        <h1> Search for movies </h1>  
            <form onSubmit={this.handleSubmit}>
              
                <input type="text" value={this.state.movie} onChange={this.handleChange}  placeholder="Search for movie..."/>
                    <button >Click me</button>
            </form>
            {result}
      </div>
    )
  }
}
export default Navbar;