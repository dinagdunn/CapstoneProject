import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Search from './Search.js'
import Add from './Add.js'
import LoadBay from './LoadBay.js'
import LoadPallet from './LoadPallet.js'
import EditPallet from './EditPallet.js'
import EditBay from './EditBay.js'
import PBLink from './PBLink.js'
import ManageSubs from './ManageSubs.js';

class App extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (

      <div className="App">
      <div className="routed">
      <header className="App-header">
    
    <Link to="/"><h1 className="App-title">Overhead Bay Manager</h1></Link>
    <div className="container">
    <div className="row">

    <switch>
    <div className="col-sm-6 col-sm-offset-3">
      <div className="col-xs-6 headerButton"><Link to="/search">Search</Link></div>
      {/* <div className="col-xs-4 logo"><img src={require('./images/logo.jpg')} /></div> */}
      <div className="col-xs-6 headerButton"><Link to="/add">Add</Link></div>
    </div>
    </switch>

    </div>
    </div>

    </header>


    <Route path="/add" component={ Add } />
    <Route exact path="/search" component={ Search } />
    <Route path="/load/P:id" component={ LoadPallet } />
    <Route path="/load/MB:id" component={ LoadBay } />
    <Route path="/edit/P:id" component={ EditPallet } />
    <Route path="/edit/MB:id" component={ EditBay } />
    <Route path="/pblink/P:id" component={ PBLink } />
    <Route path="/managesubs/*" component={ ManageSubs } />   
  

    <Route exact path ="/" render={() =>
      <p className="App-intro">
      Input P#### to search for a PalletID
      <br/><br/>
      Input MB#### for a MasterBayID
      </p>
    } />

    </div>
    </div>
    );
  }
}

export default App;
