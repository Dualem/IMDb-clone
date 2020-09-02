import React, {Component} from 'react';
import classes from "./Navbar.module.css";

//font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
      <div className={classes.Navbar} >
            <NavLink to ='/' className={classes.Home} >Movie center</NavLink>
            <div className={classes.searchBar}>
              <form >
              
                  <input type="text" value={this.state.movie} onChange={this.handleChange}  placeholder="Search for movie..."/>
                      <button onClick={this.onSubmit}><FontAwesomeIcon icon={faSearch}/></button>
              </form>
          </div>
          <div className={classes.poweredBy}>
            <p>Powered by</p><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"></img>
          </div>
      </div>
    )
  }
}
export default withRouter(Navbar);