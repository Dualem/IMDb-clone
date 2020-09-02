import React, { Component} from 'react';
import classes from './App.module.css';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom';

import {Route, NavLink, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router';

import Home from '../components/Home/Home';
import Result from '../components/Results/Result';
import Results from '../components/Results/Results';
import Footer from '../components/Footer/Footer';
class App extends Component {
  //will use the normal class component view for main app 
  //will refactor code for multiple components on load later for cleaner code

  render(){
  //can also write styles here#
  
    
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/results/:movie" exact component={Results}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
