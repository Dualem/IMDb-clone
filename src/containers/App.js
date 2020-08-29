import React, { Component} from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom';

import {Route, NavLink, Switch, Link} from 'react-router-dom';

import Home from '../components/Home/Home';
import Result from '../components/Results/Result';
import Results from '../components/Results/Results';
class App extends Component {
  //will use the normal class component view for main app 
  //will refactor code for multiple components on load later for cleaner code
  state = {
    results: null
  }
  onSubmit = (movieName) =>{
    if(movieName.movie.length > 1){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieName.movie}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
              this.setState({results: data.results})
              console.log(data.results)
          });
    }else {this.setState({results:null})
  }
  }

  render(){
  //can also write styles here#
  console.log(this.state.results)
    let result = null;
    if (this.state.results != null){
        result = (
        <div>  
            {this.state.results.map((value, index) => {
            return (
                <Result
                key={index}
                path={"http://image.tmdb.org/t/p/w185/"+this.state.results[index].poster_path}
                title={this.state.results[index].title}/>
            )
            })} 
        </div>
        )
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar onSubmit={movieName => this.onSubmit(movieName)} />
          {result != null ? "" : <Route path="/" component={Home}/>}
          {result}
          
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
