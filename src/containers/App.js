import React, { Component} from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  //will use the normal class component view for main app 
  //will refactor code for multiple components on load later for cleaner code
render(){
  //can also write styles here
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
