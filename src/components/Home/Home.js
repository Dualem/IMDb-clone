import React, {Component} from 'react'

import Result from '../Results/Result';
class Home extends Component{
  //load most popular movies etc
  state = {
    trending: null,
    popular: null
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
          this.setState({popular:data.results})
      console.log(data.results.slice(0,3))});
  }
  
  render(){
    let trendingResult = null;
    let popularResult = null;
    if (this.state.trending != null){
      trendingResult = (
        <div>
          <Result results={this.state.trending}/>
        </div>
        
      )
    }
    if (this.state.popular != null){
      console.log("popular")
    }
      return (
        <div>
          <h1> Home page </h1>
          {trendingResult}
        </div>
      )
  }
}

export default Home;