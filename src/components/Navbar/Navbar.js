import React, {Component} from 'react';

import {Route, NavLink, Switch, Link} from 'react-router-dom';

import Result from '../Results/Result';
import Results from '../Results/Results';
//this is where the search will be
class Navbar extends Component{
  //take values passed on from App and put in state
  state ={
      movie:"",
      results: null,
      click:false
  }
  handleChange = event =>{
    // probably need a timeout to wait for user to stop writing to not make uneccesary calls
    this.setState({movie:event.target.value});
    event.preventDefault();
    
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({movie:event.target.value});
    
  }
  resultsNull = () =>{
    this.setState({results:null})
  }
  handleClick = (event) =>{
    this.setState({click: !this.state.click})
  }
  render(){
    //can also write styles here
    
    return (
      <div>
        <ul>
          <li><NavLink to ='/'>Home</NavLink></li>
          <li><NavLink to='/account'>Account</NavLink></li>
        </ul>
        <h1> Search for movies </h1>  
            <form onSubmit={this.handleSubmit}>
            
                <input type="text" value={this.state.movie} onChange={this.handleChange}  placeholder="Search for movie..."/>
                  <Link to="/results">
                    <button onClick={this.handleClick}>Click me</button>
                  </Link>
            </form>
            <Route exact path="/results" render={(props) => ( <Results {...props} movie={this.state.movie} click={this.state.click}/>)}/>
            
      </div>
    )
  }
}
export default Navbar;