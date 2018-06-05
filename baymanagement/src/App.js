import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Search from './Search.js'
import Add from './Add.js'

class App extends Component {

  /* var imageName = require('./images/image1.jpg') */
  constructor(props) {
    super()
  }

  render() {
    return (

      <div className="App">
      <BrowserRouter>
      <div className="routed">
      <header className="App-header">

    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
    <Link to="/"><h1 className="App-title">Home Depot Overhead Bay Manager</h1></Link>
    <div className="container">
    <div className="row">

    <switch>
    <div className="col-sm-6 col-sm-offset-3">
      <div className="col-xs-4 headerButton"><Link to="/search">Search</Link></div>
      <div className="col-xs-4 headerButton">Image</div>
      <div className="col-xs-4 headerButton"><Link to="/add">Add</Link></div>
    </div>
    </switch>

    </div>
    </div>

    </header>


    <Route exact path="/add" component={ Add } />
    <Route exact path="/search" component={ Search } />

    <Route exact path ="/" render={() =>
      <p className="App-intro">
      This is going to tell you all about the master bay.
      </p>
    } />

    </div>
    </BrowserRouter> 
    </div>
    );
  }
}

export default App;
