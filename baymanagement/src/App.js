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
import Message from './Message';
import EditSubBay from './EditSubBay'
import { Carousel } from 'react-responsive-carousel';


class App extends Component {

  constructor(props) {
    super()
    document.title = "Overhead Bay Manager"
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
          <Route exact path="/load/message" component={Message} />  
          <Route exact path="/editSubBay/SB:id" component={EditSubBay} /> 
        </div> 
      </div>
    )
  }  
}

export default App;
