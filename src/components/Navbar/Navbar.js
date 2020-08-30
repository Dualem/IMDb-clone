import React, {Component} from 'react';

import {Route, NavLink, Switch, Link, withRouter} from 'react-router-dom';

import Result from '../Results/Result';
import Results from '../Results/Results';
//this is where the search will be
class Navbar extends Component{
  //take values passed on from App and put in state
  state ={
      movie:"",
  }
  handleChange = event =>{
    // probably need a timeout to wait for user to stop writing to not make uneccesary calls
    this.setState({movie:event.target.value});
    event.preventDefault();
    
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/results/${this.state.movie}`)
    this.setState({movie: ""})
    
  }
  render(){
    //can also write styles here
    return (
      <div>
        <ul>
          <li><NavLink to ='/' >Home</NavLink></li>
          <li><NavLink to='/account' >Account</NavLink></li>
        </ul>
        <h1> Search for movies </h1>  
            <form >
            
                <input type="text" value={this.state.movie} onChange={this.handleChange}  placeholder="Search for movie..."/>
                    <button onClick={this.onSubmit}>Click me</button>
            </form>
            
      </div>
    )
  }
}
export default withRouter(Navbar);